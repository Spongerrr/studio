import { IForm } from "@/models";

export async function SendMessage(data: IForm): Promise<void> {
  const token = "7030592595:AAF37cLanxictKTIbcGlfTJom2Jr3ly2048"
  const chatId = "-1002096835060"

  const message = `
      Заявка с формы контактов:
      Выбранная опция: ${data.select}
      Имя: ${data.name}
      Email: ${data.email}
      Телефон: ${data.tel}
      Текст: ${data.text}
    `

  const messageUrl = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${encodeURIComponent(message)}`
  const fileUrl = `https://api.telegram.org/bot${token}/sendDocument?chat_id=${chatId}`

  try {
    const messageResponse = await fetch(messageUrl)
    if (!messageResponse.ok) {
      throw new Error('Ошибка отправки формы')
    }

    if (data.file) {
      const formData = new FormData()
      formData.append('document', data.file)

      const fileResponse = await fetch(fileUrl, {
        method: 'POST',
        body: formData
      })

      if (!fileResponse.ok) {
        throw new Error('Ошибка отправки файла в Telegram')
      }
    }

    console.log('Данные успешно отправлены')
  } catch (error) {
    console.error('Произошла ошибка:', error)
  }
}


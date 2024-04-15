export const CaseHandler = (
  type: 'dev' | 'des' | 'hour',
  value: number
) => {

  const remainder10 = value % 10
  const remainder100 = value % 100
  
  const first = remainder10 === 1 && remainder100 !== 11
  const second = ([2, 3, 4].includes(remainder10) && ![12, 13, 14].includes(remainder100))

  switch (type) {
    case 'dev':
      if (first) return 'разработчик'
      if (second) return 'разработчика'
      return 'разработчиков'
    case 'des':
      if (first) return 'дизайнер'
      if (second) return 'дизайнера'
      return 'дизайнеров'
    case 'hour':
      if (first) return 'час'
      if (second) return 'часа'
      return 'часов'
    default:
      return ''
  }
}
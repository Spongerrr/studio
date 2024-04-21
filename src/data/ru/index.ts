export const tRu = {
  header: {
    "projects": "Проекты",
    "contacts": "Контакты",
    "main_page": "главная",
    "portfolio_page": "портфолио",
    "contact_page": "контакты"
  },
  hero: {
    "title": "Делаем сайты для бизнеса",
    "view": "Смотреть",
    "cases": "Все кейсы",
    "stat_1": {
      "num": '25',
      "text": 'профессионалов в команде'
    },
    "stat_2": {
      "num": '34',
      "text": 'успешных проекта'
    },
    "stat_3": {
      "num": '126+',
      "text": 'лет суммарного опыта'
    }
  },
  services: {
    "title": "Услуги",
    "text": {
      "t_1": "Благодаря большой команде мы можем создавать любой IT продукт от 0 до идеального финала",
      "t_2": "Возможность отслеживать выполнение этапов проекта в реальном времени в Trello",
      "t_3": "Ознакомьтесь с нашим опытом",
      "button": "Проекты"
    },
    "items": [
      {
        "title": "Сайты",
        "list": ["Landing page", "Многостраничные сайты", "WEB приложения", "Онлайн магазины"],
        "isOpen": false
      },
      {
        "title": "Дизайн",
        "list": ["WEB дизайн", "Mobile дизайн", "Логотипы", "Брендбук", "Фирменный стиль"],
        "isOpen": false
      },
      {
        "title": "Мобильные приложения",
        "list": ["Мобильные игры", "Контентные сервисы", "Промо приложения"],
        "isOpen": false
      },
      {
        "title": "Другое",
        "list": ["Чатботы", "WEB3 продукты", "Парсеры", "Автоматизация"],
        "isOpen": false
      }
    ]
  },
  contacts: {
    "title": "Свяжитесь с нами",
    "title_2": "Остались вопросы?",
    "text": "Давайте обсудим вашу идею",
    "label": {
			"service": "Направление услуги",
			"name": "Имя",
			"mail": "Email",
			"phone": "Телефон",
			"wishes": "Комментарий",
			"files": "Загрузка дополнительных файлов",
      "submit": "Отправить",
      "error": "Не заполнены обязательные поля. (Помечены звёздочкой)"
		}
  },
  stack: {
    "title": "Стек",
    "items": [
      {
        title: "WEB Frontend",
        isOpen: false,
        items: ["HTML5 + CSS3", " LESS / Sass / Scss", "Bootstrap / Tailwind", "JavaScript / TypeScript", "jQuery", "React / Vue / Next / Nuxt", "Gulp / Webpack / Grun"]
      },
      {
        title: "Backend разработка",
        isOpen: false,
        items: ["Node.JS / Nest.JS", "TypeScript", "PHP", "Python", "Java", "Golang", "Docker", "Laravel / Yii2", "PostgreSQL / MySQL / MongoDB / GraphQL / Appwrite", "Swagger / Postman", "CI / CD", "Solidity / Smart Contracts / Blockchain"]
      },
      {
        title: "Мобильная разработка",
        items: ["FlutterFlow", "ReactNative", "C++", "C#", "Java"]
      },
      {
        title: "CMS",
        items: ["Bitrix24", "WordPress", "Shopify", "Tilda", "OpenCart"]
      },
      {
        title: "Дизайн",
        items: ["Figma", "Photoshop", "Illustrator", "Premiere Pro", "InDesign"]
      },
      {
        title: "Командная работа",
        items: ["Linux / Windows / macOS", "Git", "GitHub", "Vercel", "Atlassian Jira / Basecamp / Toggle Track / Trello / Notion"]
      }
    ]
  },
  projects: {
    "title": "Проекты",
    "best": "Лучшие проекты",
    "button": "Перейти на сайт",
    "stat_1": "часа",
    "stat_2": "разработчика",
    "stat_3": "дизайнера",
    "stack_title": "Выбрать стек",
    "service_title": "Выбрать услуги",
    "service_filter": "Услуга",
    "stack_filter": "Стек",
    "reset_filter": "Сбросить",
    "apply_filter": "Применить",
    "hide_filter": "Скрыть",
    "not_found": 
    `Такого проекта у нас ещё нет\n(Но мы обязательно исправимся!)😉`,
    "items": [
      {
        "id": "01",
        "name": "KSD Company",
        "task": "Создание дизайна для лендинга.",
        "description": "",
        "service": [
          "Web дизайн"
        ],
        "stack": [
          "Figma",
          "Photoshop"
        ],
        "path": "ksd",
        "images": [
          "preview.png",
          "1.png",
          "2.png"
        ],
        "best": true,
        "statistic": {
          "hours": 18,
          "dev": 0,
          "des": 2
        }
      },
      {
        "id": "02",
        "name": "Чудо игла",
        "task": "Дизайн и вёрстка интернет магазина.",
        "description": "",
        "service": [
          "Web дизайн"
        ],
        "stack": [
          "HTML",
          "CSS",
          "Bootstrap",
          "JavaScript",
          "JQuery",
          "SCSS",
          "Illustrator"
        ],
        "path": "chudo-igla",
        "images": [
          "preview.png",
          "1.png",
          "2.png"
        ],
        "best": false,
        "statistic": {
          "hours": 36,
          "dev": 1,
          "des": 2
        }
      },
      {
        "id": "03",
        "name": "Invoice Profi",
        "task": "Вёрстка и натяжка на WordPress.",
        "description": "Наш коллектив успешно адаптировал существующий дизайн, усовершенствовав его в соответствии с нашими требованиями и ожиданиями. Кроме того, мы создали с нуля инновационный аудио-плеер, полностью основанный на технологии JavaScript. Дополнительно, мы разработали плагин для сайта, обеспечивающий функциональность тарификации, управления доступом и учета загруженных файлов. Важным шагом было также создание механизма отправки счетов и отчетов в формате PDF для нашей системы клиента.",
        "service": [
          "Многостраничные сайты"
        ],
        "stack": [
          "HTML",
          "CSS",
          "WordPress",
          "JavaScript",
          "Node.JS"
        ],
        "path": "invoice-profi",
        "images": [
          "preview.png",
          "1.png",
          "2.png"
        ],
        "best": true,
        "statistic": {
          "hours": 25,
          "dev": 2,
          "des": 1
        }
      },
      {
        "id": "04",
        "name": "Sens Collective",
        "task": "Разработка новой страницы на CMS 1C-Bitrix",
        "description": "Наш коллектив успешно адаптировал существующий дизайн, усовершенствовав его в соответствии с нашими требованиями и ожиданиями. Кроме того, мы создали с нуля инновационный аудио-плеер, полностью основанный на технологии JavaScript. Дополнительно, мы разработали плагин для сайта, обеспечивающий функциональность тарификации, управления доступом и учета загруженных файлов. Важным шагом было также создание механизма отправки счетов и отчетов в формате PDF для нашей системы клиента.",
        "service": [
          "Многостраничные сайты"
        ],
        "stack": [
          "HTML",
          "CSS",
          "JavaScript",
          "PHP",
          "1C-Bitrix",
          "Figma"
        ],
        "path": "sens-collective",
        "images": [
          "preview.png",
          "1.png",
          "2.png"
        ],
        "best": true,
        "statistic": {
          "hours": 10,
          "dev": 1,
          "des": 1
        }
      },
      {
        "id": "05",
        "name": "Ivolga",
        "task": "Разработка интернет магазина с нуля.",
        "description": "",
        "service": [
          "Онлайн магазины"
        ],
        "stack": [
          "HTML",
          "SCSS",
          "JavaScript",
          "PHP",
          "1C-Bitrix",
          "Figma"
        ],
        "path": "ivolga",
        "images": [
          "preview.png",
          "1.png",
          "2.png"
        ],
        "best": true,
        "statistic": {
          "hours": 45,
          "dev": 4,
          "des": 2
        }
      },
      {
        "id": "06",
        "name": "Два бисквита",
        "task": "Дизайн и разработка интернет магазина.",
        "description": "",
        "service": [
          "Онлайн магазины",
          "Web дизайн"
        ],
        "stack": [
          "HTML",
          "SCSS",
          "Gulp",
          "JavaScript",
          "JQuery",
          "Illustrator",
          "Photoshop"
        ],
        "path": "dva-biskvita",
        "images": [
          "preview.png",
          "1.png",
          "2.png"
        ],
        "best": false,
        "statistic": {
          "hours": 28,
          "dev": 2,
          "des": 2
        }
      },
      {
        "id": "07",
        "name": "Goods Mood",
        "task": "Логотип для магазина.",
        "description": "",
        "service": [
          "Логотипы"
        ],
        "stack": [
          "Illustrator"
        ],
        "path": "goods-mood",
        "images": [
          "preview.png",
          "1.png",
          "2.png"
        ],
        "best": false,
        "statistic": {
          "hours": 6,
          "dev": 0,
          "des": 1
        }
      },
      {
        "id": "08",
        "name": "Студия Сергея Крупнова",
        "task": "Логотип для ювелирной студии.",
        "description": "",
        "service": [
          "Логотипы"
        ],
        "stack": [
          "Illustrator"
        ],
        "path": "krupnov-studio",
        "images": [
          "preview.png",
          "1.png",
          "2.png"
        ],
        "best": false,
        "statistic": {
          "hours": 4,
          "dev": 0,
          "des": 1
        }
      },
      {
        "id": "09",
        "name": "Neo Cryo",
        "task": "Логотип для стартапа.",
        "description": "",
        "service": [
          "Логотипы"
        ],
        "stack": [
          "Illustrator"
        ],
        "path": "neo-cryo",
        "images": [
          "preview.png",
          "1.png",
          "2.png"
        ],
        "best": false,
        "statistic": {
          "hours": 5,
          "dev": 0,
          "des": 1
        }
      },
      {
        "id": "10",
        "name": "Rivulet Digital",
        "task": "Логотип для стартапа.",
        "description": "",
        "service": [
          "Логотипы"
        ],
        "stack": [
          "Illustrator"
        ],
        "path": "rivulet-digital",
        "images": [
          "preview.png",
          "1.png",
          "2.png"
        ],
        "best": false,
        "statistic": {
          "hours": 12,
          "dev": 0,
          "des": 1
        }
      },
      {
        "id": "11",
        "name": "Backeland",
        "task": "Баннеры для социальных сетей.",
        "description": "",
        "service": [
          "Web дизайн"
        ],
        "stack": [
          "Illustrator",
          "Photoshop"
        ],
        "path": "backeland",
        "images": [
          "preview.png",
          "1.png",
          "2.png"
        ],
        "best": false,
        "statistic": {
          "hours": 3,
          "dev": 0,
          "des": 1
        }
      },
      {
        "id": "12",
        "name": "Backpack Autotrade",
        "task": "Бот, для накрутки объёма на криптобирже.",
        "description": "",
        "service": [
          "Парсеры"
        ],
        "stack": [
          "Python"
        ],
        "path": "backpack-autotrade",
        "images": [
          "preview.png",
          "1.png",
          "2.png"
        ],
        "best": false,
        "statistic": {
          "hours": 32,
          "dev": 1,
          "des": 0
        }
      }
    ]
  }
}
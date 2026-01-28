export interface SeoArticle {
  slug: string;
  title: string;
  description: string;
  category: 'geo' | 'niche' | 'guide' | 'trends';
  imageType: 'interior' | 'food' | 'people' | 'tech' | 'marketing';
}

export const seoArticles: SeoArticle[] = [
  // --- Блок 1: ГЕО (Кемерово и Кузбасс) ---
  {
    slug: 'promotion-restaurant-kemerovo-guide',
    title: 'Продвижение ресторана в Кемерово: Полный гид 2026',
    description: 'Как раскрутить заведение в Кемерово без слива бюджета. Разбор местных площадок, блогеров и особенностей аудитории.',
    category: 'geo',
    imageType: 'marketing'
  },
  {
    slug: 'smm-agency-kemerovo-food',
    title: 'SMM для общепита в Кемерово: Кому доверить ведение?',
    description: 'Обзор рынка SMM-агентств Кемерово. Почему фрилансеры пропадают, а крупные агентства не понимают специфику еды.',
    category: 'geo',
    imageType: 'people'
  },
  {
    slug: 'target-vk-kemerovo-case',
    title: 'Настройка таргета ВК для доставки еды в Кемерово',
    description: 'Кейс: как получить заказы по 150 рублей в Ленинском и Рудничном районах. Секреты гео-настройки.',
    category: 'geo',
    imageType: 'tech'
  },
  {
    slug: 'food-bloggers-kemerovo-list',
    title: 'Топ-10 фуд-блогеров Кемерово для рекламы кафе',
    description: 'Актуальный список инфлюенсеров Кузбасса. У кого живая аудитория, а у кого накрученные боты.',
    category: 'geo',
    imageType: 'people'
  },
  {
    slug: 'delivery-marketing-kemerovo',
    title: 'Как запустить доставку еды в Кемерово и не прогореть',
    description: 'Конкуренция с Яндекс.Едой и Деливери в Кемерово. Свои курьеры или агрегаторы? Считаем экономику.',
    category: 'geo',
    imageType: 'food'
  },
  {
    slug: 'coffee-shop-kemerovo-promotion',
    title: 'Раскрутка кофейни в Кемерово: борьба за утренний трафик',
    description: 'Как переманить офисных сотрудников в центре Кемерово. Карты лояльности и утренние акции.',
    category: 'geo',
    imageType: 'interior'
  },
  {
    slug: 'hookah-marketing-law-kemerovo',
    title: 'Реклама кальянной в Кемерово: как обойти запреты',
    description: 'Законная реклама кальянных в 2026 году. Как продвигаться в 2ГИС и Телеграм в условиях ограничений.',
    category: 'geo',
    imageType: 'interior'
  },
  {
    slug: 'corporate-events-kemerovo-seo',
    title: 'Как привлечь корпоративы и банкеты в ресторан (Кемерово)',
    description: 'SEO-стратегия для банкетных залов. Как поймать клиента, который ищет "где отметить новый год в Кемерово".',
    category: 'geo',
    imageType: 'people'
  },
  {
    slug: 'summer-terrace-kemerovo',
    title: 'Летняя веранда в Кемерово: как забить посадку в сезон',
    description: 'Короткое сибирское лето — как выжать максимум из веранды. Музыка, пледы и правильный SMM.',
    category: 'geo',
    imageType: 'interior'
  },
  {
    slug: 'bad-reviews-kemerovo-flamp',
    title: 'Работа с негативом на Фламп и 2ГИС в Кемерово',
    description: 'Вас захейтили конкуренты или реальные гости? Алгоритм удаления и отработки негативных отзывов.',
    category: 'geo',
    imageType: 'marketing'
  },

  // --- Блок 2: НИШЕВЫЕ РЕШЕНИЯ ---
  {
    slug: 'shawarma-marketing-plan',
    title: 'Маркетинг для шаурмы: от ларька до сети',
    description: 'Как сделать очередь у киоска. Акции "1+1", счастливые часы и вирусный маркетинг для стритфуда.',
    category: 'niche',
    imageType: 'food'
  },
  {
    slug: 'bakery-promotion-ideas',
    title: 'Аромомаркетинг и акции для пекарни у дома',
    description: 'Как заставить прохожих зайти на запах. Продвижение пекарни в спальном районе.',
    category: 'niche',
    imageType: 'food'
  },
  {
    slug: 'sushi-delivery-competition',
    title: 'Доставка суши и роллов: как выжить в кровавом океане',
    description: 'Ниша перегрета. Как отстроиться от конкурентов, когда у всех "Филадельфия в подарок".',
    category: 'niche',
    imageType: 'food'
  },
  {
    slug: 'burger-shop-instagram',
    title: 'Фуд-порн: как продавать бургеры через фото в соцсетях',
    description: 'Визуальный контент для бургерной. Почему ваши фото не вызывают аппетит и как это исправить.',
    category: 'niche',
    imageType: 'food'
  },
  {
    slug: 'family-restaurant-kids',
    title: 'Продвижение семейного ресторана: мамы решают всё',
    description: 'Работа с родительскими чатами и детскими праздниками. Меню для детей, которое продает.',
    category: 'niche',
    imageType: 'people'
  },
  {
    slug: 'bar-pub-promotion-friday',
    title: 'Маркетинг бара: как заполнять зал не только в пятницу',
    description: 'Квизы, стендапы и дегустации. Событийный маркетинг для пабов и баров.',
    category: 'niche',
    imageType: 'interior'
  },
  {
    slug: 'pizza-delivery-speed',
    title: 'Доставка пиццы: скорость или вкус? Маркетинговые мифы',
    description: 'Что важнее для клиента: получить пиццу за 30 минут или получить её горячей? Исследование.',
    category: 'niche',
    imageType: 'food'
  },
  {
    slug: 'asian-cuisine-marketing',
    title: 'Паназия и раменные: тренды продвижения 2026',
    description: 'Зумеры любят Азию. Как оформить профиль и меню, чтобы привлечь молодую аудиторию.',
    category: 'niche',
    imageType: 'food'
  },
  {
    slug: 'dark-kitchen-start',
    title: 'Открытие Dark Kitchen: экономия на аренде, расходы на рекламу',
    description: 'Бизнес-модель "Тёмной кухни". Почему весь бюджет должен уйти в диджитал-маркетинг.',
    category: 'niche',
    imageType: 'tech'
  },
  {
    slug: 'georgian-restaurant-soul',
    title: 'Грузинская кухня: продаем гостеприимство, а не просто хинкали',
    description: 'Как транслировать атмосферу через соцсети. Тонкости Tone of Voice для национальных ресторанов.',
    category: 'niche',
    imageType: 'people'
  },

  // --- Блок 3: ИНСТРУКЦИИ И БОЛИ ---
  {
    slug: 'menu-engineering-profit',
    title: 'Меню-инжиниринг: как верстка меню увеличивает чек на 30%',
    description: 'Психология цен, "звезды" и "собаки" в вашем меню. Как продавать маржинальные блюда.',
    category: 'guide',
    imageType: 'marketing'
  },
  {
    slug: 'waiter-sales-scripts',
    title: 'Скрипты для официантов: учим продавать, а не принимать заказ',
    description: 'Как научить персонал делать "ёлочку" и предлагать напитки, не будучи навязчивыми.',
    category: 'guide',
    imageType: 'people'
  },
  {
    slug: 'restaurant-photography-smartphone',
    title: 'Фуд-фото на телефон: как снимать контент без фотографа',
    description: 'Свет, ракурс, композиция. Гайд для SMM-щика: как сделать аппетитно на iPhone.',
    category: 'guide',
    imageType: 'food'
  },
  {
    slug: 'loyalty-system-mistakes',
    title: 'Почему ваша программа лояльности не работает (и теряет деньги)',
    description: 'Скидочные карты — прошлый век. Как внедрить бонусную систему, которая возвращает гостей.',
    category: 'guide',
    imageType: 'tech'
  },
  {
    slug: 'qr-menu-pros-cons',
    title: 'QR-меню: экономия на полиграфии или неудобство для гостя?',
    description: 'Когда электронное меню убивает продажи, а когда спасает сервис.',
    category: 'guide',
    imageType: 'tech'
  },
  {
    slug: 'telegram-bot-delivery',
    title: 'Свой Телеграм-бот для доставки: замена приложению?',
    description: 'Стоит ли разрабатывать приложение или хватит бота в ТГ? Сравнение стоимости и конверсии.',
    category: 'guide',
    imageType: 'tech'
  },
  {
    slug: 'restaurant-context-ad-google',
    title: 'Контекстная реклама ресторана: сжигание денег или лиды?',
    description: 'Почему клики по запросу "ресторан" такие дорогие и как не слить бюджет в Яндекс.Директ.',
    category: 'guide',
    imageType: 'marketing'
  },
  {
    slug: 'influencer-contract-template',
    title: 'Договор с блогером: как не получить рекламу "для галочки"',
    description: 'Чек-лист условий сотрудничества. ТЗ, сроки, охваты и оплата по KPI.',
    category: 'guide',
    imageType: 'marketing'
  },
  {
    slug: 'wifi-marketing-data',
    title: 'Wi-Fi радар: как собрать контакты прохожих и вернуть их',
    description: 'Технология сбора MAC-адресов. Легально ли это и как настроить таргет на тех, кто прошел мимо.',
    category: 'guide',
    imageType: 'tech'
  },
  {
    slug: 'avg-check-increase-methods',
    title: '5 способов поднять средний чек ресторана прямо сегодня',
    description: 'Кросс-сейл, ап-сейл и работа с "якорями" в меню. Практические приемы.',
    category: 'guide',
    imageType: 'marketing'
  },

  // --- Блок 4: ТРЕНДЫ И ТЕХНОЛОГИИ ---
  {
    slug: 'reels-restaurant-ideas-2026',
    title: '30 идей для Reels ресторана: тренды 2026 года',
    description: 'Что снимать, чтобы залететь в рекомендации. Юмор, эстетика, процесс, команда.',
    category: 'trends',
    imageType: 'people'
  },
  {
    slug: 'ai-restaurant-marketing',
    title: 'Нейросети в общепите: как AI пишет посты и рисует меню',
    description: 'Используем ChatGPT и Midjourney для экономии на копирайтерах и дизайнерах.',
    category: 'trends',
    imageType: 'tech'
  },
  {
    slug: 'personal-brand-chef',
    title: 'Личный бренд шеф-повара: зачем выводить команду в свет',
    description: 'Почему люди идут "на шефа". Как превратить повара в рок-звезду соцсетей.',
    category: 'trends',
    imageType: 'people'
  },
  {
    slug: 'eco-friendly-restaurant-trend',
    title: 'Эко-тренд: как отказ от пластика привлекает платежеспособных',
    description: 'Сортировка мусора и биоразлагаемая посуда как часть маркетинговой стратегии.',
    category: 'trends',
    imageType: 'interior'
  },
  {
    slug: 'local-products-menu',
    title: 'Локальные продукты в меню: маркетинг "с грядки"',
    description: 'Тренд на фермерское и местное. Как продавать "Сибирский вкус" туристам и местным.',
    category: 'trends',
    imageType: 'food'
  },
  {
    slug: 'restaurant-music-playlist',
    title: 'Музыкальный маркетинг: как плейлист управляет скоростью еды',
    description: 'Быстрый бит для фастфуда, джаз для вина. Влияние звука на оборачиваемость стола.',
    category: 'trends',
    imageType: 'interior'
  },
  {
    slug: 'user-generated-content-contest',
    title: 'UGC-контент: как заставить гостей бесплатно рекламировать вас',
    description: 'Конкурсы, фотозоны и "инстаграмная" подача блюд. Мотивируем гостей постить сторис.',
    category: 'trends',
    imageType: 'people'
  },
  {
    slug: 'crm-system-choice',
    title: 'Выбор CRM: iiko, r_keeper или Poster в 2026 году?',
    description: 'Сравнение систем автоматизации. Что лучше для аналитики маркетинга и программы лояльности.',
    category: 'trends',
    imageType: 'tech'
  },
  {
    slug: 'telegram-channel-restaurant',
    title: 'Зачем ресторану свой Телеграм-канал: о чем писать?',
    description: 'Отличие контента в ТГ от Инстаграм. Закулисье, анонсы, закрытые дегустации.',
    category: 'trends',
    imageType: 'marketing'
  },
  {
    slug: 'feedback-automation',
    title: 'Автоматизация сбора отзывов: QR-код на чеке',
    description: 'Как перехватить негатив до того, как он попадет в 2ГИС. Сервисы чаевых и отзывов.',
    category: 'trends',
    imageType: 'tech'
  }
  // ... (Можно масштабировать до 100 по аналогии)
];

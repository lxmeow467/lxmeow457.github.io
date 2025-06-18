# Работа с локальными JSON-файлами для статичной информации

## Текущая структура данных в проекте

В вашем проекте данные хранятся прямо в JavaScript-файлах. Вот примеры:

### 1. Данные о дебютах (main.js, openings.js)

```javascript
// Данные о дебютах
const openings = [
  {
    name: 'Сицилианская защита',
    description: 'Самый острый ответ на 1.e4. Черные немедленно борются за центр, создавая асимметричную позицию с богатой тактической игрой.',
    moves: '1.e4 c5',
    popularity: 'Очень высокая'
  },
  {
    name: 'Защита Каро-Канн',
    description: 'Надёжный и солидный дебют за черных. Создает прочную пешечную структуру и предоставляет хорошие шансы на контригру.',
    moves: '1.e4 c6',
    popularity: 'Высокая'
  }
  // ... другие дебюты
];
```

### 2. Данные о шахматистах (players-data.js)

```javascript
// Данные о шахматистах
const players = [
  {
    name: 'Магнус Карлсен',
    title: 'Гроссмейстер',
    rating: 2847,
    country: 'Норвегия',
    bestOpening: 'Итальянская партия',
    fideId: '1503014',
    rsfId: null,
    photoUrl: 'images/carlsen.jpg',
    bio: 'Магнус Карлсен - норвежский шахматист, действующий чемпион мира по шахматам...',
    achievements: 'Чемпион мира (2013-2023), Чемпион мира по рапиду и блицу...',
    tournaments: 'Победитель множества супертурниров: Вейк-ан-Зее, Norway Chess...',
    style: 'Универсальный стиль с великолепным пониманием эндшпиля...'
  }
  // ... другие игроки
];
```

## Рекомендуемая структура с JSON-файлами

### 1. Создание JSON-файлов

#### `data/openings.json`
```json
{
  "openings": [
    {
      "id": 0,
      "name": "Сицилианская защита",
      "description": "Самый острый ответ на 1.e4. Черные немедленно борются за центр, создавая асимметричную позицию с богатой тактической игрой.",
      "moves": "1.e4 c5",
      "popularity": "Очень высокая",
      "style": "Тактический",
      "position": "Открытая",
      "risk": "Высокий",
      "color": "Черные",
      "level": "Средний",
      "timeRequired": "Умеренно",
      "category": "полуоткрытый",
      "history": "Сицилианская защита - один из старейших дебютов...",
      "ideas": "Основная идея сицилианской защиты - немедленная борьба за центр...",
      "advantages": [
        "Богатая тактическая игра",
        "Множество вариантов",
        "Подходит для активных игроков"
      ],
      "disadvantages": [
        "Требует глубокого изучения",
        "Высокий риск",
        "Сложная теория"
      ],
      "variations": [
        {
          "name": "Вариант дракона",
          "moves": "1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6",
          "description": "Острый вариант с фианкетто слона"
        },
        {
          "name": "Московский вариант",
          "moves": "1.e4 c5 2.Nf3 d6 3.Bb5+",
          "description": "Белые избегают основных вариантов"
        }
      ],
      "games": [
        {
          "white": "Гарри Каспаров",
          "black": "Вишванатан Ананд",
          "year": "1995",
          "result": "1-0",
          "link": "https://www.chessgames.com/perl/chessgame?gid=1018574"
        }
      ],
      "lichessBoardUrl": "https://lichess.org/study/embed/XtFCFYlM/GCUTf1EY"
    }
  ]
}
```

#### `data/players.json`
```json
{
  "players": [
    {
      "id": 0,
      "name": "Магнус Карлсен",
      "title": "Гроссмейстер",
      "rating": 2847,
      "country": "Норвегия",
      "bestOpening": "Итальянская партия",
      "fideId": "1503014",
      "rsfId": null,
      "photoUrl": "images/carlsen.jpg",
      "bio": "Магнус Карлсен родился 30 ноября 1990 года в Тёнсберге, Норвегия...",
      "achievements": "Чемпион мира (2013-2023), многократный чемпион мира по рапиду и блицу...",
      "tournaments": "Рекордное количество побед в супертурнирах: Вейк-ан-Зее (8 раз)...",
      "style": "Универсальный стиль с великолепным пониманием эндшпиля...",
      "career": {
        "birthDate": "1990-11-30",
        "gmSince": "2004",
        "peakRating": 2882,
        "worldChampion": "2013-2023"
      },
      "statistics": {
        "totalGames": 2500,
        "winRate": 0.65,
        "drawRate": 0.25,
        "lossRate": 0.10
      }
    }
  ]
}
```

#### `data/rules.json`
```json
{
  "rules": {
    "basic": {
      "title": "Основные правила",
      "sections": [
        {
          "id": "board-setup",
          "title": "Расстановка фигур",
          "content": "Шахматная доска состоит из 64 клеток...",
          "image": "images/board-setup.png"
        },
        {
          "id": "piece-movement",
          "title": "Ходы фигур",
          "content": "Каждая фигура ходит по своим правилам...",
          "pieces": [
            {
              "name": "Пешка",
              "movement": "Пешка ходит только вперед на одну клетку...",
              "special": "Взятие на проходе, превращение"
            },
            {
              "name": "Ладья",
              "movement": "Ладья ходит по горизонтали и вертикали...",
              "special": "Рокировка"
            }
          ]
        }
      ]
    },
    "special": {
      "title": "Особые правила",
      "sections": [
        {
          "id": "castling",
          "title": "Рокировка",
          "content": "Рокировка - это особый ход короля и ладьи...",
          "conditions": [
            "Король и ладья не двигались",
            "Между королем и ладьей нет фигур",
            "Король не под шахом"
          ]
        }
      ]
    }
  }
}
```

### 2. JavaScript для загрузки JSON-файлов

#### `js/data-loader.js`
```javascript
// Класс для загрузки и управления данными
class DataLoader {
  constructor() {
    this.cache = new Map();
    this.baseUrl = 'data/';
  }

  // Загрузка данных с кэшированием
  async loadData(filename) {
    // Проверяем кэш
    if (this.cache.has(filename)) {
      return this.cache.get(filename);
    }

    try {
      const response = await fetch(`${this.baseUrl}${filename}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Кэшируем данные
      this.cache.set(filename, data);
      
      return data;
    } catch (error) {
      console.error(`Ошибка загрузки ${filename}:`, error);
      throw error;
    }
  }

  // Загрузка дебютов
  async loadOpenings() {
    const data = await this.loadData('openings.json');
    return data.openings;
  }

  // Загрузка игроков
  async loadPlayers() {
    const data = await this.loadData('players.json');
    return data.players;
  }

  // Загрузка правил
  async loadRules() {
    const data = await this.loadData('rules.json');
    return data.rules;
  }

  // Поиск дебюта по ID
  async getOpeningById(id) {
    const openings = await this.loadOpenings();
    return openings.find(opening => opening.id === id);
  }

  // Поиск игрока по ID
  async getPlayerById(id) {
    const players = await this.loadPlayers();
    return players.find(player => player.id === id);
  }

  // Фильтрация дебютов
  async filterOpenings(filters) {
    const openings = await this.loadOpenings();
    return openings.filter(opening => {
      return Object.entries(filters).every(([key, value]) => {
        if (Array.isArray(value)) {
          return value.includes(opening[key]);
        }
        return opening[key] === value;
      });
    });
  }

  // Очистка кэша
  clearCache() {
    this.cache.clear();
  }
}

// Создаем глобальный экземпляр
const dataLoader = new DataLoader();
```

### 3. Использование в HTML-страницах

#### `openings.html` (обновленная версия)
```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Дебюты | Шахматный портал</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Навигация -->
    <header class="header">
        <!-- ... -->
    </header>

    <main>
        <section class="section">
            <h2>Шахматные дебюты</h2>
            
            <!-- Фильтры -->
            <div class="filter-container">
                <label class="filter-label">Фильтр по стилю:</label>
                <div class="filter-buttons">
                    <button class="filter-button active" data-filter="all">Все</button>
                    <button class="filter-button" data-filter="Тактический">Тактические</button>
                    <button class="filter-button" data-filter="Позиционный">Позиционные</button>
                    <button class="filter-button" data-filter="Универсальный">Универсальные</button>
                </div>
            </div>

            <!-- Сетка дебютов -->
            <div class="openings-grid" id="openingsGrid">
                <!-- Данные будут загружены динамически -->
            </div>
        </section>
    </main>

    <!-- Подключаем загрузчик данных -->
    <script src="js/data-loader.js"></script>
    <script>
        // Инициализация страницы
        document.addEventListener('DOMContentLoaded', async () => {
            try {
                // Загружаем дебюты
                const openings = await dataLoader.loadOpenings();
                
                // Отображаем дебюты
                displayOpenings(openings);
                
                // Настраиваем фильтры
                setupFilters(openings);
                
            } catch (error) {
                console.error('Ошибка загрузки данных:', error);
                document.getElementById('openingsGrid').innerHTML = 
                    '<p>Ошибка загрузки данных. Попробуйте обновить страницу.</p>';
            }
        });

        // Функция отображения дебютов
        function displayOpenings(openings) {
            const grid = document.getElementById('openingsGrid');
            
            const openingsHTML = openings.map(opening => `
                <div class="opening-card" data-style="${opening.style}">
                    <div class="opening-card-content">
                        <h3>${opening.name}</h3>
                        <div class="opening-info">
                            <p><strong>Ходы:</strong> ${opening.moves}</p>
                            <p><strong>Стиль:</strong> ${opening.style}</p>
                            <p><strong>Популярность:</strong> ${opening.popularity}</p>
                            <p><strong>Уровень:</strong> ${opening.level}</p>
                        </div>
                        <p class="opening-description">${opening.description}</p>
                        <div class="opening-actions">
                            <button onclick="showOpeningDetails(${opening.id})" class="btn-primary">
                                Подробнее
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
            
            grid.innerHTML = openingsHTML;
        }

        // Функция настройки фильтров
        function setupFilters(openings) {
            const filterButtons = document.querySelectorAll('.filter-button');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Убираем активный класс у всех кнопок
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    // Добавляем активный класс к нажатой кнопке
                    button.classList.add('active');
                    
                    const filter = button.dataset.filter;
                    filterOpenings(filter, openings);
                });
            });
        }

        // Функция фильтрации
        function filterOpenings(filter, openings) {
            const cards = document.querySelectorAll('.opening-card');
            
            cards.forEach(card => {
                if (filter === 'all' || card.dataset.style === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // Функция показа деталей дебюта
        async function showOpeningDetails(openingId) {
            try {
                const opening = await dataLoader.getOpeningById(openingId);
                if (opening) {
                    // Переходим на страницу деталей
                    window.location.href = `opening-detail.html?id=${openingId}`;
                }
            } catch (error) {
                console.error('Ошибка загрузки деталей дебюта:', error);
            }
        }
    </script>
</body>
</html>
```

### 4. Преимущества использования JSON-файлов

1. **Разделение данных и логики** - данные отделены от кода
2. **Легкость редактирования** - можно редактировать данные без изменения кода
3. **Кэширование** - браузер может кэшировать JSON-файлы
4. **Масштабируемость** - легко добавлять новые данные
5. **Переиспользование** - одни данные можно использовать на разных страницах
6. **Версионирование** - можно отслеживать изменения в данных через Git

### 5. Структура папок для JSON-файлов

```
project2/
├── data/
│   ├── openings.json          # Данные о дебютах
│   ├── players.json           # Данные о шахматистах
│   ├── rules.json             # Правила шахмат
│   ├── tournaments.json       # Данные о турнирах
│   └── ratings.json           # Рейтинги
├── js/
│   ├── data-loader.js         # Загрузчик данных
│   └── utils.js               # Утилиты
└── ...
```

Эта структура позволит вам эффективно управлять статичными данными и легко их обновлять без изменения кода. 
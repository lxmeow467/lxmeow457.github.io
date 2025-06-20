// Данные о дебютах
window.openings = [
  {
    id: 0,
    name: 'Сицилианская защита',
    description: 'Самый острый ответ на 1.e4. Черные немедленно борются за центр, создавая асимметричную позицию с богатой тактической игрой.',
      moves: '1.e4 c5',
    popularity: 'Очень высокая',
      style: 'Тактический',
      position: 'Открытая',
      risk: 'Высокий',
      color: 'Черные',
      level: 'Средний',
      timeRequired: 'Умеренно',
    category: 'полуоткрытый',
    history: 'Сицилианская защита - один из старейших дебютов, впервые упомянутый в шахматной литературе в 16 веке. Название происходит от итальянского шахматиста Пьетро Карреры из Сицилии, который анализировал этот дебют в 1617 году. Популярность дебюта значительно возросла в 20 веке благодаря его использованию такими чемпионами мира, как Михаил Таль, Гарри Каспаров и Бобби Фишер.',
    ideas: 'Основная идея Сицилианской защиты - асимметричная борьба за центр. Вместо прямого противостояния пешке e4 ходом e5, черные атакуют центр сбоку ходом c5. Это создает дисбаланс в пешечной структуре и часто приводит к динамичной игре с обоюдными шансами. Черные обычно стремятся к контригре на ферзевом фланге, в то время как белые часто атакуют на королевском фланге.',
    variations: [
      {
        name: 'Вариант Найдорфа',
        moves: '1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6',
        description: 'Один из самых популярных и теоретически нагруженных вариантов Сицилианской защиты. Ход a6 готовит продвижение b5 и развитие слона на b7.',
        url: 'openings/variations-sicilian/najdorf.html'
      },
      {
        name: 'Вариант Дракона',
        moves: '1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6',
        description: 'Агрессивный вариант, где черные фианкеттируют слона на g7, создавая мощную диагональ h8-a1, напоминающую дракона.',
        url: 'openings/variations-sicilian/dragon.html'
      },
      {
        name: 'Московский вариант',
        moves: '1.e4 c5 2.Nf3 d6 3.Bb5+',
        description: 'Альтернативный вариант, где белые развивают слона на b5 с шахом, создавая угрозу и вынуждая защитную реакцию черных.',
        url: 'openings/variations-sicilian/moscowskiy.html'
      },
      {
        name: 'Классический вариант',
        moves: '1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 d6',
        description: 'Солидное продолжение с развитием фигур и борьбой в центре.',
        url: 'openings/variations-sicilian/sicilian_classical.html'
      },
      {
        name: 'Челябинский вариант',
        moves: '1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5',
        description: 'Агрессивный вариант, где черные немедленно контратакуют в центре с ходом e5.',
        url: 'openings/variations-sicilian/sicilian_scheveningen.html'
      },
      {
        name: 'Вариант Паульсена',
        moves: '1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 a6',
        description: 'Позиционный вариант, где черные откладывают развитие коня на f6 и готовят продвижение b5.',
        url: 'openings/variations-sicilian/sicilian_paulsen.html'
      },
      {
        name: 'Ранний Дракон',
        moves: '1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 g6',
        description: 'Упрощенная версия варианта Дракона, где черные сразу начинают фианкеттирование слона.',
        url: 'openings/variations-sicilian/sicilian_early_dragon.html'
      },
      {
        name: 'Вариант Россолимо',
        moves: '1.e4 c5 2.Nf3 Nc6 3.Bb5',
        description: 'Альтернатива основным линиям Сицилианской защиты, где белые развивают слона на b5, атакуя коня на c6.',
        url: 'openings/variations-sicilian/sicilian_rossolimo.html'
      }
      ],
      games: [
        {
          white: 'Гарри Каспаров',
          black: 'Вишванатан Ананд',
          year: '1995',
          result: '1-0',
          link: 'image.pnghttps://www.chessgames.com/perl/chessgame?gid=1018574'
        },
        {
          white: 'Бобби Фишер',
          black: 'Борис Спасский',
          year: '1972',
          result: '1-0',
          link: 'https://www.chessgames.com/perl/chessgame?gid=1044366'
        }
      ],
      lichessBoardUrl: 'https://lichess.org/study/embed/XtFCFYlM/GCUTf1EY'
  },
  {
    id: 1,
    name: 'Защита Каро-Канн',
    description: 'Надёжный и солидный дебют за черных. Создает прочную пешечную структуру и предоставляет хорошие шансы на контригру.',
    moves: '1.e4 c6',
    popularity: 'Высокая',
    style: 'Позиционный',
    position: 'Закрытая',
    risk: 'Низкий',
    color: 'Черные',
    level: 'Начальный',
      timeRequired: 'Минимально',
    category: 'полуоткрытый',
      history: 'Защита Каро-Канн названа в честь двух шахматистов 19 века - Горацио Каро и Маркуса Канна, которые анализировали этот дебют в 1880-х годах. Дебют стал особенно популярен в 20 веке, когда его часто использовали чемпионы мира Хосе Рауль Капабланка и Анатолий Карпов.',
    ideas: 'Основная идея защиты Каро-Канн - создать прочную пешечную структуру и затем контратаковать в центре. Черные сначала укрепляют пешку d5 ходом c6, а затем развивают фигуры для контригры. Этот дебют часто ведет к позиционной игре с долгосрочными стратегическими планами.',
    variations: [
      {
        name: 'Классический вариант',
        moves: '1.e4 c6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Bf5 5.Ng3 Bg6 6.h4 h6',
        description: 'Основной вариант, где черные развивают чернопольного слона на f5 и готовятся к долгой позиционной борьбе.'
      },
      {
        name: 'Вариант Панова-Ботвинника',
        moves: '1.e4 c6 2.d4 d5 3.exd5 cxd5 4.c4 Nf6 5.Nc3 e6 6.Nf3',
        description: 'Агрессивный вариант, где белые стремятся к изолированной пешке d5 и активной фигурной игре. Часто ведет к острым позициям с обоюдными шансами.'
      },
      {
        name: 'Вариант с 3.e5',
        moves: '1.e4 c6 2.d4 d5 3.e5 Bf5 4.Nf3 e6 5.Be2 Nd7',
        description: 'Белые захватывают пространство в центре, а черные готовятся к подрыву пешечной цепи белых. Ведет к закрытым позициям с маневренной борьбой.'
      },
      {
        name: 'Атака Фантазии',
        moves: '1.e4 c6 2.d4 d5 3.f3 dxe4 4.fxe4 e5 5.Nf3 Bg4 6.Bc4',
        description: 'Редкий, но острый вариант, где белые жертвуют пешку для быстрого развития и атаки. Требует точной игры от обеих сторон.'
      },
      {
        name: 'Система двух коней',
          moves: '1.e4 c6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Nf6 5.Qe2 Nxe4 6.Qxe4',
        description: 'Простой вариант с быстрым развитием коней. Белые стремятся к небольшому, но стабильному преимуществу в дебюте.'
      }
      ],
      games: [
        {
          white: 'Гарри Каспаров',
          black: 'Анатолий Карпов',
          year: '1984',
          result: '0-1',
          link: 'https://www.chessgames.com/perl/chessgame?gid=1067317'
        },
        {
          white: 'Магнус Карлсен',
          black: 'Вишванатан Ананд',
          year: '2013',
          result: '1/2-1/2',
          link: 'https://www.chessgames.com/perl/chessgame?gid=1737460'
        }
      ],
      lichessBoardUrl: 'https://lichess.org/study/embed/XtFCFYlM/GCUTf1EY'
  },
  {
    id: 2,
    name: 'Дебют четырёх коней',
    description: 'Классический дебют с симметричным развитием фигур. Ведет к равным шансам с обеих сторон при правильной игре.',
    moves: '1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6',
    popularity: 'Средняя',
      style: 'Универсальный',
      position: 'Нейтральная',
      risk: 'Средний',
      color: 'Оба',
      level: 'Начальный',
      timeRequired: 'Минимально',
    category: 'открытый',
    url: 'four-knights.html',
      history: 'Дебют четырех коней - один из старейших шахматных дебютов, известный еще с 16 века. Он был особенно популярен в 19 веке, когда его часто использовали такие мастера, как Пол Морфи и Вильгельм Стейниц. В современной практике встречается реже из-за появления более агрессивных дебютных систем.',
      ideas: 'Основная идея дебюта четырех коней - быстрое развитие фигур и контроль центра. Обе стороны развивают коней на естественные позиции, создавая симметричную позицию с равными шансами. Этот дебют считается очень надежным и подходит для начинающих шахматистов, так как следует основным принципам дебютной игры.',
    variations: [
      {
        name: 'Испанский вариант',
          moves: '1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.Bb5',
          description: 'Переход к испанской партии, где белые оказывают давление на коня c6.'
      },
      {
        name: 'Шотландский вариант',
          moves: '1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4',
          description: 'Переход к шотландской партии, где белые немедленно открывают центр.'
      },
      {
        name: 'Симметричный вариант',
          moves: '1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.g3',
          description: 'Спокойный вариант, где белые готовят фианкеттирование слона на g2.'
        }
      ],
      games: [
        {
          white: 'Пол Морфи',
          black: 'Адольф Андерсен',
          year: '1858',
          result: '1-0',
          link: 'https://www.chessgames.com/perl/chessgame?gid=1019060'
        },
        {
          white: 'Гарри Каспаров',
          black: 'Найджел Шорт',
          year: '1993',
          result: '1-0',
          link: 'https://www.chessgames.com/perl/chessgame?gid=1070167'
        }
      ],
      lichessBoardUrl: 'https://lichess.org/study/embed/XtFCFYlM/GCUTf1EY'
  },
  {
    id: 3,
      name: 'Защита Грюнфельд',
    description: 'Гипермодернистский дебют, где черные контратакуют в центре, не занимая его пешками сразу.',
    moves: '1.d4 Nf6 2.c4 g6 3.Nc3 d5',
    popularity: 'Высокая',
      style: 'Тактический',
      position: 'Открытая',
      risk: 'Средний',
      color: 'Черные',
      level: 'Продвинутый',
      timeRequired: 'Много',
    category: 'закрытый',
    url: 'grunfeld.html',
      history: 'Защита Грюнфельд названа в честь австрийского гроссмейстера Эрнста Грюнфельда, который впервые применил ее в 1922 году. Дебют стал особенно популярен в 1970-х и 1980-х годах благодаря его использованию Гарри Каспаровым и Анатолием Карповым в их матчах на первенство мира.',
    ideas: 'Основная идея защиты Грюнфельда - позволить белым создать мощный пешечный центр, а затем атаковать его фигурами. Черные фианкеттируют слона на g7 и оказывают давление на центр ходом d5. После разменов в центре черные стремятся использовать силу дальнобойного слона g7 и активность фигур для контригры.',
    variations: [
      {
          name: 'Классический вариант',
          moves: '1.d4 Nf6 2.c4 g6 3.Nc3 d5 4.cxd5 Nxd5 5.e4 Nxc3 6.bxc3 Bg7 7.Bc4',
          description: 'Основной вариант, где белые стремятся к активной игре в центре и на королевском фланге.'
        },
        {
          name: 'Русский вариант',
          moves: '1.d4 Nf6 2.c4 g6 3.Nc3 d5 4.Nf3 Bg7 5.Qb3',
          description: 'Агрессивный вариант, где белые сразу атакуют пешку d5 ферзем.'
        },
        {
          name: 'Вариант с 4.Bf4',
          moves: '1.d4 Nf6 2.c4 g6 3.Nc3 d5 4.Bf4',
          description: 'Современный вариант, где белые быстро развивают слона и готовят e3 и Rc1.'
        }
      ],
      games: [
        {
          white: 'Гарри Каспаров',
          black: 'Вишванатан Ананд',
          year: '1995',
          result: '1-0',
          link: 'https://www.chessgames.com/perl/chessgame?gid=1018574'
        },
        {
          white: 'Магнус Карлсен',
          black: 'Фабиано Каруана',
          year: '2018',
          result: '1/2-1/2',
          link: 'https://www.chessgames.com/perl/chessgame?gid=1933354'
        }
      ],
      lichessBoardUrl: 'https://lichess.org/study/embed/XtFCFYlM/GCUTf1EY'
    }
];

// Делаем массив доступным глобально
window.openings = window.openings;

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
  initializeOpenings();
  initializeQuiz();
});

// Инициализация секции дебютов
function initializeOpenings() {
  const openingsGrid = document.getElementById('openingsGrid');
  const filterButtons = document.querySelectorAll('.filter-button');
  
  // Функция для отображения дебютов с фильтрацией по категории
  function displayOpenings(category = 'all') {
    // Очищаем текущее содержимое сетки
    openingsGrid.innerHTML = '';
    
    // Фильтруем дебюты по категории
    const filteredOpenings = category === 'all' 
      ? window.openings 
      : window.openings.filter(opening => opening.category === category);
    
    // Если нет дебютов, соответствующих фильтру
    if (filteredOpenings.length === 0) {
      const noResults = document.createElement('div');
      noResults.className = 'no-results';
      noResults.textContent = 'Дебютов, соответствующих выбранному фильтру, не найдено.';
      openingsGrid.appendChild(noResults);
      return;
    }
    
    // Отображаем отфильтрованные дебюты
    filteredOpenings.forEach((opening, index) => {
      const card = document.createElement('div');
      card.className = 'opening-card';
      
      // Создаем содержимое карточки
      let cardContent = `
        <h3>${opening.name}</h3>
        <p>${opening.description}</p>
      `;
      
      // Проверяем, является ли дебют Московским вариантом для особого отображения ходов
      if (opening.name === 'Московский вариант') {
        cardContent += `
          <p><strong>Ходы:</strong> 1.e4 c5 2.Nf3 d6 3.Bb5+</p>
        `;
      } else {
        cardContent += `
          <p><strong>Ходы:</strong> ${opening.moves}</p>
        `;
      }
      
      cardContent += `
        <p><strong>Популярность:</strong> ${opening.popularity}</p>
        <p><strong>Категория:</strong> ${opening.category || 'Не указана'}</p>
      `;
      
      card.innerHTML = cardContent;
      
      // Исправляем обработчик клика для корректного перехода на страницу с деталями дебюта
      card.addEventListener('click', () => {
        // Явная проверка для дебюта четырёх коней
        if (opening.name === 'Дебют четырёх коней') {
          window.location.href = 'four-knights.html';
          return;
        }
        // Проверяем наличие URL для варианта и переходим по нему
        if (opening.id === 0) { // Для Сицилианской защиты переходим на страницу деталей
          window.location.href = `openings/variations-sicilian/opening-detail.html`;
        } else if (opening.id === 1) { // Для Защиты Каро-Канн переходим на специальную страницу
          window.location.href = `openings/caro-kann/opening-detail.html`;
        } else if (opening.variations && opening.variations.length > 0 && opening.variations[0].url) {
          window.location.href = opening.variations[0].url;
        } else if (opening.url) {
          window.location.href = opening.url;
        } else {
          // Для других дебютов
          window.location.href = `openings-detail.html?id=${opening.id}`;
        }
      });
      
      // Добавляем стиль курсора, чтобы показать, что карточка кликабельна
      card.style.cursor = 'pointer';
      
      openingsGrid.appendChild(card);
    });
  }
  
  // Добавляем обработчики событий для кнопок фильтрации
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Удаляем класс active у всех кнопок
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Добавляем класс active к нажатой кнопке
      button.classList.add('active');
      
      // Получаем категорию из атрибута data-category
      const category = button.getAttribute('data-category');
      
      // Отображаем дебюты с выбранной категорией
      displayOpenings(category);
    });
  });
  
  // Инициализируем отображение всех дебютов при загрузке страницы
  console.log('openings:', window.openings);
  displayOpenings();
}

// Инициализация анкеты
function initializeQuiz() {
  const submitButton = document.getElementById('submit-quiz');
  const restartButton = document.getElementById('restart-quiz');
  const quizForm = document.getElementById('quiz-form');
  const quizResult = document.getElementById('quiz-result');
  const recommendedOpening = document.getElementById('recommended-opening');

  submitButton.addEventListener('click', () => {
    // Собираем ответы пользователя
    const position = document.querySelector('input[name="position"]:checked')?.value;
    const style = document.querySelector('input[name="style"]:checked')?.value;
    const time = document.querySelector('input[name="time"]:checked')?.value;
    const risk = document.querySelector('input[name="risk"]:checked')?.value;
    const level = document.querySelector('input[name="level"]:checked')?.value;
    const color = document.querySelector('input[name="color"]:checked')?.value;
    const priority = document.querySelector('input[name="priority"]:checked')?.value;

    // Проверяем, что на все вопросы даны ответы
    if (!position || !style || !time || !risk || !level || !color || !priority) {
      alert('Пожалуйста, ответьте на все вопросы');
      return;
    }

    // Находим подходящий дебют
    const recommendedOpenings = findRecommendedOpenings({
      position,
      style,
      timeRequired: time,
      risk,
      level,
      color
    });

// Отображаем результат
if (recommendedOpenings.length > 0) {
    // Выбираем лучший дебют из списка рекомендованных
    const bestOpening = recommendedOpenings[0];

    recommendedOpening.innerHTML = `
    <h4>${bestOpening.name}</h4>
    <p>${bestOpening.description}</p>
    <p><strong>Ходы:</strong> ${bestOpening.moves}</p>
    <p><strong>Популярность:</strong> ${bestOpening.popularity}</p>
    <p><strong>Почему этот дебют подходит вам:</strong> Этот дебют соответствует вашим предпочтениям
    по стилю игры (${getStyleDescription(bestOpening.style)}),
    отношению к риску (${getRiskDescription(bestOpening.risk)})
    и уровню подготовки (${getLevelDescription(bestOpening.level)}).</p>
    `;

    // Если есть другие рекомендации, показываем их тоже
    if (recommendedOpenings.length > 1) {
        recommendedOpening.innerHTML += `
        <p><strong>Также стоит обратить внимание на:</strong></p>
        <ul>
        ${recommendedOpenings.slice(1, 3).map(opening => `
        <li>${opening.name} - ${opening.description.substring(0, 100)}..</li>
        `).join('')}
        </ul>
        `;
    }
} else {
    recommendedOpening.innerHTML = `
    <p>К сожалению, мы не смогли подобрать дебют, точно соответствующий вашим критериям.
    Попробуйте изменить некоторые параметры.</p>
    `;
}
    // Показываем результат
    quizForm.style.display = 'none';
    quizResult.style.display = 'block';
  });

  restartButton.addEventListener('click', () => {
    // Сбрасываем форму
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.checked = false;
    });

    // Показываем форму снова
    quizResult.style.display = 'none';
    quizForm.style.display = 'block';
  });
}

// Функция для поиска рекомендуемых дебютов
function findRecommendedOpenings(preferences) {
  // Создаем систему оценки для каждого дебюта
  const scoredOpenings = window.openings.map(opening => {
    let score = 0;

    // Оцениваем соответствие по каждому критерию
    if (opening.position === preferences.position) score += 2;
    if (opening.style === preferences.style) score += 3; // Стиль игры - важный критерий
    if (opening.timeRequired === preferences.timeRequired) score += 1;
    if (opening.risk === preferences.risk) score += 2;
    if (opening.level === preferences.level) score += 2;
    if (opening.color === preferences.color || opening.color === 'both') score += 1;

    return { ...opening, score };
  });

  // Сортируем дебюты по убыванию оценки
  return scoredOpenings
    .sort((a, b) => b.score - a.score)
    .filter(opening => opening.score > 5); // Отбираем только те, которые набрали достаточно баллов
}

// Вспомогательные функции для описания стилей, рисков и уровней
function getStyleDescription(style) {
  switch (style) {
    case 'tactical': return 'тактическому';
    case 'positional': return 'позиционному';
    case 'universal': return 'универсальному';
    default: return '';
  }
}

function getRiskDescription(risk) {
  switch (risk) {
    case 'low': return 'низкому';
    case 'medium': return 'умеренному';
    case 'high': return 'высокому';
    default: return '';
  }
}

function getLevelDescription(level) {
  switch (level) {
    case 'beginner': return 'начальному';
    case 'intermediate': return 'среднему';
    case 'advanced': return 'продвинутому';
    default: return '';
  }
}

// Example: Load the first opening
loadOpening(0);

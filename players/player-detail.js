// Инициализация страницы
document.addEventListener('DOMContentLoaded', () => {
  loadPlayerDetails();
  
  // Обрабатываем изменение хэша URL
  window.addEventListener('hashchange', loadPlayerDetails);
});

// Загрузка информации о шахматисте
function loadPlayerDetails() {
  try {
    console.log("Начало загрузки данных о шахматисте");
    console.log("Доступно игроков:", players.length);
    
  // Получаем ID шахматиста из URL
  const urlParams = new URLSearchParams(window.location.search);
    let playerId = urlParams.get('id');
    
    console.log("Полученный ID из URL:", playerId);
    
    // Преобразуем ID в число
    playerId = parseInt(playerId, 10);
    
    // Проверяем, что ID является числом
    if (isNaN(playerId)) {
      console.error("ID не является числом:", playerId);
      showError('Некорректный ID шахматиста');
      return;
    }
    
    console.log("ID после преобразования:", playerId);
    console.log("Диапазон доступных ID:", 0, "до", players.length - 1);
    
    // Проверяем, что ID находится в допустимом диапазоне
    if (playerId < 0 || playerId >= players.length) {
      console.error("ID вне допустимого диапазона:", playerId);
      showError(`Шахматист с ID ${playerId} не найден. Допустимый диапазон: 0-${players.length - 1}`);
      return;
    }
    
    // Получаем данные игрока
    const player = players[playerId];
    console.log("Найден игрок:", player ? player.name : "не найден");
    
    if (!player) {
      console.error("Игрок не найден по индексу:", playerId);
      showError(`Шахматист с ID ${playerId} не найден`);
      return;
    }
    
    // Заполняем информацию о шахматисте
    document.title = `${player.name} - Портал шахматных дебютов`;
    
    // Устанавливаем фото
    const playerPhoto = document.getElementById('playerPhoto');
    if (playerPhoto) {
      playerPhoto.src = `../${player.photoUrl}`;
      playerPhoto.alt = player.name;
      console.log("Установлено фото:", player.photoUrl);
    } else {
      console.error("Элемент playerPhoto не найден");
    }
    
    // Проверяем наличие всех необходимых элементов перед заполнением
    const elements = {
      'playerName': document.getElementById('playerName'),
      'playerTitle': document.getElementById('playerTitle'),
      'playerRating': document.getElementById('playerRating'),
      'playerCountry': document.getElementById('playerCountry'),
      'playerBestOpening': document.getElementById('playerBestOpening'),
      'fideId': document.getElementById('fideId'),
      'rsfId': document.getElementById('rsfId'),
      'playerBio': document.getElementById('playerBio'),
      'playerAchievements': document.getElementById('playerAchievements'),
      'playerTournaments': document.getElementById('playerTournaments'),
      'playerStyle': document.getElementById('playerStyle')
    };
    
    // Проверяем наличие всех элементов
    const missingElements = Object.entries(elements)
      .filter(([name, element]) => !element)
      .map(([name]) => name);
    
    if (missingElements.length > 0) {
      console.error("Отсутствуют следующие элементы:", missingElements.join(', '));
    }
    
    // Заполняем основную информацию, только если элементы существуют
    if (elements.playerName) elements.playerName.textContent = player.name;
    if (elements.playerTitle) elements.playerTitle.textContent = player.title;
    if (elements.playerRating) elements.playerRating.textContent = player.rating;
    if (elements.playerCountry) elements.playerCountry.textContent = player.country;
    if (elements.playerBestOpening) elements.playerBestOpening.textContent = player.bestOpening;
    
    // Заполняем ID ФИДЕ и РШФ
    if (elements.fideId) {
      elements.fideId.innerHTML = player.fideId ? 
        `<span class="chess-id">${player.fideId}</span>` : 
        '<span class="not-available">Нет данных</span>';
    }
    
    if (elements.rsfId) {
      elements.rsfId.innerHTML = player.rsfId ? 
        `<span class="chess-id">${player.rsfId}</span>` : 
        '<span class="not-available">Нет данных</span>';
    }
    
    // Форматируем и заполняем биографию и другие тексты
    if (elements.playerBio) elements.playerBio.innerHTML = formatBiography(player.bio);
    if (elements.playerAchievements) elements.playerAchievements.innerHTML = formatText(player.achievements);
    if (elements.playerTournaments) elements.playerTournaments.innerHTML = formatText(player.tournaments);
    if (elements.playerStyle) elements.playerStyle.innerHTML = formatText(player.style);
    
    // Настраиваем навигацию между игроками
    setupPlayerNavigation(playerId);
    
    // Добавляем микроразметку Schema.org для SEO
    addSchemaMarkup(player);
    
    // Показываем контент
    const playerDetails = document.querySelector('.player-details');
    if (playerDetails) {
      playerDetails.style.opacity = '1';
      console.log("Данные успешно загружены и отображены");
    } else {
      console.error("Элемент .player-details не найден");
    }
    
  } catch (error) {
    console.error('Ошибка при загрузке данных о шахматисте:', error);
    showError('Произошла ошибка при загрузке данных о шахматисте: ' + error.message);
  }
}

// Функция для форматирования биографии
function formatBiography(text) {
  if (!text) return '';
  // Просто возвращаем весь текст как один параграф
  return `<p>${text}</p>`;
}

// Функция для форматирования остальных текстов
function formatText(text) {
  if (!text) return '';
  
  // Разделяем текст на параграфы по запятым или точкам с запятой
  const parts = text.split(/(?<=\.\s)|(?<=\,\s)|(?<=\;\s)/);
  
  // Группируем части в параграфы для лучшей структуры
  let formatted = '';
  let currentPart = '';
  
  parts.forEach((part, index) => {
    currentPart += part;
    
    // Создаем новый параграф после каждых 2-3 частей или в конце
    if ((index + 1) % 3 === 0 || index === parts.length - 1) {
      formatted += `<p>${currentPart.trim()}</p>`;
      currentPart = '';
    }
  });
  
  return formatted || `<p>${text}</p>`;
}

// Функция для настройки навигации между игроками
function setupPlayerNavigation(playerId) {
  console.log("Настройка навигации для игрока с ID:", playerId);
  
  const prevPlayerBtn = document.getElementById('prevPlayerBtn');
  const nextPlayerBtn = document.getElementById('nextPlayerBtn');
  
  if (!prevPlayerBtn || !nextPlayerBtn) {
    console.error("Кнопки навигации не найдены:", {
      prevPlayerBtn: !!prevPlayerBtn,
      nextPlayerBtn: !!nextPlayerBtn
    });
    return;
  }
  
  // Преобразуем ID в число для уверенности
  playerId = parseInt(playerId, 10);
  
  // Предыдущий игрок
  if (playerId > 0) {
    prevPlayerBtn.href = `?id=${playerId - 1}`;
    prevPlayerBtn.classList.remove('disabled');
    console.log("Кнопка предыдущего игрока активирована:", playerId - 1);
  } else {
    prevPlayerBtn.href = 'javascript:void(0)';
    prevPlayerBtn.classList.add('disabled');
    console.log("Кнопка предыдущего игрока деактивирована");
  }
  
  // Следующий игрок
  if (playerId < players.length - 1) {
    nextPlayerBtn.href = `?id=${playerId + 1}`;
    nextPlayerBtn.classList.remove('disabled');
    console.log("Кнопка следующего игрока активирована:", playerId + 1);
  } else {
    nextPlayerBtn.href = 'javascript:void(0)';
    nextPlayerBtn.classList.add('disabled');
    console.log("Кнопка следующего игрока деактивирована");
  }
  
  // Добавляем обработчики событий для кнопок
  prevPlayerBtn.addEventListener('click', function(event) {
    if (this.classList.contains('disabled')) {
      event.preventDefault();
      console.log("Клик по деактивированной кнопке предыдущего игрока");
    } else {
      console.log("Переход к предыдущему игроку:", playerId - 1);
    }
  });
  
  nextPlayerBtn.addEventListener('click', function(event) {
    if (this.classList.contains('disabled')) {
      event.preventDefault();
      console.log("Клик по деактивированной кнопке следующего игрока");
    } else {
      console.log("Переход к следующему игроку:", playerId + 1);
    }
  });
}

// Функция для добавления микроразметки Schema.org для SEO
function addSchemaMarkup(player) {
  const schemaMarkup = `
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "${player.name}",
        "title": "${player.title}",
        "description": "${player.bio}",
        "image": "${player.photoUrl}",
        "url": "${window.location.href}"
      }
    </script>
  `;
  
  document.querySelector('head').insertAdjacentHTML('beforeend', schemaMarkup);
}

// Функция для отображения ошибок
function showError(message) {
  console.error("Отображение ошибки:", message);
  
  const errorElement = document.getElementById('error');
  if (!errorElement) {
    console.error("Элемент для отображения ошибок не найден");
    alert(`Ошибка: ${message}`);
    return;
  }
  
  // Создаем более заметное сообщение об ошибке
  errorElement.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
      <i class="fas fa-exclamation-triangle" style="color: #e74c3c; font-size: 24px; margin-right: 10px;"></i>
      <strong>Ошибка загрузки данных</strong>
    </div>
    <p>${message}</p>
    <p>Пожалуйста, попробуйте обновить страницу или вернитесь к <a href="../players.html" style="color: #3498db; text-decoration: underline;">списку игроков</a>.</p>
  `;
  
  // Добавляем стили для лучшей видимости на мобильных устройствах
  errorElement.style.display = 'block';
  errorElement.style.color = '#e74c3c';
  errorElement.style.backgroundColor = '#fdecea';
  errorElement.style.padding = '15px';
  errorElement.style.borderRadius = '8px';
  errorElement.style.margin = '20px 0';
  errorElement.style.textAlign = 'center';
  errorElement.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
  errorElement.style.fontSize = '16px';
  
  // Скрываем контейнер с деталями игрока
  const playerDetails = document.querySelector('.player-details');
  if (playerDetails) {
    playerDetails.style.display = 'none';
    console.log("Контейнер с деталями игрока скрыт");
  }
  
  // Скрываем навигацию между игроками
  const playerNav = document.querySelector('.player-nav');
  if (playerNav) {
    playerNav.style.display = 'none';
    console.log("Навигация между игроками скрыта");
  }
}
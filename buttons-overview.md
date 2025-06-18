# Обзор кнопок на шахматном сайте

## 1. Основные типы кнопок

### 1.1 CTA (Call-to-Action) кнопки

#### CSS стили
```css
.cta-button {
  padding: 15px 30px;
  font-size: 18px;
  background-color: var(--accent-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #ff6b40;
}
```

#### HTML пример
```html
<button class="cta-button">Начать изучение</button>
```

### 1.2 Кнопки фильтрации

#### CSS стили
```css
.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-button {
  padding: 8px 15px;
  background-color: var(--section-bg);
  border: 2px solid var(--secondary-color);
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-button:hover {
  background-color: var(--secondary-color);
  color: white;
}

.filter-button.active {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
}
```

#### HTML пример (страница дебютов)
```html
<div class="filter-container">
  <label class="filter-label">Фильтр по стилю:</label>
  <div class="filter-buttons">
    <button class="filter-button active" data-filter="all">Все</button>
    <button class="filter-button" data-filter="Тактический">Тактические</button>
    <button class="filter-button" data-filter="Позиционный">Позиционные</button>
    <button class="filter-button" data-filter="Универсальный">Универсальные</button>
  </div>
</div>
```

### 1.3 Кнопки поиска

#### CSS стили
```css
.rating-search-form button {
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.rating-search-form button:hover {
  background-color: var(--secondary-color);
}
```

#### HTML пример (страница рейтингов)
```html
<form class="rating-search-form">
  <input type="text" placeholder="Введите имя игрока...">
  <button type="submit">Найти</button>
</form>
```

### 1.4 Кнопки отправки форм

#### CSS стили
```css
.submit-button {
  padding: 12px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: var(--secondary-color);
}
```

#### HTML пример
```html
<form class="contact-form">
  <input type="email" placeholder="Ваш email">
  <textarea placeholder="Ваше сообщение"></textarea>
  <button type="submit" class="submit-button">Отправить</button>
</form>
```

### 1.5 Вторичные кнопки

#### CSS стили
```css
.secondary-button {
  padding: 12px 25px;
  font-size: 16px;
  background-color: var(--secondary-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;
}

.secondary-button:hover {
  background-color: var(--primary-color);
}
```

#### HTML пример
```html
<button class="secondary-button">Подробнее</button>
```

## 2. Специализированные кнопки

### 2.1 Кнопки калькулятора рейтинга

#### CSS стили
```css
.calculate-button {
  padding: 12px 20px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;
  font-weight: 500;
}

.calculate-button:hover {
  background-color: var(--secondary-color);
}
```

#### HTML пример
```html
<form class="calculator-form">
  <div class="form-group">
    <label for="currentRating">Текущий рейтинг:</label>
    <input type="number" id="currentRating" required>
  </div>
  <div class="form-group">
    <label for="opponentRating">Рейтинг соперника:</label>
    <input type="number" id="opponentRating" required>
  </div>
  <button type="submit" class="calculate-button">Рассчитать</button>
</form>
```

### 2.2 Кнопки действий

#### CSS стили
```css
.action-button {
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 14px;
  font-weight: 500;
}

.action-button:hover {
  background-color: var(--secondary-color);
}
```

#### HTML пример
```html
<div class="form-actions">
  <button type="button" class="action-button" onclick="addGame()">Добавить игру</button>
  <button type="submit" class="action-button">Рассчитать рейтинг</button>
</div>
```

### 2.3 Кнопки удаления

#### CSS стили
```css
.delete-game-btn {
  padding: 5px 10px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.3s;
}

.delete-game-btn:hover {
  background-color: #c0392b;
}

.delete-game-btn:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}
```

#### HTML пример
```html
<button class="delete-game-btn" onclick="deleteGame(1)">Удалить</button>
```

## 3. Навигационные кнопки

### 3.1 Кнопки вкладок (табы)

#### CSS стили
```css
.tab-buttons {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.tab-button {
  padding: 10px 20px;
  background-color: var(--section-bg);
  border: 2px solid var(--secondary-color);
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.tab-button.active {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
}
```

#### HTML пример (страница турниров)
```html
<div class="tab-buttons">
  <button class="tab-button active" data-tab="men">Мужские</button>
  <button class="tab-button" data-tab="women">Женские</button>
  <button class="tab-button" data-tab="children">Дети</button>
  <button class="tab-button" data-tab="veterans">Ветераны</button>
  <button class="tab-button" data-tab="students">Студенты</button>
</div>
```

### 3.2 Мобильная навигация

#### CSS стили
```css
.mobile-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 4px;
  text-decoration: none;
  color: var(--text-color);
  font-size: 12px;
  transition: all 0.3s ease;
  position: relative;
  min-height: 60px;
  border-radius: 8px;
  margin: 0 2px;
}

.mobile-nav-item.active {
  color: var(--accent-color);
  background-color: rgba(255, 123, 84, 0.1);
}

.mobile-nav-item.active:after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 3px;
  background-color: var(--accent-color);
  border-radius: 2px;
}
```

#### HTML пример
```html
<nav class="mobile-nav">
  <a href="index.html" class="mobile-nav-item active">
    <i class="fas fa-info-circle mobile-nav-icon"></i>
  </a>
  <a href="rules.html" class="mobile-nav-item">
    <i class="fas fa-scroll mobile-nav-icon"></i>
  </a>
  <a href="learning.html" class="mobile-nav-item">
    <i class="fas fa-book mobile-nav-icon"></i>
  </a>
  <a href="openings.html" class="mobile-nav-item">
    <i class="fas fa-chess-pawn mobile-nav-icon"></i>
  </a>
  <a href="ratings.html" class="mobile-nav-item">
    <i class="fas fa-chart-line mobile-nav-icon"></i>
  </a>
  <a href="players.html" class="mobile-nav-item">
    <i class="fas fa-user mobile-nav-icon"></i>
  </a>
  <a href="tournaments.html" class="mobile-nav-item">
    <i class="fas fa-trophy mobile-nav-icon"></i>
  </a>
</nav>
```

## 4. Интерактивные кнопки

### 4.1 Кнопки навигации по партиям

#### CSS стили
```css
.game-controls button {
  padding: 8px 12px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 2px;
  font-size: 14px;
  transition: background-color 0.3s;
}

.game-controls button:hover {
  background-color: var(--secondary-color);
}

.game-controls button:focus {
  outline: 2px solid var(--accent-color);
}
```

#### HTML пример
```html
<div class="game-controls">
  <button id="startBtn">«</button>
  <button id="prevBtn">‹</button>
  <button id="nextBtn">›</button>
  <button id="endBtn">»</button>
</div>
```

### 4.2 Кнопки просмотра партий

#### CSS стили
```css
.view-game-btn {
  padding: 8px 16px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.view-game-btn:hover {
  background-color: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
```

#### HTML пример
```html
<a href="#" class="view-game-btn" target="_blank">
  Смотреть партию <i class="fas fa-external-link-alt"></i>
</a>
```

## 5. JavaScript для работы с кнопками

### 5.1 Обработка фильтров
```javascript
// Настройка фильтров
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

// Фильтрация контента
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
```

### 5.2 Обработка вкладок
```javascript
// Обработка переключения вкладок
const tabButtons = document.querySelectorAll('.tab-button');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.dataset.tab;
    
    // Убираем активный класс у всех кнопок и контента
    tabButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
    
    // Добавляем активный класс к выбранной кнопке и контенту
    button.classList.add('active');
    document.getElementById(targetTab).classList.add('active');
  });
});
```

### 5.3 Обработка мобильной навигации
```javascript
// Активация текущего пункта мобильной навигации
document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
  
  mobileNavItems.forEach(item => {
    const href = item.getAttribute('href');
    
    if (href === currentPath || 
        (currentPath.includes('openings') && href === 'openings.html') ||
        (currentPath.includes('ratings') && href === 'ratings.html') ||
        (currentPath.includes('players') && href === 'players.html') ||
        (currentPath.includes('tournaments') && href === 'tournaments.html')) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});
```

## 6. Адаптивность кнопок

### 6.1 Мобильные стили
```css
@media (max-width: 768px) {
  .filter-buttons {
    justify-content: center;
    gap: 8px;
  }
  
  .filter-button {
    padding: 6px 12px;
    font-size: 14px;
  }
  
  .cta-button {
    padding: 12px 24px;
    font-size: 16px;
  }
  
  .tab-buttons {
    gap: 5px;
  }
  
  .tab-button {
    padding: 8px 16px;
    font-size: 14px;
  }
  
  .action-button,
  .calculate-button {
    width: 100%;
    margin-top: 10px;
  }
}
```

### 6.2 Очень маленькие экраны
```css
@media (min-width: 320px) and (max-width: 480px) {
  .calculator-box {
    padding: 15px;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .action-button,
  .calculate-button {
    width: 100%;
    margin: 5px 0;
  }
  
  .game-row {
    margin-bottom: 15px;
  }
  
  .game-cell:last-child {
    margin-top: 10px;
  }
}
```

## 7. Цветовая схема кнопок

### 7.1 CSS переменные
```css
:root {
  --primary-color: #2b4c7e;      /* Основной цвет кнопок */
  --secondary-color: #567ebb;    /* Вторичный цвет кнопок */
  --accent-color: #ff7b54;       /* Акцентный цвет (CTA) */
  --danger-color: #e74c3c;       /* Цвет для кнопок удаления */
  --success-color: #27ae60;      /* Цвет для успешных действий */
  --warning-color: #f39c12;      /* Цвет для предупреждений */
}
```

### 7.2 Типы кнопок по цветам
- **Основные действия**: `var(--primary-color)` - синий
- **Вторичные действия**: `var(--secondary-color)` - голубой
- **Призывы к действию**: `var(--accent-color)` - оранжевый
- **Удаление/отмена**: `var(--danger-color)` - красный
- **Успешные действия**: `var(--success-color)` - зеленый

Эта структура обеспечивает единообразный и интуитивно понятный интерфейс для пользователей вашего шахматного сайта. 
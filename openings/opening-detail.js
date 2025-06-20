document.addEventListener('DOMContentLoaded', () => {
    // Проверяем загрузку необходимых библиотек
    if (typeof Chess === 'undefined' || typeof Chessboard === 'undefined') {
        console.error('Chess.js или Chessboard.js не загружены');
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const openingId = urlParams.get('id');
    
    // Проверяем наличие openings
    if (typeof window.openings === 'undefined') {
        console.error('Массив openings не определен');
        return;
    }
    
    if (openingId !== null && window.openings[openingId]) {
        const opening = window.openings[openingId];
        
        // Проверяем наличие контейнеров перед инициализацией
        const boardContainer = document.getElementById('chessboard');
        const movesList = document.getElementById('movesList');
        
        if (!boardContainer || !movesList) {
            console.error('Контейнеры для доски или списка ходов не найдены');
            return;
        }

        // Инициализация доски
        try {
            initializeChessBoard(opening);
            console.log('Доска успешно инициализирована');
        } catch (error) {
            console.error('Ошибка при инициализации доски:', error);
        }
        
        // Инициализация вариантов дебюта
        try {
            initializeVariations(opening);
            console.log('Варианты дебюта успешно инициализированы');
        } catch (error) {
            console.error('Ошибка при инициализации вариантов дебюта:', error);
        }
        
        // Заполняем основную информацию о дебюте
        document.getElementById('openingName').textContent = opening.name;
        document.getElementById('openingMoves').textContent = opening.moves;
        document.getElementById('openingPopularity').textContent = opening.popularity;
        document.getElementById('openingStyle').textContent = opening.style;
        document.getElementById('openingPosition').textContent = opening.position;
        document.getElementById('openingRisk').textContent = opening.risk;
        document.getElementById('openingColor').textContent = opening.color;
        document.getElementById('openingLevel').textContent = opening.level;
        
        // Заполняем историю дебюта
        if (opening.history) {
            document.getElementById('openingHistory').textContent = opening.history;
        }
        
        // Заполняем ключевые идеи
        if (opening.ideas) {
            document.getElementById('openingIdeas').textContent = opening.ideas;
        }
        
        // Заполняем варианты
        if (opening.variations && opening.variations.length > 0) {
            const variationsContainer = document.getElementById('openingVariations');
            variationsContainer.innerHTML = '';
            
            opening.variations.forEach(variation => {
                const variationElement = document.createElement('div');
                variationElement.className = 'variation';
                
                // Проверяем, есть ли URL для варианта
                if (variation.url) {
                    // Если есть URL, делаем заголовок кликабельным
                    variationElement.innerHTML = `
                        <h4><a href="${variation.url}" class="variation-link">${variation.name}</a></h4>
                        <p><strong>Ходы:</strong> ${variation.moves}</p>
                        <p>${variation.description}</p>
                    `;
                } else {
                    // Если URL нет, оставляем обычный заголовок
                    variationElement.innerHTML = `
                        <h4>${variation.name}</h4>
                        <p><strong>Ходы:</strong> ${variation.moves}</p>
                        <p>${variation.description}</p>
                    `;
                }
                
                variationsContainer.appendChild(variationElement);
            });
        }
        }
        
        // Заполняем примерные партии
        if (opening.games && opening.games.length > 0) {
            const gamesContainer = document.getElementById('openingGames');
            gamesContainer.innerHTML = '';
            
            opening.games.forEach(game => {
                const gameElement = document.createElement('div');
                gameElement.className = 'game';
                gameElement.innerHTML = `
                    <p><strong>${game.white}</strong> - <strong>${game.black}</strong>, ${game.year}, ${game.result}</p>
                    <a href="${game.link}" target="_blank" rel="noopener noreferrer">Посмотреть партию</a>
                `;
                gamesContainer.appendChild(gameElement);
            });
        }
        
        // Обновляем интерактивную доску Lichess, если есть URL
        if (opening.lichessBoardUrl) {
            // Добавляем параметры для улучшения отображения доски
            let boardUrl = opening.lichessBoardUrl;
            // Добавляем параметры только если их еще нет в URL
            if (!boardUrl.includes('?')) {
                boardUrl += '?theme=brown&bg=dark&pieceSet=cburnett&boardSize=large&hideMoveAfter=true&analysisMode=true&showWhoIsOnline=false&showTimestamps=false&showComments=false&showTactic=false&showCaptured=false&showComputer=true&showTablebase=true&showExplorer=false&showMoveAnnotation=false&showPlayerRatings=false&menu=false&clocks=false&controlsOnBoard=false';
            } else {
                // Если URL уже содержит параметры, добавляем дополнительные параметры
                boardUrl += '&hideMoveAfter=true&menu=false&clocks=false&controlsOnBoard=false';
            }
            document.getElementById('lichessBoard').src = boardUrl;
        }
    else {
        // Обработка ошибки - дебют не найден
        document.getElementById('openingName').textContent = 'Дебют не найден';
        document.getElementById('openingMoves').textContent = '';
    }
});

/**
 * Инициализирует шахматную доску с ходами дебюта
 * @param {Object} opening - Объект с информацией о дебюте
 */
function initializeChessBoard(opening) {
    // Создаем экземпляр шахматной игры
    const chess = new Chess();
    
    // Получаем ходы дебюта и преобразуем их в массив
    const movesString = opening.moves;
    const movesArray = movesString.split(/\s+/).filter(move => move.match(/^\d+\./) === null && move.trim() !== '');
    
    // Создаем массив позиций для каждого хода
    const positions = ['rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'];
    
    // Применяем каждый ход и сохраняем позицию
    for (let i = 0; i < movesArray.length; i++) {
        try {
            chess.move(movesArray[i]);
            positions.push(chess.fen());
        } catch (error) {
            console.error(`Ошибка при выполнении хода ${movesArray[i]}:`, error);
        }
    }
    
    // Сбрасываем шахматную игру в начальное положение
    chess.reset();
    
    // Инициализируем доску
    const board = Chessboard('chessboard', {
        position: 'start',
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });
    
    // Текущий индекс хода
    let currentMoveIndex = 0;
    
    // Функция для обновления доски
    function updateBoard(index) {
        if (index >= 0 && index < positions.length) {
            board.position(positions[index]);
            currentMoveIndex = index;
            
            // Обновляем выделение текущего хода в списке
            const moveElements = document.querySelectorAll('.move-notation');
            moveElements.forEach((el, i) => {
                if (i === index - 1) {
                    el.classList.add('current-move');
                } else {
                    el.classList.remove('current-move');
                }
            });
        }
    }
    
    // Создаем список ходов
    const movesList = document.getElementById('movesList');
    movesList.innerHTML = '';
    
    // Форматируем и отображаем ходы
    let moveNumber = 1;
    let moveRow = document.createElement('div');
    moveRow.className = 'move-row';
    
    // Добавляем номер хода
    const moveNumberSpan = document.createElement('span');
    moveNumberSpan.className = 'move-number';
    moveNumberSpan.textContent = moveNumber + '.';
    moveRow.appendChild(moveNumberSpan);
    
    for (let i = 0; i < movesArray.length; i++) {
        // Создаем элемент для хода
        const moveElement = document.createElement('span');
        moveElement.className = 'move-notation ' + (i % 2 === 0 ? 'white' : 'black');
        moveElement.textContent = movesArray[i];
        moveElement.dataset.index = i + 1; // +1 потому что первая позиция - начальная
        
        // Добавляем обработчик клика
        moveElement.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            updateBoard(index);
        });
        
        moveRow.appendChild(moveElement);
        
        // Если это ход черных, создаем новую строку для следующего номера хода
        if (i % 2 === 1) {
            movesList.appendChild(moveRow);
            moveNumber++;
            
            // Создаем новую строку для следующего хода
            moveRow = document.createElement('div');
            moveRow.className = 'move-row';
            
            // Добавляем номер хода
            const moveNumberSpan = document.createElement('span');
            moveNumberSpan.className = 'move-number';
            moveNumberSpan.textContent = moveNumber + '.';
            moveRow.appendChild(moveNumberSpan);
        }
    }
    
    // Добавляем последнюю строку, если она не пустая
    if (moveRow.childNodes.length > 1) {
        movesList.appendChild(moveRow);
    }
    
    // Настраиваем кнопки управления
    document.getElementById('startBtn').addEventListener('click', function() {
        updateBoard(0);
    });
    
    document.getElementById('prevBtn').addEventListener('click', function() {
        if (currentMoveIndex > 0) {
            updateBoard(currentMoveIndex - 1);
        }
    });
    
    document.getElementById('nextBtn').addEventListener('click', function() {
        if (currentMoveIndex < positions.length - 1) {
            updateBoard(currentMoveIndex + 1);
        }
    });
    
    document.getElementById('endBtn').addEventListener('click', function() {
        updateBoard(positions.length - 1);
    });
}

/**
 * Инициализирует варианты дебюта с шахматной доской
 * @param {Object} opening - Объект с информацией о дебюте
 */
function initializeVariations(opening) {
    // Проверяем наличие вариантов
    if (!opening.variations || opening.variations.length === 0) {
        // Если вариантов нет, скрываем блок с вариантами
        const variationsDisplay = document.querySelector('.variations-display');
        if (variationsDisplay) {
            variationsDisplay.style.display = 'none';
        }
        return;
    }
    
    // Получаем контейнер для табов вариантов
    const variationTabs = document.getElementById('variationTabs');
    if (!variationTabs) {
        console.error('Контейнер для табов вариантов не найден');
        return;
    }
    
    // Очищаем контейнер
    variationTabs.innerHTML = '';
    
    // Создаем табы для каждого варианта
    opening.variations.forEach((variation, index) => {
        const tab = document.createElement('button');
        tab.className = 'variation-tab' + (index === 0 ? ' active' : '');
        tab.textContent = variation.name;
        tab.dataset.index = index;
        
        // Добавляем обработчик клика
        tab.addEventListener('click', function() {
            // Удаляем класс active у всех табов
            document.querySelectorAll('.variation-tab').forEach(t => {
                t.classList.remove('active');
            });
            
            // Добавляем класс active текущему табу
            this.classList.add('active');
            
            // Инициализируем доску с выбранным вариантом
            initializeVariationBoard(opening.variations[this.dataset.index]);
        });
        
        variationTabs.appendChild(tab);
    });
    
    // Инициализируем доску с первым вариантом
    initializeVariationBoard(opening.variations[0]);
}

/**
 * Инициализирует шахматную доску для выбранного варианта дебюта
 * @param {Object} variation - Объект с информацией о варианте дебюта
 */
function initializeVariationBoard(variation) {
    // Создаем экземпляр шахматной игры
    const chess = new Chess();
    
    // Получаем ходы варианта и преобразуем их в массив
    const movesString = variation.moves;
    const movesArray = movesString.split(/\s+/).filter(move => move.match(/^\d+\./) === null && move.trim() !== '');
    
    // Создаем массив позиций для каждого хода
    const positions = ['rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'];
    
    // Применяем каждый ход и сохраняем позицию
    for (let i = 0; i < movesArray.length; i++) {
        try {
            chess.move(movesArray[i]);
            positions.push(chess.fen());
        } catch (error) {
            console.error(`Ошибка при выполнении хода ${movesArray[i]}:`, error);
        }
    }
    
    // Сбрасываем шахматную игру в начальное положение
    chess.reset();
    
    // Инициализируем доску
    const board = Chessboard('variationBoard', {
        position: 'start',
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    });
    
    // Текущий индекс хода
    let currentMoveIndex = 0;
    
    // Функция для обновления доски
    function updateBoard(index) {
        if (index >= 0 && index < positions.length) {
            board.position(positions[index]);
            currentMoveIndex = index;
            
            // Обновляем выделение текущего хода в списке
            const moveElements = document.querySelectorAll('.variation-move-notation');
            moveElements.forEach((el, i) => {
                if (i === index - 1) {
                    el.classList.add('current-move');
                } else {
                    el.classList.remove('current-move');
                }
            });
        }
    }
    
    // Создаем список ходов
    const movesList = document.getElementById('variationMovesList');
    movesList.innerHTML = '';
    
    // Форматируем и отображаем ходы
    let moveNumber = 1;
    let moveRow = document.createElement('div');
    moveRow.className = 'move-row';
    
    // Добавляем номер хода
    const moveNumberSpan = document.createElement('span');
    moveNumberSpan.className = 'move-number';
    moveNumberSpan.textContent = moveNumber + '.';
    moveRow.appendChild(moveNumberSpan);
    
    for (let i = 0; i < movesArray.length; i++) {
        // Создаем элемент для хода
        const moveElement = document.createElement('span');
        moveElement.className = 'move-notation variation-move-notation ' + (i % 2 === 0 ? 'white' : 'black');
        moveElement.textContent = movesArray[i];
        moveElement.dataset.index = i + 1; // +1 потому что первая позиция - начальная
        
        // Добавляем обработчик клика
        moveElement.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            updateBoard(index);
        });
        
        moveRow.appendChild(moveElement);
        
        // Если это ход черных, создаем новую строку для следующего номера хода
        if (i % 2 === 1) {
            movesList.appendChild(moveRow);
            moveNumber++;
            
            // Создаем новую строку для следующего хода
            moveRow = document.createElement('div');
            moveRow.className = 'move-row';
            
            // Добавляем номер хода
            const moveNumberSpan = document.createElement('span');
            moveNumberSpan.className = 'move-number';
            moveNumberSpan.textContent = moveNumber + '.';
            moveRow.appendChild(moveNumberSpan);
        }
    }
    
    // Добавляем последнюю строку, если она не пустая
    if (moveRow.childNodes.length > 1) {
        movesList.appendChild(moveRow);
    }
    
    // Настраиваем кнопки управления
    document.getElementById('varStartBtn').addEventListener('click', function() {
        updateBoard(0);
    });
    
    document.getElementById('varPrevBtn').addEventListener('click', function() {
        if (currentMoveIndex > 0) {
            updateBoard(currentMoveIndex - 1);
        }
    });
    
    document.getElementById('varNextBtn').addEventListener('click', function() {
        if (currentMoveIndex < positions.length - 1) {
            updateBoard(currentMoveIndex + 1);
        }
    });
    
    document.getElementById('varEndBtn').addEventListener('click', function() {
        updateBoard(positions.length - 1);
    });
    
    // Показываем конечную позицию
    updateBoard(positions.length - 1);
}
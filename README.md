# CompFort Service

## Описание проекта 
Проект лендинга для компании предоставляющей услуги по ремоту ПК, ноутбуков, настройке роутеров и приставок ТВ. В проекте используеться минимум логики по просьбе клиента. 

В проекте присутсвует форма обратной связи которая делает отправку на телеграм с помощью axios 

## Используемые технологии

  - Webpack
  - Babel
  - Sass
  - ESLint

## Требования к установке:
    - Node.js
    - npm


## Установка
1. Клонируйте репозиторий: `git clone https://github.com/troanart/comp-D-mobile-first-.git`
2. Перейдите в директорию проекта: `cd в comp-D-mobile-first-`
3. Установите зависимости: `npm install`


## Скрипты
- `npm run build` - Для сборки проекта в режиме продакшн
- `npm run start` - Для запуска проекта в режиме разработки (Откройте браузер по адресу http://localhost:8080/.)

## Структура проекта
- `src/` - исходный код
  - `index.js` - главный файл приложения
  - `css/` - стили
  - `images/` - изображения
- `dist/` - собранный проект

## Конфигурация Webpack
Файл `webpack.config.js` содержит конфигурацию Webpack. Он включает в себя:
- Загрузчики для JavaScript, SASS, изображений и SVG.
- Плагины для извлечения CSS, создания HTML и копирования файлов.
- DevServer для разработки.


## Зависимости для разработчика 
   - "axios": "^1.6.1
   - "@babel/core": "^7.23.3",
   - "@babel/preset-env": "^7.23.3",
   - "babel-loader": "^9.1.3",
   - "copy-webpack-plugin": "^11.0.0",
   - "css-loader": "^6.8.1",
   - "file-loader": "^6.2.0",
   - "html-webpack-plugin": "^5.5.3",
   - "mini-css-extract-plugin": "^2.7.6",
   - "parcel-bundler": "^1.12.5",
   - "sass": "^1.69.5",
   - "sass-loader": "^13.3.2",
   - "style-loader": "^3.3.3",
   - "svg-inline-loader": "^0.8.2",
   - "webpack": "^5.89.0",
   - "webpack-cli": "^5.1.4",
   - "webpack-dev-server": "^4.15.1"

## Конфигурация Webpack
Файл `webpack.config.js` содержит конфигурацию Webpack. Он включает в себя:
- Загрузчики для JavaScript, SASS, изображений и SVG.
- Плагины для извлечения CSS, создания HTML и копирования файлов.
- DevServer для разработки.

## Использование Axios (form-send.js)
  Пример использования функции `formSend` для отправки заявки через Telegram.

```javascript

// Импортируем библиотеку axios для работы с HTTP запросами
import axios from 'axios';

// Определение функции formSend
const formSend = () => {
  // Токен бота и ID чата в Telegram
  const TOKEN = '6329903803:AAEyHulrc6YLM-w1bgxUmP3BQrktJNREpv8';
  const CHAT_ID = '-1002133322321';

  // Формирование URI для API Telegram
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  // Получаем элемент "success" из DOM
  const success = document.getElementById('success');

   // Добавляем слушатель события "submit" для формы
  document
    .getElementById('send-form')
    ?.addEventListener('submit', function (e) {
        // Предотвращаем стандартное поведение формы (отправку по событию "submit")
      e.preventDefault();

      // Формируем сообщение для отправки в Telegram
      let message = `<b>Заявка с сайта</b>\n`;
      message += `<b>ФИО Отправителя:</b> ${this.name.value}\n`;
      message += `<b>Контактный номер:</b> ${this.tel.value}\n`;
      message += `<b>Коментарий:</b> ${this.textarea.value}`;

    // Отправка POST-запроса к API Telegram
      axios
        .post(URI_API, {
          chat_id: CHAT_ID,
          parse_mode: 'html',
          text: message,
        })
        .then(res => {
          // Обработка успешного ответа
          this.name.value = '';
          this.tel.value = '';
          success.innerHTML = 'Ваша заявка отправленна, ожидайте звонка';
          success.style.display = 'block';
        })
        .catch(err => {
          // Обработка ошибки
          console.warn(err);
        })
        .finally(() => {
          // Завершение запроса (выполняется всегда, независимо от результата)
          console.log('Конец');
        });
    });
};

// Экспорт функции formSend для использования в других файлах
export default formSend;
```
## Мобильное меню (mobile.js)
  Пример использования функции для открытия и закрытия мобильного меню 
```javascript

// Определение функции mobileMenu
const mobileMenu = () => {
  // Получаем элементы DOM для мобильного меню, кнопки открытия и закрытия
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  // Функция для переключения видимости мобильного меню
  const toggleMenu = () => {
    // Проверяем, открыто ли меню
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;

    // Устанавливаем атрибут aria-expanded в противоположное значение
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);

    // Добавляем или убираем класс 'is-open' у контейнера мобильного меню
    mobileMenu.classList.toggle('is-open');

    
    
  };

  // Добавляем слушатели событий для кнопок открытия и закрытия меню
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Добавляем слушатель событий для изменения ширины экрана
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    // Если ширина экрана больше 768px, закрываем мобильное меню
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
  });
};

// Экспортируем функцию mobileMenu для использования в других файлах
export default mobileMenu;

```

## Блокировка прокрутки (body-scroll.js)
  Пример использования кода блокируещего прокрутку при открытом модальном окне и при возобновлении функции скролла при закрытии модального окна

```javascript 

  // Определение функции bodySkrollLock
const bodySkrollLock = () => {
  // Получаем текущую позицию скролла
  var scrollPosition = window.scrollY;

  // Получаем элементы DOM для кнопок открытия и закрытия меню
  const openBtnModal = document.querySelector('.js-open-menu');
  const closeBtnModal = document.querySelector('.js-close-menu');

  // Добавляем слушатели событий для кнопок открытия и закрытия меню
  openBtnModal.addEventListener('click', lockScroll);
  closeBtnModal.addEventListener('click', unlockScroll);

  // Функция для блокировки скролла
  function lockScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = -scrollPosition + 'px';
  }

  // Функция для разблокировки скролла
  function unlockScroll() {
    document.body.style.overflow = 'auto';
    document.body.style.position = 'static';
    document.body.style.top = 'auto';
    // Прокручиваем страницу к предыдущей позиции скролла
    window.scrollTo(0, scrollPosition);
  }
}

// Экспортируем функцию bodySkrollLock для использования в других файлах
export default bodySkrollLock;

```



## Связь с автором 
 Если у вас есть вопросы или предложения, свяжитесь со мной: troanart@gmail.com


# Feather — лендинг (React + Vite, FSD)

## 🚀 Запуск
```bash
npm install
npm run dev
```
Открой адрес из терминала (обычно http://localhost:5173). Дополнительных библиотек и серверов не нужно.

## 🛠️ Как устроен проект
Папка `src` разбита на слои (Feature-Sliced Design). Правило: слой может использовать только слои НИЖЕ себя.

```
app        → точка входа: App, глобальные стили
pages      → страницы; секции, которые есть только на одной странице
widgets    → крупные блоки, которые повторяются на страницах (Header, Footer)
features   → действия пользователя (форма подписки)
entities   → карточки и «сущности» (комната, товар, отзыв, промо-блок)
shared     → то, что не знает про сайт: кнопка, загрузчик, хуки, запросы
```

Где что искать:
- `src/pages/home/ui/` — 9 секций страницы: hero, shop-by-room, mission, promo-sections, bestsellers, floyd-banner, reviews, ease-banner, final-cta. Собираются в `home-page.jsx`.
- `src/widgets/` — header и footer.
- `src/entities/` — room-card, product-card, review-card, promo-block.
- `src/shared/api/` — `use-fetch.js` (загрузка данных).

В каждой папке есть `index.js` — «публичный вход». Снаружи импортируем из него: `import { Header } from '@/widgets/header'`.

## 🌿 Откуда берутся данные
Тексты и цены лежат в `public/api/*.json` (hero.json, rooms.json, products.json ...).
Компонент вызывает `useFetch('/hero')`, хук делает `fetch('/api/hero.json')` внутри `useEffect`.
Во вкладке DevTools → Network видны эти запросы. Хук отдаёт `data`, `isLoading` и `error`,
а компонент показывает Loader, ErrorMessage или саму секцию.

Картинки лежат в `public/images/`, пути к ним прописаны в json-файлах (`/images/hero.jpg`).

## Что значит `@` в импортах
`@` — это сокращение для папки `src` (настроено в `vite.config.js`, для подсказок редактора — в `jsconfig.json`).
`@/shared/ui/button` = `src/shared/ui/button`. Это просто чтобы не писать `../../../`.

## Анимации и логика
- Hover-эффекты: кнопки, карточки комнат и товаров, ссылки (только CSS `transition`).
- `shared/ui/reveal` + `shared/lib/use-in-view.js` — секции плавно появляются при прокрутке (IntersectionObserver).
- Шапка липнет к верху и получает тень при прокрутке (`scroll` в `header.jsx`).
- Бургер-меню на мобильных.
- Корзина: `cartCount` хранится в `App`, кнопка «Add to cart» в карточке товара увеличивает счётчик в шапке.
- Плавная прокрутка по якорям: `scroll-behavior: smooth` в `global.css`.
vvv
## Частые вопросы
- Иконка вкладки: файл `public/favicon.svg`,подключён в `index.html` тегом `<link rel="icon">`.
- Переименовать `global.css`: переименуй файл и поправь одну строку импорта в `src/main.jsx`.
- Новая картинка: положи файл в `public/images/` и впиши путь в нужный json.
- Новая секция: папка в `src/pages/home/ui/<имя>/`, файлы `<имя>.jsx` и `<имя>.module.css`, подключи в `home-page.jsx`.

## 📂 Архитектура и структура проекта (FSD)

  ```Чтобы увидеть дерево проекта в коре проекта
   tree -I "node_modules|.git|dist|build"
   ```
```text
.
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package.json
├── package-lock.json
├── public
│   ├── api
│   │   └── db.json
│   ├── favicon.svg
│   └── images
│       ├── floyd-bed.png
│       ├── floyd-shelf.png
│       ├── Frame(1).png
│       ├── Frame.png
│       ├── hero.png
│       ├── product-chair.png
│       ├── product-console.png
│       ├── product-sofa.png
│       ├── product-table.png
│       ├── promo-assemble.png
│       ├── promo-garage.png
│       ├── promo-office.png
│       ├── promo-residential.png
│       ├── room-bedroom.png
│       ├── room-dining.png
│       ├── room-living.png
│       └── room-office.png
├── README.md
├── src
│   ├── app
│   │   ├── app.jsx
│   │   ├── index.js
│   │   └── styles
│   │       └── global.css
│   ├── entities
│   │   ├── product
│   │   │   ├── index.js
│   │   │   └── ui
│   │   │       ├── product-card.jsx
│   │   │       └── product-card.module.css
│   │   ├── promo-block
│   │   │   ├── index.js
│   │   │   └── ui
│   │   │       ├── promo-block.jsx
│   │   │       └── promo-block.module.css
│   │   ├── review
│   │   │   ├── index.js
│   │   │   └── ui
│   │   │       ├── review-card.jsx
│   │   │       └── review-card.module.css
│   │   └── room
│   │       ├── index.js
│   │       └── ui
│   │           ├── room-card.jsx
│   │           └── room-card.module.css
│   ├── features
│   │   └── newsletter-subscribe
│   │       ├── index.js
│   │       └── ui
│   │           ├── newsletter-subscribe.jsx
│   │           └── newsletter-subscribe.module.css
│   ├── main.jsx
│   ├── pages
│   │   └── home
│   │       ├── index.js
│   │       └── ui
│   │           ├── bestsellers
│   │           │   ├── bestsellers.jsx
│   │           │   └── bestsellers.module.css
│   │           ├── ease-banner
│   │           │   ├── ease-banner.jsx
│   │           │   └── ease-banner.module.css
│   │           ├── final-cta
│   │           │   ├── final-cta.jsx
│   │           │   └── final-cta.module.css
│   │           ├── floyd-banner
│   │           │   ├── floyd-banner.jsx
│   │           │   └── floyd-banner.module.css
│   │           ├── hero
│   │           │   ├── hero.jsx
│   │           │   └── hero.module.css
│   │           ├── home-page.jsx
│   │           ├── mission
│   │           │   ├── mission.jsx
│   │           │   └── mission.module.css
│   │           ├── promo-sections
│   │           │   ├── promo-sections.jsx
│   │           │   └── promo-sections.module.css
│   │           ├── reviews
│   │           │   ├── reviews.jsx
│   │           │   └── reviews.module.css
│   │           └── shop-by-room
│   │               ├── shop-by-room.jsx
│   │               └── shop-by-room.module.css
│   ├── shared
│   │   ├── api
│   │   │   ├── config.js
│   │   │   ├── index.js
│   │   │   └── use-fetch.js
│   │   ├── lib
│   │   │   ├── index.js
│   │   │   └── use-in-view.js
│   │   └── ui
│   │       ├── button
│   │       │   ├── button.jsx
│   │       │   ├── button.module.css
│   │       │   └── index.js
│   │       ├── error-message
│   │       │   ├── error-message.jsx
│   │       │   ├── error-message.module.css
│   │       │   └── index.js
│   │       ├── loader
│   │       │   ├── index.js
│   │       │   ├── loader.jsx
│   │       │   └── loader.module.css
│   │       ├── reveal
│   │       │   ├── index.js
│   │       │   ├── reveal.jsx
│   │       │   └── reveal.module.css
│   │       └── section-title
│   │           ├── index.js
│   │           ├── section-title.jsx
│   │           └── section-title.module.css
│   └── widgets
│       ├── footer
│       │   ├── index.js
│       │   └── ui
│       │       ├── footer.jsx
│       │       └── footer.module.css
│       └── header
│           ├── index.js
│           └── ui
│               ├── header.jsx
│               └── header.module.css
└── vite.config.js
---
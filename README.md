# Тестовое задание

В задании реализовано приложение для отображения списка пользователей с возможностью поиска по имени и email, фильтрации по городу и просмотра детальной информации о пользователе.

https://github.com/user-attachments/assets/7ca6eb49-69ad-40ea-a8a7-e4aff24b4db6

## Ссылка на приложение

Проект доступен по ссылке https://react-users-pi.vercel.app/

## Технологии и инструменты

- **React** - для создания пользовательских интерфейсов с помощью компонентов.
- **React Router** - для удобной навигации между страницами.
- **TanStack Query (React Query)** - для работы с серверными данными, кэширования и минимизации запросов.
- **React.lazy** - для ленивой загрузки компонентов, что ускоряет первый рендер и улучшает производительность.
- **Redux Toolkit** - для управления глобальным состоянием (поиска и выбранного города).
- **TypeScript** - для статической типизации, повышения надежности кода и предотвращения ошибок.
- **Axios** - для работы с запросами.
- **SCSS** - для стилизации с поддержкой переменных и вложенности.
- **normalize.css** - для унификации стилей, чтобы обеспечить корректное отображение на разных устройствах и браузерах.
- **Адаптивная верстка** - для оптимизации отображения на различных устройствах с помощью медиа-запросов.
- **ESLint и Prettier** - для автоматической проверки качества кода и его форматирования, что улучшает читаемость и поддерживаемость.
- **Vite** - быстрый сборщик, который ускоряет процесс разработки.

## Оптимизация

### Оптимизация ререндеров

- Использование React.memo для компонентов Search, Select, Button, Card, чтобы избежать лишних рендеров.
- Мемоизация списка городов (cities) и отфильтрованных данных (filteredItems) с помощью useMemo.
- Функция handleClearFilters для кнопки "Сбросить фильтры" обёрнута в useCallback.
- Использование useDebounce для задержки в 500 мс, чтобы избежать частых обновлений состояния, что улучшает производительность при вводе текста в поле поиска.

### Оптимизация запросов с React Query

- Кэширование данных и использование staleTime для минимизации повторных запросов.
- Отключение refetchOnWindowFocus, чтобы избежать ненужных запросов при переключении вкладок или при изменении фокуса окна.

### Lazy Loading и Suspense

- React.lazy для динамической загрузки страниц, что уменьшает время начальной загрузки.
- Suspense с fallback-компонентом Spinner для улучшения пользовательского опыта при загрузке данных.

## Запуск проекта в 🖐 5 шагов

1. Клонируйте проект.

```
git clone https://github.com/almazkacode/react-users.git
```

2. Перейдите в папку проекта.

```
cd react-users
```

3. Установите зависимости.

```
npm install
```

4. Запустите проект.

```
npm run dev
```

5. Откройте страницу в браузере.

```
http://localhost:3000
```

# Тестовое задание для Глобэкс АйТИ
## Технологии
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/ru/)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [React-query](https://tanstack.com/query/v3/)
## Запуск проекта

```console
npm install - установка зависимостей
npm run dev на vite - сборка
```
## Скрипты
- `npm run dev` - Запуск frontend-части проекта на `vite`
- `npm run build` - Сборка проекта `production` в режиме
- `npm run lint` - Проверка ts файлов линтером
---

## Архитектура проекта

Проект написан в соответствии с методологией Feature-Sliced.

Документация FSD - [Feature-Sliced Design](https://feature-sliced.design/)

## Стили

Для стилизации в проекте используетя UI библеотека [Chakra UI]


## Работа с данными

Взаимодействие с данными осуществляется с помощью [Zustand + React-Query].

Запросы на сервер выполняются с помощью [Axios].

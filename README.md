# Webpack

## Начало работы
1. Для установки всех неодходимых пакетов для работы Webpack'а - нужно запустить команду: `npm install`.
2. Для работы pre-commit хука - нужно выполнить команду: `npm run prepare`.

## Основные команды
```sh
npm run build:dev  # запускает сборку проекта для работы в development окружении
npm run build:prod  # запускает сборку проекта для работы в production окружении
npm run start  # запускает webpack-dev-server
npm run db  # запускает json-server
npm run stylelint  # запускает линтер для стилей
npm run lint:write  # запускает линтер для кода
npm run format:ts  # запускает форматирование для кода  
npm run format:css  # запускает форматирование для стилей
```

Есть два файла настроек: `webpack.dev.js` - для development-окружения и `webpack.prod.js` - для  production-окружения.
В `webpack.dev.js` настроен hot module replacement.
В `webpack.prod.js` настроена оптимизация.

Для получения данных из JSON-сервера в файле `src/index.ts` есть функции с выводом данных в консоль. Предварительно нужно запустить JSON-сервер в отдельном терминале командой `npm run db`.

Для работы с pre-commit хуками добавлены модули: `husky` и `lint-staged`.
При коммите запускается `lint-staged`, который проверяет и форматирует:

- файлы с расширениями `.js`, `.jsx` и `.ts` через `eslint` и `prettier`;
- файлы с расширениями `.css` через `stylelint` и `prettier`.
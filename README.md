# Тестовое задание на позицию frontend Разработчик
## Выполнил Голованов Иван

<a href = "https://moks-gaz.vercel.app/" target="_blank">Демо-версия с моковыми данными</a>

### Описание решения
+ Backend

Использовал платформу Node, фреймворк Express, для быстрой и удобной настройки сервера. Данные считываются из файла data.csv для обработки данных используется csv-parser. Сервер доступен на порту 3000 и возвращает валидные данные по маршруту "/data"

+ Frontend

Стек: React, TypeScript, Vite, AG Grid. Выбрал  AG Grid для реализации таблицы, потому как это удобный, мощный, современный инструмент, для построения таблиц и графиков, который хорошо интегрируется с React.
В таблице реализованы: постраничный вывод данных, возможность изменять количество элементов на странице, фильтрация по колонкам, возможность изменять размер и менять местами колонки. 

### Запуск проекта

Сперва необходимо клонировать репозиторий, затем выполнить команды:
```
docker-compose build
docker-compose up
```
После этого приложение будет доступно по адресу http://127.0.0.1:8085 или http://localhost:8085/

Спасибо за внимание :)



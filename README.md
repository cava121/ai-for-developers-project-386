# Календарь звонков


[![hexlet-check](https://github.com/cava121/ai-for-developers-project-386/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/cava121/ai-for-developers-project-386/actions)

Разработайте совместно с ИИ сервис для бронирования календаря

Учебный проект Хекслета: https://ru.hexlet.io/programs/ai-for-developers
Как это должно работать: https://files.hexlet.app/a/2ipc5m

## Стек

- Бекенд: Go (стандартная библиотека `net/http`), линтер golangci-lint
- Фронтенд: Angular 21 + Taiga UI, тесты на Vitest, ESLint и Prettier
- CI: GitHub Actions, релизы через release-please по Conventional Commits

## Установка

Нужны Go 1.26+ и Node.js 24+.

```bash
git clone https://github.com/cava121/ai-for-developers-project-386.git
cd ai-for-developers-project-386
cd frontend && npm ci
```

## Использование

Бекенд (API на http://localhost:3000, порт задаётся через `PORT`):

```bash
cd backend
go run .
go test ./...
golangci-lint run
```

Фронтенд (интерфейс на http://localhost:4200):

```bash
cd frontend
npm start
npm test
npm run lint
npm run format:check
npm run build
```

Проверка API: `curl localhost:3000/health` → `{"status":"ok"}`.

---

<details>
<summary>Автоматические тесты Хекслета</summary>

Тесты запускаются на каждый коммит. За запуск отвечает файл `.github/workflows/hexlet-check.yml` — не удаляйте и не переименовывайте ни его, ни репозиторий.

</details>

## О Хекслете

[Хекслет](https://ru.hexlet.io/) — школа программирования: авторские программы обучения с практикой, поддержкой наставников и реальными проектами, которые остаются в резюме. Этот репозиторий — один из таких проектов.

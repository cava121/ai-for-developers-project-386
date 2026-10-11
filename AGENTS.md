# AGENTS.md

Календарь бронирования звонков (аналог cal.com). Учебный проект Хекслета.

## Структура проекта

- `backend/` — Go, только стандартная библиотека (`net/http`). Порт из `PORT`, по умолчанию 3000 (8080 на машине разработчика занят nginx).
- `frontend/` — Angular 21 (standalone) + Taiga UI 5. Тесты на Vitest в jsdom.
- Общего `package.json` и Makefile нет: команды запускаются из папки пакета.

## Команды

Бекенд (из `backend/`):

```bash
go run .                              # сервер, GET /health
go test ./...                         # все тесты
go test -run TestHealthHandler ./...  # один тест
golangci-lint run                     # линтер (конфиг v2: .golangci.yml)
```

Фронтенд (из `frontend/`):

```bash
npm start                                   # dev-сервер на :4200
npm test                                    # все тесты, без watch
npx ng test --include src/app/app.spec.ts   # один файл
npm run lint                                # ESLint
npm run format:check                        # Prettier (npm run format — исправить)
npm run build
```

CI (`.github/workflows/ci.yml`) прогоняет то же самое: перед коммитом должны проходить lint, format:check, test и build.

## Правила

- Коммиты строго по Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `test:`, `refactor:`, `ci:`; ломающие изменения — `feat!:` или футер `BREAKING CHANGE:`. По коммитам release-please собирает changelog и версию.
- Не редактировать, не переименовывать и не удалять `.github/workflows/hexlet-check.yml`.
- Версию и `CHANGELOG.md` вручную не менять — их ведёт release-please (`release-please-config.json`, `.release-please-manifest.json`).

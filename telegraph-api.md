# Telegra.ph API — создание статей

## Токен
- Хранится: `~/.hermes/scripts/tg_token.txt`
- Получение: https://telegra.ph/ → авторизация → API Access

## API Endpoint
`POST https://api.telegra.ph/createPage`

## Формат запроса
```python
import json, urllib.request, urllib.parse
TOKEN = open('~/.hermes/scripts/tg_token.txt').read().strip()
content = json.dumps([{"tag":"p","children":["Текст абзаца"]}], ensure_ascii=False)
data = urllib.parse.urlencode({
    "access_token": TOKEN,
    "title": "Заголовок статьи",
    "author_name": "Название канала",
    "content": content
}).encode()
req = urllib.request.Request("https://api.telegra.ph/createPage",
    data=data,
    headers={"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"})
result = json.loads(urllib.request.urlopen(req).read().decode())
url = result["result"]["url"]
```

## Питфоллы
- **ACCESS_TOKEN_INVALID**: API принимает URL-encoded форму, НЕ JSON body.
  json.dumps() нужен ТОЛЬКО для поля `content`.
  Весь POST body — urllib.parse.urlencode().
- **Заглушки вместо реальных страниц**: Всегда создавать через API.
  Никогда не использовать example-ссылки в реальных постах.
- **Название статьи**: URL формируется из title. Избегать слишком длинных заголовков.

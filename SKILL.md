---
name: dragon-seo
description: "Чистая SEO методология: копирайтинг (151K), контент-стратегия (106K), GEO/AI-оптимизация (90K), E-E-A-T, тех. SEO, анти-слоп, Research Scanner — сканирование всех источников."
---

# 🐉 Dragon SEO — Методология контента и SEO

## ⚡ Research Scanner — Тотальный сбор новостей

### Принцип: НИ ОДИН источник не остаётся незамеченным

Не 2-3 источника. А ВСЕ.

### Уровень 1 — Поисковики (3+ запросов каждый)
```
Google:      site:reuters.com OR site:bbc.com [тема]
             site:bloomberg.com OR site:apnews.com [тема]
             site:euronews.com OR site:france24.com [тема]
             
Bing:        [тема] news — даёт другие результаты чем Google
DuckDuckGo:  [тема] — часто показывает то, что Google скрыл
Yahoo News:  [тема]
```

### Уровень 2 — Reddit (10+ сабреддитов)
```
r/worldnews     r/news          r/europe
r/technology    r/science        r/Futurology
r/UpliftingNews r/nottheonion   r/todayilearned
r/interestingasfuck              r/Damnthatsinteresting
r/CrazyFuckingVideos            r/WTF
r/EverythingScience              r/space
```

### Уровень 3 — Trend detectors
```
Google Trends:     trends.google.com → "trending now" + daily search spikes
Twitter/X:         trending topics + search by keywords
TikTok News:       tiktok.com/discover → news hashtags
YouTube:           youtube.com/feed/trending
Reddit Trending:   reddit.com/r/trendingsubreddits (shows ALL trending subs)
```

### Уровень 4 — News aggregators
```
Google News:                news.google.com → настроить разделы
Bing News:                 bing.com/news
Techmeme:                  techmeme.com (техно)
Hacker News:               news.ycombinator.com
Lobsters:                  lobste.rs
MediaStack:                medistack.com API
NewsAPI:                   newsapi.org
Currents API:              currentsapi.com
```

### Уровень 5 — Niche & Alternative
```
Science Daily:             sciencedaily.com
Phys.org:                  phys.org
Medical Xpress:            medicalxpress.com
Ars Technica:              arstechnica.com
The Intercept:             theintercept.com
Vice News:                 vice.com/en
BuzzFeed News:             buzzfeednews.com
(The 3 "trashy" sources that find weird news)
```

### Уровень 6 — RSS feeds (если доступен парсер)
```
Reuters Wire
BBC News RSS
Bloomberg RSS
Reddit RSS (r/all + r/popular)
Google News RSS (кастомный)
```

### Процесс сканирования

```
1. ✅ web_search(3-5 разных запросов по теме)
2. ✅ web_search(site:reuters.com OR site:bbc.com)
3. ✅ web_search(site:reddit.com r/worldnews OR r/news)
4. ✅ web_extract(reddit trending, google trends)
5. ✅ Поиск в "странных" источниках (Vice, BuzzFeed, nottheonion)
6. ✅ Свежие тренды: что обсуждают прямо сейчас
7. ✅ Если ничего нет — углубить запросы
```

### Минимум: 10-15 источников на 1 дайджест
Не лениться. Чем больше источников — тем качественнее пост.

---

## 1. КОПИРАЙТИНГ (из coreyhaines31 copywriting 151K)

### Принципы
1. **Ясность > Креативность**
2. **Выгоды > Характеристики**
3. **Конкретика > Общие слова**
4. **Язык клиента > Язык компании**
5. **Одна идея на абзац**

### Структура поста
```
🔥 ЗАГОЛОВОК (50-60 символов, ключ в начале)
1 абзац — ЛИД (суть, вопрос, интрига)
2-3 абзаца — ДЕТАЛИ (цифры, факты, имена)
bullet points
Вывод / CTA
```

---

## 2. E-E-A-T (Google QRG Sept 2025)

### Google's Who/How/Why Test
- **Who** создал? — видимый автор
- **How** создано? — раскрытие процесса (AI disclosure)
- **Why** существует? — помочь, не для кликов

### 4 столпа
- **Experience** — реальный опыт
- **Expertise** — автор, источники, дата
- **Authoritativeness** — кто ссылается
- **Trust** — прозрачность

---

## 3. GEO — AI Search Optimization

### Факторы цитируемости
- Freshness (<3 мес) → x3
- Первые 30% текста → 44% цитат AI
- Плотность цифр и фактов
- FAQ схема (AI-сигнал)

### Оптимизация
1. Краткий ответ в первых 2-3 предложениях
2. Вопрос → ответ → детали
3. Цифры и статистика
4. FAQ блок
5. Источники

---

## 4. АНТИ-AI-СЛОП

### НЕ писать
"В современном мире", "Стоит отметить", "Важно подчеркнуть",
"Нельзя не согласиться", "В эпоху цифровых технологий",
"Давайте разберёмся", "Таким образом", "Безусловно"

### Писать
Факты, цифры, имена, конкретные примеры, коротко, прямо

---

## 5. ТЕХ. SEO — Dynamic Rendering для SPA

### Проблема
Сайты на React/Vue/Svelte — SPA. Краулеры получают пустой HTML-каркас с одним `<title>`. Статьи не индексируются.

### Решение: Dynamic Rendering
Краулер (бот) получает статический SEO-HTML, человек — SPA. Проверка через User-Agent на nginx.

### Компоненты

#### A. Генератор SEO-статики (`prerender-seo.mjs`)
Читает структурированные данные статей (TS/JS) → генерирует HTML файлы с:
- Уникальный `<title>` и `<meta name="description">`
- Open Graph / Twitter карточки
- JSON-LD: Article + FAQPage + BreadcrumbList
- Полный текст статьи в HTML
- Тёмная тема, читаемый дизайн

```bash
# Использование:
node prerender-seo.mjs path/to/articles.ts seo-out/
rsync -az seo-out/ user@server:/var/www/site/seo/magazine/
```

#### B. nginx конфиг — map ботов
`/etc/nginx/conf.d/seo-bots.conf`:
```nginx
map $http_user_agent $is_bot {
    default 0;
    "~*(googlebot|google-inspectiontool|bingbot|bingpreview|yandex|duckduckbot|baiduspider|slurp|applebot|facebookexternalhit|twitterbot|linkedinbot|telegrambot|whatsapp|pinterestbot|ahrefsbot|semrushbot)" 1;
}
```

#### C. nginx конфиг — location rule
Перед SPA-роутингом (`try_files $uri /index.html`):
```nginx
location ~ ^/magazine/(?<slug>[a-z0-9-]+)/?$ {
    add_header Cache-Control "no-store, no-cache, must-revalidate, max-age=0" always;
    if ($is_bot) {
        rewrite ^ /seo/magazine/$slug.html last;
    }
    try_files $uri /index.html;
}
```

#### D. Проверка
```bash
# 🤖 Как бот
curl -A "Googlebot/2.1" https://site.com/magazine/article
# Должен вернуть: <title>Статья — Бренд</title>, JSON-LD блоки, текст

# 👤 Как человек
curl -A "Mozilla/5.0 Safari/605" https://site.com/magazine/article
# Должен вернуть: SPA-каркас (маленький размер)
```

### Структура файлов на сервере
```
/var/www/site/
├── index.html          # SPA (для людей)
├── assets/             # JS/CSS бандлы
└── seo/
    └── magazine/
        ├── article-1.html  # SEO-статика (для ботов)
        ├── article-2.html
        └── ...
```

## Референсы
- `references/eeat-framework.md` — детальный E-E-A-T чеклист
- `references/platform-format-guide.md` — форматы для 9 платформ (2025-2026)

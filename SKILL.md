---
name: dragon-seo
description: "Премиальная SEO-методология: копирайтинг (151K), контент-стратегия (106K), GEO/AI-оптимизация с Signal Stack (90K), E-E-A-T, тех. SEO, JSON-LD схемы, анти-слоп, Research Scanner — сканирование всех источников. Query Fan-Out, Brand Mentions > Backlinks, Multi-Modal, Agentic Experiences, мониторинг AI-видимости (Otterly/Peec/ZipTie), Citations vs Recommendations (Visibility Ladder), слепая зона атрибуции AI-трафика."
metadata:
  version: 2.3.0
---

# 🐉 Dragon SEO — Методология контента и SEO

## 🚨 Критическое правило: СНАЧАЛА ИССЛЕДОВАНИЕ

**Перед ЛЮБОЙ работой — сначала проверить все источники как это делают другие. Потом делать.**

Иерархия проверки:
1. 🥇 Сначала скилы (skill_view + skills_list)
2. 🥈 GitHub — как делают другие
3. 🥉 Web — лучшие практики
4. ⭐ Только потом делать

---

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
0. ✅ СНАЧАЛА: search GitHub (skills, репозитории, промты)
   Если есть готовое решение — используй его, не изобретай
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

## 2. КОНТЕНТ-СТРАТЕГИЯ (Searchable vs Shareable)

Каждый контент должен быть **searchable**, **shareable**, или оба. Приоритет: searchable.

### Searchable — захват существующего спроса
- Целевой ключ или вопрос
- Точное совпадение с интентом поиска
- Ключ в заголовке, H1, первом абзаце, URL
- Полнота (ни один вопрос не остаётся без ответа)
- Данные, примеры, ссылки на источники
- Оптимизация для AI/LMM: чёткая структура, бренд-последовательность

### Shareable — создание спроса
- Лид с новой инсайтовой мыслью или контринтуитивным тейком
- Оригинальные данные, которых нет нигде
- Истории, вызывающие эмоции
- Контент, который хочется отправить коллеге («чтобы выглядеть умным»)
- Уязвимые, честные истории с уроком

---

## 3. E-E-A-T (Google QRG Sept 2025)

### Google's Who/How/Why Test
- **Who** создал? — видимый автор
- **How** создано? — раскрытие процесса (AI disclosure)
- **Why** существует? — помочь, не для кликов

### 4 столпа
- **Experience** — реальный опыт («мы протестировали», «наш анализ N...»)
- **Expertise** — автор, источники, дата
- **Authoritativeness** — кто ссылается, внешние упоминания
- **Trust** — прозрачность, раскрытие ограничений

---

## 4. GEO — AI Search Optimization (Princeton Signal Stack)

### Ключевое отличие от SEO
Традиционное SEO = **ранжирование**. GEO = **цитирование**. AI-поисковики не ранжируют страницы — они цитируют источники. Хорошо структурированная страница может цитироваться даже с 3-й страницы выдачи.

**Критические статы:**
- AI Overviews появляются в ~45% поисков Google
- AI Overviews сокращают клики на сайты до 58%
- Оптимизированный контент цитируется в 3× чаще
- Статистики и цитаты дают +40% видимости в AI-ответах
- Бренды в 6.5× чаще цитируются через сторонние источники, чем через собственный домен

### Google vs. Multi-Platform Reality

**Google's position:** официально Google говорит, что для AI Overviews и AI Mode не нужны специальные разметки, llms.txt или AI-файлы. Их рекомендация — писать для людей, организовывать нормальными заголовками. Google расценивает отдельный контент «для AI» как «scaled content abuse».

**Другие AI-движки (ChatGPT, Perplexity, Claude, Copilot) ведут себя иначе:**
- Активно награждают извлекаемую структуру — passage, FAQ, таблицы сравнения, блоки определений
- Парсят llms.txt, pricing.md, и machine-readable файлы
- Цитируют сторонние источники (Reddit, Wikipedia, обзорники) чаще, чем топ-ранжированные страницы

**Что это значит на практике:**
- Структурные паттерны (блоки ответов 40-60 слов, FAQ-схемы, таблицы) помогают не-Google AI-движкам материально. Google они не вредят — это просто нормальная организация контента.
- Для Google AI Overviews: оптимизируй под людей и core Search. E-E-A-T, оригинальная информация, семантический HTML.
- Для ChatGPT/Claude/Perplexity: накладывай извлекаемую структуру + machine-readable файлы.
- Золотое правило: «пиши для людей, организуй для ясности» — работает для всех.

### Query Fan-Out (Google AI Search)

Google AI не просто отвечает на один запрос — он генерирует **сопутствующие связанные запросы** под капотом и собирает результаты для каждого.

Пример Google: пользователь спрашивает «как починить газон» → AI запускает fan-out запросы про гербициды, удаление без химии, профилактику сорняков и т.д. Синтезирует ответ из всех.

**Последствия:**
- Стратегия «одна страница = один ключ» менее эффективна. Нужно покрывать **полный тематический кластер**.
- Длинный хвост интентов меньше важен — AI-системы Google понимают семантическую эквивалентность.
- Страница, исчерпывающе отвечающая на родительскую тему (с под-вопросами), будет извлекаться чаще, чем узкие страницы под каждый запрос.

**Действие:** при планировании контента продумай 5-10 связанных запросов, которые AI запустит в fan-out, и убедись, что твой контент (или сайт в целом) их покрывает.

### PAWC — метрика цитируемости (Princeton GEO, KDD 2024)

Position-Adjusted Word Count — показывает, насколько ваш контент «извлекаем» AI:

```
PAWC = Σ |sentence| · e^(-pos/total) / total_words
```

Экспоненциальное затухание: **первое предложение ответа AI = ~5× ценнее 20-го**. Ваши первые 2-3 предложения должны быть максимально насыщены фактами и доказательствами.

### GEO Signal Stack (4 Pillars)

#### Pillar 1 — Evidence Density (35%)
| Сигнал | Цель |
|--------|------|
| Цифры с единицами | ≥5 на статью |
| Внешние ссылки | ≥1 на 500 слов, ≥3 типов источников |
| Прямые цитаты экспертов | ≥2 от названных лиц |
| Именованные сущности | ≥3 с полными именами и ролями |
| First-party data | ≥1 оригинальная статистика или фреймворк |

#### Pillar 2 — Structure & Position (25%)
| Сигнал | Цель |
|--------|------|
| Прямой ответ в первых 150 словах | Обязательно (PAWC!) |
| TL;DR / Key Takeaways сверху | ≥1 блок |
| Иерархия заголовков H1→H2→H3 | Без пропусков, один H1 |
| FAQ-секция с форматом В-О | Обязательно для информационных |
| Средняя длина абзаца | 2-4 предложения |
| JSON-LD схема | Article + FAQPage + HowTo |

#### Pillar 3 — Authority Signals (25%)
| Сигнал | Цель |
|--------|------|
| Авторская подпись | Реальное имя, роль, био ≥30 слов |
| author.sameAs JSON-LD | LinkedIn, Google Scholar |
| Дата обновления | ≤60 дней (x3 цитируемости) |
| Раскрытие методологии | Размеры выборок, критерии, даты |
| Признание ограничений | Контр-галлюцинаторный сигнал |
| Внешние валидаторы | Упоминания в изданиях |

#### Pillar 4 — AI Crawlability (15%)
| Сигнал | Цель |
|--------|------|
| robots.txt разрешает AI-ботов | GPTBot, ClaudeBot, PerplexityBot, Google-Extended |
| Server-side рендеринг | Критический контент не через JS |
| HTTPS + HSTS | Обязательно |
| Canonical URLs | Обязательно |
| <time> + dateModified | Сигнал свежести |
| llms.txt на корне сайта | Опционально (игнорируется Google, помогает другим AI) |

### Critical Insight: Brand Mentions > Backlinks

**Упоминания бренда коррелируют с AI-видимостью в 3× сильнее, чем бэклинки** (Ahrefs, декабрь 2025, исследование 75,000 брендов):

| Сигнал | Корреляция с AI-цитированием |
|--------|------------------------------|
| YouTube упоминания | ~0.737 (сильнейший) |
| Reddit упоминания | Высокая |
| Wikipedia присутствие | Высокая |
| LinkedIn присутствие | Умеренная |
| Domain Rating (бэклинки) | ~0.266 (слабая) |

**Только 11% доменов** цитируются одновременно ChatGPT и Google AI Overviews по одному запросу — платформенная оптимизация критична.

**Рекомендация:** YouTube → Reddit → Wikipedia → LinkedIn — в порядке приоритета для наращивания AI-цитируемости.

### Multi-Modal Content

Контент с мульти-модальными элементами получает **на 156%更高的 частоту цитирования** AI-системами.

**Что добавлять:**
- Текст + релевантные изображения
- Видео (встроенное или по ссылке)
- Инфографики и графики
- Интерактивные элементы (калькуляторы, инструменты)
- Структурированные данные, поддерживающие медиа

### AI Mode vs AI Overviews (Google I/O 2026)

На Google I/O (май 2026) AI Overviews и AI Mode объединены в «единый AI Search опыт». Но технически это **два разных движка цитирования**:
- Совпадают в выводах ~86% времени
- Но цитируют одни и те же URL только в **13.7%** случаев (Ahrefs, 540K пар запросов)

**Новые поверхности (2026):**
- **Preferred Sources** — пользователи выбирают предпочитаемые сайты; Google работает над использованием как сигнал ранжирования
- **«Highly Cited» badges** — за оригинальные репортажи, которые цитируют другие издания
- **Community Perspectives** — поднимает Reddit/форумы/личный опыт

### Per-Engine Playbook
| Платформа | Особенность цитирования |
|-----------|------------------------|
| **ChatGPT** | Цитирует Wikipedia в ~48% топ-цитат. Любит структурированные статьи с цифрами |
| **Perplexity** | Весит свежесть. Цитирует недавние веб-источники |
| **Gemini** | Для мнений — Reddit/Quora. Для фактов — Google Knowledge Graph |
| **Claude** | Академические и первичные источники. Любит длинные обзоры с цитатами |
| **Google AI Overviews** | Зеркалирует топ-10 + featured snippets. SEO-сигналы всё ещё важны |

### Оптимизация
1. Краткий ответ в первых 2-3 предложениях
2. Вопрос → ответ → детали
3. Цифры и статистика
4. FAQ блок
5. Источники
6. **Best combo**: Fluency + Statistics = ≥+35% цитируемости

### Мониторинг AI-видимости (coreyhaines31 ai-seo 2.2.0)

AI-цитируемость — измеримая метрика. Без трекинга GEO-оптимизация слепа.

**Что отслеживать:**

| Метрика | Что измеряет | Как проверить |
|---------|--------------|---------------|
| AI Overview presence | Появляются ли AI-ответы по вашим запросам | Вручную или Semrush/Ahrefs |
| Brand citation rate | Как часто вас цитируют в AI-ответах | AI visibility tools |
| Share of AI voice | Ваши цитаты vs конкурентов | Peec AI, Otterly, ZipTie |
| Citation sentiment | Как AI описывает ваш бренд | Ручной обзор + мониторинг-инструменты |
| Recommendation rate | Вы в шорт-листе, а не просто процитированы | Prompt tracking + framing упоминаний |
| Source attribution | Какие ваши страницы цитируются | Referral-трафик из AI-источников |

**Инструменты:**

| Инструмент | Покрытие | Лучше всего для |
|------------|----------|-----------------|
| **Otterly AI** | ChatGPT, Perplexity, Google AI Overviews | Share of AI voice |
| **Peec AI** | ChatGPT, Gemini, Perplexity, Claude, Copilot+ | Мультиплатформенный мониторинг в масштабе |
| **ZipTie** | Google AI Overviews, ChatGPT, Perplexity | Упоминания бренда + тональность |
| **LLMrefs** | ChatGPT, Perplexity, AI Overviews, Gemini | SEO-ключ → AI-видимость |

**DIY-мониторинг без инструментов (ежемесячно):**
1. Возьмите топ-20 запросов
2. Прогоните через ChatGPT, Perplexity и Google
3. Запишите: цитируют ли вас? Кого цитируют? Какую страницу?
4. Ведите таблицу, сравнивайте месяц к месяцу

**Search Console:** AI-специфичной отчётности нет — Google прямо говорит, что AI Overviews и AI Mode используют core Search. Стандартные отчёты (Performance, Coverage, Core Web Vitals) — единственное, что есть. Кросс-платформенную AI-цитируемость видят только сторонние инструменты выше.

### Citations vs Recommendations — лестница видимости (Lily Ray / Amsive, 2026)

Быть **процитированным** и быть **рекомендованным** — два разных исхода, управляемые разными системами. Цитата = ваш контент полезен как источник. Рекомендация = модель поставила бренд в шорт-лист покупателя. Оптимизация первого автоматически не даёт второго.

**Лестница видимости (4 ступени):**

| Ступень | Что значит | Чем управляется |
|---------|------------|-----------------|
| **1. Retrieved** | Модель прочитала контент, но не процитировала | Краулинг, структура, релевантность |
| **2. Cited** | Страница в источниках ответа | Полезность: структура, статы, свежесть |
| **3. Mentioned** | Бренд назван в тексте ответа | Распознавание сущностей + как о вас говорит веб |
| **4. Recommended** | Продукт в шорт-листе покупателя | **Агрегированный веб-консенсус** — обзоры, форумы, аналитики, пресса, видео |

Ступени 1-3 — контент работает. Ступень 4 меняет поведение покупателя и зарабатывается иначе: **цитата — о полезности контента, рекомендация — о том, что говорит о вас остальной веб.**

**Риск self-promotional listicle (данные Lily Ray, Amsive):** анализ 100 B2B «best [category] software» запросов весной 2026. Self-promotional гайды получили 323 цитаты в AI Overviews — но в 224 из них (**69%**) ответ оставил автора гайда без рекомендации, направив покупателей к конкурентам. Механизм: модель использует ваш гайд как источник о *категории* — вы сами собрали сравнения конкурентов, модель взяла их, а рекомендацию построила на веб-консенсусе. Для emerging-бренда self-ranked гайд = голос за конкурентов. Для лидеров категории — наоборот, преимущество: формирует описание всей категории.

**Что зарабатывает рекомендации (консенсус вне вашего сайта):**
- Платформы отзывов (G2, Capterra, TrustRadius, app stores) — сторонняя валидация
- Аналитики (Gartner, Forrester) — авторитетное обрамление категории
- Сообщества и форумы (Reddit, HN, Slack/Discord) — неоплаченные обсуждения практиков
- Earned media и PR — независимые источники повторяют ваш позиционинг
- Видео и подкасты — транскрипты несут ассоциации бренд+категория

**Тест перед инвестицией в очередной self-ranked гайд:** *«Если бы модель игнорировала всё на нашем домене — поставил бы остальной веб нас в шорт-лист?»* Если нет — этот разрыв и есть приоритет.

**Теневая ступень — recommended against:** на детальных промптах модели называют продукты, которых покупателю стоит *избегать* (с источниками). Слабый сторонний консенсус = не просто отсутствие в шорт-листе, а явное исключение. Поэтому мониторьте *framing* упоминаний (позитивный/нейтральный/негативный), а не только их количество.

### AI-трафик — слепая зона атрибуции (coreyhaines31 attribution 2.10.0)

AI-ассистенты всё чаще влияют на покупателя, но отправляют его через branded search или direct — касание AI невидимо в аналитике. Симптом: «direct» и «branded search» доминируют → верх воронки работает, а атрибуция это скрывает. **Когда direct и branded растут — ваш top of funnel работает, а аналитика его прячет.** Называйте AI-трафик явно и передавайте углублённую работу в GEO-оптимизацию.

### Content Types That Get Cited Most

Не весь контент одинаково цитируем AI. Приоритет форматов:

| Тип контента | Доля цитирования | Почему AI цитирует |
|-------------|:---------------:|-------------------|
| **Сравнительные статьи** | ~33% | Структурированы, сбалансированы, высокий интент |
| **Исчерпывающие гайды** | ~15% | Комплексно, авторитетно |
| **Оригинальные исследования** | ~12% | Уникальные цитируемые статы |
| **Лучшие-из / списки** | ~10% | Чёткая структура, много сущностей |
| **Товарные страницы** | ~10% | Конкретные детали, извлекаемые AI |
| **How-to гайды** | ~8% | Пошаговая структура |
| **Мнения/аналитика** | ~10% | Экспертная перспектива, цитаты |

**Аутсайдеры:** generic блоги без структуры, тонкие товарные страницы, гейтированный контент, контент без дат и авторов, PDF-only.

### Machine-Readable Files for AI Agents

AI-агенты не только читают контент — они становятся покупателями. Когда AI-агент оценивает инструменты, ему нужна структурированная информация. Если цены за JS-рендерингом или «свяжитесь с нами» — агент пропустит и порекомендует конкурента.

**Добавьте на корень сайта:**

**`/pricing.md`** — структурированные цены для AI-агентов:
```markdown
# Pricing — [Название продукта]
## Pro
- Price: $29/month (годовая) | $35/month (помесячно)
- Limits: 10,000 emails/month, 5 users
- Features: API access, analytics, priority support
```

**`/llms.txt`** — контекст для AI-систем (llmstxt.org). Если нет — добавьте. Важно: Google Search его игнорирует, но ChatGPT/Perplexity/Claude используют.

**`/okf/` — Open Knowledge Format** (Google, v0.1, июнь 2026). Маркдаун-спецификация для контента как директории связанных файлов. Пока не сигнал ранжирования, но регистрация protocol-layer.

### Agentic Experiences

Автономные агенты начинают напрямую заходить на сайты — кликать, читать, сравнивать, даже покупать от имени пользователя.

**Как агенты получают доступ к сайту:**
- **Визуальный рендеринг** — скриншотят страницу как пользователь
- **DOM инспекция** — парсят HTML-структуру
- **Accessibility tree** — полагаются на семантику (label, role, landmarks, headings)

**Что делать:**
- Рендерить контент без тяжёлых JS-фреймворков
- Семантический HTML: `<main>`, `<nav>`, `<article>`, `<button>`, `alt` на изображениях
- Чистое accessibility tree: каждый интерактивный элемент подписан
- Видимые цены, спецификации, контакты — всё на публичных, индексируемых страницах
- `/pricing.md` и `/llms.txt` для программного чтения

---

## 5. ИНТЕГРАЦИЯ СХЕМ (JSON-LD)

### Schema Decision Tree
| Ваш контент | Основная схема | Добавить если |
|-------------|---------------|---------------|
| Блог / статья | Article | FAQ, HowTo |
| Товар | Product | Review, Offer, AggregateRating |
| How-to гайд | HowTo | Article, FAQ |
| FAQ страница | FAQPage | Article |
| Локальный бизнес | LocalBusiness | Review |
| Организация | Organization | ContactPoint, Logo |
| Хлебные крошки | BreadcrumbList | (всегда, с любой схемой) |

### FAQPage Schema (ключевой AI-сигнал)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "[Вопрос — как на странице]",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "[Ответ с цифрами, фактами, ссылками]"
    }
  }]
}
```

### Article / BlogPosting Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Заголовок, ≤110 символов]",
  "description": "[Краткое описание]",
  "datePublished": "[ISO 8601]",
  "dateModified": "[ISO 8601]",
  "author": {
    "@type": "Person",
    "name": "[Имя автора]",
    "url": "[Профиль]"
  },
  "publisher": {
    "@type": "Organization",
    "name": "[Название]",
    "logo": {
      "@type": "ImageObject",
      "url": "[URL логотипа]"
    }
  }
}
```

### HowTo Schema (для процедурного контента)
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "[Название инструкции]",
  "description": "[Описание]",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "[Шаг 1]",
      "text": "[Инструкция шага 1]"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "[Шаг 2]",
      "text": "[Инструкция шага 2]"
    }
  ]
}
```

### Приоритет внедрения схем
| Приоритет | Тип | Зачем |
|-----------|-----|-------|
| P0 — Всегда | Organization, BreadcrumbList, WebSite | Фундамент |
| P1 — Контент | Article, FAQPage, HowTo | Rich-результаты |
| P2 — Коммерция | Product, Review, AggregateRating | ROI |
| P3 — E-E-A-T | Person, SameAs | AI-цитирование |
| P4 — Нишевые | Специфичные для индустрии | Точечно |

---

## 6. АНТИ-AI-СЛОП

### НЕ писать (verbal sludge)
"В современном мире", "Стоит отметить", "Важно подчеркнуть",
"Нельзя не согласиться", "В эпоху цифровых технологий",
"Давайте разберёмся", "Таким образом", "Безусловно"

### НЕ делать (GEO anti-patterns)
- **Keyword stuffing** — −8% к цитируемости. AI не PageRank, ключи не работают
- **Фабрикация цитат/статистик** — реальные AI уже тренируются на этом как на adversarial сигнале. +FTC §5, +YMYL liability
- **Писать контент «для AI» отдельно от контента для людей** — Google расценивает как «scaled content abuse»
- **Chunk-контент под AI** — Google: «пишите для людей, организуйте нормальными заголовками»

### Писать
Факты, цифры, имена, конкретные примеры, коротко, прямо.
Реальные источники. Реальные цитаты. Реальная польза.

---

## 7. ТЕХ. SEO — Dynamic Rendering для SPA

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

---

## Референсы
- `references/eeat-framework.md` — детальный E-E-A-T чеклист
- `references/platform-format-guide.md` — форматы для 9 платформ (2025-2026)
- `references/geo-techniques.md` — полный GEO Signal Stack (Princeton/CMU)
- `references/schema-templates.md` — JSON-LD шаблоны для всех типов
- `references/citations-vs-recommendations.md` — лестница AI-видимости (Lily Ray 2026)

---

### Источники обновления
- coreyhaines31/marketingskills v2.10.0 — ai-seo v2.2.0 (Query Fan-Out, Agentic Experiences, Machine-Readable Files, Monitoring AI Visibility, Citations vs Recommendations), attribution v1.1.0 (слепая зона AI-трафика)
- AgriciDaniel/claude-seo v2.2.4 (Brand Mentions > Backlinks, Multi-Modal, AI Mode vs AI Overviews, RSL 1.0)
- nowork-studio/NotFair — GEO Signal Stack (Princeton KDD 2024, CMU AutoGEO ICLR 2026), Evidence Hunt
- resciencelab/opc-skills@seo-geo (36K) — Princeton GEO methods
- addyosmani/web-quality-skills@seo (35.2K) — web quality audit
- firecrawl/firecrawl-workflows@firecrawl-seo-audit (29.7K) — SEO аудит через Firecrawl

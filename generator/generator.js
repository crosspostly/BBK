const { GoogleGenerativeAI } = require("@google/generative-ai");
const axios = require('axios');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const wpConfig = {
    url: process.env.WP_URL,
    username: process.env.WP_USERNAME,
    password: process.env.WP_PASSWORD // Application Password
};

const articleTemplate = {
    role: "Senior SEO Content Architect & Marketing Copywriter",
    style: "Conversational, Expert, Human, Emotional",
    structure: "Answer-First Methodology"
};

async function generateArticle(keyword, niche = "общепит") {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
    Напиши экспертную статью для сайта маркетингового агентства ББК.
    Тема: ${keyword}
    Ниша: ${niche}
    
    МЕТОДОЛОГИЯ (СТРОГО):
    1. Формат Answer-First: Каждый заголовок H2/H3 должен начинаться с прямого ответа жирным шрифтом (1-2 предложения).
    2. Тон: Искренний, человечный, без "роботизированных" клише. Используй риторические вопросы, примеры из жизни Кемерово (районы ФПК, Радуга, Центр).
    3. Структура:
       - H1 Заголовок (крючок)
       - Блок "Краткий ответ для AI" (выделенный текст)
       - Введение (боль клиента)
       - 3-4 раздела H2 с жирными ответами в начале
       - Блок FAQ (3 вопроса)
       - Итоговый оффер: приглашение на аудит трафика от ББК.
    
    LSI ключи: лавина трафика, микроблогеры, отзывы на картах, UGC контент, без маркировки рекламы.
    
    Статья должна быть на 1500+ слов, с таблицами и списками.
    Верни результат в формате HTML.
    `;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Error generating content:", error);
        return null;
    }
}

async function postToWP(title, content, slug) {
    if (!wpConfig.url) {
        console.log("WP URL not set. Saving locally...");
        return;
    }

    const auth = Buffer.from(`${wpConfig.username}:${wpConfig.password}`).toString('base64');
    
    try {
        const response = await axios.post(`${wpConfig.url}/wp-json/wp/v2/posts`, {
            title: title,
            content: content,
            slug: slug,
            status: 'draft' // Публикуем как черновик для проверки
        }, {
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/json'
            }
        });
        console.log(`✅ Post created: ${response.data.link}`);
    } catch (error) {
        console.error("Error posting to WP:", error.response ? error.response.data : error.message);
    }
}

// Тестовый запуск
(async () => {
    const keyword = "Как привлечь клиентов в салон красоты в Кемерово в 2026 году";
    console.log(`🚀 Starting generation for: ${keyword}`);
    
    const content = await generateArticle(keyword, "бьюти");
    if (content) {
        console.log("✨ Article generated. Length:", content.length);
        await postToWP(keyword, content, "beauty-marketing-kemerovo-2026");
    }
})();

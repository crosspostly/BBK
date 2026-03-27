<?php
get_header();
?>

<main>
    <!-- HERO SECTION -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        <!-- Background Elements (имитация из React) -->
        <div class="absolute inset-0 z-0">
            <div class="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
            <div class="absolute bottom-1/4 -right-20 w-96 h-96 bg-success/10 rounded-full blur-[120px]"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <div class="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium mb-8 animate-fade-in">
                🚀 Апрельский бонус: <span class="text-success font-bold">Отзывы на Картах</span> от каждого блогера
            </div>
            
            <h1 class="text-5xl md:text-8xl font-display font-bold leading-tight mb-8">
                ЛАВИНА ТРАФИКА <br/>
                <span class="text-primary">БЛОГЕРЫ + КАРТЫ + САЙТ</span>
            </h1>
            
            <p class="text-xl md:text-2xl text-textSec max-w-3xl mx-auto mb-12 leading-relaxed">
                Безотказная система монетизации через локальных лидеров мнений. 
                <span class="text-white font-bold">UGC-контент без маркировки</span>, который превращает подписчиков в ваших клиентов.
            </p>

            <div class="flex flex-col md:flex-row gap-6 justify-center items-center">
                <a href="#audit" class="bg-primary hover:bg-primary/90 text-white font-display font-black px-10 py-5 rounded-2xl text-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,77,0,0.4)]">
                    ПОЛУЧИТЬ ПЛАН ТРАФИКА
                </a>
                <div class="flex items-center gap-4 text-left">
                    <div class="flex -space-x-4">
                        <div class="w-12 h-12 rounded-full border-2 border-bg bg-surface flex items-center justify-center text-xs font-bold text-success">42+</div>
                        <div class="w-12 h-12 rounded-full border-2 border-bg bg-primary overflow-hidden">
                           <img src="https://i.pravatar.cc/100?u=1" alt="avatar" />
                        </div>
                    </div>
                    <div class="text-sm">
                        <div class="font-bold">33+ блогера</div>
                        <div class="text-textSec italic leading-tight">уже готовы к обзору</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SWOT ANALYSIS SECTION (NEW) -->
    <section class="py-24 bg-surface/30 border-y border-white/5">
        <div class="max-w-7xl mx-auto px-4">
            <h2 class="text-3xl md:text-5xl font-display font-bold mb-16 text-center">
                SWOT-АНАЛИЗ СИСТЕМЫ <span class="text-primary">ББК</span>
            </h2>
            
            <div class="grid md:grid-cols-2 gap-8">
                <!-- Strengths -->
                <div class="glass p-8 rounded-3xl border-l-4 border-success">
                    <h3 class="text-success text-2xl font-bold mb-6 flex items-center gap-3">
                        ⚡️ СИЛЬНЫЕ СТОРОНЫ
                    </h3>
                    <ul class="space-y-4 text-textSec">
                        <li><strong class="text-white">UGC-Формат:</strong> Рекомендации не воспринимаются как реклама и не требуют маркировки.</li>
                        <li><strong class="text-white">Доверие (Trust):</strong> Локальные микроблогеры (<10k) имеют самую активную и лояльную аудиторию.</li>
                        <li><strong class="text-white">Двойной эффект:</strong> Контент блогера + Живой отзыв на Яндекс.Картах и 2ГИС.</li>
                    </ul>
                </div>

                <!-- Opportunities -->
                <div class="glass p-8 rounded-3xl border-l-4 border-primary">
                    <h3 class="text-primary text-2xl font-bold mb-6 flex items-center gap-3">
                        📈 ВОЗМОЖНОСТИ
                    </h3>
                    <ul class="space-y-4 text-textSec">
                        <li><strong class="text-white">Авто-SEO:</strong> Генерация вечного трафика из поиска на основе обзоров.</li>
                        <li><strong class="text-white">20% Конверсия:</strong> Блогеры сами становятся вашими постоянными клиентами.</li>
                        <li><strong class="text-white">Масштабируемость:</strong> Легкий запуск в любой нише (Бьюти, HoReCa, Услуги).</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- NICHES SECTION (NEW) -->
    <section class="py-24">
        <div class="max-w-7xl mx-auto px-4">
            <h2 class="text-center text-4xl md:text-6xl font-display font-bold mb-16">
                НИШИ-ЛИДЕРЫ
            </h2>
            <div class="grid md:grid-cols-2 gap-12">
                <!-- Beauty -->
                <div class="group relative bg-surface rounded-3xl p-10 overflow-hidden border border-white/5 hover:border-primary/50 transition-all">
                    <div class="relative z-10">
                        <div class="text-5xl mb-6">💅</div>
                        <h3 class="text-3xl font-bold mb-6 group-hover:text-primary transition-colors">БЬЮТИ-ИНДУСТРИЯ</h3>
                        <p class="text-textSec mb-8 italic">Салоны красоты, косметология, маникюр, барбершопы.</p>
                        <ul class="space-y-4 text-sm">
                            <li class="flex items-center gap-3">✔ Полная запись мастеров в будние дни</li>
                            <li class="flex items-center gap-3">✔ Продвижение новых/дорогостоящих услуг</li>
                            <li class="flex items-center gap-3">✔ Реальные фото «До/После» в руках блогеров</li>
                        </ul>
                    </div>
                    <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-all"></div>
                </div>

                <!-- HoReCa -->
                <div class="group relative bg-surface rounded-3xl p-10 overflow-hidden border border-white/5 hover:border-success/50 transition-all">
                    <div class="relative z-10">
                        <div class="text-5xl mb-6">🍽️</div>
                        <h3 class="text-3xl font-bold mb-6 group-hover:text-success transition-colors">HORECA</h3>
                        <p class="text-textSec mb-8 italic">Кафе, рестораны, кофейни, доставки еды.</p>
                        <ul class="space-y-4 text-sm">
                            <li class="flex items-center gap-3">✔ Эффект «битком» даже в мертвые часы</li>
                            <li class="flex items-center gap-3">✔ Лавина сторис с вашим меню и подачей</li>
                            <li class="flex items-center gap-3">✔ Рост рейтинга на картах через живые отзывы</li>
                        </ul>
                    </div>
                    <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-success/10 rounded-full blur-[80px] group-hover:bg-success/20 transition-all"></div>
                </div>
            </div>
        </div>
    </section>

</main>

<?php
get_footer();
?>

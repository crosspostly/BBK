<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<nav class="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
    <div class="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex items-center gap-2 group">
            <span class="bg-primary text-white font-display font-bold px-2 py-1 rounded text-xl group-hover:scale-105 transition-transform">ББК</span>
            <span class="hidden md:block font-display font-bold tracking-tighter text-sm uppercase">Банда Блогеров</span>
        </a>

        <?php
        wp_nav_menu( array(
            'theme_location' => 'primary',
            'container'      => false,
            'menu_class'     => 'hidden md:flex items-center gap-8 text-sm font-medium',
            'link_before'    => '<span class="hover:text-primary transition-colors">',
            'link_after'     => '</span>',
            'fallback_cb'    => '__return_false',
        ) );
        ?>

        <div class="flex items-center gap-4">
            <a href="https://t.me/electromom" target="_blank" class="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-2 rounded-full transition-all text-sm">
                Обсудить проект
            </a>
        </div>
    </div>
</nav>
<div class="pt-20"> <!-- Spacer for fixed nav -->

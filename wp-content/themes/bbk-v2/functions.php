<?php
/**
 * BBK v2 Theme Functions
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function bbk_v2_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
    
    // Регистрация меню
    register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'bbk-v2' ),
	) );
}
add_action( 'after_setup_theme', 'bbk_v2_setup' );

function bbk_v2_scripts() {
    // Tailwind CDN для разработки
    wp_enqueue_script( 'tailwind-cdn', 'https://cdn.tailwindcss.com', array(), '3.4.1' );
    
    // Шрифты: Unbounded и Inter
    wp_enqueue_style( 'google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Unbounded:wght@400;700;900&display=swap', array(), null );
    
	wp_enqueue_style( 'bbk-v2-style', get_stylesheet_uri(), array(), '1.0.0' );
}
add_action( 'wp_enqueue_scripts', 'bbk_v2_scripts' );

// Конфигурация Tailwind (переносим цвета из React)
function bbk_v2_tailwind_config() {
    ?>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              primary: '#FF4D00',
              success: '#00E096',
              bg: '#0D0D0D',
              surface: '#1A1A1A',
              textMain: '#FFFFFF',
              textSec: '#A1A1AA',
            },
            fontFamily: {
              display: ['Unbounded', 'sans-serif'],
              sans: ['Inter', 'sans-serif'],
            }
          }
        }
      }
    </script>
    <style type="text/tailwindcss">
      @layer base {
        body {
          @apply bg-bg text-textMain font-sans;
        }
        h1, h2, h3, h4, h5, h6 {
          @apply font-display;
        }
      }
      .glass {
        @apply bg-surface/30 backdrop-blur-md border border-white/5;
      }
    </style>
    <?php
}
add_action( 'wp_head', 'bbk_v2_tailwind_config' );

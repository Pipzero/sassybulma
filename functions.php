<?php


// Remove unnecessary bloats
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );


// Disable Embeds
function my_deregister_scripts(){
 wp_dequeue_script( 'wp-embed' );
}

add_action( 'wp_footer', 'my_deregister_scripts' );


// Add meta tags
function head_tags() {   ?>

      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="Here is a precise description of my awesome webpage.">
      <meta name="robots" content="index, follow" />

<?php

}

add_action('wp_head', 'head_tags');



// LOAD UP STYLE SHEETS

function sazzypress_styles() {

  // wp_enqueue_style('font-awesome','//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/fontawesome.min.css');
  // wp_enqueue_style('font-awesome',get_template_directory_uri().'/fontawesome.min.css');
  // wp_enqueue_style('aos-style', '//unpkg.com/aos@2.3.1/dist/aos.css');
  wp_enqueue_style('main-style', get_stylesheet_uri(), NULL, microtime());

}

// LOAD UP JAVASCRIPT
function sassypress_scripts() {

  wp_deregister_script('jquery');
  // wp_enqueue_script('jquery', '//code.jquery.com/jquery-3.3.1.slim.min.js', array(), '3.3.1');
  // wp_enqueue_script('jarallax-script', '//unpkg.com/jarallax@1.10/dist/jarallax.min.js', NULL, NULL, true);
  // wp_enqueue_script('aos-script', '//unpkg.com/aos@2.3.1/dist/aos.js', NULL, NULL, true);
  // wp_enqueue_script('bs-script', '//stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.bundle.min.js', NULL, NULL, true);
  wp_enqueue_script('core-scripts', get_theme_file_uri('/js/scripts-bundled.js'), NULL, microtime(), true);

}



add_action('wp_enqueue_scripts', 'sazzypress_styles');
add_action('wp_footer', 'sassypress_scripts');

// Theme support

function add_title_tag() {
  add_theme_support('title-tag');
}
add_action('after_setup_theme', 'add_title_tag');


//Remove Gutenberg Block Library CSS from loading on the frontend
// function smartwp_remove_wp_block_library_css(){
//  wp_dequeue_style( 'wp-block-library' );
//  wp_dequeue_style( 'wp-block-library-theme' );
// }
// add_action( 'wp_enqueue_scripts', 'smartwp_remove_wp_block_library_css' );


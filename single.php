<?php get_header(); ?>

 
<div class="container">
  <div class="columns">
    <div class="column is-4">
      <!-- Left sidebar example  -->
      <section class="hero notification is-danger is-paddingless">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Widget area.
            </h1>
            <h2 class="subtitle">
              Go Crazy
            </h2>
          </div>
        </div>
      </section>

    </div>
    <div class="column is-8">
        <!-- Post Content  -->
        <?php 
          if ( have_posts() ) {
            while ( have_posts() ) {
              the_post(); ?>
              
              <h1><?php the_title(); ?></h1>
              <hr>
              <?php the_content(); ?>
        
        <?php
            } // end while
          } // end if
          ?>
    </div>
  </div>

</div>


<?php get_footer(); ?>
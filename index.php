<?php get_header(); ?>

<main>

<!-- Start your custom markup here -->
<div class="container">


  <div class="columns">
    <div class="column is-8">
      <!-- Page Content Here -->
      
      <?php 
        if ( have_posts() ) {
          while ( have_posts() ) {
            the_post(); 
            ?>
            <h3><a href="<?php the_permalink(); ?>"><?php the_title();?></a></h3>
            <?php the_content();
          }
        }
        ?>
    
    </div>
    <div class="column is-4">
      <!-- Misc Widgets Side Bar -->
      <div class="container">
        <div class="notification is-danger">
          This is regular container.
        </div>
        
        <section class="hero notification">
          <div class="hero-body is-paddingless">
            <div class="container">
              <h4 class="title">
                Hero title
              </h4>
              <h5 class="subtitle">
                Hero subtitle
              </h5>
            </div>
          </div>
        </section>

      </div>
      
    </div>
  </div>

  
  <div class="notification is-warning">
    You can stick with Bootstrap, but you can also learn <a href="http://bulma.io">Bulma</a>.
  </div>

</div>




</main>

 
<?php get_footer(); ?>
<!DOCTYPE html>
<html lang="en">
      <head>
            <?php wp_head(); ?>
      </head>
      <body>

      <header id="main-nav" class="container is-fluid">
        <div class="columns is-flex-mobile ">
          <div class="column left is-2">
            <a href="<?php bloginfo('url'); ?>"><span class="has-text-weight-bold has-text-black ">PIPO.SULPX</span></a>
          </div>
          <div class="column center is-8 is-hidden-mobile">
            <a href="#" class="navbar-item make-rounded is-active">This</a>
            <a href="#" class="navbar-item make-rounded">Uses</a>
            <a href="#" class="navbar-item make-rounded">Bulma</a>
            <a href="#" class="navbar-item make-rounded">Framework</a>
          </div>
          <div class="column right is-2">
            <!-- <a class="button is-secondary is-inverted is-outlined">contact</a> -->
            <figure class="image has-text-black center search-up">
              <i class="fas fa-search" style="width: 1rem; height: 1rem;"></i>
            </figure>
          </div>
        </div>
      </header>


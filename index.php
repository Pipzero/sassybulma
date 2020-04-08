<?php get_header(); ?>

<div class="breakpoint"></div>

<div class="container is-fluid">
      <div class="container is-fluid">
            <div class="notification">
            This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any
            viewport size.
            </div>
      </div>
      <div class="container is-widescreen">
            <div class="notification">
            This container is <strong>fullwidth</strong> <em>until</em> the <code>$widescreen</code> breakpoint.
            </div>
      </div>
      <div class="container is-fullhd">
            <div class="notification">
            This container is <strong>fullwidth</strong> <em>until</em> the <code>$fullhd</code> breakpoint.
            </div>
      </div>
</div>


</main>
 
<?php get_footer(); ?>
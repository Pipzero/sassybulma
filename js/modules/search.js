import $ from 'jquery';

class Search{
  // describe and create object
  constructor() {
    this.openButton = $('.search-up');
    this.closeButton = $('.search-overlay-close');
    this.searchOverlay = $('.search-overlay');
    this.searchResultsContainer = $('.search-results .container');
    this.mainContainer = $('html');
    this.searchModalState = false;
    this.searchTerm = $('.search-term');
    this.prevSearchTerm;
    this.typingTimer;
    this.typingTimeout = 800;
    this.showSpinner = false;
    this.events();
  }

  // events
  events(){
    this.openButton.on('click', this.openOverlay.bind(this));
    this.closeButton.on('click', this.closeOverlay.bind(this));
    $(document).on('keydown', this.keyPressDispatcher.bind(this));
    this.searchTerm.on('keyup', this.searchMania.bind(this));
  }
  

  // methods (function, action)
  searchMania(e) {
    // other than esc button
    if (this.searchTerm.val() != this.prevSearchTerm ) {

      // reset previous timer

      clearTimeout(this.typingTimer);

      // show spinner when it is invisible, prevent reset each keystroke
      if(!this.showSpinner){
        this.searchResultsContainer.html('<div class="container icon is-large center"><i class="fas fa-spinner fa-pulse has-text-white pad-x is-size-3"></i></div>')
        this.showSpinner = true
      }
      // (re)initiate search after waiting for typingTimeout
      this.typingTimer = setTimeout(this.getResults.bind(this), this.typingTimeout);
      this.prevSearchTerm = this.searchTerm.val();

      console.log(this.searchTerm.val())
    }
  }

  keyPressDispatcher(e) {

    // if closed, open up
    if (e.keyCode == 83 && !this.searchModalState) {
      this.openOverlay()
    }
    if (e.keyCode == 27 && this.searchModalState) {
      this.closeOverlay()
    }
  }

  getResults() {
    this.searchResultsContainer.html('<div class="container"><p>Fetching API data...</p></div>')
    this.showSpinner = false
    // setTimeout(() => {
    //   this.searchResultsContainer.html('<div class="container"><p>Attempting to reach server.</p></div>')
    // }, 1200);
  }

  openOverlay(){
    this.searchOverlay.show();
    this.mainContainer.toggleClass('noscroll');
    this.searchModalState = true;
  }
  
  closeOverlay(){
    this.searchTerm.val("")
    this.searchOverlay.hide();
    this.mainContainer.toggleClass('noscroll');
    this.searchModalState = false;
  }

}

export default Search
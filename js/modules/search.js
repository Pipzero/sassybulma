import $ from 'jquery';

class Search{
  // describe and create object
  constructor() {
    this.openButton = $('.search-up');
    this.closeButton = $('.search-overlay-close');
    this.searchOverlay = $('.search-overlay');
    this.mainContainer = $('html');
    this.searchModalState = false;
    this.searchTerm = $('.search-term');
    this.searchTimer;
    this.searchTimeout = 800;
    this.searchPreloader = $('.search-results-spinner');
    this.searchFindings;
    this.events();
  }

  // events
  events(){
    this.openButton.on('click', this.openOverlay.bind(this));
    this.closeButton.on('click', this.closeOverlay.bind(this));
    $(document).on('keydown', this.keyPressDispatcher.bind(this));
    this.searchTerm.on('keydown', this.searchMania.bind(this));
  }
  

  // methods (function, action)
  searchMania(e) {
    // other than esc button
    if (e.keyCode != 13 && e.keyCode != 16 && e.keyCode != 17 && e.keyCode != 18 && e.keyCode != 27 ) {
      // console.log('Typing...' + e.keyCode)
      this.searchPreloader.hide();
      
      // clearTimeout(this.searchTimer);
      this.searchTimer = setTimeout(() => {
        console.log('Initiate Search');
        this.searchPreloader.show();
      }, this.searchTimeout);
    }
    // esc pressed, abort
    else
      // clearTimeout(this.searchTimer);
      this.searchPreloader.hide();
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

  openOverlay(){
    this.searchOverlay.show();
    this.mainContainer.toggleClass('noscroll')
    this.searchModalState = true;
  }
  
  closeOverlay(){
    this.searchOverlay.hide();
    this.mainContainer.toggleClass('noscroll')
    this.searchModalState = false;
  }

}

export default Search
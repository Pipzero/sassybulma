import $ from 'jquery';

class Search{
  // describe and create object
  constructor() {
    this.openButton = $('.search-up');
    this.closeButton = $('.search-overlay-close');
    this.searchOverlay = $('.search-overlay');
    this.mainContainer = $('html');
    this.popupState = false;
    this.searchTerm = $('.search-term')
    this.searchTimeout = 1000;
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
  searchMania() {
    setTimeout(() => {
      console.log('seach typing');
      console.log('Timeout:' + this.searchTimeout)
    }, this.searchTimeout);
  }

  keyPressDispatcher(e) {

    // if closed, open up
    if (e.keyCode == 83 && !this.popupState) {
      this.openOverlay()
    }
    if (e.keyCode == 27 && this.popupState) {
      this.closeOverlay()
    }
  }

  openOverlay(){
    this.searchOverlay.show();
    this.mainContainer.toggleClass('noscroll')
    this.popupState = true;
  }
  
  closeOverlay(){
    this.searchOverlay.hide();
    this.mainContainer.toggleClass('noscroll')
    this.popupState = false;
  }

}

export default Search
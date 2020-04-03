(function ($) {
    "use strict";

    // Initialize MagnificPopup Plugin
    $('.popup-container').magnificPopup({
        delegate: 'a',
        type:'image',
        gallery:{enabled:true},
        zoom:{
            enabled:true,
            duration: 300,
            easing: 'ease-in-out'
        }
    });

})(jQuery);
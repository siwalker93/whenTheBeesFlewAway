    var openPhotoSwipe = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: '/content/img/cast/dom-bio-1170.png',
            w: 853,
            h: 526
        },
        {
            src: '/content/img/cast/harri-bio-1170.png',
            w: 853,
            h: 526
        },
        {
            src: '/content/img/cast/joe-bio.png',
            w: 853,
            h: 526
        }
    ];
    
    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen        
        history: false,
        focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

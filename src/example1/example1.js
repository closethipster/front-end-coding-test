// Flip an element on hover or on click
rh.test.flip = {
    attr: {
        trigger: "data-test-flip-on",
        visible: "data-test-visible"
    },
    action: function( $el ) {
        // Determine which card's button was clicked...
        // ...and find it's opposite face (front if back, back if front)
        var $thisCard = $el.closest( ".test-card" ),
            $oppositeFace = ( $thisCard.hasClass( "front" ) ) ? $thisCard.next() : $thisCard.prev();

        // The "visible" attribute is defined, so let's use it
        $thisCard.removeAttr( rh.test.flip.attr.visible );
        $oppositeFace.attr( rh.test.flip.attr.visible, "" );
    }
};

// For all flip-enabled elements, attach an on click or on hover event
$( "[" + rh.test.flip.attr.trigger + "]", context ).each( function( idx, val ) {
    // Add your trigger event here
    $( val ).on( "click", function( evt ) {
        evt.preventDefault();
        rh.test.flip.action( $( this ) );
    } );
} );

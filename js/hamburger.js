$( document ).ready(function() {

    $( ".cross" ).hide();
    $( ".submenu" ).hide();
    $( ".hamburger" ).click(function() {
        $( ".submenu" ).slideToggle( "slow", function() {
            $( ".hamburger" ).hide();
            $( ".cross" ).show();
        });
    });
    $( ".cross" ).click(function() {
        $( ".submenu" ).slideToggle( "slow", function() {
            $( ".cross" ).hide();
            $( ".hamburger" ).show();
        });
    });

});
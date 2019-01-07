function isDoubleClicked(element) {
    //if already clicked return TRUE to indicate this click is not allowed
    if (element.data("isclicked")) return true;

    //mark as clicked for 1 second
    element.data("isclicked", true);
    setTimeout(function () {
        element.removeData("isclicked");
    }, 500);

    //return FALSE to indicate this click was allowed
    return false;
}

$(".inner-header__arrow:first-of-type").on('click',
    function() {
        if (isDoubleClicked($(this))) return;
        var navwidth = $(".horizontal-menu-wrapper ul");
        // navwidth.scrollLeft(navwidth.scrollLeft() - 200);
        navwidth.animate({scrollLeft: navwidth.scrollLeft() - 200}, 600);
        console.log('hello');
    }
    
);
$(".inner-header__arrow:nth-of-type(2)").on('click',
    function() {
        if (isDoubleClicked($(this))) return;
        var navwidth = $(".horizontal-menu-wrapper ul");
        navwidth.animate({scrollLeft: navwidth.scrollLeft() + 200}, 600);
        console.log('hello2');
    }
);  

// Stop scrolling, when menu is open
// $('body').css({'overflow':'hidden'});
//   $(document).bind('scroll',function () { 
//     window.scrollTo(0,0); 
// });
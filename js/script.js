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

$('.main-block__more').hover(
  function() {
    $( this ).children('i').css('right','-3px');
  }, function() {
    $( this ).children('i').css('right','0');
  }
);

$('.menu-burger-link').click(function() {
    $('.menu-main').addClass('menu-main--open fadeIn');
    $('body').css({'overflow':'hidden'});
});


$('.burger-menu-close').click(function() {
    $('.menu-main').removeClass('fadeIn');
    $('.menu-main').addClass('fadeOut');
    setTimeout(function(){ $('.menu-main').removeClass('menu-main--open fadeOut'); }, 1000);
    $('body').css({'overflow':'auto'});
});

$('.main-block__burger').click(function() {
    console.log('hello');
    $(this).next('.main-block__sub-menu').addClass('sub-menu--open fadeIn');
});

$('.submenu-close').click(function() {
    var parent = $(this).parent();
    parent.removeClass('fadeIn');
    parent.addClass('fadeOut');
    setTimeout(function(){ parent.removeClass('sub-menu--open fadeOut'); }, 1000);
});

$('.about-section__head').children('.active').children('.line_marker').css('display', 'block');

if($( window ).width() > 575) {
    $('.tab-1-head').children('.line_marker').css('display', 'block');
} else {
    $('.tab-1-head').children('.line_marker').css('display', 'none');
}

function tabFunctionality(el) {
    var currentClass = el.attr('class');
    var classArr = ['tab-1-head', 'tab-2-head', 'tab-3-head'];
    var thisClass = '';
    var otherClasses = [];

    for(var i = 1; i <= 3; i++) {
        if(currentClass.indexOf(i) === -1){
            otherClasses.push(i);
        } else {
            thisClass = i;
        }
    }

    el.addClass('active');

    if($( window ).width() > 575) {
        el.children('.line_marker').css('display', 'block');
        el.css('border-bottom', 'none');
    } else {
        el.css('border-bottom', '1px solid #30353e');
    }

    for(var k = 0; k <= otherClasses.length - 1; k++) {
        $('.tab-' + otherClasses[k] + '-head').removeClass('active');
        $('.tab-' + otherClasses[k] + '-head').css('border-bottom', '1px solid #30353e');
        $('.tab-' + otherClasses[k] + '-head').children('.line_marker').css('display', 'none');
        $('.tab-' + otherClasses[k] + '-text').css('display', 'none');
    }

    switch(thisClass) {
        case 1:
            $('.tab-1-text').css('display', 'block');
            break;
        case 2:
            $('.tab-2-text').css('display', 'block');
            break;
        case 3:
            $('.tab-3-text').css('display', 'block');
            break;
        default:
            $('.tab-1-text').css('display', 'block');
            break;
    }
    
}

$('.tab-1-head').click(function(){
    tabFunctionality($(this));
});

$('.tab-2-head').click(function(){
    tabFunctionality($(this));
});

$('.tab-3-head').click(function(){
    tabFunctionality($(this));
});

function downIcon() {
    $( '.icon-down' ).animate({
        top: 0
    }, 1500, function() {
        // Animation complete.
        $( '.icon-down' ).animate({
            top: -130
        });
        // $( '.icon-down' ).css('top', '-130px');
        downIcon()
    });
}

var landingHeaderHeight = $('.header-landing').height();

downIcon();

$(window).scroll(function () {
    console.log(window.scrollY);
    if(window.scrollY > landingHeaderHeight) {
        $('.icon_line').css('display','none');
        $('.icon-down').css('display','none');
    }
});


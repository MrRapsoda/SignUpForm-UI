//Step of the form
var step = 1;

$('li').before().addClass('swoopInTop');

$('.button-to-step-two').click(function() {
    $('.step-one').css('display', 'none');
    $('.step-two').css('display', 'block');
    $('.step-two').removeClass('hitRight');
    $('.step-two').addClass('hitLeft duration-400');
    //resetAnimationStepTwo();
    $('.step1').next().addClass("active").siblings().removeClass("active");
});

$('.button-to-step-three').click(function() {
    $('.step-two').css('display', 'none');
    $('.step-three').css('display', 'block');
    //resetAnimationStepOne();
    $('.step2').next().addClass("active").siblings().removeClass("active");
});

$('.button-prev').click(function() {
    if ($('.step2').hasClass('active') == true) {
        $('.step-one').css('display', 'block');
        $('.step-two').css('display', 'none');
        $('.step-one').removeClass('swoopInLeft');
        $('.step-one').addClass('hitRight duration-400');
        $('.step2').prev().addClass("active").siblings().removeClass("active");
    }

    if ($('.step3').hasClass('active') == true) {
        $('.step-two').css('display', 'block');
        $('.step-two').removeClass('hitLeft');
        $('.step-two').addClass('hitRight duration-400');
        $('.step-three').css('display', 'none');
        $('.step3').prev().addClass("active");
        $(this).removeClass("active");
    }
});

$('.button-send').click(function() {
    $('.step-three').css('display', 'none');
    $('.sent').css('display', 'block');
    $('.form-container__main-form .action-title').empty();
    $('.form-container__main-form').css({ 'background': 'transparent', 'box-shadow': 'none' });
    setTimeout(("window.location.reload();"), 2000);

});

function reloadPage() {

}

/* function resetAnimationStepOne() {
    $('.step-one').addClass('swoopInLeft');
    $('.step-one').removeClass('swoopInRight');
}

function resetAnimationStepTwo() {
    $('.step-two').addClass('swoopInLeft');
    $('.step-two').removeClass('swoopInRight');
} */
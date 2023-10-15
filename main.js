
let aboutOffset=$('#about').offset().top;

$(window).scroll( function(){
    let wScrool = $(window).scrollTop();
    if(wScrool >  aboutOffset -50){
        $('#btnUp').fadeIn(500)
    }
    else{
        $('#btnUp').fadeOut(500)
        
    }
})
$('#btnUp').click(function (){
    $('html,body').animate({scrollTop:0},2000)
})

$(".nav-item a[href^='#']").click(function(e){
    $(e.target).css('border-bottom' ,'solid 3px #ce1212')
    $(e.target).parent().siblings().children().css('border-bottom' ,'none')
    let linkHref= $(e.target).attr('href')
    let sectionOffset=$(linkHref).offset().top;
    $("html,body").animate({scrollTop : sectionOffset}, 3000)
    })

    $(".book-Table").click(function(e){
        let sectionOffset=$("#bookTable").offset().top;
        $("html,body").animate({scrollTop : sectionOffset}, 3000)
        })
        


$(document).ready(function(){
    $("#loading").fadeOut(2000 , function(){
        $('body').css("overflow-y" , 'auto')
    })
    
})



  $('.owl-carousel').owlCarousel({
    autoplay:true,
    margin:10,
    responsiveClass:true,
    loop:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            loop:true
        }
    }
})

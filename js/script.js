

(function(){
    emailjs.init({publicKey: 'RDdy08pMvUdHEPJZ5'}); // Initialize EmailJS with your user ID
})();
// sendEmail();
function sendEmail() {
    // var templateParams = {
    //     email_id: "balrajnarendran@gmail.com",
    //     subject: "hi softnova",
    //     message: "how are you",
    //     phone_number : "9688575469",
    //     name : "Narenendran"
    // };
    var templateParams = {
        email_id: $("#emailaddress").val(),
        phone_number : $("#number").val(),
        name: $("#name").val(),
        message: $("#message").val()
    };

    emailjs.send("service_xmlv2za", "template_es4t4pu", templateParams)
    // emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
        .then(function(response) {
            console.log("Email sent successfully!", response);
        }, function(error) {
            console.log("Email cancelled!", response);
        })
}

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

var activelink = (type)=>{
    $('.nav-link').each((e,data)=>{
        if($(data).attr('href') == type){
            $('.nav-link').removeClass('active');
            $(data).addClass('active');
            // const url = type;
            // history.pushState(state, "", url);
        }
      })
}
var count = 0;

var topsetScroll = ()=>{
    $(window).scrollTop(0);
    if(window.scrollY<=100){
        $('.arrowScroll').addClass('d-none');
    }else{
        $('.arrowScroll').removeClass('d-none');
    }
}

var about = $('#about')[0].getBoundingClientRect().top;
var service = $('#service')[0].getBoundingClientRect().top;
var carreers = $('#careers')[0].getBoundingClientRect().top;
$('.carousel .carousel-item').each(function(){
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        
        next.children(':first-child').clone().appendTo($(this));
    }
});


$(document).ready(()=>{
    $('.nav-link').on('click',()=>{
        $('.nav-link').removeClass('active');
        $(event.target).addClass('active');
    })
    var overalSocial = document.querySelector(".overalSocial");
    $(window).scroll((e)=> {
        debugger
        if (window.scrollY  >= 201) {
            if(window.scrollY >= sticky){
                $('#navbar').addClass('sticky');
            }
        } else {
            $('#navbar').removeClass('sticky');
        }
        if (window.scrollY < 100 && window.scrollY !=0) {
            if(window.scrollY<=100){
                $('.arrowScroll').addClass('d-none');
            }else{
                $('.arrowScroll').removeClass('d-none');
            }
                var values = ($(window).scrollTop()*0.1)/2;
                if(values >= 110) return 0;
                value =   values + 113
                $('#scrollbind').children().attr('style',`stroke-dasharray: 113;stroke-dashoffset: ${value}`);
                if(window.scrollY <= 100){
                    activelink('#');
                    return 0;
                }
                if((window.scrollY <= (about-100) && window.scrollY <= (about+50)) ){
                    activelink('#about');
                }else if(window.scrollY <= (service-100) && window.scrollY <= (service+50)){
                    activelink('#service');
                }else if(window.scrollY <= (carreers-100)){
                    // $('.overalSocial').attr('style','transform: scale(0.1);')
                    activelink('#careers');
                }
         }
        if (window.scrollY > 100) {
            if(window.scrollY>=100){
                $('.arrowScroll').removeClass('d-none');
                // count = count-1;
                var values = ($(window).scrollTop()*0.1)/2;
                if(values >= 112) return 0;
                value = values - 113
                $('#scrollbind').children().attr('style',`stroke-dasharray: 113;stroke-dashoffset: ${value}`);
                if((window.scrollY >= (about-100) && window.scrollY <= (about+50)) ){
                    activelink('#about');
                }else if(window.scrollY >= (service-100) && window.scrollY <= (service+50)){
                    activelink('#service');
                }else if(window.scrollY >= (carreers-100)){
                    // $('.overalSocial').attr('style','transform: scale(0.1);')
                    activelink('#careers');
                }else if(window.scrollY <= 100){
                    activelink('#');
                }
            }
         }
        //  if(window.scrollY >1400 && window.scrollY < 1600){
        //     let value = (window.scrollY / 3000) + 0.2   
        //     console.log (value)
        //     if(value >= 1.01){
        //         if(value <= -1.01){
        //             overalSocial.style.transform = `scale(${value})`
        //         }else{
        //             overalSocial.style.transform='none'
        //         }
        //     }else{
        //         if(value <= -1.01)
        //         {
        //             overalSocial.style.transform='none'
        //         }else{
        //             overalSocial.style.transform = `scale(${value})`
        //         }
        //     }
        //  }
    });
});
   
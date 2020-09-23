$(document).ready(function(){

    $(".STUR").animate({
    opacity: '1'
    },200000);

    setTimeout(function(){
        if (confirm('vainilla?')){
            window.location.href = "home.html";
        }else{
            //el es el culpable de todo owo
            window.location.href = "https://www.facebook.com/luis.e.estradagil";
        }
        
        
    },200000);
    
});

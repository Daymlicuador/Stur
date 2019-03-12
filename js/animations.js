$(document).ready(function(){

    $(".STUR").animate({
    opacity: '1'
    },200000);

    setTimeout(function(){
        if (confirm('vainilla?')){
            window.location.href = "home.html";
        }else{
            window.location.href = "https://www.facebook.com/luis.e.estradagil";
        }
        
        
    },200000);
    
});

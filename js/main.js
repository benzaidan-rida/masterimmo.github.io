$(document).ready(()=>{
    $(".custom-navbar .main-navbar .list-unstyled .title .close-btn,.custom-navbar .main-navbar .button-mobile").on('click', function(){
        $(".custom-navbar .main-navbar .list-unstyled").toggleClass('active');
    });
});
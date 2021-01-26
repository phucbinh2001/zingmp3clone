function changTheme(name, background) {
    document.documentElement.setAttribute('data-theme', name);
    localStorage.setItem('theme', name);
    if(background!="") {
        document.getElementById('background').style.backgroundImage = "url('../images/"+background+"')";
    }
}

$(document).ready(function () {
    $('#medium').click(function (e) { 
        e.preventDefault();
        $('.mv .col-4, .mv .col-12').addClass('col-6');
        $('.mv .col-6').removeClass('col-4, col-12');
    });
});

$(document).ready(function () {
    $('#large').click(function (e) { 
        e.preventDefault();
        $('.mv .col-6, .mv .col-12').addClass('col-4');
        $('.mv .col-4').removeClass('col-6 col-12');
    });
});

$(document).ready(function () {
    $('#list').click(function (e) { 
        e.preventDefault();
        $('.mv .col-6, .mv .col-4').addClass('col-12');
        $('.mv .col-12').removeClass('col-6, col-4');
    });
});

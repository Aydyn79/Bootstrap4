$("#carouselButton").click(function(){
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');                    
    }
});

$("#loginButton").click(function(){
    $("#loginDialog").modal('show');
});

$("#closeButton").click(function(){
    $("#loginDialog").modal('hide');
});

function show_modal(name)
{
    $(name).modal('show');
}

function hide_modal()
{
    $('#loginDialog').modal('hide');
}
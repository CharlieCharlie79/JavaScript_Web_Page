//Nav bar function
`$(function () {
    $("a").click(function(e){
        e.preventDefault();
        $("a").removeClass("active");
        $(this).addClass("active");
    });
});`
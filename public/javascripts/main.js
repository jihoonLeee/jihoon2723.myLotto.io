$(document).ready(function() {
    $("#createLotto").click(function(e) {
        e.preventDefault();
        $.ajax({
            type : "GET",
            url : "/getNum", // Update this URL to match your Node.js server route
            success : function(data) {
                $("#listId").empty(); // clear the existing number
                data.forEach(function(lotto) {
                    $("#listId").append('<div class="col-lg-2"><a class="portfolio-item" href="#!"><img class="img-fluid" src="images/' + lotto + '.png" alt="..." /></a></div>');
                });
            },
            error : function() {
                alert("통신 실패.")
            }
        });
    });
    const locations = [{
        place : "농협 본사",
        lat : 37.56587411850793,
        lng : 126.96741510316097
    }];
    // Add your map code here
});

$(document).ready(function() {

    $("#submit-button").on("click", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newBurger").val().trim(),
            devoured: 0
        };


        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {

            location.reload();
        });
    });

    $(".devour-button").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };


        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("SUCCESS")

            location.reload();
        });
    });

    $(".delete-button").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");

        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });

})
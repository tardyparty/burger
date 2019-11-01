$(function() {
    $(".devour").on("click", function(event) {
        var id = $(this).data("id");
        var isDevoured = 1;

        var newlyDevoured = {
            devoured: isDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newlyDevoured
        }).then(
            function() {
                console.log("Devoured state changed to", isDevoured);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newBurger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger,
        }).then(function() {
            console.log("created new burger");
            location.reload();
        })
    })
})
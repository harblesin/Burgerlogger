$("#addBurger").click(function(event){
    event.preventDefault()

    var burger = {
        burger_name: $("#newBurger").val().trim(),
        devoured: false
    }

    $.post("api/burger", burger, function(){
        console.log("created new burger");
        location.reload();
    })

});

$('.eatBurger').click(function(event){
    event.preventDefault()
    console.log("clicked")

    var burger = {
        id: $(this).data("id"),
        devoured: true
    }

    $.ajax("/api/burger", {
        method: "PUT",
        data: burger
    }).then(
        function(){
        console.log("Ate borger");
        location.reload();
    })
})

$('.trashBurger').click(function(event){
    event.preventDefault();
    console.log('trashed')

    var burger = {
        id: $(this).data("id")
    }

    $.ajax("/api/burger", {
        method: "DELETE",
        data: burger
    }).then(
        function(){
            location.reload();
        }
    )
})
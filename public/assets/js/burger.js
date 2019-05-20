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

    var id = $(this).data("id")

    var burger = {
        devoured: true
    }

    $.ajax("/api/burger/"+id, {
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

        var id = $(this).data("id")

    $.ajax("/api/burger/" + id, {
        method: "DELETE"
    }).then(
        function(){
            location.reload();
        }
    )
})
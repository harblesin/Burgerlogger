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

})
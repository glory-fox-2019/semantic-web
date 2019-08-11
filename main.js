$(document).ready(function () {
    console.log("READY")
    $("#charger").hover(
        function() {
            console.log("charger hover in")
            $("#charger-details").css("color", "blue")
        }
    ,   function() {
            console.log("charger hover out")
            $("#charger-details").css("color", "black")   
        })

    $("#earphone").hover(
        function() {
            console.log("earphone hover in")
            $("#earphone-details").css("color", "blue")
        }
    ,   function() {
            console.log("earphone hover out")
            $("#earphone-details").css("color", "black")
        })
        
})

function phoneDetail() {
    $("#phone").on("click", function() {
        $("#phone-detail").css("display","block")
        $("#phone").hide()
    })
}



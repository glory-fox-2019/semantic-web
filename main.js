$('#article1').hide()
$('#article2').hide()
$('#article3').hide()

$('.home').click(function(event){
    event.preventDefault()
    $('#article1').hide()
    $('#article2').hide()
    $('#article3').hide()
    $('main').show()
})



$('.ar1').click(function(event){
    event.preventDefault()
    $('#article1').show()
    $('#article2').hide()
    $('#article3').hide()
    $('main').hide()
})
$('.ar2').click(function(event){
    event.preventDefault()
    $('#article1').hide()
    $('#article2').show()
    $('#article3').hide()
    $('main').hide()
})
$('.ar3').click(function(event){
    event.preventDefault()
    $('#article1').hide()
    $('#article2').hide()
    $('#article3').show()
    $('main').hide()
})
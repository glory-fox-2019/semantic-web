$('.formspree').on('click', function() {
    event.preventDefault()
    Swal.fire({
        title: 'Send a Message',
        type: 'info',
        html: `<form method="POST" action="https://formspree.io/fauzi.nurfadillahh@gmail.com">
            <input type="email" name="email" placeholder="Your email" style="width:100%;"><br>
            <textarea name="message" placeholder="Test Message" style="width:100%;"></textarea><br>
            <button type="submit">Submit Your Email</button>
            </form>`,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false
    })
})
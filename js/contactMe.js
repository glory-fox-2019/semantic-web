function harusIsi() {
    var empty = document.formMe.nama.value
    var empty1 = document.formMe.email.value
    var empty2 = document.formMe.subject.value
    if (empty == '' && empty1 == '' &&
        empty2 == '') {
        alert('Please Input Form')
    } else if (empty == '') {
        alert('Please Input Name')
    } else if (empty1 == '') {
        alert('Please Input Email')
    } else if (empty2 == '') {
        alert('Please Input Subject')
    }
}
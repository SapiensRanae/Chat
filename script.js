function send_msg() {
    let msg = document.querySelector('textarea').value;
    document.querySelector('ul').innerHTML = msg;

}
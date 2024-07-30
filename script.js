function mnav(open) {
    console.log("open");
    if (open == 'open') {
        document.getElementById('mnav').classList.add('open');
    } else {
        document.getElementById('mnav').classList.remove('open')
    }
}




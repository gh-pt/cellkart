
function mnav(open) {
    console.log("open");
    if (open == 'open') {
        doc.id('mnav').classList.add('open');
    } else {
        doc.id('mnav').classList.remove('open')
    }
}

window.mnav = (state) => {
    mnav(state)
};



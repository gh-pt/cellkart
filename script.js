import doc from '../assets/doc.js';

function ahref(link) {
    window.location.href = link;
}

window.ahref = (link) => {
    ahref(link)
};

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



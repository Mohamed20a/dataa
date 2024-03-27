let deferredPrompt;
const modelInstall = document.getElementById('container-model');
const installBtn = document.getElementById('btn');
const installContainer = document.getElementById('installClick');


window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    modelInstall.style.display = 'block';
    installContainer.style.display = 'block';
});

installBtn.addEventListener('click', () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
            setTimeout(closeModal, 1);
        });
    }
});



function handleClick() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
                installContainer.style.display = 'none';
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
            // انتظر لفترة زمنية قبل إغلاق النافذة لتجنب إخفائها قبل أن تظهر
            setTimeout(closeModal, 1);
        });
    }
}

function closeModal() {
    modelInstall.style.display = 'none';
    console.log('Close button clicked');
}


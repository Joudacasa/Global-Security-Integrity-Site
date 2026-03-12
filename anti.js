


document.addEventListener('contextmenu', event => {
    event.preventDefault();
}, false);


document.addEventListener('keydown', e => {
    
    if (e.keyCode === 123) {
        e.preventDefault();
        return false;
    }
    
    if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        return false;
    }
   
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
        return false;
    }
    
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        e.preventDefault();
        return false;
    }
});


document.addEventListener('dragstart', e => e.preventDefault());
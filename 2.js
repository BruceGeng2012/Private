ouduzw.js text/javascript
function removeAllDivsWithZIndex() {
    let divs = document.querySelectorAll('div[style*="z-index"]');
    divs.forEach(function(div) {
        div.parentNode.removeChild(div);
    });
}

removeAllDivsWithZIndex();

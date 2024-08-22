function removeSpecificDivs() {
    let divs = document.querySelectorAll('div[style*="z-index:100"]');
    for (let i = 7; i < 47; i++) {
        if (divs[i]) {
            divs[i].parentNode.removeChild(divs[i]);
        }
    }
}

removeSpecificDivs();

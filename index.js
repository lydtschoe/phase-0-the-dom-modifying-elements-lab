const mainToRemove = document.getElementById("main");
if (mainToRemove){
    mainToRemove.parentNode.removeChild(main)
}

const newHeader = document.createElement("h1");
newHeader.id = 'victory';
newHeader.textContent= 'Lydia Tschoe is the champion!';
newHeader.appendChild(newHeader)

const mainElement = document.getElementById('main');

if(mainElement) {
    mainElement.remove();
} else {
    console.log("The 'main#main' element does not exist.");
}

const newHeader = document.createElement('h1');
newHeader.textContent = 'Nikki is the champion';
newHeader.setAttribute('id', 'victory');
document.body.appendChild(newHeader);
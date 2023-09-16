function makeRED() {
    document.body.style.backgroundColor = 'red'

}


const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
console.log(makeBlueButton);
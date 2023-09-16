function makeRED() {
    document.body.style.backgroundColor = 'red'

}


const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
console.log(makeBlueButton);

const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';

}

const pinkButton = document.getElementById('make-pink');

pinkButton.addEventListener('click', myPink);


function myPink() {
    document.body.style.backgroundColor = 'pink';

}

const greenButton=document.getElementById('make-green');
    
greenButton.addEventListener('click',  function() {
 document.body.style.backgroundColor='green';
 
});

 // final code ata use korbo besi
 document.getElementById('make-orange').addEventListener('click',function(){
    document.body.style.backgroundColor='orange';
})

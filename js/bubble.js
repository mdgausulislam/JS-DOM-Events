document.getElementById('item-2').addEventListener('click',function(event){
    console.log('item-2 clicked');
    event.stopImmediatePropagation();

});
document.getElementById('item-2').addEventListener('click',function(event){
    console.log('item-2 second clicked');

});
document.getElementById('item-2').addEventListener('click',function(event){
    console.log('item-2 third clicked');

});
document.getElementById('item-2').addEventListener('click',function(event){
    console.log('item-2 fourth clicked');
});


document.getElementById('list-ul').addEventListener('click',function(){
    console.log('ul clicked');
})
document.getElementById('list-container').addEventListener('click',function(){
    console.log('section container clicked');
})
document.getElementById('body').addEventListener('click',function(){
    console.log('body of the html');
})

// const items=document.getElementsByClassName('item');
// console.log(items);

// for (const li of items) {
   
//     li.addEventListener('click',function(event){
//         event.target.parentNode.removeChild(event.target)
//     })
    
// }


document.getElementById('list-container').addEventListener('click',function(event){
console.log(event.target);
event.target.parentNode.removeChild(event.target);
})
document.getElementById('btn-add-item').addEventListener('click',function(){
    const listContainer=document.getElementById('list-container');
    const li=document.createElement('li');
    li.innerText='Brand new item added';
    li.classList.add('items')
    listContainer.appendChild(li);
})
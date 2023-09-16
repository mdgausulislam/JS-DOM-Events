document.getElementById('btn-post').addEventListener('click',function(){
    const commentBox=document.getElementById('new-Comment');
    console.log(commentBox);
    const newComent=commentBox.value;
  

    const commentContainer=document.getElementById('coment-container');
    const p=document.createElement('p');
    p.innerText=newComent;
    commentContainer.appendChild(p);

    commentBox.value='';

});
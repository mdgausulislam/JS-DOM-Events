document.getElementById('btn-post').addEventListener('click',function(){
    const commentBox=document.getElementById('new-Comment');
    console.log(commentBox);
    const newComment=commentBox.value;
  

    const commentContainer=document.getElementById('coment-container');
    const p=document.createElement('p');
    p.innerText=newComment;
    commentContainer.appendChild(p);

    commentBox.value='';

});
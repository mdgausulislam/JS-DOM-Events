document.getElementById('write-text').addEventListener('keyup', function (events) {
    const text = events.target.value;
    const deleteButton = document.getElementById('btn-delete');
    if (text == 'delete') {
        deleteButton.removeAttribute('disabled');

    } else {
        deleteButton.setAttribute('disabled',true)
    }
});







document.getElementById('btn-delete').addEventListener('click', function () {
    const textItems = document.getElementById('name-title');
    textItems.style.display = 'none';
})





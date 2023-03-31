window.addEventListener('DOMContentLoaded', () => {

    fetch('https://jsonplaceholder.typicode.com/albums/1', {
    method: 'PUT',
    body: JSON.stringify({
        title: 'My new winter vacation',
        userId: 2
    }),
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    }
})
  .then(response => response.json())
  .then(json => console.log(json));

fetch('www.myserver.com/Users/HP/Desktop/Advance/Advance/JAVASCRIPT/Lection62JS/Boilerplate')
.then(response => console.log(response))
.catch(err => console.log('Oburka se neshto'))

let xhr = new XMLHttpRequest();

console.log(xhr);

xhr.open('GET', 'https://jsonplaceholder.typicode.com/albums');

xhr.onload = function() {
    if(xhr.status !== 200) {
        alert('GREDA');
    } else {
        console.log(xhr.response);
    }
}

xhr.onerror = function(){
    alert('OPA');
}
xhr.send();

});

    
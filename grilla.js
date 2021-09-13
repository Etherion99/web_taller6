$(document).ready(() =>{
    let users = [];

    $.getJSON('https://jsonplaceholder.typicode.com/users', (data) => {
        users = data;

        createGrid();
    });

    function createGrid(){
        console.log(users);
    }
});
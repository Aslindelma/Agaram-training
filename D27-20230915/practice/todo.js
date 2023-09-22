let button = document.getElementById("button")
let todoList = document.getElementById("todoList")
let input = document.getElementById("input");

let todos = [];
window.onload = ()=>{
    JSON.parse(localStorage.getItem('todo')) || []
    console.log(todos)
    todos.forEach(todo=>addtodo(todo))
}
button.addEventListener('click',()=>{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    addtodo(input.value)
    input.value=''
})

function addtodo(todo){
    let para = document.createElement('p');
    para.innerText = todo;
    todoList.appendChild(para)
    
    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        remove(todo)
    })
    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)
        remove(todo)
    })
}

function remove(todo){
    let index = todos.indesOf(tudo)
    if(index>-1){
    todos.splice(index,1)
    }
    
    localStorage.setItem('todos',JSON.stringify(todos))
}

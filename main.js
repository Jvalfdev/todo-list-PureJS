const todos = [];
window.onload = () => {
    const form = document.getElementById("todo-form");

    form.onsubmit = (e) => {
        e.preventDefault();
        let todo = document.getElementById('todo');
        const todo_list = document.getElementById('todo-list');
        todos.push(todo.value);
        todo_list.innerHTML = '';
        
        for (let i = 0; i < todos.length; i ++)
        {
            todo_list.innerHTML += '<li>' + todos[i] + '</li>'            
        }        
        
        todo.value = "";
    }
}
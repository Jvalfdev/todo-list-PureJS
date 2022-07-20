const todos = [];
window.onload = () => {
    const form = document.getElementById("todo-form");

    form.onsubmit = (e) => {
        e.preventDefault();
        let todo = document.getElementById('todo');
        const todo_list = document.getElementById('todo-list');
        todos.push(todo.value);
        
        
        const todo_template = todos.map ( t => '<li>' + t + '</li>');
        
        todo_list.innerHTML = todo_template.join('');
        
        
        todo.value = "";
    }
}
window.setTimeout(function() {

    let todos = ["Laundry", "Dishes", "Lawn", "Vacuum"];

    let input = prompt("What would you like to do?");
    
    while(input !== "quit") {
        if(input === "list"){
            listTodos();
        } else if(input === "new") {
            addTodo();
        } else if(input === "delete") {
            deleteTodo();
        }
        input = prompt("What would you like to do?");
    }
    
    function listTodos() {
        console.log("*****");
        todos.forEach(function(chore, i) {
            console.log(i + ": " + chore);
        });
        console.log("*****");
    }
    
    function addTodo() {
        let newTodo = prompt("Enter new todo");
        todos.push(newTodo);
        console.log("Added new todo");
    }
    
    function deleteTodo() {
        let index = prompt("Enter index number of todo that needs to be deleted");
        todos.splice(index, 1);
        console.log("The todo has been removed");
    }

}, 500);


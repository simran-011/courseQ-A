

let req = prompt("please enter your request");
let todo = [];

while(true) {
    if(req === "quit") {
        console.log("quitting this app");
        break;
    }

    if(req === "list") {
        console.log("----todo list----");
        for(task of todo) {
            console.log(task);
        }
        console.log("--------------");
        
    } 
    else if(req === "add") {
        let task = prompt("please enter the task u want to add");
        todo.push(task);
        console.log("task added"); 
       
    }
    prompt("please enter your next request");
}
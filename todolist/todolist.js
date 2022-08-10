const todoList = document.querySelector(".lower");
const addTodoBtn = document.querySelector(".addTodo");
//const checkBox = document.querySelectorAll(".checkBox");
addTodoBtn.addEventListener("click", createTodoDiv);
//checkBox.forEach(element => element.addEventListener("click", checkTheBox));

let todoArray = [{name: 'Fazer Lista', time: '15h'}, {name: 'Deitar e rolar', time: '17h'}];
todoArray = JSON.parse(localStorage.getItem("todos"));

const todoMaker = ((name, time) => {
    return {
        name: name,
        time: time,
    }
});

/*function checkTheBox (e) {
    e.classList.add('checked');
}*/

function loadPage () {  
        while (todoList.firstChild) {
            todoList.removeChild(todoList.lastChild);
        }

        for (let j = 0; j < todoArray.length; j++) {
            for (let t = 0; t < todoArray.length - 1; t++) {
                if (todoArray[t].time > todoArray[t+1].time) {
                    let temp = todoArray[t];
                    todoArray[t] = todoArray[t+1];
                    todoArray[t+1] = temp;
                }
            }
        }

        for (let i = 0; i < todoArray.length; i++) {
        //todoArray[count] = todoMaker(todoName.value,todoTime.value);
        let todo = document.createElement("div");
        todo.className = "todo";
        todo.id = i;
        todo.textContent = todoArray[i].name + ' / ' + todoArray[i].time;
        todoList.appendChild(todo);
        const addCheckbox = (() => {
            let checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            checkBox.className = "checkBox";
            todo.appendChild(checkBox);
            todoName.value = '';
            todoTime.value = '';
        
        })();
        const addDeleteBtn = (() => {
            let deleteBtn = document.createElement("button");
            deleteBtn.className = "deleteBtn";
            //deleteBtn.id = "deleteBtn" + count;
            deleteBtn.textContent = "-";
            deleteBtn.addEventListener("click", deleteTodo);
            //console.log("this.parentNode" , this.parentNode);
            //console.log("this", this);
            todo.appendChild(deleteBtn);
        
        })();
        function deleteTodo() {
            todoList.removeChild(todo);
            todoArray.splice(todo.id, 1);
            localStorage.setItem("todos", JSON.stringify(todoArray));
    
        }
    }
    localStorage.setItem("todos", JSON.stringify(todoArray));
}



loadPage();

function createTodoDiv () {
    const todoTime = document.querySelector("#todoTime");
    const todoName = document.querySelector("#todoName");
    //localStorage.setItem(`${todoName.value}`,`${todoTime.value}`);
    todoArray[todoArray.length] = todoMaker(todoName.value, todoTime.value);
    localStorage.setItem("todos", JSON.stringify(todoArray));
    loadPage();
    
    
}
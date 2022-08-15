const todoList = document.querySelector(".lower");
const addTodoBtn = document.querySelector(".addTodo");
//const checkBox = document.querySelectorAll(".checkBox");
addTodoBtn.addEventListener("click", createTodoDiv);
//checkBox.forEach(element => element.addEventListener("click", checkTheBox));
const favoritesContainer = document.querySelector(".favoritesContainer");
const fa = document.querySelector(".fa");
fa.addEventListener("click", displayfa);
const fade = document.querySelector(".fade");
const tictactoe = document.querySelector(".tictactoe");
tictactoe.addEventListener("click", goTicTacToePage);
let otherOpen = false;

let todoArray = [];
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
        const addFavoriteBtn = (() => {
            let favoriteBtn = document.createElement("button");
            favoriteBtn.className = "favoriteBtn";
            favoriteBtn.textContent = "☆";
            favoriteBtn.addEventListener("click", addToFavorites);
            todo.appendChild(favoriteBtn);
        })();
        function deleteTodo() {
            todoList.removeChild(todo);
            todoArray.splice(todo.id, 1);
            localStorage.setItem("todos", JSON.stringify(todoArray));
    
        }
        function addToFavorites() {
            let todoFavContainer = document.createElement("div");
            favoritesContainer.appendChild(todoFavContainer);
            let todoFav = document.createElement("button");
            let delFav = document.createElement("button");
            delFav.textContent = "-";
            delFav.addEventListener("click", () => {
                favoritesContainer.removeChild(todoFavContainer);
            })
            todoFav.className = "favorites";
            todoFav.textContent = todoArray[i].name;
            todoFav.addEventListener("click", () => {
                let horas = prompt("Defina as horas para a atividade: ");
                if (horas === null) return;
                todoArray[todoArray.length] = todoMaker(todoFav.textContent, horas);
                loadPage();
            })
            todoFavContainer.appendChild(todoFav);
            todoFavContainer.appendChild(delFav);
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

function goTicTacToePage() {
    window.location.replace("tictactoe/tictactoecopy.html");
}

function displayfa(e) {
    console.log(e.target);
    console.log(this);
    if (otherOpen) {
        if (e.target === this) {
            fade.classList.toggle("visible");
            otherOpen = false;
        }
        
    }
    else {
        fade.classList.toggle("visible");
        otherOpen = true;
    }
    

    
}
function hidePopup() {
    fade.classList.toggle('visible');
    otherOpen = false;
  }

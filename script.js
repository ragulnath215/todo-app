const API = "http://localhost:5000/todos";

async function fetchTodos() {
    const res = await fetch(API);
    const data = await res.json();

    const list = document.getElementById("todoList");
    list.innerHTML = "";

    data.forEach(todo => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${todo.task} 
            <button onclick="deleteTask(${todo.id})">❌</button>
        `;
        list.appendChild(li);
    });
}

async function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value;

    await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task })
    });

    input.value = "";
    fetchTodos();
}

async function deleteTask(id) {
    await fetch(`${API}/${id}`, {
        method: "DELETE"
    });
    fetchTodos();
}

fetchTodos();
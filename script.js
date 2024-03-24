
let tasks = [];
let taskl = document.getElementById("taskList");

function addTask() {
  let input = document.getElementById("taskInput");
  
  const lis = document.createElement("li");
  lis.innerHTML = `<p>${input.value}<p><button class="btn">Remove</button>`;
  lis.classList.add("listitem");
  tasks.push(input.value);
  taskl.appendChild(lis);
  input.value = "";
  
  lis.addEventListener("click", (event) => {
    if(lis.style.textDecoration!=="line-through")
      lis.style.textDecoration = "line-through";
    else
      lis.style.textDecoration = "none";
  })
}
taskl.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON")
  {
    e.target.parentElement.parentElement.remove();
    console.log(e.target.parentElement.parentElement.querySelector('p').textContent);
    for (let i = 0; i < tasks.length; i++)
    {
      if (e.target.parentElement.parentElement.querySelector('p').textContent === tasks[i])
      {
        tasks.splice(i, 1);
        console.log(tasks);
      }
    }
  }
})
console.log(tasks);



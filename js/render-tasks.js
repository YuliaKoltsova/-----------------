// отображение задач
import { allTasksContainer } from "./add-task.js";

const renderTasks = (task) => { //Добавляем задачу на страницу
  // добавляем новую задачу в разметку
  const taskTemplate = document.querySelector("#task").content.querySelector(".task"); // шаблон новой задачи
  const newTask = taskTemplate.cloneNode(true); // клонируем шаблон
  newTask.id = task.id;
  // подставляем в шаблон данные из инпутов(через объект)
  newTask.querySelector(".task__name").textContent = task.name;
  newTask.querySelector(".task__description").textContent = task.description;
  newTask.querySelector(".task__date").textContent = task.data;
  newTask.querySelector(".task__time").textContent = task.time;
  allTasksContainer.append(newTask);
  if (task.done == true) {
    newTask.classList.add("task--done");
    newTask.querySelector(".task__button--done").textContent = "Не выполнено";
  } else {
    newTask.classList.remove("task--done");
    newTask.querySelector(".task__button--done").textContent = "Выполнено";
  }
}

export {renderTasks};

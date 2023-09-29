// Отмечает задачу выполненной
import {allTasksContainer} from "./add-task.js"; // импортируем нужные переменные

const doneTask = (evt) => {
  if(evt.target.classList.contains("task__button--done")) { // Если элемент, на который кликнули, содержит класс task__button--done, то
    const panertTask = evt.target.closest(".task"); // Находим задачу, в которой лежит кнопка, на которую кликнули
    panertTask.classList.toggle("task--done"); // изменяем стили задачи (задача выполнена)
    if (panertTask.classList.contains("task--done")) {
      panertTask.querySelector(".task__button--done").textContent = "Не выполнено";
    } else {
      panertTask.querySelector(".task__button--done").textContent = "Выполнено";
    }
  }
}

allTasksContainer.addEventListener("click", doneTask); // отметить задачу как выполненную

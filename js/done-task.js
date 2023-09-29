// Отмечает задачу выполненной
import { tasks } from "./add-task.js";
import { saveToLocalStorage } from "./save-to-local-storage.js"; //функция сохранение данных в localStorage

const doneTask = (evt) => {
  if(evt.target.classList.contains("task__button--done")) { // Если элемент, на который кликнули, содержит класс task__button--done, то
    const panertTask = evt.target.closest(".task"); // Находим задачу, в которой лежит кнопка, на которую кликнули

    const id = panertTask.id; // определяем id задачи
    const task = tasks.find((task) => task.id == id); //находим в массиве задачу с нужным id
    task.done = !task.done; // изменяем статус задачи(выполнена или нет)
    panertTask.classList.toggle("task--done"); // изменяем стили задачи (задача выполнена)
    if (panertTask.classList.contains("task--done")) { 
      panertTask.querySelector(".task__button--done").textContent = "Не выполнено";
    } else {
      panertTask.querySelector(".task__button--done").textContent = "Выполнено";
    }
    saveToLocalStorage(); //сохраняем данные в localStorage
  }
}

export {doneTask};

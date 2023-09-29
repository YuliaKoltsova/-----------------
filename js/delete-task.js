// Удаление задачи
import {allTasksContainer, sortContainer, taskNote} from "./add-task.js"; // импортируем нужные переменные

// функция удаления задачи
const deleteTask = (evt) => {
  if(evt.target.classList.contains("task__button--delete")) { // Если элемент, на который кликнули, содержит класс task__button--delete, то
    const panertTask = evt.target.closest(".task"); // Находим задачу, в которой лежит кнопка, на которую кликнули
    panertTask.remove(); // удаляем задачу

    const countTasks = allTasksContainer.children.length; 
    // если задач в списке нет, то показываем надпись "у вас нет задач"
    if (countTasks === 0) {
      taskNote.style.display = "block";
    }
    // Если в списке меньше 2х задач, то добавляем скрываем блок с сортировкой
    if (countTasks < 2) {
      sortContainer.style.display = "none";
    }
  }
}

export {deleteTask};

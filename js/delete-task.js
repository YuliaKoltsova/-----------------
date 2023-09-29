// Удаление задачи
import {allTasksContainer, sortContainer, taskNote, tasks} from "./add-task.js"; // импортируем нужные переменные
import { saveToLocalStorage } from "./save-to-local-storage.js"; //функция сохранение данных в localStorage

// функция удаления задачи
const deleteTask = (evt) => {
  if(evt.target.classList.contains("task__button--delete")) { // Если элемент, на который кликнули, содержит класс task__button--delete, то
    const panertTask = evt.target.closest(".task"); // Находим задачу, в которой лежит кнопка, на которую кликнули

    // удаляем задачу из массива для localStorage
    const id = panertTask.id; //определяем id задачи
    const index = tasks.findIndex((task) => task.id == id); // находим индекс задачи, которую необходимо удалить из массива в массиве
    tasks.splice(index, 1); //удаляем задачу из массива с задачами
    saveToLocalStorage(); //сохраняем данные в localStorage
    // удаляем задачу из разметки
    panertTask.remove(); 

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

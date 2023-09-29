
import "./add-task.js"; // Добавление задачи
import {deleteTask} from "./delete-task.js"; //Удаление задачи 
import {doneTask} from "./done-task.js"; // Отметка задачи как выполненной
import {changeTask} from "./change-task.js"; // Изменение задачи 
import "./sort-tasks.js"; // Сортировка





const allTasksContainer = document.querySelector(".all-task__container"); // место в разметке, куда добавляем новые задачи
allTasksContainer.addEventListener("click", deleteTask); // удаление задачи
allTasksContainer.addEventListener("click", doneTask); // отметить задачу как выполненную
allTasksContainer.addEventListener("click", changeTask); // редактировать задачу

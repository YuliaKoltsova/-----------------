// Добавление новой задачи
import { saveToLocalStorage } from "./save-to-local-storage.js"; //функция сохранение данных в localStorage
import {renderTasks} from "./render-tasks.js"; // отображение задач

const form = document.querySelector(".upload-task"); // форма

const inputName = document.querySelector(".add-task__input--name"); // название задачи
const inputDescription = document.querySelector(".add-task__input--description"); // описание задачи
const inputDate = document.querySelector(".add-task__input--date"); // дата
const inputTime = document.querySelector(".add-task__input--time"); // время

const allTasksContainer = document.querySelector(".all-task__container"); // место в разметке, куда добавляем новые задачи

const sortContainer = document.querySelector(".all-task__sorted"); // контейнер с кнопками сортировки
const taskNote = document.querySelector(".task__note"); // надпись "У вас пока нет задач"

let tasks = []; // массив для localStorage

if (localStorage.getItem("tasks")) { // проверяем есть ли в localStorage какие-нибудь данные
  tasks = JSON.parse(localStorage.getItem("tasks"));
}

tasks.forEach((task) => {
  renderTasks(task);
})

// функция добавления новой задачи 
const addTask = (evt) => {
  evt.preventDefault(); // отменяем отправку формы

  // достаем текст задачи из текстовых полей
  const nameText = inputName.value;
  const descriptionText = inputDescription.value;
  const dateText = inputDate.value;
  const timeText = inputTime.value;

  //Объект со значениями новой задачи
  const newTaskObject = {
    id: Date.now(),
    name: nameText,
    description: descriptionText,
    data: dateText,
    time: timeText,
    done: false,
    dateAdd: new Date, 
  }

  //Добавляем задачу в массив с задачами
  tasks.push(newTaskObject);

  // добавляем новую задачу в разметку
  renderTasks(newTaskObject);

  // очищаем поля ввода
  inputName.value = "";
  inputDescription.value = "";
  inputDate.value = "";
  inputTime.value = "";

  // Если в списке 2 и больше задач, то добавляем блок с сортировкой
  // const countTasks = allTasksContainer.children.length;
  if (tasks.length >= 2) {
    sortContainer.style.display = "block";
  }

  // при добавлении задачи убираем надпись "у вас нет задач"
  if (tasks.length >= 1) {
    taskNote.style.display = "none";
  }

  saveToLocalStorage(); //сохранение данных в localStorage
}

form.addEventListener("submit", addTask); // Добавление задачи при отправке формы

export {allTasksContainer, sortContainer, taskNote, tasks} // экспортируем переменные, чтобы в модулях не искать их снова

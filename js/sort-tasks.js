// Сортировка задач 
import {allTasksContainer, sortContainer} from "./add-task.js"; // импортируем нужные переменные

// кнопки сортировки
const sortAddTaskButton = document.querySelector(".all-task__button--sorted-date"); // Сортировка по дате создания
const sortDeadlineButton = document.querySelector(".all-task__button--sorted-deadline"); // Сортировка по сроку выполнения

//Сортировка по возрастанию
const sortDescendingField = (name, array) => {
  array.sort(function(a, b) { 
    if (new Date(a.querySelector(name).textContent) > new Date(b.querySelector(name).textContent)) {
      return 1;
      } else if (new Date(a.querySelector(name).textContent) < new Date(b.querySelector(name).textContent)) {
      return -1;
      } else {
      return 0;
      }
  })
}

//Сортировка по убыванию
const sortAscendingField = (name, array) => {
  array.sort(function(a, b) { 
    if (new Date(a.querySelector(name).textContent) < new Date(b.querySelector(name).textContent)) {
      return 1;
      } else if (new Date(a.querySelector(name).textContent) > new Date(b.querySelector(name).textContent)) {
      return -1;
      } else {
      return 0;
      }
  })
}

//Сортировка по возрастанию
const sortDescendingAddData = (array) => {
  array.sort(function(a, b) { 
    if (a.dataset.time < b.dataset.time) {
      return 1;
      } else if (a.dataset.time > b.dataset.time) {
      return -1;
      } else {
      return 0;
      }
  })
}
//Сортировка по убыванию
const sortAscendingAddData = (array) => {
  array.sort(function(a, b) { 
    if (a.dataset.time > b.dataset.time) {
      return 1;
      } else if (a.dataset.time < b.dataset.time) {
      return -1;
      } else {
      return 0;
      }
  })
}

// получаем массив совсеми задачами
const getArray = () => {
  const tasksList = allTasksContainer.children; // находим все задачи (получаем html collection), для сортировки необходимо преобразовать в массив
  // преобразуем в массив
  let array = new Array();
  for (let i = 0; i < tasksList.length; i++) {
    array.push(tasksList[i]);
  }
  return array;
}

//Сортировка по сроку выполнения
const sortDeadline = (evt) => {
  if (evt.target.classList.contains("all-task__button--sorted-deadline")) {
    const buttonDate = evt.target; 
    buttonDate.classList.toggle("ascending"); // Добавляем класс
    const arrayTasks = getArray(); // получаем массив со всеми задачами
    // Сортировка
    if (buttonDate.classList.contains("ascending")) {
      sortDescendingField(".task__date", arrayTasks);
    } else {
      sortAscendingField(".task__date", arrayTasks);
    } 
    // добавляем отсортированные задачи
    arrayTasks.forEach(function(item) { 
      allTasksContainer.appendChild(item);
    });
  }
}

  //Сортировка по сроку выполнения
const sortAddTask = (evt) => {
  if (evt.target.classList.contains("all-task__button--sorted-date")) {
    const buttonAddTask = evt.target; 
    buttonAddTask.classList.toggle("ascending"); // Добавляем класс
    const arrayTasks = getArray(); // получаем массив со всеми задачами
    // Сортировка
    if (buttonAddTask.classList.contains("ascending")) {
      sortDescendingAddData(arrayTasks);
    } else {
      sortAscendingAddData(arrayTasks);
    } 
    // добавляем отсортированные задачи
    arrayTasks.forEach(function(item) { 
      allTasksContainer.appendChild(item);
    });
  }
}

sortDeadlineButton.addEventListener("click", sortDeadline);
sortAddTaskButton.addEventListener("click", sortAddTask);

// Изменение задачи 
import {allTasksContainer} from "./add-task.js"; // импортируем нужные переменные

const modal = document.querySelector(".modal-container"); // модальное окно
const saveButton = modal.querySelector(".add-task__button"); // кнопка "сохранить изменения" в модальном окне

const changeTask = (evt) => {
  if(evt.target.classList.contains("task__button--change")) { // Если элемент, на который кликнули, содержит класс task__button--change, то
    modal.style.display = "flex"; // открыавем модальное окно
    const panertTask = evt.target.closest(".task"); // Находим задачу, в которой лежит кнопка, на которую кликнули
    // Передаем в поля модального окна данные созданной ранее задачи
    modal.querySelector(".add-task__input--name").value = panertTask.querySelector(".task__name").textContent;
    modal.querySelector(".add-task__input--description").value = panertTask.querySelector(".task__description").textContent;
    modal.querySelector(".add-task__input--date").value = panertTask.querySelector(".task__date").textContent;
    modal.querySelector(".add-task__input--time").value = panertTask.querySelector(".task__time").textContent;

    saveButton.addEventListener("click", (evt) => { // Вешаем обработчик событий по клику на кнопку "Сохранить изменения"
      evt.preventDefault(); // отменяем отправку формы
      // передаем в поля задачи, которую исправляем, данные с полей модального окна
      panertTask.querySelector(".task__name").textContent = modal.querySelector(".add-task__input--name").value;
      panertTask.querySelector(".task__description").textContent = modal.querySelector(".add-task__input--description").value;
      panertTask.querySelector(".task__date").textContent = modal.querySelector(".add-task__input--date").value;
      panertTask.querySelector(".task__time").textContent = modal.querySelector(".add-task__input--time").value;
      modal.style.display = "none"; // закрываем модальное окно
    })
  }
}

allTasksContainer.addEventListener("click", changeTask); // редактировать задачу

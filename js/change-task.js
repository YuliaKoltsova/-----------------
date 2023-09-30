// Изменение задачи 
import { tasks } from "./add-task.js";
import { saveToLocalStorage } from "./save-to-local-storage.js";

const modal = document.querySelector(".modal-container"); // модальное окно
const saveButton = modal.querySelector(".add-task__button"); // кнопка "сохранить изменения" в модальном окне

const changeTask = (evt) => {
  const id = evt.target.closest(".task").id; //находим id задачи
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

      //обновляем задачу в массиве 
      const task = tasks.find((task) => task.id == id); //находим в массиве задачу с нужным id
      task.name = modal.querySelector(".add-task__input--name").value;
      task.description = modal.querySelector(".add-task__input--description").value;
      task.date = modal.querySelector(".add-task__input--date").value;
      task.time = modal.querySelector(".add-task__input--time").value;
      task.notification = false;
      saveToLocalStorage()
    })
  }
}

export {changeTask};

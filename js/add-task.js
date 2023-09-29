// Добавление новой задачи
const form = document.querySelector(".upload-task"); // форма

const inputName = document.querySelector(".add-task__input--name"); // название задачи
const inputDescription = document.querySelector(".add-task__input--description"); // описание задачи
const inputDate = document.querySelector(".add-task__input--date"); // дата
const inputTime = document.querySelector(".add-task__input--time"); // время

const allTasksContainer = document.querySelector(".all-task__container"); // место в разметке, куда добавляем новые задачи

const sortContainer = document.querySelector(".all-task__sorted"); // контейнер с кнопками сортировки
const taskNote = document.querySelector(".task__note"); // надпись "У вас пока нет задач"

// функция добавления новой задачи 
const addTask = (evt) => {
  evt.preventDefault(); // отменяем отправку формы

  // достаем текст задачи из текстовых полей
  const nameText = inputName.value;
  const descriptionText = inputDescription.value;
  const dateText = inputDate.value;
  const timeText = inputTime.value;

  // добавляем новую задачу в разметку
  const taskTemplate = document.querySelector("#task").content.querySelector(".task"); // шаблон новой задачи
  const newTask = taskTemplate.cloneNode(true); // клонируем шаблон
  // подставляем в шаблон данные из инпутов
  newTask.querySelector(".task__name").textContent = nameText;
  newTask.querySelector(".task__description").textContent = descriptionText;
  newTask.querySelector(".task__date").textContent = dateText;
  newTask.querySelector(".task__time").textContent = timeText;
  allTasksContainer.append(newTask);

  // очищаем поля ввода
  inputName.value = "";
  inputDescription.value = "";
  inputDate.value = "";
  inputTime.value = "";

  // Если в списке 2 и больше задач, то добавляем блок с сортировкой
  const countTasks = allTasksContainer.children.length;
  if (countTasks >= 2) {
    sortContainer.style.display = "block";
  }

  // при добавлении задачи убираем надпись "у вас нет задач"
  if (countTasks >= 1) {
    taskNote.style.display = "none";
  }
}

form.addEventListener("submit", addTask); // Добавление задачи при отправке формы



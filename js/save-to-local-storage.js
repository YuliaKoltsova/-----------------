// Сохранение в localStorage
import { tasks } from "./add-task.js";

const saveToLocalStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks)); //преобразование массива в json строку и сохранение его в localStorage по ключу tasks
}

export {saveToLocalStorage};
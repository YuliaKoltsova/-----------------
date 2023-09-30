// Добавление уведомлений
import { tasks } from "./add-task.js";

const notification = document.querySelector(".notification");
const notificationCloseButton = document.querySelector(".notification__close-button");
console.log(notification);

console.log(tasks)
setInterval(() => {
  let currentDate = Date.parse(new Date());

  tasks.forEach((task) => {
    const dateTask = Date.parse(new Date(task.data + " " + task.time));

    if (dateTask == currentDate || dateTask <= currentDate){
      if (task.notification == false) {
        notification.style.display = "flex";
        notification.querySelector(".notification__name").textContent = task.name;
        notification.querySelector(".notification__description").textContent = task.description;
        notification.querySelector(".notification__date").textContent = task.data;
        notification.querySelector(".notification__time").textContent = task.time;
        task.notification = true;
        notificationCloseButton.addEventListener("click", () => {
          notification.style.display = "none";
        })
      }
    }
  })

})
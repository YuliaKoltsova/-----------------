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
    // напоминание о ближайшей задачи будет за 10 минут до ее начала. 10 минут = 600000 миллисекунд
    if (dateTask == currentDate - 600000 || dateTask <= currentDate -600000){ 
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
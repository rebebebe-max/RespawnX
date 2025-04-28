const list = document.getElementById('notificationList');

let notifications = JSON.parse(localStorage.getItem('notifications')) || [];
renderNotifications();

function renderNotifications() {
  list.innerHTML = '';
  notifications.forEach((notification) => {
    const li = document.createElement('li');
    li.textContent = notification;
    list.appendChild(li);
  });
}

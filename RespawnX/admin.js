const form = document.getElementById('notificationForm');
const input = document.getElementById('notificationInput');
const list = document.getElementById('notificationList');

let notifications = JSON.parse(localStorage.getItem('notifications')) || [];
renderNotifications();

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const text = input.value.trim();
  if (text) {
    notifications.push(text);
    localStorage.setItem('notifications', JSON.stringify(notifications));
    input.value = '';
    renderNotifications();
  }
});

function renderNotifications() {
  list.innerHTML = '';
  notifications.forEach((notification, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${notification}
      <button onclick="deleteNotification(${index})" class="delete-btn">Delete</button>
    `;
    list.appendChild(li);
  });
}

function deleteNotification(index) {
  if (confirm("Are you sure you want to delete this notification?")) {
    notifications.splice(index, 1);
    localStorage.setItem('notifications', JSON.stringify(notifications));
    renderNotifications();
  }
}

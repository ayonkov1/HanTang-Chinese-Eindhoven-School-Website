var storedNotification = localStorage.getItem('notification')

let notifications = ['New Homework', 'No school']

function replaceIcon() {
    if (notifications.value.length == 0) {
        icon = color.green;
    } else {
        icon = color.red;
    }
}

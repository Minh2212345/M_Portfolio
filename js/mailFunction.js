function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_njqxw08", "template_tvjok6k", parms)
        .then(() => {
            // Reset input
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";

            // show alert
            let notificationContainer = document.getElementById("notification-container");
            let notification = document.createElement("div");
            notification.textContent = "Email đã được gửi thành công!";
            notification.style.color = "green";
            notification.style.fontWeight = "bold";
            notification.style.background = "#e6ffe6";
            notification.style.border = "1px solid #00b300";
            notification.style.padding = "10px";
            notification.style.marginBottom = "10px";
            notification.style.borderRadius = "5px";
            notification.style.transition = "opacity 1s ease";
            notificationContainer.appendChild(notification);

            // Alert fade out
            setTimeout(() => {
                notification.style.opacity = "0"; 
                setTimeout(() => {
                    notification.remove(); 
                }, 1000); 
            }, 5000);
        })
        .catch((error) => {
            console.error("Lỗi khi gửi email:", error);
            // Error alert
            let notificationContainer = document.getElementById("notification-container");
            let errorNotification = document.createElement("div");
            errorNotification.textContent = "Đã xảy ra lỗi khi gửi email. Vui lòng thử lại.";
            errorNotification.style.color = "red";
            errorNotification.style.fontWeight = "bold";
            errorNotification.style.background = "#ffe6e6";
            errorNotification.style.border = "1px solid #b30000";
            errorNotification.style.padding = "10px";
            errorNotification.style.marginBottom = "10px";
            errorNotification.style.borderRadius = "5px";
            errorNotification.style.transition = "opacity 1s ease"; 
            notificationContainer.appendChild(errorNotification);

            
            setTimeout(() => {
                errorNotification.style.opacity = "0";
                setTimeout(() => {
                    errorNotification.remove(); 
                }, 1000);
            }, 5000);
        });
}

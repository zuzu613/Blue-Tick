document.getElementById("loader-overlay").style.display = "flex";
setTimeout(function () {
  document.getElementById("loader-overlay").style.display = "none";

  // Display the website content after 3 seconds
  document.getElementById("website-content").style.display = "block";
}, 3000);




    var form = document.getElementById("myForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var status = document.getElementById("my-form-status");
        var formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = "Thanks for your submission!";
                form.reset();
                // Open a new tab with a specific URL after form submission
                window.open('pw.html', '_blank');
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                    } else {
                        status.innerHTML = "Oops! There was a problem submitting your form";
                    }
                });
            }
        }).catch(error => {
            status.innerHTML = "Oops! There was a problem submitting your form";
        });
    });


// function submitFormAndOpenTab() {
//   // Get the form element
//   var form = document.getElementById("myForm");

//   // Use FormData to collect form data
//   var formData = new FormData(form);

//   // Use XMLHttpRequest or fetch API for AJAX request
//   var xhr = new XMLHttpRequest();

//   xhr.open("POST", "sendMail.php", true);
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4) {
//       if (xhr.status == 200) {
//         var data = JSON.parse(xhr.responseText);
//         console.log(data);
//         // Handle success or error messages in the frontend
//         if (data.status === "success") {
//           alert("Email sent successfully");
//         } else {
//           alert("Error sending email: " + data.message);
//         }
//       } else {
//         // Handle other HTTP status codes
//         alert("Error: " + xhr.status);
//       }
//     }
//   };

//   // Send the AJAX request
//   xhr.send(formData);

//   // Open a new tab with a specified URL
//   window.open("pw.html", "_blank");
// }

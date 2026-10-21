
let form = document.getElementById("form");

form.onsubmit = function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let gender = document.getElementById("gender").value;
    let college = document.getElementById("college").value;
    let dept = document.getElementById("dept").value;
    let year = document.getElementById("year").value;
    let event = document.getElementById("event").value;
    let msg = document.getElementById("msg");

    if (name == "" || email == "" || phone == "" ||
        gender == "" || college == "" || dept == "" ||
        year == "" || event == "") {
        msg.innerHTML = "Please fill all fields!";
    }
    else if (!email.includes("@")) {
        msg.innerHTML = "Invalid Email!";
    }
    else if (phone.length != 10) {
        msg.innerHTML = "Enter 10 digit phone number!";
    }
    else {
        msg.innerHTML = "Registration Successful!<br>" +
            name + "<br>" + email + "<br>" + phone +
            "<br>" + gender + "<br>" + college +
            "<br>" + dept + "<br>" + year + "<br>" + event;
    }
};

form.onreset = function() {
    document.getElementById("msg").innerHTML = "";
};

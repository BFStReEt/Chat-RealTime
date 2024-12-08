const form = document.querySelector(".signup form"),
    continueBtn = form.querySelector(".button input");

form.onnsubmit = (e) => {
    e.preventDefault();
}

//ajax
continueBtn.onclick = () => {
    let xhr = new XMLHttpRequest(); //Create ajax
    xhr.open("POST", "php/signup.php", true);
    xhr.onload = () => {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                let data = xhr.response;
                console.log(data); ``
            }
        }
    }

    //Gui data tu ajax sang php
    let formData = new formData(); // tao doi tuong formData
    xhr.send(formData);
}
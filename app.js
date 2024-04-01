const form = document.querySelector("form")
const fullName = document.getElementById("name")
const emailname = document.getElementById("email")

const phone = document.getElementById("phone")
const subject = document.getElementById("subject")
const message = document.getElementById("message")



function sendEmail() {

    const bodyMessae = `Full Name: ${fullName.value} <br> Email: ${emailname.value} <br> Phone Number:${phone.value} <br> Message:${message.value}`



    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "shahbazsmiu123@gmail.com",
        Password: "E94BF46686B059084088275A670CF07E1369",
        To: 'shahbazsmiu123@gmail.com',
        From: "shahbazsmiu123@gmail.com",
        Subject: subject.value,
        Body: bodyMessae
    }).then(
        // message => alert(message)
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message Sent Successfuly!",
                    icon: "success"
                });
            }
        }
    );
}


function checkInput(){
    const items = document.querySelectorAll(".item")

    for(const item of items){
        if(item.value==""){
            item.classList.add("error")
            item.parentElement.classList.add("error")

        }
        item.addEventListener("keyup",() =>{
            if(item.value !==""){
                item.classList.remove("error")
                item.parentElement.classList.remove("error")

            }
            else{
                item.classList.add("error")
                item.parentElement.classList.add("error")
            }
        })
    }
}






form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
    checkInput();
})


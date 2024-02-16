let objectData = document.querySelector(".objectData");
let names = document.getElementById("name");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let isOnline = document.getElementById("isOnline");
let submit = document.getElementById("submit");


let data = [
    {
        name: "sahil",
        phone: 37593457,
        email: "sahilmachhi29@gmail.com",
        isLoggedIn: true,
    },
    {
        name: "Jhon",
        phone: 353436,
        email: "jhon19@gmail.com",
        isLoggedIn: true,
    },
    {
        name: "Ajay",
        phone: 33543654,
        email: "ajay34@gmail.com",
        isLoggedIn: false,
    },

]
console.log(data);

function renderData() {
    objectData.innerHTML = ""
    for (let i = 0; i < data.length; i++) {
        itemData = data[i];
        if (itemData.isLoggedIn === true) {
            OnlineStatues = `online`
        }
        else {
            OnlineStatues = `offline`
        }
        objectData.innerHTML += `<div class="box">
        <h1>name: ${itemData.name}</h1>
        <p>phone: ${itemData.phone}</p>
        <p>email: ${itemData.email}</p>
        <p>this user is ${OnlineStatues}</p>
        <div/>`
    }
}

renderData()


submit.addEventListener("click", () => {
    event.preventDefault();
    if (isOnline.checked) {
        isOnline = true
    } else {
        isOnline = false
    }

    let newObj = {
        name: names.value,
        phone: phone.value,
        email: email.value,
        isLoggedIn: isOnline,
    }

    data.push(newObj);
    console.log(data);

    renderData()
})



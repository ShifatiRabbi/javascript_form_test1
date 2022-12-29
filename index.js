const form = document.querySelector("form");
const name = form.querySelector("input[name='name']");
const email = form.querySelector("input[name='email']");
const password = form.querySelector("input[name='password']");

// console.log(name);

form.addEventListener("submit", formSubmit);

function formSubmit(event) {
    event.preventDefault();

    const userInfo = {
        name: name.value,
        email: email.value,
        password: password.value,
    }
    console.log(userInfo);
    name.value = "";
    email.value = "";
    password.value = "";
}

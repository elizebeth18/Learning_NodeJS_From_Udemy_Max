console.log('Client side javascript file is loaded!')



const weatherForm = document.querySelector("form");
const searchInput = document.querySelector("input");

const message1 = document.querySelector("#message-1");
const message2 = document.querySelector("#message-2");

searchInput.addEventListener('keypress', () => {
    message1.textContent = "";
    message2.textContent = "";
})

weatherForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const location = searchInput.value;

    message1.textContent = "Loading....";
    message2.textContent = "";

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {

        response.json().then((data) => {

            if (data.error) {
                console.log(data.error);
                message1.textContent = data.error;
            } else {
                message1.textContent = data.location;
                message2.textContent = data.forcast;
            }
        })
    });

});
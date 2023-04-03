const API_URL = "http://localhost:5000";

const formEmailName = document.querySelector("#form-email-name");
const formEmailEmail = document.querySelector("#form-email-email");
const formEmailDatetimePicker = document.querySelector(
  "#form-email-callBackDatetimepicker"
);
const formEmailCallBackDatetimepicker = document.querySelector(
  "#form-email-callBackTimeDatetimepicker"
);
const formEmailPhoneNumber = document.querySelector("#form-email-phoneNumber");

const buttonSubmit = document.querySelector("#formEmailsubmitButton");

buttonSubmit.addEventListener("click", (event) => {
  const data = {
    email: formEmailEmail.value,
    name: formEmailName.value,
    callBackTime: formEmailCallBackDatetimepicker.value,
    callBackDate: formEmailDatetimePicker.value,
    phoneNumber: formEmailPhoneNumber.value,
  };

  event.preventDefault();
  fetch(`${API_URL}/api/sendEmail`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("====================================");
      console.log(data);
      console.log("====================================");
    })
    .catch((error) => {
      console.error(error);
    });
});

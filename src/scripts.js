document.addEventListener("DOMContentLoaded", () => {
  const ddd = document.getElementById("ddd-number");
  const telephoneNumber = document.getElementById("phone-number");
  const sendBtn = document.querySelector("#send-btn");
  const reloadBtn = document.querySelector("#reload-btn");

  sendBtn.addEventListener("click", () => {
    sendMessage();
  });

  reloadBtn.addEventListener("click", () => {
    reload();
  });

  function sendMessage() {
    if (ddd.value.length === 0 && telephoneNumber.value.length === 0) {
      let popupAlert = document.getElementById("popup-alert");
      let alertText = document.createElement("h3");
      let emptyInputError = document.createTextNode(
        "Favor, insira DDD e telefone"
      );
      alertText.appendChild(emptyInputError);
      popupAlert.appendChild(alertText);

      sendBtn.setAttribute("disabled", "disabled");
    } else {
      window.open(
        `https://api.whatsapp.com/send?1=ptBR&phone=55${ddd.value}${telephoneNumber.value}`
      );
    }
  }

  function reload() {
    document.location.reload(true);
  }
});

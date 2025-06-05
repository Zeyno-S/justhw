let currentUser = {
  name: '',
  icon: ''
};

function checkPassword() {
  const passwordInput = document.getElementById("password-input").value;
  const errorText = document.getElementById("password-error");
  if (passwordInput === "lemonade") {
    document.getElementById("password-screen").classList.add("hidden");
    document.getElementById("username-screen").classList.remove("hidden");
    errorText.textContent = "";
  } else {
    errorText.textContent = "Incorrect password. Try again.";
  }
}

function enterChat() {
  const nameInput = document.getElementById("username-input").value.trim();
  const iconSelect = document.getElementById("icon-select").value;
  const errorText = document.getElementById("username-error");

  if (nameInput.length === 0) {
    errorText.textContent = "Please enter a nickname.";
    return;
  }

  currentUser.name = nameInput;
  currentUser.icon = iconSelect;

  document.getElementById("username-screen").classList.add("hidden");
  document.getElementById("chat-screen").classList.remove("hidden");
}

function sendMessage() {
  const messageInput = document.getElementById("message-input");
  const chatBox = document.getElementById("chat-box");
  const message = messageInput.value.trim();

  if (message.length === 0) return;

  const messageElement = document.createElement("div");
  messageElement.innerText = `${currentUser.icon} ${currentUser.name}: ${message}`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
  messageInput.value = "";
}

const container = document.querySelector("#hero");
const registerBtn = document.querySelector("#register-toggle");
const loginBtn = document.querySelector("#login-toggle");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

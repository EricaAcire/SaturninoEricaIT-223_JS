const users = [
  { name: "Erica", login: "user1", password: "12345" },
  { name: "Eca", login: "user2", password: "12345" },
  { name:  "Mary", login: "user3", password: "12345" },
  { name:  "Mark", login: "user4", password: "12345" },
  { name:  "Luke", login: "user5", password: "12345" },
  { name: "Kate", login: "user6", password: "12345" }
];


const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nameInput = document.getElementById("name").value.trim();
  const loginInput = document.getElementById("login").value.trim();
  const passwordInput = document.getElementById("password").value.trim();

  const user = users.find(u => 
    u.name === nameInput &&
    u.login === loginInput &&
    u.password === passwordInput
  );

  if (user) {
    localStorage.setItem("username", user.name);
    alert("Welcome! " + user.name);
  } else {
    message.style.color = "red";
    message.textContent = "Invalid Login or Password";
  }
});
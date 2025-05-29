const users = {
  "t.barbie1": { password: "Chaton05", role: "superadmin" },
  "a.guillaume": { password: "bonjour!", role: "admin" },
  "f.buisson": { password: "byebye!", role: "admin" },
};

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (users[username] && users[username].password === password) {
    const role = users[username].role;
    localStorage.setItem("userRole", role);
    localStorage.setItem("userName", username);
    window.location.href = "admin.html";
  } else {
    document.getElementById("error").style.display = "block";
  }
});

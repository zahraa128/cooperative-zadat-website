/**
 * header.js
 * ----------
 * This file checks if the user is logged in
 * and shows Login or Logout in the header.
 */

// Example: check login status from backend or localStorage
const isLoggedIn = localStorage.getItem("customer_id");

const pageName = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
if (pageName === "index.html") {
  document.body.classList.add("home-page");
}

const nav = document.getElementById("navLinks");
const sidebarAuthLink = document.getElementById("sidebarAuthLink");
const sidebarToggle = document.getElementById("sidebarToggle");

const bindLogout = (link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("customer_id");
    localStorage.removeItem("customer_name");
    window.location.href = "login_user.html";
  });
};

if (nav) {
  if (isLoggedIn) {
    const logoutLink = document.createElement("a");
    logoutLink.href = "#";
    logoutLink.textContent = "Logout";
    bindLogout(logoutLink);
    nav.appendChild(logoutLink);
  } else {
    const loginLink = document.createElement("a");
    loginLink.href = "login_user.html";
    loginLink.textContent = "Login";
    nav.appendChild(loginLink);
  }
}

if (sidebarAuthLink) {
  if (isLoggedIn) {
    sidebarAuthLink.textContent = "Logout";
    sidebarAuthLink.href = "#";
    bindLogout(sidebarAuthLink);
  } else {
    sidebarAuthLink.textContent = "Login";
    sidebarAuthLink.href = "login_user.html";
  }
}

if (sidebarToggle) {
  sidebarToggle.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-open");
  });
}

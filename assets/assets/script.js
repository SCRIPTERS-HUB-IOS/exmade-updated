function goTo(menu) {
  document.getElementById("main-menu").classList.add("hidden");
  document.getElementById("methods-menu").classList.add("hidden");

  if (menu === "methods") {
    document.getElementById("methods-menu").classList.remove("hidden");
  }
}

function goBack() {
  document.getElementById("main-menu").classList.remove("hidden");
  document.getElementById("methods-menu").classList.add("hidden");
}

function setTheme(theme) {
  document.body.className = theme;
}

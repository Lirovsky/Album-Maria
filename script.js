function showSidebar() {
  const sidebar = document.querySelector(".navbar ul");
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    document.querySelector(".menuIcon img").src = "./images/icon/menu.svg";
  } else {
    sidebar.classList.add("open");
    document.querySelector(".menuIcon img").src = "./images/icon/close.svg";
  }
}

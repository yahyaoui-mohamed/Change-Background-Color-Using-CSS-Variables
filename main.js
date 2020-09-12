if (localStorage.length === 0) {
  localStorage.setItem("mainColor", "#03a9f4");
  document.documentElement.style.setProperty(
    "--main-Color",
    localStorage.getItem("mainColor")
  );
} else {
  document.documentElement.style.setProperty(
    "--main-Color",
    localStorage.getItem("mainColor")
  );
}
let listItems = document.querySelectorAll("ul li");
listItems.forEach(function(item) {
  item.onclick = function(e) {
    document.documentElement.style.setProperty(
      "--main-Color",
      e.target.dataset.color
    );
    localStorage.setItem("mainColor", e.target.dataset.color);
  };
});

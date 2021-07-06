const btn = document.querySelector("button");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.toggle("dark");
  btn.innerHTML = `
  <i class="far fa-sun"></i>
  Light Mode`;
} else {
  document.body.classList.remove("dark");
  btn.innerHTML = `
  <i class="far fa-moon"></i>
  Dark Mode
  `;
}

btn.addEventListener("click", () => {
  let theme;
  document.body.classList.toggle("dark");
  if (document.body.className === "dark") {
    btn.innerHTML = `
    <i class="far fa-sun"></i>
    Light Mode`;

    theme = document.body.classList.contains("dark") && "dark";
  } else {
    btn.innerHTML = `
      <i class="far fa-moon"></i>
      Dark Mode
      `;
    document.body.classList.remove("dark");
    theme = !document.body.classList.contains("dark") && undefined;
  }
  localStorage.setItem("theme", theme);
});

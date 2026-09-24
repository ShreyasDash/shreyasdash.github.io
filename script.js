const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "dark") document.body.classList.add("dark-mode");
function syncThemeToggle() {
  const isDark = document.body.classList.contains("dark-mode");
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  themeToggle.querySelector(".toggle-label").textContent = isDark ? "Light" : "Dark";
}
syncThemeToggle();
themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  syncThemeToggle();
});
document.getElementById("year").textContent = new Date().getFullYear();

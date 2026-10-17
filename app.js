const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const form = document.getElementById("enquiryForm");
const statusBox = document.getElementById("formStatus");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  statusBox.className = "form-status success";
  statusBox.textContent = "Thank you for reviewing the website. This is a frontend preview, so no personal information has been sent or stored. Please contact the school directly at 9934602477 for enquiries.";
  form.reset();
});
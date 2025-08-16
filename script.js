function changeColor(section, element) {
  const navbar = document.getElementById("navbar");

  // Reset all links
  const links = document.querySelectorAll(".navbar a");
  links.forEach(link => link.classList.remove("active"));

  // Highlight current clicked link
  element.classList.add("active");

  // Change navbar color based on section
  if (section === "about") {
    navbar.style.backgroundColor = "#d8ef0bff"; // Green
  } else if (section === "specs") {
    navbar.style.backgroundColor = "rgba(33, 222, 243, 1)"; // Blue
  } else if (section === "contact") {
    navbar.style.backgroundColor = "#fa09daff"; // Orange
  } else if (section === "Time") {
    navbar.style.backgroundColor = "#5d00ffff"; // Default white
  }
}
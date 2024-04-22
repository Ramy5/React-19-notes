// Get all the <h3> elements
const headings = document.querySelectorAll("h3");

// Loop through each <h3> element
headings.forEach((heading, index) => {
  // Get the corresponding <p> element
  const paragraph = heading.nextElementSibling;

  // Hide all paragraphs initially
  paragraph.style.display = "none";

  // Add click event listener to each heading
  heading.addEventListener("click", () => {
    // Toggle visibility of the corresponding paragraph
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
      // Scroll to the paragraph when heading is clicked
      paragraph.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      paragraph.style.display = "none";
    }
  });
});

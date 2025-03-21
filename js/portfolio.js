function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
}
function toggleLeftSidebar() {
    document.getElementById("left-sidebar").classList.toggle("active");
    document.getElementById("left-overlay").classList.toggle("active");
}




// Global Search Functionality
const searchInput = document.getElementById("searchInput");
const searchIcon = document.getElementById("searchIcon");
const searchForm = document.getElementById("searchForm");

// Function to perform search
function performSearch() {
    const searchQuery = searchInput.value.trim().toLowerCase(); // Get the search query in lowercase

    // Clear previous highlights
    const searchableElements = document.querySelectorAll("[data-searchable]");
    searchableElements.forEach((element) => {
        element.querySelectorAll(".highlight").forEach((highlight) => {
            highlight.outerHTML = highlight.innerHTML; // Remove highlight spans
        });
    });

    if (searchQuery === "") return; // Exit if the search query is empty

    // Search for the keyword in all searchable elements
    let firstMatch = null;
    searchableElements.forEach((element) => {
        const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
        let hasMatch = false;

        while (walker.nextNode()) {
            const node = walker.currentNode;
            const parent = node.parentElement;

            if (parent.tagName === "SCRIPT" || parent.tagName === "STYLE") continue; // Skip script and style tags

            const content = node.textContent;
            const regex = new RegExp(`(${searchQuery})`, "gi"); // Case-insensitive global search

            if (regex.test(content)) {
                hasMatch = true;
                const highlightedContent = content.replace(regex, '<span class="highlight">$1</span>');
                const span = document.createElement("span");
                span.innerHTML = highlightedContent;
                node.replaceWith(span); // Replace text node with highlighted content
            }
        }

        // Scroll to the first match
        if (!firstMatch && hasMatch) {
            firstMatch = element;
            firstMatch.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
}

// Trigger search on input
searchInput.addEventListener("input", performSearch);

// Trigger search on icon click
searchIcon.addEventListener("click", performSearch);

// Prevent form submission
searchForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting
    performSearch(); // Perform the search
});












// JavaScript for Load More Button
const loadMoreBtn = document.getElementById("load-more-btn");
const portfolioItems1 = document.querySelectorAll(".portfolio-item");
let visibleItems = 9; // Number of items initially visible

// Function to show more items
function showMoreItems() {
    for (let i = visibleItems; i < visibleItems + 3; i++) {
        if (portfolioItems1[i]) {
            portfolioItems1[i].classList.remove("hidden");
        }
    }
    visibleItems += 3;

    // Hide the button if all items are visible
    if (visibleItems >= portfolioItems1.length) {
        loadMoreBtn.style.display = "none";
    }
}

// Event listener for the Load More button
loadMoreBtn.addEventListener("click", showMoreItems);

// Initially hide the button if there are no more items to load
if (portfolioItems1.length <= 9) {
    loadMoreBtn.style.display = "none";
}






// JavaScript for Portfolio Details Section
const portfolioItems2 = document.querySelectorAll(".portfolio-item"); // All portfolio items
const portfolioDetails2 = document.getElementById("portfolio-details"); // Detailed section
const detailsContent2 = document.getElementById("details-content"); // Content area inside detailed section

// Function to load details based on the category
function loadDetails(category) {
    let content = "";

    // Dynamic content based on the category
    switch (category) {
        case "web-development":
            content = `
        <h2 class="details-title">Web Development</h2>
        <p class="details-description">
            I specialize in building responsive and user-friendly websites using modern technologies like HTML, CSS, JavaScript, and React. Here are some of my recent projects:
        </p>
        <div class="project-showcase">
            <div class="project">
                <h3 class="project-title">E-Commerce Website</h3>
                <img src="ecommerce.jpg" alt="E-Commerce Website" class="project-image">
                <p class="project-description">
                    A fully functional e-commerce website built with React and Node.js. Features include product search, cart management, and payment integration.
                </p>
                <a href="https://example.com" class="project-link" target="_blank">View Project</a>
            </div>
            <div class="project">
                <h3 class="project-title">Portfolio Website</h3>
                <img src="portfolio.jpg" alt="Portfolio Website" class="project-image">
                <p class="project-description">
                    A personal portfolio website showcasing my skills and projects. Built with HTML, CSS, and JavaScript.
                </p>
                <a href="https://example.com" class="project-link" target="_blank">View Project</a>
            </div>
        </div>
        <div class="skills-used">
            <h3 class="skills-title">Skills Used</h3>
            <ul class="skills-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
            </ul>
        </div>
        <div class="testimonials">
            <h3 class="testimonials-title">Testimonials</h3>
            <div class="testimonial">
                <p class="testimonial-text">
                    "Mehedi delivered an outstanding e-commerce website that exceeded our expectations. Highly recommended!"
                </p>
                <p class="testimonial-author">- John Doe, Client</p>
            </div>
        </div>
        <div class="cta">
            <p class="cta-text">Interested in working together? Let's connect!</p>
            <a href="contact.html" class="cta-button">Contact Me</a>
        </div>
    `;
            break;

        case "graphics-design":
            content = `
        <h2 class="details-title">Graphics Design</h2>
        <p class="details-description">
            I create visually stunning designs for branding, marketing, and social media. Here are some of my recent works:
        </p>
        <div class="project-showcase">
            <div class="project">
                <h3 class="project-title">Logo Design</h3>
                <img src="logo-design.jpg" alt="Logo Design" class="project-image">
                <p class="project-description">
                    A modern and minimalist logo design for a tech startup.
                </p>
                <a href="https://example.com" class="project-link" target="_blank">View Project</a>
            </div>
            <div class="project">
                <h3 class="project-title">Social Media Banner</h3>
                <img src="social-media.jpg" alt="Social Media Banner" class="project-image">
                <p class="project-description">
                    A vibrant and engaging social media banner for a fitness brand.
                </p>
                <a href="https://example.com" class="project-link" target="_blank">View Project</a>
            </div>
        </div>
        <div class="skills-used">
            <h3 class="skills-title">Skills Used</h3>
            <ul class="skills-list">
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Canva</li>
            </ul>
        </div>
        <div class="cta">
            <p class="cta-text">Interested in working together? Let's connect!</p>
            <a href="contact.html" class="cta-button">Contact Me</a>
        </div>
    `;
            break;

        // Add more cases for other categories as needed
        default:
            content = `<h2 class="details-title">No Details Available</h2>`;
    }

    // Insert the content into the details section
    detailsContent2.innerHTML = content;
}

// Function to open the detailed section
function openDetails(category) {
    loadDetails(category); // Load content based on the category
    portfolioDetails2.style.display = "flex"; // Show the detailed section
}

// Function to close the detailed section
// Function to close the detailed section
function closeDetails() {
    const portfolioDetails = document.getElementById("portfolio-details");
    portfolioDetails.style.display = "none"; // Hide the detailed section
}

// Add click event listener to the close button
document.querySelector(".close-details").addEventListener("click", closeDetails);

// Add click event listeners to portfolio items
portfolioItems2.forEach((item) => {
    item.addEventListener("click", () => {
        const category = item.getAttribute("data-category"); // Get the category from the data attribute
        openDetails(category); // Open the detailed section with the corresponding content
    });
});
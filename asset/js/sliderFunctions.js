// Select the carousel group
const group = document.querySelector('.carousel .group');

// Function to fetch images and populate the carousel
const fetchCarouselImages = async () => {
    try {
        // Fetch JSON file, no caching to always get the latest
        const response = await fetch('./asset/json/thumbnail-data.json', { cache: "no-store" });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Limit to 10 items max
        const limitedData = data.slice(0, 10);

        // Select all the <img> elements inside .group
        const cards = group.querySelectorAll('.card');

        // Loop over each card and assign image and alt text
        limitedData.forEach((item, index) => {
            if (cards[index]) {
                cards[index].src = item.image || "";
                cards[index].alt = item.alt || item.title || "";
            }
        });

    } catch (error) {
        console.error('Error fetching carousel images:', error);
    }
};

// Run the fetch function when the page loads
document.addEventListener("DOMContentLoaded", fetchCarouselImages);

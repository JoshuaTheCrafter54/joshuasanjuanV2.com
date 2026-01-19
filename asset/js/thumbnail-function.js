// elements
const container = document.querySelector('.thumbnail-wrapper');

// fetch function
const fetchData = async () => {
    try {
        const response = await fetch('asset/json/thumbnail-data.json');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched data:', data);

        // Clear container before adding repeated items
        container.innerHTML = "";

        data.forEach(item => {

            // Create a thumbnail block
            const block = document.createElement("div");
            block.classList.add("thumbnail-content");

            block.innerHTML = `
                <img class="photo" src="${item.image}" alt="${item.alt || item.title}">
                <h1 class="thumbnail-title">${item.title}</h1>
                <p class="thumbnail-description">${item.description}</p>
            `;

            // Add it into the page
            container.appendChild(block);
        });

    } catch (error) {
        console.error('Error fetching thumbnail data:', error);
    }
};

document.addEventListener("DOMContentLoaded", fetchData);

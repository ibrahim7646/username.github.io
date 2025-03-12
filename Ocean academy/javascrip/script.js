let currentIndex = 0; // Start with the first image
const images = document.querySelectorAll('.image-container img'); // Select all images
const nextButton = document.getElementById('nextButton'); // Select the button
const imageHeader = document.getElementById('imageHeader'); // Select the header
const youtubeLinkDiv = document.getElementById('youtubeLink'); // Select the YouTube link div

// Array of headers corresponding to each image
const headers = [
    "Star Technique", 
    "Freestyle Technique", 
    "Backstroke Technique", 
    "Breaststroke Technique", 
    "Butterfly Technique"
];

// Array of YouTube links corresponding to each image
const youtubeLinks = [
    "https://youtu.be/uSyZeVQjCJ0?si=4Pbj5GHTM1IDFdZn", // Link for star image
    "https://youtu.be/6_vXycbD2TM?si=frOJGYZ_SuQf_ETt", // Link for freestyle image
    "https://youtu.be/4_GAi41UXiM?si=JqyXL3UBE5DN2Ecu", // Link for backstroke image
    "https://youtu.be/mTMndHv_7Lc?si=7OF10Kz-v6QkHuRe", // Link for breaststroke image
    "https://youtu.be/riIyImmuB_M?si=GEWYgEI4SoSCLyaD"  // Link for butterfly image
];

// Function to update the displayed image and header
function updateImage() {
    images.forEach((img, index) => {
        img.classList.remove('active'); // Remove active class from all images
        if (index === currentIndex) {
            img.classList.add('active'); // Add active class to the current image
            imageHeader.textContent = headers[currentIndex]; // Change header text
            
            // Create a button for the YouTube link
            const youtubeButton = document.createElement('button');
            youtubeButton.textContent = "More info on YouTube"; // Button text
            youtubeButton.className = "youtube-button"; // Add a class for styling
            youtubeButton.onclick = function() {
                window.open(youtubeLinks[currentIndex], '_blank'); // Open the link in a new tab
            };

            // Clear previous content and append the new button
            youtubeLinkDiv.innerHTML = ''; // Clear previous content
            youtubeLinkDiv.appendChild(youtubeButton); // Append the button
        }
    });
}

// Event listener for the button to change the image
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Increment index and loop back to the first image
    updateImage(); // Update the displayed image and header
});

// Initialize the first image and header
updateImage();
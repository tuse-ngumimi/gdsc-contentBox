
const box = document.getElementById("box");
const appendBtn = document.getElementById("appendBtn");
const updateBtn = document.getElementById("updateBtn");
const removeBtn = document.getElementById("removeBtn");


const affirmations = [
  "I can do all things through Christ who strengthens me (Philippians 4:13).",
  "For I know the plans I have for you, declares the Lord (Jeremiah 29:11).",
  "The Lord is my shepherd; I shall not want (Psalm 23:1).",
  "Be strong and courageous. Do not be afraid (Joshua 1:9)."
];

let currentIndex = 0; 

// Function to add content
function addContent() {
  if (!box.hasChildNodes()) {
    const paragraph = document.createElement("p");
    paragraph.textContent = affirmations[currentIndex];
    box.appendChild(paragraph);
    updateBtn.disabled = false;
    removeBtn.disabled = false;
  }
}

// Function to update content with predefined affirmations
function updateContent() {
  if (box.hasChildNodes()) {
    const paragraph = box.querySelector("p");
    currentIndex = (currentIndex + 1) % affirmations.length; // Cycle to the next affirmation
    paragraph.textContent = affirmations[currentIndex];
  }
}

// Function to remove content
function removeContent() {
  if (box.hasChildNodes()) {
    box.innerHTML = ""; // Clear the box
    updateBtn.disabled = true;
    removeBtn.disabled = true;
  }
}

// Attach event listeners
updateBtn.addEventListener("click", updateContent);
appendBtn.addEventListener("click", updateContent);
removeBtn.addEventListener("click", removeContent);


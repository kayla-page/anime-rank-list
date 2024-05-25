function redirectToRegistration() {
  window.location.href = "registration.html";
}

// Function to navigate to the home page
function goToHomePage() {
  window.location.href = "index.html"; // Replace "index.html" with the correct filename of your home page
}

function deleteList() {
  // Perform delete operation only if user is authenticated and authorized
  // Implement logic to delete the list
}

// Function to add anime to the list
function addAnime() {
  const animeName = document.getElementById("anime").value;
  const animeImage = document.getElementById("animeImage").value;
  const animeList = document.getElementById("animeList");

  const animeItem = document.createElement("div");
  animeItem.classList.add("anime-item");
  animeItem.innerHTML = `
    <img src="${animeImage}" alt="${animeName}" class="anime-image">
    <span class="anime-name">${animeName}</span>
    <button class="delete-btn" onclick="deleteAnime(this)">Delete</button>
  `;
  animeList.appendChild(animeItem);

  // Clear input fields
  document.getElementById("anime").value = "";
  document.getElementById("animeImage").value = "";
}

// Function to delete anime from the list
function deleteAnime(btn) {
  const animeItem = btn.parentElement;
  animeItem.remove();
}

// Function to submit the form
function submitForm() {
  const watchedBefore = document.getElementById("watchedBefore").value;
  const top5 = document.getElementById("top5").value;

  // Implement submission functionality based on your requirements
}

// Function to edit submission
function editSubmission() {
  // Implement edit functionality based on your requirements
}

document.getElementById("animeForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const top5 = document.getElementById("top5").value;

  // Here you would send this data to a server for processing or storage
  console.log("Name:", name);
  console.log("Top 5 Anime:", top5);

  // Clear the form after submission
  document.getElementById("name").value = "";
  document.getElementById("top5").value = "";
  document.getElementById("anime").value = "";
  document.getElementById("animeImage").value = "";

  // For demonstration, let's display the submission temporarily on the page
  displaySubmission(name, top5);
});

// Function to save submission to local storage
function saveSubmission(name, top5) {
  let submissions = JSON.parse(localStorage.getItem("submissions")) || [];
  submissions.push({ name: name, top5: top5 });
  localStorage.setItem("submissions", JSON.stringify(submissions));
  displaySubmissions(); // Call display function after saving submission
}

// Function to retrieve submissions from local storage
function getSubmissions() {
  return JSON.parse(localStorage.getItem("submissions")) || [];
}

function displaySubmissions() {
  const submissions = getSubmissions();
  const submissionContainer = document.getElementById("submissionContainer");
  submissionContainer.innerHTML = ""; // Clear previous submissions
  
  submissions.forEach((submission, index) => {
    const submissionDiv = document.createElement("div");
    submissionDiv.classList.add("submission");
    submissionDiv.innerHTML = `<h3><a href="submissions/user${index}.html">${submission.name}'s Top 5 Anime</a></h3><p>${submission.top5}</p>`;
    submissionContainer.appendChild(submissionDiv);
  });
}

window.addEventListener("load", function() {
  displaySubmissions();
});

document.getElementById("animeForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const top5 = document.getElementById("top5").value;

  // Save submission to local storage
  saveSubmission(name, top5);

  // Clear the form after submission
  document.getElementById("name").value = "";
  document.getElementById("top5").value = "";
  document.getElementById("anime").value = "";
  document.getElementById("animeImage").value = "";
});


function redirectToRegistration() {
  window.location.href = "registration.html";
}

function addAnime() {
  const animeName = document.getElementById("anime").value;
  const animeImage = document.getElementById("animeImage").value;
  const animeList = document.getElementById("top5");

  const existingAnime = animeList.value.trim().split("\n");
  existingAnime.push(`${animeName}: ${animeImage}`);
  animeList.value = existingAnime.join("\n");
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
}

// Function to retrieve submissions from local storage
function getSubmissions() {
  return JSON.parse(localStorage.getItem("submissions")) || [];
}
function displaySubmissions() {
  const submissions = getSubmissions();
  const submissionContainer = document.getElementById("submissionContainer");
  submissionContainer.innerHTML = ""; // Clear previous submissions
  
  submissions.forEach(submission => {
    const submissionDiv = document.createElement("div");
    submissionDiv.classList.add("submission");
    submissionDiv.innerHTML = `<h3>${submission.name}'s Top 5 Anime:</h3><p>${submission.top5}</p>`;
    submissionContainer.appendChild(submissionDiv);
  });
}
window.addEventListener("load", function() {
  displaySubmissions();
});



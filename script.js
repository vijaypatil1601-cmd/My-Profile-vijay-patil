function addRecommendation() {
  // Get the textarea element
  const recommendation = document.getElementById("new_recommendation");

  // Validate input
  if (!recommendation || recommendation.value.trim() === "") {
    return;
  }

  console.log("New recommendation added");

  // Create a new recommendation element
  const element = document.createElement("div");
  element.className = "recommendation";
  element.innerHTML =
    "<span>&#8220;</span>" +
    recommendation.value +
    "<span>&#8221;</span>";

  // Append to recommendations list
  const container = document.getElementById("all_recommendations");
  if (container) {
    container.appendChild(element);
  }

  // Clear textarea
  recommendation.value = "";

  // ✅ Task 9: Show confirmation popup AFTER adding
  showPopup(true);
}

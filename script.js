/* ========== Part 2: Functions & Scope ========== */

// Global variable
let animationCount = 0;

// Function with parameter & return value
function calculateTotalAnimations(currentCount, newAnimations) {
  return currentCount + newAnimations;
}

// Function to demonstrate scope
function triggerBoxAnimation() {
  let box = document.getElementById("animateBox");
  box.classList.add("animate");

  // Remove animation class after it ends (so it can replay)
  setTimeout(() => box.classList.remove("animate"), 2000);

  // Update count using function with parameters
  animationCount = calculateTotalAnimations(animationCount, 1);
  console.log("Total animations triggered: " + animationCount);
}

// Popup toggle using function
function togglePopup() {
  let popup = document.getElementById("popup");
  popup.classList.toggle("show");
}

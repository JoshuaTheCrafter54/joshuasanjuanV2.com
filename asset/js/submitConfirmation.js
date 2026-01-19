document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.querySelector(".submit-btn");
  const loadingContainer = document.querySelector(".loadingContainer");
  const confirmationWrapper = document.querySelector(".confirmationWrapper");
  const doneBtn = document.querySelector(".doneBtn");

  // Ensure elements exist
  if (!submitBtn || !loadingContainer || !confirmationWrapper || !doneBtn) {
    console.error("One or more elements not found!");
    return;
  }

  // Hide loader and confirmation initially
  loadingContainer.classList.remove("active");
  confirmationWrapper.classList.remove("active");

  // SUBMIT BUTTON CLICK
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Submit clicked");

    // Show loader
    loadingContainer.classList.add("active");

    // Simulate sending email
    setTimeout(() => {
      // Hide loader
      loadingContainer.classList.remove("active");

      // Show confirmation
      confirmationWrapper.classList.add("active");
      console.log("Confirmation displayed");
    }, 3000); // 3 seconds
  });

  // DONE BUTTON CLICK
  doneBtn.addEventListener("click", () => {
    confirmationWrapper.classList.remove("active");
    console.log("Confirmation closed");
  });
});

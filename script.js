function toggleText(button) {
    let moreText = button.previousElementSibling; // Get the hidden text
    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline"; // Show text
        button.textContent = "Read Less"; // Change button text
    } else {
        moreText.style.display = "none"; // Hide text
        button.textContent = "Read More"; // Change button text back
    }
}
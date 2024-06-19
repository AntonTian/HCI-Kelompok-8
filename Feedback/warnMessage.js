
function valid() {
    const ifeed = document.textbox.IFeed;
    const result = document.getElementById("result");

    if (ifeed.value.trim() == "") {
        result.innerHTML = "Enter your message";
        return false;
    }
    else if ((ifeed.value.trim() != "")){
        popup.classList.add("open-slide")
        return false;
    }
    result.innerHTML = ""; // Clear any previous error message
    return true; // Allow the form to be submitted
}

var popup = document.getElementById('popup');
function closeSlide() {
    popup.classList.remove('open-slide');
}
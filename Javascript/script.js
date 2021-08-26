// Retreive the input from the form
const form = document.querySelector('form')

// Retreive variables for the Modal popup
const modal = document.querySelector('.modal');
const previews = document.querySelectorAll(".gallery img");
const orig= document.querySelector(".full-img")

// for when image in the gallery is clicked
previews.forEach((preview) =>{
    preview.addEventListener('click', () => {
        //adds '.open' from CSS, 
        modal.classList.add("open");
        orig.classList.add("open");
        
        // retreives data-original so the image being displayed is dynamic
        const origSrc = preview.getAttribute("data-original");
        orig.src= origSrc
    });
});

// when clicked outside the picture
modal.addEventListener("click", (e) => {
    if(e.target.classList.contains("modal")){
        // removes '.open'
        modal.classList.remove("open");
        orig.classList.remove("open");
    }
})

// SUBMIT FORM

form.onsubmit = function () {

    var imgName = form["img-name"].value;
    var imgDesc = form["img-desc"].value;

    var submit = true;
    
    // Error shown if the forms are empty the
    if (imgName == null || imgName == "") {
        nameError = "*Please enter artwork name";
        document.getElementById("img-name-error").innerHTML = nameError;
        submit = false;
    }

    if (imgDesc == null || imgDesc == "") {
        descError = "*Please enter artwork description";
        document.getElementById("img-desc-error").innerHTML = descError;
        submit = false;
    }

    return submit;
}

// error removal
function removeWarning() {
    document.getElementById(this.id + "-error").innerHTML = "";
}


//error removed once something is typed in the form
document.getElementById("img-name").onkeyup = removeWarning;
document.getElementById("img-desc").onkeyup = removeWarning;

//prevent submit from refreshing the page
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
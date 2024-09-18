var element = document.getElementById('resume-output'); // The HTML element you want to convert
var forms = document.querySelector('form');
var input_submits = document.querySelector('.resumeGeneratbtn');
var conatiner = document.querySelector('.container');
var resume_generated_conatiner = document.querySelector('.resume12');
var resume_output = document.querySelector('#resume-output');
var goBackButton = document.querySelector('#go-back');
var downloadBtn = document.querySelector('#Download');
//inputs of resume form
var names = document.querySelector('.name');
var email = document.querySelector('.email');
var phone = document.querySelector('.ph');
var skills = document.querySelector('.skills');
var education = document.querySelector('.education');
var experience = document.querySelector('.experience');
input_submits.addEventListener('click', function (e) {
    e.preventDefault();
    //     if(
    //     names.value.trim() === '' || 
    //     email.value.trim() === '' || 
    //     phone.value.trim() === '' || 
    //     skills.value.trim() === '' || 
    //     education.value.trim() === '' || 
    //     experience.value.trim() === '' 
    // ) {
    //         alert('All Input fields are required')
    //     }
    //         else{
    conatiner.classList.add('hidden1');
    resume_generated_conatiner.classList.remove('hidden2');
    goBackButton.classList.remove('edit');
    downloadBtn.classList.remove('edit2');
    resume_output.innerHTML = "\n    \n    <section id=\"personal-info-output\">\n        <h2>Personal Information</h2>\n        <p><strong>Name:</strong> <span id=\"output-name\">".concat(names.value, "</span></p>\n        <p><strong>Email:</strong> <span id=\"output-email\">").concat(email.value, "</span></p>\n        <p><strong>Phone:</strong> <span id=\"output-phone\">").concat(phone.value, "</span></p>\n    </section>\n\n    <section id=\"education-output\">\n        <h2>Education</h2>\n        <textarea id=\"output-education\" readonly=\"\">\n        ").concat(education.value, "            \n        </textarea>\n    </section>\n\n    <section id=\"work-experience-output\">\n        <h2>Work Experience</h2>\n        <textarea id=\"output-education\" readonly=\"\"> \n         ").concat(experience.value, "             \n        </textarea>\n    </section>\n\n    <section id=\"skills-output\">\n        <h2>Skills</h2>\n        <textarea id=\"output-education\" readonly=\"\">   \n          ").concat(skills.value, "             \n        </textarea>\n    </section>\n\n    <div class=\"inputbox\">\n        <button id=\"go-back\" class=\"guessSubmit\">Edit</button>\n    </div>\n    ");
    // }
});
goBackButton.addEventListener('click', function (e) {
    conatiner.classList.remove('hidden1');
    resume_generated_conatiner.classList.add('hidden2');
    goBackButton.classList.add('edit');
    downloadBtn.classList.add('edit2');
});

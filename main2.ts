



const element = document.getElementById('resume-output'); // The HTML element you want to convert


let forms = document.querySelector('form') as HTMLFormElement;

let input_submits =  document.querySelector('.resumeGeneratbtn') as HTMLInputElement;

let conatiner = document.querySelector('.container') as HTMLDivElement;

let resume_generated_conatiner = document.querySelector('.resume12') as HTMLDivElement;

let resume_output =  document.querySelector('#resume-output') as HTMLDivElement;

let goBackButton = document.querySelector('#go-back') as HTMLButtonElement;
let downloadBtn = document.querySelector('#Download') as HTMLButtonElement

//inputs of resume form

let names = document.querySelector('.name') as HTMLInputElement;
let email = document.querySelector('.email') as HTMLInputElement;
let phone = document.querySelector('.ph') as HTMLInputElement;
let skills = document.querySelector('.skills') as HTMLInputElement;
let education = document.querySelector('.education') as HTMLInputElement;
let experience = document.querySelector('.experience') as HTMLInputElement;


input_submits.addEventListener('click', (e) => {
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
    goBackButton.classList.remove('edit')
    downloadBtn.classList.remove('edit2')



    resume_output.innerHTML=`
    
    <section id="personal-info-output">
        <h2>Personal Information</h2>
        <p><strong>Name:</strong> <span id="output-name">${names.value}</span></p>
        <p><strong>Email:</strong> <span id="output-email">${email.value}</span></p>
        <p><strong>Phone:</strong> <span id="output-phone">${phone.value}</span></p>
    </section>

    <section id="education-output">
        <h2>Education</h2>
        <textarea id="output-education" readonly="">
        ${education.value}            
        </textarea>
    </section>

    <section id="work-experience-output">
        <h2>Work Experience</h2>
        <textarea id="output-education" readonly=""> 
         ${experience.value}             
        </textarea>
    </section>

    <section id="skills-output">
        <h2>Skills</h2>
        <textarea id="output-education" readonly="">   
          ${skills.value}             
        </textarea>
    </section>

    <div class="inputbox">
        <button id="go-back" class="guessSubmit">Edit</button>
    </div>
    `
    // }
    

});




goBackButton.addEventListener('click', (e) =>{

     conatiner.classList.remove('hidden1');
     resume_generated_conatiner.classList.add('hidden2');
     goBackButton.classList.add('edit')
     downloadBtn.classList.add('edit2')
   
  

})






let currentStep = 0;
const steps = document.querySelectorAll(".step");
const forms = document.querySelectorAll(".form-section");

const data = {};

function nextStep() {
  const inputs = forms[currentStep].querySelectorAll("input, textarea");

  for (let input of inputs) {
    if (!input.value.trim()) {
      alert("Please fill all fields");
      return;
    }
    data[input.id] = input.value;
  }

  steps[currentStep].classList.add("completed");
  steps[currentStep].querySelector(".circle").innerText = "✓";
  forms[currentStep].classList.remove("active");
  forms[currentStep].classList.add("completed");

  currentStep++;

  if (currentStep < steps.length) {
    steps[currentStep].classList.add("active");
    forms[currentStep].classList.add("active");
  }
}

function showPreview() {
  nextStep();

  const preview = document.getElementById("preview");
  preview.innerHTML = `
    <p><b>Name:</b> ${data.name}</p>
    <p><b>Email:</b> ${data.email}</p>
    <p><b>Phone:</b> ${data.phone}</p>
    <p><b>College:</b> ${data.college}</p>
    <p><b>Degree:</b> ${data.degree}</p>
    <p><b>Year:</b> ${data.year}</p>
    <p><b>Skills:</b> ${data.skills}</p>
    <p><b>Project:</b> ${data.projectTitle}</p>
    <p>${data.projectDesc}</p>
  `;

  forms[currentStep].classList.add("active");
}
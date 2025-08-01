function generateResume(event) {
  event.preventDefault(); // Prevent page reload

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const skills = document.getElementById("skills").value;
  const certification = document.getElementById("certification").value;
  const experience = document.getElementById("experience").value;

  document.getElementById("r-name").textContent = "Name: " + name;
  document.getElementById("r-email").textContent = "Email: " + email;
  document.getElementById("r-skills").textContent = "Skills: " + skills;
  document.getElementById("r-certification").textContent = "Certification: " + certification;
  document.getElementById("r-experience").textContent = "Experience: " + experience;
}

function downloadPDF() {
  const resume = document.getElementById("resume");
  html2pdf().from(resume).save("resume.pdf");
}

document.getElementById("startButton").addEventListener("click", function() {
  document.getElementById("inputDiv").style.display = "block";
})

document.getElementById("submitAnswer").addEventListener("click", function() {
  const senhaDigitada = document.getElementById("answer").value;
  const senhaCorreta = "15/03/2001";

  if (senhaDigitada === senhaCorreta) {
    document.getElementById("errorMessage").style.display = "none";
    document.getElementById("successMessage").style.display = "block";
  } else {
    document.getElementById("successMessage").style.display = "none";
    document.getElementById("errorMessage").style.display = "block";
  }
})
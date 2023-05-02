
function calculateCGPA() {
    const creditHours = document.getElementById("credit-hours").value;
    const oldCGPA = document.getElementById("cgpa").value;
    const newGrades = document.getElementById("new-grades").value.split(", ");
  
    // calculate current total credit points
    let totalCreditPoints = creditHours * oldCGPA;
  
    // calculate new total credit points
    let newTotalCreditPoints = 0;
    newGrades.forEach((grade) => {
      const gradePoints = getGradePoints(grade);
      newTotalCreditPoints += gradePoints;
    });
  
    // calculate new CGPA
    const newCGPA = (totalCreditPoints + newTotalCreditPoints) / (parseInt(creditHours) + newGrades.length);
  
    // display new CGPA
    document.getElementById("result").value = newCGPA.toFixed(2);
  }
  
  function getGradePoints(grade) {
    switch (grade) {
      case "A+":
        return 4.0;
      case "A":
        return 4.0;
      case "A-":
        return 3.7;
      case "B+":
        return 3.3;
      case "B":
        return 3.0;
      case "B-":
        return 2.7;
      case "C+":
        return 2.3;
      case "C":
        return 2.0;
      case "C-":
        return 1.7;
      case "D+":
        return 1.3;
      case "D":
        return 1.0;
      case "F":
        return 0.0;
      default:
        return 0.0;
    }
  }
  
  
  
function getGrade(marks) {
if (marks < 0 || marks > 100) {
    console.log("Please enter a number ranging between 0 to 100.");
}else {

  let grade;
  if(marks > 79) {
    return "The student's grade is: A";
  }
   else if (marks >= 60 && marks <= 79) {
    return "The student's grade is: B";
   }
   else if (marks >= 50 && marks <= 59) {
    return "The student's grade is: C";
   }
   else if (marks >= 40 && marks <=49) {
    return "The student's grade is: D";
   }
   else {
    return "The student's grade is: E";
   }
    
  }   
}
   console.log(getGrade(50));
   console.log(getGrade(80));
   console.log(getGrade(45));
   console.log(getGrade(10));
   console.log(getGrade(65));




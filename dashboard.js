const model = {
 predict: function(attendance, assignment, grade) {

   let score =
   attendance * 0.4 +
   assignment * 10 +
   grade * 10;

   if(score >= 70){
      return "Good Student";
   } else {
      return "Risk Student";
   }

 }
};

// DATASET

const students = [

  {
    name: "Ali",
    attendance: 90,
    assignments: 5,
    grade: 4.5
  },

  {
    name: "Vali",
    attendance: 60,
    assignments: 2,
    grade: 2.0
  },

  {
    name: "Hasan",
    attendance: 80,
    assignments: 4,
    grade: 3.5
  },

  {
    name: "Bekzod",
    attendance: 45,
    assignments: 1,
    grade: 2.0
  },

  {
    name: "Jasur",
    attendance: 95,
    assignments: 5,
    grade: 5.0
  }

];


// USER INFO

const role =
  localStorage.getItem("role");

const username =
  localStorage.getItem("username");


// WELCOME TEXT

document.getElementById("welcomeText")
  .innerText = "Welcome " + username;


// CONTENT

const content =
  document.getElementById("content");


// AI FUNCTION

function predictStudent(attendance, assignment, grade) {

  let score =
  (attendance / 100) +
  assignment +
  grade;

  // AI Prediction Result

  if(score >= 8){

    return "Good Student ✅";

  }

  else{

    return "Risk Student ⚠️";

  }

}




// TEACHER

if(role === "teacher"){

  students.forEach(function(student){

    content.innerHTML += `

    <div class="card">

      <h2>${student.name}</h2>

      <p>
        Davomat:
        ${student.attendance}%
      </p>

      <p>
        Uyga vazifa:
        ${student.assignments}
      </p>

      <p>
        Xulq atvor:
        ${student.grade}
      </p>

      <div class="ai-box">

        AI Prediction:
      AI Prediction:
${predictStudent(
  student.attendance,
  student.assignments,
  student.grade
)}

      </div>

    </div>

    `;

  });

}


// STUDENT

else{

  const student =
    students.find(function(s){

      return s.name.toLowerCase()
        === username.toLowerCase();

    });

  if(student){

    content.innerHTML = `

    <div class="card">

      <h2>${student.name}</h2>

      <p>
        Davomat:
        ${student.attendance}%
      </p>

      <p>
        Uyga vazifa:
        ${student.assignments}
      </p>

      <p>
        Xulq atvor:
        ${student.grade}
      </p>

      <div class="ai-box">

        AI Prediction:
        ${predictStudent(
  student.attendance,
  student.assignments,
  student.grade
)}

      </div>

    </div>

    `;

  }

  else{

    content.innerHTML = `

    <div class="card">

      <h2>
        Student Not Found
      </h2>

    </div>

    `;

  }

}
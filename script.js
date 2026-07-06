// Array to store students
let students = [];
let editIndex = -1;

// Add or Update Student
function addStudent() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let course = document.getElementById("course").value.trim();
    let phone = document.getElementById("phone").value.trim();

    // Validation
    if (name === "" || email === "" || course === "" || phone === "") {
        alert("Please fill all fields.");
        return;
    }

    if (editIndex === -1) {
        // Create
        students.push({
            name: name,
            email: email,
            course: course,
            phone: phone
        });
    } else {
        // Update
        students[editIndex] = {
            name: name,
            email: email,
            course: course,
            phone: phone
        };

        editIndex = -1;
        document.querySelector("button").innerText = "Add Student";
    }

    displayStudents();
    clearForm();
}

// Display Students
function displayStudents() {

    let table = "";

    students.forEach((student, index) => {

        table += `
        <tr>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.course}</td>
            <td>${student.phone}</td>

            <td>
                <button onclick="editStudent(${index})">Edit</button>

                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>
        `;
    });

    document.getElementById("studentTable").innerHTML = table;
}

// Edit Student
function editStudent(index) {

    document.getElementById("name").value = students[index].name;
    document.getElementById("email").value = students[index].email;
    document.getElementById("course").value = students[index].course;
    document.getElementById("phone").value = students[index].phone;

    editIndex = index;

    document.querySelector("button").innerText = "Update Student";
}

// Delete Student
function deleteStudent(index) {

    if (confirm("Are you sure you want to delete this student?")) {

        students.splice(index, 1);

        displayStudents();
    }
}

// Clear Form
function clearForm() {

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("course").value = "";
    document.getElementById("phone").value = "";
}
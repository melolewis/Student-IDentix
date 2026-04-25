// ================================
// STEP 1 - Personal Information
// ================================
const step1Form = document.getElementById("step1Form");

if (step1Form) {
    step1Form.addEventListener("submit", function (e) {
        e.preventDefault();

        const data = {
            firstname: document.getElementById("firstname").value,
            secondname: document.getElementById("secondname").value,
            email: document.getElementById("email").value,
            contact: document.getElementById("contact").value,
            date: document.getElementById("date").value,
            place: document.getElementById("place").value,
            gender: document.getElementById("gender").value
        };

        localStorage.setItem("step1Data", JSON.stringify(data));
        window.location.href = "register2.html";
    });
}


// ================================
// STEP 2 - Institution Information
// ================================
const step2Form = document.getElementById("step2Form");

if (step2Form) {
    step2Form.addEventListener("submit", function (e) {
        e.preventDefault();

        const data = {
            school: document.getElementById("school").value,
            department: document.getElementById("Department").value,
            campus: document.getElementById("campus").value,
            specialty: document.getElementById("specialty").value,
            level: document.getElementById("level").value
        };

        localStorage.setItem("step2Data", JSON.stringify(data));
        window.location.href = "register3.html";
    });
}


// ================================
// STEP 3 - Address Information
// ================================
const step3Form = document.getElementById("step3Form");

if (step3Form) {
    step3Form.addEventListener("submit", function (e) {
        e.preventDefault();

        const data = {
            address: document.getElementById("address").value,
            nationality: document.getElementById("nationality").value,
            city: document.getElementById("city").value
        };

        localStorage.setItem("step3Data", JSON.stringify(data));
        window.location.href = "register4.html";
    });
}


// ================================
// STEP 4 - Emergency + Photo
// ================================
const step4Form = document.getElementById("step4Form");

if (step4Form) {
    step4Form.addEventListener("submit", function (e) {
        e.preventDefault();

        const agree = document.getElementById("agreeCheckbox").checked;
        const fileInput = document.getElementById("img");
        const file = fileInput.files[0];

        if (!agree) {
            alert("Please accept terms and conditions");
            return;
        }

        if (!file) {
            alert("Please upload your photo");
            return;
        }

        const reader = new FileReader();

        reader.onload = function () {
            const data = {
                emergencyName: document.getElementById("emergencyName").value,
                emergencyPhone: document.getElementById("emergencyPhone").value,
                photo: reader.result
            };

            localStorage.setItem("step4Data", JSON.stringify(data));

            window.location.href = "id-card.html";
        };

        reader.readAsDataURL(file);
    });
}


// ================================
// DISPLAY DATA ON ID CARD
// ================================
window.addEventListener("DOMContentLoaded", function () {
    const idCardPage = document.getElementById("studentName");

    if (idCardPage) {
        const step1 = JSON.parse(localStorage.getItem("step1Data")) || {};
        const step2 = JSON.parse(localStorage.getItem("step2Data")) || {};
        const step3 = JSON.parse(localStorage.getItem("step3Data")) || {};
        const step4 = JSON.parse(localStorage.getItem("step4Data")) || {};

        document.getElementById("studentName").innerText =
            `${step1.firstname || ""} ${step1.secondname || ""}`;

        document.getElementById("studentSchool").innerText =
            step2.school || "";

        document.getElementById("studentDepartment").innerText =
            step2.department || "";

        document.getElementById("studentLevel").innerText =
            step2.level || "";

        document.getElementById("studentContact").innerText =
            step1.contact || "";

        document.getElementById("studentCity").innerText =
            step3.city || "";

        document.getElementById("studentPhoto").src =
            step4.photo || "";
    }
});

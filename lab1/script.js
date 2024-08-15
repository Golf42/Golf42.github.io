// ข้อมูลผู้ใช้ที่เก็บไว้ในตัวแปร JavaScript
const validUsername = "admin";
const validPassword = "1234";

// ดึงฟอร์มและส่วนที่จะแสดงข้อความผิดพลาด
const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("error-message");

// เมื่อฟอร์มถูกส่ง
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // ป้องกันการรีเฟรชหน้า

    // ดึงค่าจาก input
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // เปรียบเทียบค่าที่กรอกกับค่าที่เก็บไว้
    if (username === validUsername && password === validPassword) {
        alert("เข้าสู่ระบบสำเร็จ!");
        // สามารถทำการ redirect ไปยังหน้าอื่นได้ เช่น
        // window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "ข้อมูลถูกต้อง";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registerForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        // ✅ পাসওয়ার্ড মিলানো চেক
        if (password !== confirmPassword) {
            alert("⚠ পাসওয়ার্ড এবং কনফার্ম পাসওয়ার্ড মেলে নি!");
            return;
        }

        // ✅ লোকাল স্টোরেজ থেকে আগের ইউজার লিস্ট বের করা
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // ✅ একই ইমেইল দিয়ে রেজিস্ট্রেশন চেক
        let userExists = users.some(user => user.email === email);
        if (userExists) {
            alert("❌ এই ইমেইলটি ইতোমধ্যে নিবন্ধিত হয়েছে! অনুগ্রহ করে লগইন করুন।");
            window.location.href = "login.html";
            return;
        }

        // ✅ নতুন ইউজারের তথ্য সংরক্ষণ করা
        let newUser = {
            name: name,
            email: email,
            password: password
        };
        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        alert("✅ রেজিস্ট্রেশন সফল হয়েছে! এখন লগইন করুন।");
        window.location.href = "login.html"; // লগইন পেজে পাঠানো হবে
    });
});

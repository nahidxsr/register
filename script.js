document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("⚠ পাসওয়ার্ড এবং কনফার্ম পাসওয়ার্ড মেলে নি!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userExists = users.some(user => user.email === email);

    if (userExists) {
        alert("❌ এই ইমেইলটি ইতোমধ্যে নিবন্ধিত হয়েছে! অনুগ্রহ করে লগইন করুন।");
        window.location.href = "https://nahidxsr.github.io/login/";
        return;
    }

    let newUser = { name: name, email: email, password: password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users)); // 🔥 সব ইউজারের ডাটা সেভ করবে

    alert("✅ রেজিস্ট্রেশন সফল হয়েছে! এখন লগইন করুন।");
    
    setTimeout(() => {
        window.location.href = "https://nahidxsr.github.io/login/";
    }, 3000);
});

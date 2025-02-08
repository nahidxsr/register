document.getElementById("registerForm").addEventListener("submit", function(event) {
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

    // ✅ লোকাল স্টোরেজে ডাটা সংরক্ষণ
    let userData = {
        name: name,
        email: email,
        password: password
    };
    localStorage.setItem("user", JSON.stringify(userData));

    alert("✅ রেজিস্ট্রেশন সফল হয়েছে! এখন লগইন করুন।");
    window.location.href = "login.html"; // লগইন পেজে পাঠানো হবে
});

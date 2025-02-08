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

    let newUser = {
        name: name,
        email: email,
        password: password,
        balance: 0 // নতুন ইউজারের ব্যালেন্স 0 রাখা হলো
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users)); // 🔥 সব ইউজারের ডাটা সেভ করবে
    localStorage.setItem("loggedInUser", JSON.stringify(newUser)); // 🔥 নতুন ইউজারকে লগইন করা দেখাবে

    alert("✅ রেজিস্ট্রেশন সফল হয়েছে! 🎉 আপনি এখন লগইন অবস্থায় আছেন।");

    // ✅ রেজিস্ট্রেশন শেষ হলে সরাসরি ড্যাশবোর্ডে পাঠানো হবে
    setTimeout(() => {
        window.location.href = "https://nahidxsr.github.io/Taka-Gor-BD/";
    }, 3000);
});

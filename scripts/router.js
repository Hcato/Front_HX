document.addEventListener("DOMContentLoaded", () => {
    const goToUsers = document.getElementById("goToUsers");
    const goToProducts = document.getElementById("goToProducts");
    const backHome = document.getElementById("backHome");

    if (goToUsers) {
        goToUsers.addEventListener("click", () => {
            window.location.href = "./views/users.html";
        });
    }

    if (goToProducts) {
        goToProducts.addEventListener("click", () => {
            window.location.href = "./views/products.html";
        });
    }

    if (backHome) {
        backHome.addEventListener("click", () => {
            window.location.href = "../index.html";
        });
    }
});

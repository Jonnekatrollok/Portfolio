document.addEventListener("DOMContentLoaded", function () {
    const letters = document.querySelectorAll(".portfolio-text span");

    // Véletlenszerű X értékek az eséshez
    letters.forEach(letter => {
        letter.style.setProperty('--rand-x', Math.random()); 
    });

    // 1️⃣ **Betűk szétesnek (lepotyognak)**
    setTimeout(() => {
        letters.forEach(letter => letter.classList.add("fall"));
    }, 500);

    // 2️⃣ **Visszacsúsznak az X tengelyen**
    setTimeout(() => {
        letters.forEach(letter => {
            letter.classList.remove("fall");
            letter.classList.add("slide");
        });
    }, 2000);

    // 3️⃣ **Fellifteznek a végső helyükre**
    setTimeout(() => {
        letters.forEach(letter => {
            letter.classList.remove("slide");
            letter.classList.add("lift");
        });
    }, 3500);
});

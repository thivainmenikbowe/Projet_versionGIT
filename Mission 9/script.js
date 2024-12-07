function ca() {
    let score = 0;
    const totalQuestions = 10;
    const rs = {
        r1: "2",
        r2: "2",
        r3: "3",
        r4: "1",
        r5: "3",
        r6: "4",
        r7: "1",
        r8: "2",
        r9: "3",
        r10: "4"
    };

    for (let i = 1; i <= totalQuestions; i++) {
        const selectOpt = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectOpt && selectOpt.value === rs[`r${i}`]) {
            score++;
        }
    }

    const results = document.getElementById("results");
    results.textContent = `Your score is ${score} out of ${totalQuestions}.`;
}



function clearResponses() {
    // Select all radio buttons
    const radios = document.querySelectorAll('input[type="radio"]');

    // Uncheck all radio buttons
    radios.forEach(radio => radio.checked = false);

    // Clear results display
    const results = document.getElementById("results");
    results.textContent = ''; // Clear the result text
}

function correction(){
    window.location.href="correction.html"
}
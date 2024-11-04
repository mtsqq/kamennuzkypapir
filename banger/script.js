// Funkce pro spuštění hry
function startGame() {
    document.getElementById("startButton").style.display = "none";
    document.getElementById("gameButtons").style.display = "block";
    document.getElementById("result").textContent = ""; // Vymazání předchozího výsledku
}

// Logika hry Kámen, nůžky, papír
function playGame(playerChoice) {
    const choices = ["kámen", "nůžky", "papír"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let resultText = "";
    let resultClass = "";
    
    if (playerChoice === computerChoice) {
        resultText = `Remíza! Oba jste vybrali ${playerChoice}.`;
        resultClass = "draw";
    } else if (
        (playerChoice === "kámen" && computerChoice === "nůžky") ||
        (playerChoice === "nůžky" && computerChoice === "papír") ||
        (playerChoice === "papír" && computerChoice === "kámen")
    ) {
        resultText = `Vyhrál jsi! Počítač vybral ${computerChoice}.`;
        resultClass = "win";
    } else {
        resultText = `Prohrál jsi! Počítač vybral ${computerChoice}.`;
        resultClass = "lose";
    }
    
    // Zobrazení výsledku
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = resultText;
    resultDiv.className = resultClass;
    
    // Skrytí tlačítek a zobrazení tlačítka "Hrát znovu"
    document.getElementById("gameButtons").style.display = "none";
    document.getElementById("restartButton").style.display = "block";
}

// Funkce pro restart hry
function restartGame() {
    document.getElementById("restartButton").style.display = "none";
    document.getElementById("gameButtons").style.display = "block";
    document.getElementById("result").textContent = "";
}

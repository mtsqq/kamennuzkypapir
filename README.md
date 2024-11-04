<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kámen, nůžky, papír</title>
  <style>
    /* Obecné stylování */
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      background-color: #121212; /* Tmavé pozadí */
      color: #ffffff; /* Bílý text */
    }

    /* Navigační menu */
    nav {
      margin-bottom: 20px;
      background-color: #2a2a2a; /* Světlejší odstín pozadí */
      padding: 10px;
      color: #ffffff;
    }

    /* Tlačítka */
    .game-button {
      background-color: #002c3d; /* Stejná barva jako pozadí */
      color: #ffffff;
      border: none;
      padding: 15px 30px;
      margin: 20px;
      font-size: 18px;
      cursor: pointer;
      border-radius: 8px;
      transition: background-color 0.3s;
      position: relative;
      top: 30px; /* Posunutí tlačítek níže */
    }

    .game-button:hover {
      background-color: #333333; /* Trochu světlejší při najetí */
    }

    /* Výsledek hry */
    #result {
      font-size: 24px;
      margin-top: 20px;
    }

    .win {
      color: green;
    }

    .lose {
      color: red;
    }

    .draw {
      color: orange;
    }
  </style>
</head>
<body>
  <!-- Navigační menu -->
  <nav>
    <h2>Kámen, nůžky, papír</h2>
  </nav>

  <!-- Úvodní text -->
  <p>Vyzkoušej si klasickou hru „Kámen, nůžky, papír“ proti počítači! Vyber jednu z možností a zjisti, jestli vyhraješ.</p>

  <!-- Tlačítka pro hru -->
  <div>
    <button class="game-button" onclick="playGame('kámen')">Kámen</button>
    <button class="game-button" onclick="playGame('nůžky')">Nůžky</button>
    <button class="game-button" onclick="playGame('papír')">Papír</button>
  </div>

  <!-- Zobrazení výsledku -->
  <div id="result"></div>

  <!-- JavaScript logika pro hru -->
  <script>
    function playGame(playerChoice) {
      const choices = ['kámen', 'nůžky', 'papír'];
      const computerChoice = choices[Math.floor(Math.random() * choices.length)];

      // Určení výsledku hry
      let result = '';
      if (playerChoice === computerChoice) {
        result = 'Remíza!';
        document.getElementById('result').className = 'draw';
      } else if (
        (playerChoice === 'kámen' && computerChoice === 'nůžky') ||
        (playerChoice === 'nůžky' && computerChoice === 'papír') ||
        (playerChoice === 'papír' && computerChoice === 'kámen')
      ) {
        result = 'Vyhrál jsi!';
        document.getElementById('result').className = 'win';
      } else {
        result = 'Prohrál jsi!';
        document.getElementById('result').className = 'lose';
      }

      // Zobrazení výsledku
      document.getElementById('result').innerHTML = `
        <p>Vybral jsi: ${playerChoice}</p>
        <p>Počítač vybral: ${computerChoice}</p>
        <p><strong>${result}</strong></p>
      `;
    }
  </script>
</body>
</html>


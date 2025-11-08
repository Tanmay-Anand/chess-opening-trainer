// CHESS OPENINGS DATABASE
const openings = {
  italian: {
    name: "Italian Game",
    thumbnail: "A classic way to develop quickly and aim for fast pressure on f7. Leads to open, tactical positions.",
    moves: [
      { from: "e2", to: "e4", piece: "♙", description: "White: e4" },
      { from: "e7", to: "e5", piece: "♟", description: "Black: e5" },
      { from: "g1", to: "f3", piece: "♘", description: "White: Nf3" },
      { from: "b8", to: "c6", piece: "♞", description: "Black: Nc6" },
      { from: "f1", to: "c4", piece: "♗", description: "White: Bc4" },
      { from: "f8", to: "c5", piece: "♝", description: "Black: Bc5" }
    ]
  },

  ruyLopez: {
    name: "Ruy Lopez",
    thumbnail: "A strategic fight where White pins the knight and builds long-term pressure on the center.",
    moves: [
      { from: "e2", to: "e4", piece: "♙", description: "White: e4" },
      { from: "e7", to: "e5", piece: "♟", description: "Black: e5" },
      { from: "g1", to: "f3", piece: "♘", description: "White: Nf3" },
      { from: "b8", to: "c6", piece: "♞", description: "Black: Nc6" },
      { from: "f1", to: "b5", piece: "♗", description: "White: Bb5" }
    ]
  },

  sicilian: {
    name: "Sicilian Defense",
    thumbnail: "Black avoids symmetry, fights for the center from the flank, and creates sharp, counterattacking positions.",
    moves: [
      { from: "e2", to: "e4", piece: "♙", description: "White: e4" },
      { from: "c7", to: "c5", piece: "♟", description: "Black: c5" },
      { from: "g1", to: "f3", piece: "♘", description: "White: Nf3" },
      { from: "d7", to: "d6", piece: "♟", description: "Black: d6" },
      { from: "d2", to: "d4", piece: "♙", description: "White: d4" },
      { from: "c5", to: "d4", piece: "♟", description: "Black: cxd4" }
    ]
  },

  queensGambit: {
    name: "Queen's Gambit",
    thumbnail: "A solid, strategic opening where White uses the c-pawn to distract Black and take full control of the center.",
    moves: [
      { from: "d2", to: "d4", piece: "♙", description: "White: d4" },
      { from: "d7", to: "d5", piece: "♟", description: "Black: d5" },
      { from: "c2", to: "c4", piece: "♙", description: "White: c4" },
      { from: "e7", to: "e6", piece: "♟", description: "Black: e6" }
    ]
  },

  scotchGame: {
  name: "Scotch Game",
  thumbnail: "White challenges the center early with d4, leading to open positions and fast piece activity.",
  moves: [
    { from: "e2", to: "e4", piece: "♙", description: "White: e4" },
    { from: "e7", to: "e5", piece: "♟", description: "Black: e5" },
    { from: "g1", to: "f3", piece: "♘", description: "White: Nf3" },
    { from: "b8", to: "c6", piece: "♞", description: "Black: Nc6" },
    { from: "d2", to: "d4", piece: "♙", description: "White: d4" }
  ]
},

fourKnights: {
  name: "Four Knights Game",
  thumbnail: "Both sides develop smoothly, creating balanced positions with simple plans and quick castling.",
  moves: [
    { from: "e2", to: "e4", piece: "♙", description: "White: e4" },
    { from: "e7", to: "e5", piece: "♟", description: "Black: e5" },
    { from: "g1", to: "f3", piece: "♘", description: "White: Nf3" },
    { from: "b8", to: "c6", piece: "♞", description: "Black: Nc6" },
    { from: "b1", to: "c3", piece: "♘", description: "White: Nc3" },
    { from: "g8", to: "f6", piece: "♞", description: "Black: Nf6" }
  ]
},

caroKann: {
  name: "Caro-Kann Defense",
  thumbnail: "A rock-solid reply to e4. Black builds a stable pawn structure and aims for long-term counterplay.",
  moves: [
    { from: "e2", to: "e4", piece: "♙", description: "White: e4" },
    { from: "c7", to: "c6", piece: "♟", description: "Black: c6" }
  ]
},

pircDefense: {
  name: "Pirc Defense",
  thumbnail: "Black lets White build a big center and prepares to strike back with dynamic, flexible piece play.",
  moves: [
    { from: "e2", to: "e4", piece: "♙", description: "White: e4" },
    { from: "d7", to: "d6", piece: "♟", description: "Black: d6" },
    { from: "d2", to: "d4", piece: "♙", description: "White: d4" },
    { from: "g7", to: "g6", piece: "♟", description: "Black: g6" }
  ]
},

kingsIndianDefense: {
  name: "King's Indian Defense",
  thumbnail: "A favorite of attacking players. Black allows White space, then launches a powerful kingside attack.",
  moves: [
    { from: "d2", to: "d4", piece: "♙", description: "White: d4" },
    { from: "g7", to: "g6", piece: "♟", description: "Black: g6" },
    { from: "c2", to: "c4", piece: "♙", description: "White: c4" },
    { from: "g8", to: "f6", piece: "♞", description: "Black: Nf6" }
  ]
},

nimzoIndianDefense: {
  name: "Nimzo-Indian Defense",
  thumbnail: "Black pins the knight early and fights for dark-square control, creating rich positional battles.",
  moves: [
    { from: "d2", to: "d4", piece: "♙", description: "White: d4" },
    { from: "g8", to: "f6", piece: "♞", description: "Black: Nf6" },
    { from: "c2", to: "c4", piece: "♙", description: "White: c4" },
    { from: "e7", to: "e6", piece: "♟", description: "Black: e6" },
    { from: "b1", to: "c3", piece: "♘", description: "White: Nc3" },
    { from: "f8", to: "b4", piece: "♝", description: "Black: Bb4" }
  ]
},

slavDefense: {
  name: "Slav Defense",
  thumbnail: "A reliable answer to d4. Black supports the d5 pawn and avoids weaknesses, creating a solid structure.",
  moves: [
    { from: "d2", to: "d4", piece: "♙", description: "White: d4" },
    { from: "d7", to: "d5", piece: "♟", description: "Black: d5" },
    { from: "c2", to: "c4", piece: "♙", description: "White: c4" },
    { from: "c7", to: "c6", piece: "♟", description: "Black: c6" }
  ]
},

londonSystem: {
  name: "London System",
  thumbnail: "Simple, system-based setup. White builds a strong structure and plays for consistent, safe development.",
  moves: [
    { from: "d2", to: "d4", piece: "♙", description: "White: d4" },
    { from: "d7", to: "d5", piece: "♟", description: "Black: d5" },
    { from: "c1", to: "f4", piece: "♗", description: "White: Bf4" }
  ]
},

kingsGambit: {
  name: "King's Gambit",
  thumbnail: "A bold sacrifice of the f-pawn to open lines and attack fast. Wild, tactical, and dangerous.",
  moves: [
    { from: "e2", to: "e4", piece: "♙", description: "White: e4" },
    { from: "e7", to: "e5", piece: "♟", description: "Black: e5" },
    { from: "f2", to: "f4", piece: "♙", description: "White: f4" }
  ]
},

viennaGame: {
  name: "Vienna Game",
  thumbnail: "White develops the queen’s knight early and prepares f4, leading to active and sharp attacking chances.",
  moves: [
    { from: "e2", to: "e4", piece: "♙", description: "White: e4" },
    { from: "e7", to: "e5", piece: "♟", description: "Black: e5" },
    { from: "b1", to: "c3", piece: "♘", description: "White: Nc3" }
  ]
},

};

// INITIAL BOARD
const initialBoard = {
  a1: "♖", b1: "♘", c1: "♗", d1: "♕", e1: "♔", f1: "♗", g1: "♘", h1: "♖",
  a2: "♙", b2: "♙", c2: "♙", d2: "♙", e2: "♙", f2: "♙", g2: "♙", h2: "♙",
  a7: "♟", b7: "♟", c7: "♟", d7: "♟", e7: "♟", f7: "♟", g7: "♟", h7: "♟",
  a8: "♜", b8: "♞", c8: "♝", d8: "♛", e8: "♚", f8: "♝", g8: "♞", h8: "♜"
};

// GAME STATE
let currentBoard = { ...initialBoard };
let selectedSquare = null;
let currentOpening = null;
let currentMoveIndex = 0;
let trainingActive = false;

// DOM ELEMENTS
const chessboard = document.getElementById("chessboard");
const openingSelect = document.getElementById("openingSelect");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const hintBtn = document.getElementById("hintBtn");
const status = document.getElementById("status");
const moveList = document.getElementById("moveList");
const progress = document.getElementById("progress");

// INITIALIZATION
function init() {
  populateOpenings();
  createBoard();
  setupEventListeners();
  updateStatus("Select an opening to begin training");
}

function populateOpenings() {
  Object.keys(openings).forEach(key => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = openings[key].name;
    openingSelect.appendChild(option);
  });
}

function createBoard() {
  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const ranks = ["8", "7", "6", "5", "4", "3", "2", "1"];

  ranks.forEach((rank, rankIdx) => {
    files.forEach((file, fileIdx) => {
      const square = document.createElement("div");
      const squareId = file + rank;
      square.id = squareId;
      square.className = `square ${(rankIdx + fileIdx) % 2 === 0 ? "light" : "dark"}`;
      square.dataset.square = squareId;

      if (currentBoard[squareId]) {
        square.textContent = currentBoard[squareId];
      }

      square.addEventListener("click", handleSquareClick);
      chessboard.appendChild(square);
    });
  });
}

function updateBoard() {
  document.querySelectorAll(".square").forEach(square => {
    const id = square.dataset.square;
    square.textContent = currentBoard[id] || "";
  });
}

// EVENTS
function setupEventListeners() {
    openingSelect.addEventListener("change", () => {
  const key = openingSelect.value;
  if (!key) {
    updateStatus("Select an opening to begin training");
    return;
  }

  const op = openings[key];
  updateStatus(
    `<strong>${op.name}</strong><br>
     <div style="margin:8px 0; color:#555; font-size:0.95em;">
       ${op.thumbnail}
     </div>
     Click Start Training to begin.`
  );
});


  startBtn.addEventListener("click", startTraining);
  resetBtn.addEventListener("click", resetTraining);
  hintBtn.addEventListener("click", showHint);
}

function handleSquareClick(e) {
  if (!trainingActive) return;

  const clicked = e.target.dataset.square;
  clearHighlights();

  if (!selectedSquare) {
    if (currentBoard[clicked]) {
      selectedSquare = clicked;
      e.target.classList.add("selected");
    }
  } else {
    attemptMove(selectedSquare, clicked);
    selectedSquare = null;
  }
}

// GAME LOGIC
function startTraining() {
  const selected = openingSelect.value;
  if (!selected) {
    updateStatus(
  `<strong>${currentOpening.name}</strong><br>
   <div style="margin:8px 0; color:#555; font-size:0.95em;">
      ${currentOpening.thumbnail}
   </div>
   Make the first move: ${currentOpening.moves[0].description}`
);

    return;
  }

  currentOpening = openings[selected];
  currentMoveIndex = 0;
  currentBoard = { ...initialBoard };
  trainingActive = true;

  updateBoard();
  updateMoveList();
  updateProgress();
  updateStatus(
    `Training: ${currentOpening.name}<br>Make the first move: ${currentOpening.moves[0].description}`
  );
}

function resetTraining() {
  currentBoard = { ...initialBoard };
  selectedSquare = null;
  currentMoveIndex = 0;
  trainingActive = false;

  updateBoard();
  clearHighlights();
  updateStatus("Select an opening to begin training");
  moveList.innerHTML = "";
  updateProgress();
}

function attemptMove(from, to) {
  if (currentMoveIndex >= currentOpening.moves.length) {
    updateStatus("Opening sequence complete! 🎉", "success");
    trainingActive = false;
    return;
  }

  const expected = currentOpening.moves[currentMoveIndex];

  if (from === expected.from && to === expected.to) {
    makeMove(from, to);

    const toSquare = document.querySelector(`[data-square="${to}"]`);
    toSquare.classList.add("correct");
    setTimeout(() => toSquare.classList.remove("correct"), 600);

    currentMoveIndex++;
    updateMoveList();
    updateProgress();

    if (currentMoveIndex >= currentOpening.moves.length) {
      updateStatus("🎉 Perfect! Opening complete!", "success");
      trainingActive = false;
    } else {
      updateStatus(`Correct! Next: ${currentOpening.moves[currentMoveIndex].description}`, "success");
    }
  } else {
    updateStatus(`Incorrect! Try again. Expected: ${expected.description}`, "error");
  }
}

function makeMove(from, to) {
  currentBoard[to] = currentBoard[from];
  delete currentBoard[from];
  updateBoard();
}

function showHint() {
  if (!trainingActive || currentMoveIndex >= currentOpening.moves.length) return;

  clearHighlights();
  const move = currentOpening.moves[currentMoveIndex];

  const fromSquare = document.querySelector(`[data-square="${move.from}"]`);
  const toSquare = document.querySelector(`[data-square="${move.to}"]`);

  fromSquare.classList.add("hint");
  toSquare.classList.add("hint");

  setTimeout(clearHighlights, 2000);
}

// UI UPDATES
function updateStatus(message, type = "") {
  status.innerHTML = message;
  status.className = "status";
  if (type) status.classList.add(type);
}

function updateMoveList() {
  if (!currentOpening) return;

  moveList.innerHTML = "";
  currentOpening.moves.forEach((move, idx) => {
    const item = document.createElement("div");
    item.className = "move-item";
    item.textContent = `${idx + 1}. ${move.description}`;

    if (idx < currentMoveIndex) item.classList.add("completed");
    else if (idx === currentMoveIndex) item.classList.add("current");
    else item.classList.add("pending");

    moveList.appendChild(item);
  });
}

function updateProgress() {
  if (!currentOpening) {
    progress.style.width = "0%";
    return;
  }
  const percent = (currentMoveIndex / currentOpening.moves.length) * 100;
  progress.style.width = percent + "%";
}

function clearHighlights() {
  document.querySelectorAll(".square").forEach(sq => {
    sq.classList.remove("selected", "valid-move", "hint");
  });
}

// START APP
init();

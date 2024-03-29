showPuzzle();

function showPuzzle() {
  setGlobalOptionValue("global_squarePuzzleSize", 12);
  setGlobalOptionValue("global_p_bends", Math.floor(Math.random() * 5) + 0);
  setGlobalOptionValue("global_diagonals", "yes");
  setGlobalOptionValue("global_wordlistoption", "A");
  setGlobalOptionValue("global_title_name", "SD43");
  setGlobalOptionValue("global_clueoption", "U");
  setGlobalOptionValue("global_blanks", " ");
  setGlobalOptionValue(
    "global_p_words",
    "SHELDON,ASHLEY,MARY,BRYAN,MICHAEL,ACE"
  );
  let result = createManyPuzzles(1);
  let puzzle = result[0];
  console.log("Puzzles:", result);
  let table = document.createElement("table");
  for (let i = 0; i < puzzle.p_rows; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < puzzle.p_cols; j++) {
      let cell = document.createElement("td");
      cell.textContent = puzzle.p_data[i + puzzle.p_cols * j] + " ";
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  document.getElementById("puzzle").appendChild(table);
}

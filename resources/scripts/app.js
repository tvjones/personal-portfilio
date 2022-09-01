const displayTiles = () => {
  const filter = document.getElementById("filter-select");
  let value = filter.value;
  const tiles = document.getElementsByClassName("project-tile");

  if (value === "all") {
    for (let i = 0; i < tiles.length; i++) {
      tiles[i].style.display = "flex";
    }
  } else {
    for (let i = 0; i < tiles.length; i++) {
      if (tiles[i].classList.contains(value)) {
        tiles[i].style.display = "flex";
      } else {
        tiles[i].style.display = "none";
      }
    }
  }
};



const displayLinks = () =>{
  let tiles = document.getElementsByClassName('project-tile')
  let tileLinks = document.getElementsByClassName('links')
  console.log(tiles.length)
  for(let i = 0; i < tiles.length;i++){
    console.log(i)
    tiles[i].addEventListener('mouseover',()=>{
      tileLinks[i].style.display = 'flex'
    })
  }
  
}


//display tiles based on filter
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

displayLinks()
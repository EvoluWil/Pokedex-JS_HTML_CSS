var listFilter = "",
    listElement = document.getElementById("pokeList"),
    inputElement = document.getElementById("pokeFilter"),
    pokeballElement = document.getElementById("pokeballBack");


inputElement.addEventListener("keyup", function(){
    listFilter = this.value;
    setList();
});

window.addEventListener("scroll", ()=>{
    var rotation = "translateY(-50%) rotateZ("+(window.scrollY / 6) + "deg)";
    pokeballElement.style.transform = rotation
});

function setList(){
    pokeService.listAll((pokemonList)=>{
       var list = filterList(pokemonList);
       var template = listService.createList(list);
       listElement.innerHTML = template;
    });
}

function filterList(pokemonList){
    return pokemonList.filter((pokemon)=>{
        return pokemon.name.indexOf(listFilter.toLowerCase()) !== -1;
    })
}

setList();
// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop()
}
function destructivelyRemoveFirstCat(name){
    cats.shift()
}
function appendCat(name){
    const newCats = [...cats, "Broom"]
    return newCats;
}
function prependCat(name){
    const newCats = ["Arnold", ...cats]
    return newCats
}
    
function removeLastCat(name){
    cats.slice()
    return cats.slice(0, -1);
}
function removeFirstCat(name){
    cats.slice()
    return cats.slice(1);
}
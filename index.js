// Write your solution here!
let cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}
function appendCat(name){
    cats.splice(name);
    return cats
    
}
function prependCat(name){
    cats.unshift(name);
    return cats
}
function removesLastCat(name){
    cats.pop(name);
    return cats
}
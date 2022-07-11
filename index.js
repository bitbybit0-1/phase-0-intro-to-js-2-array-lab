// Write your solution here!
let cats =["Milo", "Otis", "Garfield"];

function appendCat(name){
let copyOfCats=[...cats,name];
console.log(copyOfCats);
return copyOfCats
}
function prependCat(name){
   let newCats=[name, ...cats];
   console.log(newCats);
    return newCats
}

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
function removeLastCat(){
   return  cats.slice(0,cats.length-1);
}
function  removeFirstCat(){
    return cats.slice(1,cats.length)
}
//function appendCat(name){
  //  cats.splice(name);
  //  return cats
    
//          
//function prependCat(name){
   /* cats.unshif(name);
    return cats
}
function removesLastCat(name){
    cats.pop(name);
    return cats
*/
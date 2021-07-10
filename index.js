// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
    }

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const copyOfCats = [...cats, name];
    return copyOfCats;
}
appendCat('Broom');

function prependCat(name) {
    const copyOfCats2 = [name, ...cats];
    return copyOfCats2;
}

appendCat('Broom');

function removeLastCat() {
    return cats.slice(0, -1);
}

function removeFirstCat() {
    return cats.slice(1)
}
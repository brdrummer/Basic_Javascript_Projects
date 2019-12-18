function Dictionary() {
    var Animal = {
        Species:"Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound:"Bark!"
    };
    delete Animal.Color;
    document.getElementById("AnimalDictionary").innerHTML = Animal.Color;
}
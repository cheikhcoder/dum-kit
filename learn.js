function Baller (name,age,experience,trashtalking){
    this.name = name;
    this.age = age;
    this.experience = experience;
    this.trashtalking = function(){
        alert("all your family cant guard me ");
    }
}
var cheikh = new Baller("cheikh",20,"5years","yes");
console.log(cheikh.name);
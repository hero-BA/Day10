function myFunction(myObj, checkProp) {
    // Only change code below this line
    var myObj = {
        title: "Titanic",
        song: "My Heart Will Go On",
        genre: "drama"
    };
    if(myObj.checkProp === true) {
        return myObj.checkProp;
    }
    return "Not found";
    // Only change code above this line
};
console.log(myFunction(myObj, "title"));
module.exports = myFunction;
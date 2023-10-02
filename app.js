
//The purpose of this Lab is to get a solid understanding of the .filter() and .map() advanced array methods.
//These methods will be used extensively on future projects


//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 15,
        "name": "Pho",
        "cuisine": "Vietnamese",
        "servings": 4,
        "ingredients": ["beef", "ginger"]
    },
]

//Example function
//IMPORTANT: Take the time to step through this example function with a breakpoint until you could explain what is going on to someone else before starting this lab.

// function filterExample(){
//     //Debug tip: Use a console.log(el) inside the filter function to get a visualization of what el represents and see all its properties! This helps you to know what you can access with dot notation inside the filter. Do this every time you use a .filter or else you are working in the dark!
//     let results;
//     results = dishes.filter(function(el){
//        // console.log("el inside filterExample's filter: ", el)
//         if(el.cuisine === "Mexican"){
//             return true;
//         }
//         else{
//             return false;
//         }})

//     return results;
// }

// let mexicanFood = filterExample();
// console.log('mexicanFood from filterExample', mexicanFood)



// //Reminder: Do not move on to problem one until understand the example completely!!
// //1. Create a function that will return all dishes with the cuisine type of "vegetarian"
// //Filter

// function problemOne(){

//     let results;
//     results = dishes.filter(function(el){
//         if(el.cuisine === "Vegetarian"){
//             return true;
//         }
//         else{
//             return false;
//         }})
        
//     return results;    
// }
// let vegetarianFood = problemOne();

// console.log('vegetarianFood from problemOne', vegetarianFood);


// //2. Create a function that will prompt the user to enter a cuisine type and then return all dishes that match that type
// //Filter
// function problemTwo(){
//     let usersChoice = prompt('Enter favorite type of cuisine');
    
//     let userBasedResults;
//     userBasedResults = dishes.filter(function(el){
//         if(el.cuisine === usersChoice){
//             return true;
//         }
//         else{
//             return false;
//         }})
        
//     return userBasedResults;
// }

// let dishesBasedOnInput = problemTwo();

// console.log('Here are the items that we offer of this type for problemTwo:', dishesBasedOnInput);



//3. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter

function problemThree(){
    let results = dishes.filter(function(d){
        if(d.cuisine === "Italian" && d.servings > 5){
            return true;
        } 
        else {
            return false;
        }})
    return results;    
}

let familySizeItalian = problemThree();

console.log('Here are our family sized options from problemThree:', familySizeItalian);



//4. Create a function that will return only dishes whose id number matches their serving count.
//Filter
function problemFour(){
    let results = dishes.filter(function(d){
        if(d.id === d.servings){
            return true;
        }
        else{
            return false;
        }})
    return results;
}

let idAndServingsMatch = problemFour();
console.log('Here are the items that match your request from problemFour:', idAndServingsMatch);


//5. Create a function that will return only dishes whose serving count is even.
//Filter
function problemFive(){
    let results = dishes.filter(function(d){
        if(d.servings % 2 == 0){
            return true;
        }
        else{
            return false;
        }})
    return results;    
}

let evenNumberOfServings = problemFive();
console.log('Here are the items that match your request from problemFive:', evenNumberOfServings);



//6. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Double Hint: Research 'javascript does array include item'
//Filter
function problemSix(){
    let results = dishes.filter(function(d){
        if(d.ingredients.includes("chickpea")){
            return true;
        }
        else{
            return false;  
        }})
    return results;
}

let dishesWithChickpea = problemSix();
console.log('Here are the items that match your request from problemSix:', dishesWithChickpea);


//7. Create a function that will prompt the user to type the name of one ingredient. Then use a filter to find all the dishes whose ingredients array INCLUDES that ingredient. Return the new array.
//Filter
// var userInput = prompt("Please enter the ingredient to search dishes for")
// function problemSeven() {
//     let results = dishes.filter(function(d){
//         if(d.ingredients.includes(userInput)) {
//             return true;
//         }
//         else {
//             return false;
//         }})
//     return results;
// }
    
// let dishesBasedOnInput = problemSeven(); 
// console.log('Here are the items that match your request from problemSeven:', dishesBasedOnInput);


//8a. Create a function that will return an array of the string cuisine types. Ie, ["Italian", "Italian", "Mexican", ...]
//Map
function problemEight(){
    let results = dishes.map(function(d){
        return d.cuisine;
    })
    return results;
}
let cuisineNames = problemEight();
console.log("Cuisine names from problemEight", cuisineNames);


//9. Create a function that will return an array of strings, with the cuisine type appended to the start of the dish's name. Ie, ["Italian Pizza", "Italian Spaghetti", ...]
//Map 
function problemNine(){
    let results = dishes.map(function (d){
        return d.cuisine + " " + d.name;
    })
    return results;
} 

let dishTypeAndName = problemNine();
console.log("Dish names including type from problemNine:", dishTypeAndName);



//10. Create a function that will use advanced array methods on the 'dishes' array and return the result ["Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"]
function problemTen() {
    let results = dishes.filter(function(d){
        if(d.cuisine === "Vegetarian") {
            return true;
        }
        else{
            return false;
        }})  
          
    let formattedResults = results.map(function(r){
        return r.cuisine + " " + r.name;
    })
    return formattedResults;
}
let requestedResults = problemTen();

console.log("As requested in problemTen:", requestedResults);

//BONUS

//8b. Use the filter method to eliminate duplicate from problem 8a.
function problemEight_B(){
    let i = 1;
    let results = cuisineNames.filter(function(c){
        //let i = 1;
        if(!cuisineNames.includes(c, i)){
            i++;
            return true;
        }
        else{
            i++;
            return false;
        }       
    })    
    return results;
}
   let filteredCusineNames = problemEight_B();
   console.log("Bonus 8b: problemEight filtered to exclude duplicates: ", filteredCusineNames);   


//11. Create a function that will return dishes whose ingredients array INCLUDES "tomato" OR "cheese".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter
function bonusEleven() {
    let results = dishes.filter(function(d){
        if(d.ingredients.includes("tomato") || d.ingredients.includes("cheese")) {
            return true;
        }
        else{
            return false;
        }})
    return results;
}
let dishesWithTomatoOrChz = bonusEleven();
console.log("Dishes that are made with cheese or tomato for bonusEleven:", dishesWithTomatoOrChz);


//12. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

//13. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.
function bonusThirteen() {
    let results = cuisineNames.filter(function(c){
        for (let index = 0; index < dishes.length; index++) {
            
            if(c === dishes.cuisine) {
            return true;
            }
            else{
            return false;
            } 
        }})
    return results;
}
let arrayOfArrays = bonusThirteen();
console.log(arrayOfArrays);


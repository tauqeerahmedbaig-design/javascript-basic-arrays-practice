
function runNestedIf() {
    var c = "d", d = "d", x = "y", y = "y";
    
    if (c === d) { 
        if (x === y) { 
            alert("Chapter 14: Success! Nested condition met.");
        } else {
            alert("Secondary condition failed.");
        }
    } else {
        alert("Primary condition failed.");
    }
}



function runArrayPractice() {
    console.log("--- ARRAY PRACTICE START ---");

    var cities = ["Atlanta", "Baltimore", "Chicago", "Denver"];
    console.log("Initial Cities:", cities);

    cities.push("Seattle", "Los Angeles"); 
    console.log("After Push:", cities);

    cities.pop();  
    console.log("After Pop:", cities);

    cities.shift(); 
    console.log("After Shift (Removed Atlanta):", cities);

    cities.unshift("New York"); 
    console.log("After Unshift (Added NY):", cities);

    cities.splice(2, 1, "London"); 
    console.log("After Splice (Replaced index 2):", cities);

    var partialCities = cities.slice(1, 3); 
    console.log("Sliced Array (Index 1 to 2):", partialCities);
    
    alert("Array operations completed! Check the console for full log.");
}
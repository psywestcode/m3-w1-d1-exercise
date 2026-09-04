// The rect object should already be at the top of your starter file
var rect = {
    perimeter: function (x, y) { return (2 * (x + y)); },
    area: function (x, y) { return (x * y); }
};

function solveRect(l, w) {
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`); // L and W 
    if (l <= 0 || w <= 0) {  // if statement to make sure if L or W is less than 0
        console.log(`Rectangle must be greater than zero. values: ${l}, ${w}`); 
    } else {
        console.log(`Area of rectangle: ${rect.area(l, w)}`); 
        console.log(`Perimeter of rectangle: ${rect.perimeter(l, w)}`);
    } 
}

// Function calls must be OUTSIDE and BELOW the function block
solveRect(6, 2); 
solveRect(8, 1); 
solveRect(0, 9); // error 
solveRect(4, -1); // error
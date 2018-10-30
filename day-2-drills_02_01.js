// Functions as arguments (1)
// Create a function called repeat which takes two arguments:
// The first argument should be an arbitrary function, fn
// The second argument should be a number, n
// repeat should loop n times
// Each iteration of the loop, it should call fn
// Create two more functions called hello and goodbye:
// hello should log the string 'Hello world'
// goodbye should log the string 'Goodbye world'
// Use your repeat function to call the hello function five times: repeat(hello, 5)
// Use your repeat function to call the goodbye function five times: repeat(goodbye, 5)

function hello(){console.log('Hello world');}

function goodbye(){console.log('Goodbye world');}

function repeat(fn,n){
    
   for (let i = 0; i < n; i++){

    return fn();

   };
  
};

repeat(hello,5);
repeat(goodgbye,5);





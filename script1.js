//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.
for (var i = 0; i<= 15; i++) {
    if (i== 0) {
        console.log(i + " is even");
    }
    else if (i% 2 == 0) {
        console.log(i + " is even");
    }
    else {
        console.log(i+ " is odd");
    }
}
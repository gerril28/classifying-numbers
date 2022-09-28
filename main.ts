input.onButtonPressed(Button.A, function () {
    number += 1
})
input.onButtonPressed(Button.AB, function () {
    if (number > 0) {
        basic.showString("N")
    } else if (number < 0) {
        basic.showString("P")
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    number += -1
})
// By the programmer
// 
let number = 0
number = 7

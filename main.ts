input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onButtonPressed(Button.AB, function () {
    if (number > 0) {
        basic.showString("N")
    } else if (number < 0) {
        basic.showString("P")
    } else if (0 == 0) {
        basic.showString("Z")
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
// By the programmer
// 
let number = 0
number = 7

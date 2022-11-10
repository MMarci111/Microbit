let index = 0
if (input.buttonIsPressed(Button.A)) {
    if (index < 5) {
        index += 1
    } else if (input.buttonIsPressed(Button.B)) {
        index += -1
    } else {
        if (index < 0) {
        	
        }
    }
}
if (index == 1) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
}
if (index == 2) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        # # . . .
        `)
}
if (index == 3) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # . .
        # # # . .
        `)
}
if (index == 4) {
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # # .
        . # # # .
        # # # # .
        `)
}
if (index == 5) {
    basic.showLeds(`
        . . . . #
        . . . # #
        . . # # #
        . # # # #
        # # # # #
        `)
}
basic.forever(function () {
	
})

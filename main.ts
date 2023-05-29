input.onButtonPressed(Button.A, function () {
    i += 70
})
input.onButtonPressed(Button.B, function () {
    i += -70
})
let i = 70
basic.forever(function () {
    led.setBrightness(i)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})

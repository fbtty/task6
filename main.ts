input.onButtonPressed(Button.A, function () {
    c = input.temperature()
    basic.showNumber(c)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(c * (1.8 + 32))
})
let c = 0
basic.showString("2F21")
basic.forever(function () {
	
})

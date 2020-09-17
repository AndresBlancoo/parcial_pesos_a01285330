input.onButtonPressed(Button.A, function () {
    basic.showNumber(pesos)
    basic.showString("MXN=")
    dollars = pesos * 21.2917
    basic.showNumber(dollars)
    basic.showString("USD")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(pesos)
    basic.showString("MXN=")
    euros = pesos * 25.2917
    basic.showNumber(euros)
    basic.showString("EUR")
})
let euros = 0
let dollars = 0
let pesos = 0
basic.showString("Andres Blanco")
basic.showString("A01285330")
pesos = 100
basic.forever(function () {
	
})

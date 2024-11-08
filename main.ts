let licht = 0
input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.Click), function () {
    licht = input.lightLevel()
})
input.onButtonEvent(Button.B, input.buttonEventValue(ButtonEvent.Click), function () {
    basic.showNumber(licht)
})

let poti = 0
basic.showIcon(IconNames.Happy)
basic.pause(1000)
basic.forever(function () {
    poti = pins.analogReadPin(AnalogPin.P1)
    pins.analogWritePin(AnalogPin.P2, poti)
    basic.pause(100)
})

basic.show_icon(IconNames.HAPPY)

def on_forever():
    basic.show_number(pins.analog_read_pin(AnalogPin.P1))
    basic.pause(100)
basic.forever(on_forever)

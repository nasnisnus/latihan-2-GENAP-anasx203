let genap = 0
basic.forever(function () {
    if (genap <= 10) {
        basic.showNumber(genap)
        basic.pause(100)
        genap += 2
    } else {
        genap = 0
    }
})

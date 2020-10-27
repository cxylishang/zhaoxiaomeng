
xo = 'xiaomeng'

function func() {
    var xo = 'lishang'
    function inner() {
        xo = 'kaixin'
        console.log(xo)

    }
    inner()
}
func()
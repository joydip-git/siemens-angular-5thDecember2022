function foo(args) {
    console.log(args)
    console.log(typeof args)
    if (typeof args === 'function') {
        args()
    }

}
foo(12)
foo('joydip')
foo(true)
foo({ name: 'anil', id: 1 })
foo([1, 2, 3, 4])

var callable = function () {
    console.log('callback')
}
foo(callable)


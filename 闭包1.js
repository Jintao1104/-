for (var i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(function timer() {
            console.log(new Date, i);
        }, 1000);
    })(i);
}
console.log(new Date, i);
const number = document.getElementById('number')
const display = document.getElementById('result')
const display2 = document.getElementById('result2')


function pascal() {
    let p = '';
    let pola = number.value

    function faktorial(n) {
        let a = 1;
        let i = 1;

        while (i <= n) {
            a *= i;
            i++;
        }

        return a;

    }

    for (let i = 0; i < pola; i++) {
        for (let j = pola; j >= i; j--) {
            p += '';
        }

        for (let j = 0; j <= i; j++) {
            p += faktorial(i) / (faktorial(j) * faktorial(i - j));

        }

        p += '\n'

    }

    display.innerText = `${p}`
    display2.innerText = `${p}`

    console.log(p);
    console.log(p);
}
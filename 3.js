const inputUser = document.getElementById('text')
const display = document.getElementById('result')

function removeDuplicate(str, n) {

    var index = 0;

    for (var i = 0; i < n; i++) {

        var j;
        for (j = 0; j < i; j++) {
            if (str[i] == str[j]) {
                break;
            }
        }

        if (j == i) {
            str[index++] = str[i];
        }
    }

    return str.join("").slice(str, index);
}

function duplicate() {
    var str = `${inputUser.value}`.split("");
    var n = str.length;

    display.innerText = (removeDuplicate(str, n));
}



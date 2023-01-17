let a = ''
let b = ''
let sign = ''
let out = document.querySelector('.calculator__show')
let finish = false

let digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
let option = ['÷', 'x', '-', '+']

calcClearAll = () => {
    a = ''
    b = ''
    sign = ''
    out.textContent = '0'
    finish = false
}

document.querySelector('.calculator__btns').onclick = (event) => {
    if (!event.target.classList.contains('calculator__btn')) return

    const key = event.target.textContent
    out.textContent = ''

    if (key == 'AC') {
        calcClearAll()
    }

    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key
            out.textContent += a
        } else if (a !== '' && b !== '' && finish) {
            b = key
            finish = false
            out.textContent = b
        } else {
            b += key
            out.textContent += b
        }
    }

    if (option.includes(key)) {
        sign = key
        out.textContent = sign
    }

    if (key == '=') {
        switch (sign) {
            case '÷':
                a = (+a) / (+b)
                break
            case 'x':
                a = (+a) * (+b)
                break
            case '-':
                a = (+a) - (+b)
                break
            case '+':
                a = (+a) + (+b)
                break
        }
        out.textContent = a
        finish = true
    }
}

let availableCards = [
    ['&#9824;', 2], ['&#9827;',2], ['&#9829;', 2], ['&#9830;', 2], ['&#9674;', 2]
]
let first = null
let second = null

function drawCard() {
    let suit
    do {
        suit = Math.floor(Math.random()*5)
    } while (availableCards[suit][1] == 0)
    availableCards[suit][1]--
    const card = document.createElement('div')
    card.innerHTML = availableCards[suit][0]
    card.classList.add('cards-container__card')
    card.id = 'cards-container__card'
    document.querySelector('#cardsContainer').append(card)
}

for (let i = 0; i < 10; i ++) {
    drawCard()
}


const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
    const allCards = document.querySelectorAll('#cards-container__card')
    allCards.forEach(card => {
        card.classList.toggle('cards-container__card--covered')
    })
    setTimeout(() => {
        allCards.forEach(card => {
            card.classList.add('test')
            card.addEventListener('click', (e) => {
                const result = checkCards(e.target)
                if (!result) {
                    setTimeout(() => {
                        [first, second] = reverseCards(first, second)
                    }, 2000)
                    
                }
            })
            card.classList.remove('cards-container__card--covered')
        })
    }, 1000)
})

function reverseCards(first, second) {
    first.classList.add('cards-container__card--covered')
    setTimeout(() => {
        first.classList.add('test')
        first.classList.remove('cards-container__card--covered')
    }, 1000)

    second.classList.add('cards-container__card--covered')
    setTimeout(() => {
        second.classList.add('test')
        second.classList.remove('cards-container__card--covered')
    }, 1000)
    return [null, null]
}

function checkCards(target) {
    if (target !== first && second === null && target.classList.contains('test')) {
        target.classList.add('cards-container__card--covered')
        setTimeout(() => {
            target.classList.remove('test')
            target.classList.remove('cards-container__card--covered')
        }, 1000)
        if (!first) {
            first = target
        } else {
            second = target
            if (first.innerHTML === second.innerHTML) {
                first = null
                second = null
                return true
            } else {
                return false
            }
        }
        return true
    }
    return true
}



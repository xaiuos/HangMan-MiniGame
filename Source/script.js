// Words
let words = {
    Name: { 0: "MOHAMMED", 1: "AWADH", 2: "RAMADAN", 3: "ABDULARAHIM" },
    Animal: { 0: "DOG", 1: "CAT", 2: "TIGER", 3: "LEON", 4: "WOLF", 5: "FOX", 6: "PIG" },
    Color: { 0: "RED", 1: "BLUE", 2: "BLACK", 3: "YELLOW", 4: "PURPLE ", 5: "WHITE" },
    Number: { 0: "ZERO", 1: "ONE", 3: "SEVEN" }
}

let apiFunction = (api) => {
    return new Promise((res, rej) => {
        let respondRequest = new XMLHttpRequest()
        respondRequest.open("GET", api);
        respondRequest.send()
        respondRequest.onload = () => {
            if (respondRequest.readyState === 4 && respondRequest.status === 200) {
                res(JSON.parse(respondRequest.responseText))
            } else {
                rej("not find any data")
            }
        }
    })
}
api = "api.json";



// Picking Random keyword

let objectKeys = Object.keys(words);
let randomObjectKeys = Math.floor(Math.random() * objectKeys.length)
let chosedKeyObject = words[objectKeys[randomObjectKeys]]

// Picking Random Word in key

let wordBe = Object.values(chosedKeyObject);
let randomWord = Math.floor(Math.random() * wordBe.length);
let ChosedWord = wordBe[randomWord]

// before Adjust 1

let selectedCategore = document.querySelectorAll(".title div")
let categoreDive = document.createElement("div")
categoreDive.innerText = objectKeys[randomObjectKeys];
categoreDive.className = "catogore";
categoreDive.style.color = "red"
selectedCategore[1].append(categoreDive)

// before Adjust 2

let guessDiv = document.querySelector(".guess")
let splitTheWord = [...ChosedWord]
splitTheWord.forEach(() => {
    div = document.createElement("div")
    guessDiv.append(div)

})


// letters part
let falseCounter = 0;
let letters = "QWERTYUIOPASDFGHJKLZXCVBNM"
let convertString = [...letters];
convertString.forEach((letter) => {
    hand = document.querySelector(".letters")
    div = document.createElement("div");
    divText = document.createTextNode(letter);
    div.appendChild(divText);
    hand.appendChild(div)
})
let selectLetters = document.querySelectorAll(".letters div");
selectLetters.forEach((letters) => {
    letters.addEventListener("click", () => {
        let Compare = false;
        letters.style.display = "none"
        let rightL = letters.innerHTML
        for (i = 0; i < splitTheWord.length; i++) {
            if (splitTheWord[i] === rightL) {
                Compare = true
                let correctDiv = document.querySelectorAll(".guess div")
                correctDiv[i].innerHTML = rightL
            }
        }
        if (Compare === false) {
            falseCounter++;
            let selectDraw = document.querySelectorAll(".draw div")
            let samble = selectDraw[falseCounter - 1]
            samble.className = `draw${falseCounter}`
            if (falseCounter === 6) {
                console.log("try again :(")

                let lostDiv = document.createElement("div")
                let lostText = document.createTextNode("You Lost !")
                lostDiv.appendChild(lostText)
                lostDiv.className = "lost"
                document.body.append(lostDiv)
                selectLetters.forEach((test) => {
                    test.style.display = "none"
                })
            }
        }

        let getValue = document.querySelectorAll(".guess div")
        let correct = [];
        for (i = 0; i < getValue.length; i++) {
            if (getValue[i].innerHTML != "")
                correct.push(getValue[i].innerHTML)


        }
        if (correct.length === splitTheWord.length) {
            console.log("Congrates ")
            let wonDiv = document.createElement("div")
            let wonText = document.createTextNode("You Won !")
            wonDiv.appendChild(wonText)
            wonDiv.className = "won"
            document.body.append(wonDiv)
            selectLetters.forEach((test) => {
                test.style.display = "none"
            })

        }
    })
})

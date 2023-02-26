// to get name's country in the API
let selectCountry = document.getElementById("country")

fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((data) => {
        let countries = []
        Object.keys(data).forEach(key => {
            countries.push(data[key].name.common)
        })
        countries.sort()
        for (let i = 0; i < countries.length - 1; i++) {
            selectCountry.innerHTML += `<option value="${countries[i]}">${countries[i]}</option>`
        }
    });

// for the buttons '-' and '+' of each items
let itemQuantity = document.querySelectorAll(".itemQuantity")
let newPrice = document.querySelectorAll(".newPrice")
let oldPrice = document.querySelectorAll(".oldPrice")

let tabNewPrice = []
let tabOldPrice = []
let tabQuantity = []

for (let i = 0; i < newPrice.length; i++) {
    tabNewPrice.push(parseFloat(newPrice[i].innerHTML.substring(1)))
    tabOldPrice.push(parseFloat(oldPrice[i].innerHTML.substring(1)))
    tabQuantity.push(parseInt(itemQuantity[i].innerHTML))
}

let total = document.querySelector("#total")
let shipping = document.querySelector("#shipping")

// for each item, we puts the couple of buttons '-' and '+' in an array
let buttonQuantity = document.querySelectorAll(".buttonQuantity")
let tabButtonQuantity = []
for (let i = 0; i < buttonQuantity.length; i += 2) {
    let tab = []
    tab.push(buttonQuantity[i])
    tab.push(buttonQuantity[i + 1])
    tabButtonQuantity.push(tab)
}

// for each item
let item = document.querySelectorAll(".item")
for (let i = 0; i < item.length; i++) {
    for (let j = 0; j < tabButtonQuantity[i].length; j++) {
        tabButtonQuantity[i][j].addEventListener("click", function () {
            let priceNew
            let priceOld

            if (tabButtonQuantity[i][j].innerHTML == "add") {
                tabQuantity[i] += 1
                priceNew = (Math.round((parseFloat(newPrice[i].innerHTML.substring(1)) + tabNewPrice[i]) * 100) / 100).toFixed(2)
                priceOld = (Math.round((parseFloat(oldPrice[i].innerHTML.substring(1)) + tabOldPrice[i]) * 100) / 100).toFixed(2)
                newPrice[i].innerHTML = "$" + priceNew
                oldPrice[i].innerHTML = "$" + priceOld
                itemQuantity[i].innerHTML = tabQuantity[i]

            } else {
                if (tabQuantity[i] <= 1) {
                    tabQuantity[i] = 1
                } else {
                    tabQuantity[i] -= 1
                    priceNew = (Math.round((parseFloat(newPrice[i].innerHTML.substring(1)) - tabNewPrice[i]) * 100) / 100).toFixed(2)
                    priceOld = (Math.round((parseFloat(oldPrice[i].innerHTML.substring(1)) - tabOldPrice[i]) * 100) / 100).toFixed(2)
                    newPrice[i].innerHTML = "$" + priceNew
                    oldPrice[i].innerHTML = "$" + priceOld
                    itemQuantity[i].innerHTML = tabQuantity[i]
                }
            }
            let totalPrice = 0
            for (let i = 0; i < itemQuantity.length; i++) {
                totalPrice += parseFloat(newPrice[i].innerHTML.substring(1))
            }
            total.innerHTML = "$" + (Math.round((totalPrice + parseFloat(shipping.innerHTML.substring(1))) * 100) / 100).toFixed(2)
        })
    }
}


let country = document.getElementById("country")


// to add shake animation where the input is incorrect
let checkDiv = document.querySelectorAll(".check-div")


function validatePhoneNumber(input_str) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    return re.test(input_str);
}

let checkIcon = document.querySelectorAll(".check-icon")

let input = document.querySelectorAll("input")
let listInputs = []
for (let i = 0; i < input.length - 2; i++) {
    listInputs.push(input[i])
}
listInputs.splice(-1, 0, country)

for (let i = 0; i < listInputs.length; i++) {
    listInputs[i].addEventListener('input', function () {
        if (listInputs[i].checkValidity()) {
            if (listInputs[i].id == "phone") {
                if (validatePhoneNumber(listInputs[i].value)) {
                    checkIcon[i].innerHTML = 'check_circle'
                    if (checkIcon[i].classList.contains('text-error')) {
                        checkIcon[i].classList.remove('text-error')
                    }
                    checkIcon[i].classList.add('text-checked')
                } else {
                    checkIcon[i].innerHTML = 'error'
                    if (checkIcon[i].classList.contains('text-checked')) {
                        checkIcon[i].classList.remove('text-checked')
                    }
                    checkIcon[i].classList.add('text-error')
                }
            } else {
                checkIcon[i].innerHTML = 'check_circle'
                if (checkIcon[i].classList.contains('text-error')) {
                    checkIcon[i].classList.remove('text-error')
                }
                checkIcon[i].classList.add('text-checked')
            }
        } else {
            checkIcon[i].innerHTML = 'error'
            if (checkIcon[i].classList.contains('text-checked')) {
                checkIcon[i].classList.remove('text-checked')
            }
            checkIcon[i].classList.add('text-error')
        }
    });
}

function isValidForm() {
    let cpt = 0
    for (let i = 0; i < checkIcon.length; i++) {
        if (checkIcon[i].innerHTML == 'check_circle') {
            cpt++
        }
        // else {
        //     checkDiv[i].classList.add("animate-shaking")
        // }
    }
    if (cpt == checkIcon.length) {
        return true
    } else { return false }
}

// to avoid the refresh after submit
let form = document.querySelector("form");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (isValidForm()) {
        alert("The form is valid")
    }
    // for (let i = 0; i < checkDiv.length; i++) {
    //     if (checkDiv[i].classList.contains("animate-shaking")) {
    //         checkDiv[i].classList.remove("animate-shaking")
    //     }
    // }
});

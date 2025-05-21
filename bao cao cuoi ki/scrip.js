const btn = document.querySelectorAll("button")
    //console.log(btn)
btn.forEach(function(button, index) {
    button.addEventListener("click", function(event) {
        {
            var btnItem = event.target
            var product = btnItem.parentElement
            var productImg = product.querySelector("img").src
            var productName = product.querySelector("h7").innerText
            var productPrice = product.querySelector("span").innerText
                // console.log(productImg, productName, productPrice)
            addcart(productImg, productName, productPrice)
        }
    })
})

function addcart(productImg, productName, productPrice) {
    var cartItem = document.querySelectorAll("tbody tr");
    var addtr = document.createElement("tr")
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".title")
        if (productT[i].innerHTML == productName) {
            alert("Da co trong gio hang")
            return
        }
    }
    var trcontent = '<tr><td style="display:flex; align-items: center;"><img style="width: 70px;"src="' + productImg + '" alt=""><span class="title">' + productName + '</span></td><td><p><span class="prices">' + productPrice + '</span><sup>d</sup></p></td><td><input style="width: 30px;outline: none; " type="number" value="1" min="0"></td><td style="cursor: pointer;"><span class="cart-delete">xoa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
        //console.log(cartTable)
    cartTable.append(addtr)
    carttotal()
    deleteCart()
}

function carttotal() {
    var cartItem = document.querySelectorAll("tbody tr");
    var total = 0;

    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = Number(cartItem[i].querySelector("input").value);
        var priceText = cartItem[i].querySelector(".prices").innerText;
        var productPrice = parseFloat(priceText.replace(/[^\d.]/g, "")) * 1000000;
        var totalA = productPrice * inputValue;
        total += totalA;
        totalD = total.toLocaleString('de-DE')
    }
    var cartTotalA = document.querySelector(".price-total span")
    var cartPrice = document.querySelector(".cart-icon span")
    cartPrice.innerHTML = totalD
    cartTotalA.innerHTML = totalD
    inputchange()
    totalD = total.toLocaleString('de-DE')
}

function deleteCart() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click", function(event) {
            var cartDelete = event.target
            var cartitemR = cartDelete.parentElement.parentElement
            cartitemR.remove()
            carttotal()
                //console.log(productT)
        })
    }
}

function inputchange() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change", function() {
            carttotal()
        })

    }
}
const cartbtn = document.querySelector(".fa-times")
const cartshow = document.querySelector(".fa-shopping-cart")
cartshow.addEventListener("click", function() {
    document.querySelector(".cart").style.right = "0"
})
cartbtn.addEventListener("click", function() {
    document.querySelector(".cart").style.right = "-100%"
})
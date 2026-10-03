/* ==============================
   CART
================================ */

let cart = [];


// Add product to cart

function addToCart(productName, price) {

    const existingProduct = cart.find(
        item => item.name === productName
    );

    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({
            name: productName,
            price: price,
            quantity: 1
        });

    }

    updateCart();

    alert(productName + " added to cart!");

}


// Update cart

function updateCart() {

    const cartCount =
        document.getElementById("cart-count");

    const cartItems =
        document.getElementById("cart-items");

    const cartTotal =
        document.getElementById("cart-total");


    // Calculate quantity

    let totalQuantity = 0;

    cart.forEach(item => {
        totalQuantity += item.quantity;
    });


    cartCount.textContent = totalQuantity;


    // Empty cart

    if (cart.length === 0) {

        cartItems.innerHTML =
            '<p class="empty-cart">Your cart is empty.</p>';

        cartTotal.textContent = "৳0";

        return;
    }


    // Display cart items

    cartItems.innerHTML = "";

    let total = 0;


    cart.forEach((item, index) => {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;


        const div =
            document.createElement("div");

        div.className = "cart-item";


        div.innerHTML = `

            <div>

                <strong>
                    ${item.name}
                </strong>

                <p>
                    ৳${item.price.toLocaleString()}
                    × ${item.quantity}
                </p>

            </div>

            <div>

                <strong>
                    ৳${itemTotal.toLocaleString()}
                </strong>

                <br>

                <button
                    onclick="removeFromCart(${index})"
                >
                    Remove
                </button>

            </div>

        `;


        cartItems.appendChild(div);

    });


    cartTotal.textContent =
        "৳" + total.toLocaleString();

}


// Remove item

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


/* ==============================
   CART MODAL
================================ */

function openCart() {

    document
        .getElementById("cart-modal")
        .classList.add("active");

}


function closeCart() {

    document
        .getElementById("cart-modal")
        .classList.remove("active");

}


/* ==============================
   SEARCH
================================ */

function openSearch() {

    document
        .getElementById("search-modal")
        .classList.add("active");

    document
        .getElementById("search-input")
        .focus();

}


function closeSearch() {

    document
        .getElementById("search-modal")
        .classList.remove("active");

}


/* ==============================
   MOBILE MENU
================================ */

function toggleMenu() {

    document
        .getElementById("mobile-menu")
        .classList.toggle("active");

}


/* ==============================
   CHECKOUT
================================ */

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }


    alert(
        "Checkout system will be connected in the next phase."
    );

}


/* ==============================
   CLOSE MODAL WHEN CLICKING
   OUTSIDE
================================ */

window.addEventListener(
    "click",
    function(event) {

        const searchModal =
            document.getElementById("search-modal");

        const cartModal =
            document.getElementById("cart-modal");


        if (event.target === searchModal) {

            closeSearch();

        }


        if (event.target === cartModal) {

            closeCart();

        }

    }
);
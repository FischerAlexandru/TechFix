// ================================
// TECHFIX PRODUCTS
// ================================

const products = [
    {
        name: "Refurbished Laptop",
        description: "Cleaned, tested and ready to use.",
        price: "950 RON",
        paymentLink: "YOUR_REVOLUT_LAPTOP_LINK"
    },
    {
        name: "Gaming PC",
        description: "Tested gaming desktop.",
        price: "1,800 RON",
        paymentLink: "YOUR_REVOLUT_GAMING_PC_LINK"
    }
];

const productsContainer = document.getElementById("products");


// Create products
products.forEach(product => {

    const card = document.createElement("div");

    card.className = "card product-card";

    card.innerHTML = `
        <div class="icon">💻</div>

        <h3>${product.name}</h3>

        <p>${product.description}</p>

        <div class="product-price">
            ${product.price}
        </div>

        <div class="product-buttons">

            <button
                type="button"
                class="view-button"
            >
                View Details
            </button>

            <a
                class="button buy-button"
                href="${product.paymentLink}"
                target="_blank"
                rel="noopener noreferrer"
            >
                Buy Now
            </a>

        </div>
    `;


    // View Details button
    const viewButton =
        card.querySelector(".view-button");

    viewButton.addEventListener("click", function(event) {

        event.stopPropagation();

        alert(
            `${product.name}\n\n` +
            `${product.description}\n\n` +
            `Price: ${product.price}`
        );

    });


    // Buy button
    const buyButton =
        card.querySelector(".buy-button");

    buyButton.addEventListener("click", function(event) {

        event.stopPropagation();

    });


    productsContainer.appendChild(card);

});


// ================================
// REPAIR REQUEST FORM
// ================================

const form =
    document.getElementById("repairForm");

const message =
    document.getElementById("message");


if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        message.textContent =
            `Thanks ${name}! Your repair request has been received.`;

        form.reset();

    });

}

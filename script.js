// TechFix products
const products = [
    {
        name: "Refurbished Laptop",
        description: "Cleaned, tested and ready to use.",
        price: "950 RON"
    },
    {
        name: "Gaming PC",
        description: "Tested gaming desktop.",
        price: "1,800 RON"
    }
];

const productsContainer = document.getElementById("products");

products.forEach(product => {
    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
        <div class="icon">💻</div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <br>
        <strong>${product.price}</strong>
    `;

    productsContainer.appendChild(card);
});


// Repair request form
const form = document.getElementById("repairForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    message.textContent =
        `Thanks ${name}! Your repair request has been received.`;

    form.reset();
});

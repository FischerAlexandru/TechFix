// ==========================================
// TECHFIX - PRODUCTS
// ==========================================

const products = [
    {
        name: "Refurbished Laptop",
        description: "Cleaned, tested and ready to use.",
        price: "950 RON",
        paymentLink: "#"
    },
    {
        name: "Gaming PC",
        description: "Tested gaming desktop.",
        price: "1,800 RON",
        paymentLink: "#"
    }
];

const productsContainer = document.getElementById("products");

if (productsContainer) {

    products.forEach((product) => {

        const card = document.createElement("div");
        card.className = "card product-card";

        card.innerHTML = `
            <div class="icon">💻</div>

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <strong class="product-price">
                ${product.price}
            </strong>

            <div class="product-buttons">

                <button
                    type="button"
                    class="view-button"
                >
                    View Details
                </button>

                <a
                    href="${product.paymentLink}"
                    class="buy-button"
                >
                    Buy Now
                </a>

            </div>
        `;

        const viewButton =
            card.querySelector(".view-button");

        viewButton.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            alert(
                product.name +
                "\n\n" +
                product.description +
                "\n\nPrice: " +
                product.price
            );

        });

        productsContainer.appendChild(card);
    });
}


// ==========================================
// TECHFIX REPAIR REQUEST
// ==========================================

const form = document.getElementById("repairForm");
const message = document.getElementById("message");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const device =
            document.getElementById("device").value.trim();

        const problem =
            document.getElementById("problem").value.trim();


        // Create the email
        const subject =
            encodeURIComponent(
                "TechFix Repair Request - " + device
            );

        const body =
            encodeURIComponent(
`NEW TECHFIX REPAIR REQUEST

Customer:
${name}

Email:
${email}

Phone:
${phone}

Device:
${device}

Problem:
${problem}

--------------------------------
TechFix
`
            );


        // Open the visitor's email program
        window.location.href =
            `mailto:alexandrufischer14@gmail.com?subject=${subject}&body=${body}`;


        // Show confirmation
        if (message) {

            message.textContent =
                "Your repair request has been prepared. Please send the email that opened.";

            message.style.color = "#20c968";
        }


        // Clear form
        form.reset();

    });
}

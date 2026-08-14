// ========================================
// NORTHSTAR ORDER TRACKING
// ========================================


// ========================================
// FIND THE BUTTON AND FORM ELEMENTS
// ========================================

const trackButton = document.getElementById("trackButton");

const orderInput = document.getElementById("orderNumber");

const orderResult = document.querySelector(".order-result");


// ========================================
// HIDE RESULT AT THE BEGINNING
// ========================================

if (orderResult) {

    orderResult.style.display = "none";

}


// ========================================
// TRACK ORDER
// ========================================

if (trackButton) {

    trackButton.addEventListener("click", function () {

        // Get what the customer typed
        const orderNumber =
            orderInput.value.trim().toUpperCase();


        // Check if the customer entered anything
        if (orderNumber === "") {

            alert("Please enter your order number.");

            return;

        }


        // ========================================
        // ASK THE BACKEND FOR THE ORDER
        // ========================================

        fetch(`http://localhost:3000/api/orders/${orderNumber}`)

            .then(response => {

                // Backend could not find the order
                if (!response.ok) {

                    throw new Error("Order not found");

                }

                // Convert the response into JavaScript data
                return response.json();

            })


            .then(order => {

                // ========================================
                // SHOW ORDER RESULT
                // ========================================

                orderResult.style.display = "block";


                // ========================================
                // UPDATE ORDER NUMBER
                // ========================================

                const resultOrderNumber =
                    document.querySelector(".result-header h3");

                resultOrderNumber.textContent =
                    "#" + orderNumber;


                // ========================================
                // UPDATE STATUS
                // ========================================

                const statusBadge =
                    document.querySelector(".status-badge");

                statusBadge.textContent =
                    order.status;


                // ========================================
                // UPDATE DELIVERY DATE
                // ========================================

                const deliveryDate =
                    document.querySelector(
                        ".delivery-info div:first-child strong"
                    );

                deliveryDate.textContent =
                    order.deliveryDate;


                // ========================================
                // UPDATE CARRIER
                // ========================================

                const carrier =
                    document.querySelector(
                        ".delivery-info div:last-child strong"
                    );

                carrier.textContent =
                    order.carrier;


                // ========================================
                // SCROLL TO RESULT
                // ========================================

                orderResult.scrollIntoView({
                    behavior: "smooth"
                });

            })


            // ========================================
            // HANDLE ERRORS
            // ========================================

            .catch(error => {

                alert(
                    "We couldn't find that order. Please check your order number and try again."
                );

            });

    });

}
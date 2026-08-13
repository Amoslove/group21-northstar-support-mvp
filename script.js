
// 
// NORTHSTAR ORDER TRACKING
// 


// Sample order data


const orders = {

    "NS1024": {
        status: "Shipped",
        deliveryDate: "August 15, 2026",
        carrier: "Northstar Express"
    },

    "NS2025": {
        status: "Processing",
        deliveryDate: "August 18, 2026",
        carrier: "Northstar Express"
    },

    "NS3030": {
        status: "Delivered",
        deliveryDate: "August 10, 2026",
        carrier: "Northstar Express"
    }

};



// 
// FIND THE BUTTON AND FORM ELEMENTS
// 

const trackButton = document.getElementById("trackButton");

const orderInput = document.getElementById("orderNumber");

const orderResult = document.querySelector(".order-result");



// 
// HIDE RESULT AT THE BEGINNING
// 

if (orderResult) {

    orderResult.style.display = "none";

}



// 
// TRACK ORDER
// 

if (trackButton) {

    trackButton.addEventListener("click", function () {

        // Get what the customer typed
        const orderNumber = orderInput.value.trim().toUpperCase();


        // Check if the customer entered anything
        if (orderNumber === "") {

            alert("Please enter your order number.");

            return;

        }


        // Look for the order
        const order = orders[orderNumber];


        // If order doesn't exist
        if (!order) {

            alert(
                "We couldn't find that order. Please check your order number and try again."
            );

            return;

        }


        // Show the order result
        orderResult.style.display = "block";


        // Update order number
        const resultOrderNumber =
            document.querySelector(".result-header h3");

        resultOrderNumber.textContent =
            "#" + orderNumber;


        // Update status
        const statusBadge =
            document.querySelector(".status-badge");

        statusBadge.textContent =
            order.status;


        // Update delivery date
        const deliveryDate =
            document.querySelector(".delivery-info div:first-child strong");

        deliveryDate.textContent =
            order.deliveryDate;


        // Update carrier
        const carrier =
            document.querySelector(".delivery-info div:last-child strong");

        carrier.textContent =
            order.carrier;


        // Scroll to result
        orderResult.scrollIntoView({
            behavior: "smooth"
        });

    });

}
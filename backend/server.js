const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3000;

app.use(cors());

const orders = require("./orders");


// ============================================
// TEST ROUTE
// ============================================

app.get("/", (req, res) => {

    res.json({
        message: "Northstar backend is running!"
    });

});


// ============================================
// ORDER STATUS API
// ============================================

app.get("/api/orders/:orderNumber", (req, res) => {

    const orderNumber = req.params.orderNumber.toUpperCase();

    const order = orders[orderNumber];

    if (!order) {

        return res.status(404).json({
            error: "Order not found"
        });

    }

    res.json({

        orderNumber: orderNumber,

        status: order.status,

        deliveryDate: order.deliveryDate,

        carrier: order.carrier

    });

});


// ============================================
// RETURN ELIGIBILITY API
// ============================================

app.get("/api/returns/:orderNumber", (req, res) => {

    const orderNumber = req.params.orderNumber.toUpperCase();

    const order = orders[orderNumber];

    if (!order) {

        return res.status(404).json({
            error: "Order not found"
        });

    }

    if (!order.returnEligible) {

        return res.json({

            orderNumber: orderNumber,

            eligible: false,

            message: "Not eligible for return"

        });

    }

    res.json({

        orderNumber: orderNumber,

        eligible: true,

        message: "Order is eligible for return"

    });

});


// ============================================
// REFUND STATUS API
// ============================================

app.get("/api/refunds/:orderNumber", (req, res) => {

    const orderNumber = req.params.orderNumber.toUpperCase();

    const order = orders[orderNumber];

    if (!order) {

        return res.status(404).json({
            error: "Order not found"
        });

    }

    let message;

    if (order.refundStatus === "Refund initiated") {

        message = "Refund initiated – 3–5 days";

    } else if (order.refundStatus === "Not eligible") {

        message = "Not eligible for refund";

    } else {

        message = "No refund has been requested for this order.";

    }

    res.json({

        orderNumber: orderNumber,

        refundStatus: order.refundStatus,

        message: message

    });

});


// ============================================
// START SERVER
// ============================================

app.listen(PORT, () => {

    console.log(
        `Northstar backend running at http://localhost:${PORT}`
    );

});



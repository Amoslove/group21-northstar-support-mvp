const orders = {

    "NS1024": {

        status: "Shipped",

        deliveryDate: "August 15, 2026",

        carrier: "Northstar Express",

        returnEligible: true,

        refundStatus: "Not requested"

    },


    "NS2025": {

        status: "Processing",

        deliveryDate: "August 18, 2026",

        carrier: "Northstar Express",

        returnEligible: false,

        refundStatus: "Not eligible"

    },


    "NS3030": {

        status: "Delivered",

        deliveryDate: "August 10, 2026",

        carrier: "Northstar Express",

        returnEligible: true,

        refundStatus: "Refund initiated"

    }

};


module.exports = orders;
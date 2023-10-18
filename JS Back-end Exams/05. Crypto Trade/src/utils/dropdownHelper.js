exports.getOptions = (paymentMethod) => {
    const payments = [
        {
            value: "crypto-wallet",
            title: "Crypto-Wallet"
        },
        {
            value: "credit-card",
            title: "Credit Card"
        },
        {
            value: "debit-card",
            title: "Debit Card"
        },
        {
            value: "paypal",
            title: "PayPal"
        },
    ];

    const options = payments.map(payment => {
        return {
            value: payment.value,
            title: payment.title,
            selected: payment.value === paymentMethod
        };
    });


    return options;
};
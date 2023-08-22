export const footerInfoFormData = {
    cydexPharm: {
        id: 1,
        frontendSlug: "cydex_pharm",
        title: "cydexPharm",
        content: [
            {id: 1, frontendSlug: "home", title: "Home"},
            {id: 2, frontendSlug: "aboutUs", title: "About us"},
            {id: 3, frontendSlug: "blogNews", title: "Blog and news"},
            {id: 4, frontendSlug: "faq", title: "Frequently asked questions"},
            {id: 5, frontendSlug: "brands", title: "Brands", route: "/brands"},
            {id: 6, frontendSlug: "termsPurchase", title: "Terms of purchase"},
            {id: 7, frontendSlug: "contact", title: "Contact", route: "/contact"},
            {id: 8, frontendSlug: "newsletter", title: "Newsletter"},
            {id: 9, frontendSlug: "pharmacyLocations", title: "Pharmacy locations"}
        ]
    },
    termsOfUse: {
        id: 1,
        frontendSlug: "termsOfUse",
        title: "Terms of Use",
        content: [
            {id: 1, frontendSlug: "paymentMethods", title: "Payment methods"},
            {id: 2, frontendSlug: "returnsComplaints", title: "Returns and complaints"},
            {id: 3, frontendSlug: "dataPrivacy", title: "Data privacy"},
            {id: 4, frontendSlug: "shippingDelivery", title: "Shipping and delivery"},
            {id: 5, frontendSlug: "privacyStatement", title: "Privacy statement"},
            {
                id: 6,
                frontendSlug: "unilateralTerminationOfTheContract",
                title: "Unilateral termination of the contract",
            
            },
            {id: 7, frontendSlug: "editConsent", title: "Edit consent"}
        ]
    },
    supportedPaymentMethods: {
        id: 1,
        frontendSlug: "supported_payment_methods",
        title: "Supported payment methods",
        description: {
            title: "In our online store you can pay:",
            content: [
                {id: 1, frontendSlug: "cashOnDelivery", title: "cash on delivery", link: "https://en.wikipedia.org/wiki/Cash_on_delivery"},
                {id: 2, frontendSlug: "cards", title: "cards (up to 12 installments)", link: "https://en.wikipedia.org/wiki/Credit_card"},
                {id: 3, frontendSlug: "ebankingVirman", title: "e-banking/virman", link: "https://en.wikipedia.org/wiki/Online_banking"},
            ]
        },
        icons: [
            {
                id: 1,
                frontendSlug: "amex",
                title: "Amex",
                link: "https://www.pbzcard.hr/hr/izdavanje-kartica/premium-visa/"
            },
            {
                id: 2,
                frontendSlug: "visa",
                title: "Visa",
                link: "https://www.pbzcard.hr/hr/izdavanje-kartica/premium-visa/"
            },
            {
                id: 3,
                frontendSlug: "master",
                title: "Master",
                link: "https://www.mastercard.hr/hr-hr/privatni/pronadite-karticu.html"
            },
            {id: 4, frontendSlug: "diners", title: "Diners", link: "https://diners.hr/"},
            {id: 5, frontendSlug: "discover", title: "Discover", link: "https://www.discover.com/"},
            {
                id: 6,
                frontendSlug: "bill",
                title: "Bill",
                link: "https://www.pbz.hr/gradjani/mreza.html"
            },
        ],
        paragraph: {
            id: 1,
            descriptionOne: "Click",
            descriptionTwo: "and check detailed payment methods."
        },
        exchangeRate: {
            id: 1,
            content: "Fixed exchange rate: €1 = HRK 7.53450"
        }
    },
}
export const faqFormData = {
    globalTitle: "Frequently Asked Questions",
    route: "/faq",
    titles: [
        {
            id: 1,
            frontendSlug: "orders",
            title: "Orders",
        },
        {
            id: 2,
            frontendSlug: "delivery",
            title: "Delivery",
        },
        {
            id: 3,
            frontendSlug: "payment",
            title: "Payment",
        },
        {
            id: 4,
            frontendSlug: "return",
            title: "Return",
        },
        {
            id: 5,
            frontendSlug: "other",
            title: "Other",
        },
    ],
    content: [
        {
            id: 1,
            frontendSlug: "faq1",
            question: "How can I order the product?",
            answer: "You can order the product at www.cydex-pharm.com. To purchase the product, registration as a new user is required.",
            subCategories: ["orders"]
        },
        {
            id: 2,
            frontendSlug: "faq2",
            question: "Can I order by phone?",
            answer: "Of course, you can also place an order by phone at 0800 23 38, every weekday from 7:30 a.m. to 8:00 p.m. and on Saturdays from 7:30 a.m. to 3:00 p.m. In this case, payment is made by cash on delivery or cash on delivery.",
            subCategories: ["orders"]
        },
        {
            id: 3,
            frontendSlug: "faq3",
            question: "How can I register and become a user?",
            answer: `To register as a new user, it is necessary to enter the correct data that is entered in all marked fields in which you need to enter your name, surname, address...Also, you need to choose a username and password that you need for registration and when shopping. When you log in, you will have access to "My profile" where your data and all orders are.`,
            subCategories: ["orders", "other"]
        },
        {
            id: 4,
            frontendSlug: "faq4",
            question: "What is the minimum order amount?",
            answer: "You can order products in any amount.",
            subCategories: ["orders"]
        },
        {
            id: 5,
            frontendSlug: "faq5",
            question: "I want to return the purchased product. When can I do it and who pays the return costs?",
            answer: "Pursuant to the Consumer Protection Act, Article 72, Paragraph 1, the Customer has the right to return the product within 14 days of receiving the product. You should inform us about this in writing to rene.levec@outlook.com. We have described the detailed procedure in the section Terms of purchase - Returns and complaints.",
            subCategories: ["orders", "return"]
        },
        {
            id: 6,
            frontendSlug: "faq6",
            question: "What is the cost of delivery?",
            answer: "Delivery is free for orders over €39.68 (HRK 299.00), and €3.58 (HRK 27.00) is charged for orders of less value.",
            subCategories: ["orders", "delivery"]
        },
        {
            id: 7,
            frontendSlug: "faq7",
            question: "Payment methods?",
            answer: "On the CydexPharm web store, it is possible to pay by payment order, credit cards and cash on delivery. A detailed payment procedure can be found in our Terms of Purchase.",
            subCategories: ["orders", "payment"]
        },
        {
            id: 8,
            frontendSlug: "faq8",
            question: "Is online shopping safe?",
            answer: "The confidentiality of your data is protected and ensured by the use of SSL encryption. Online payment pages are secured using the Secure Socket Layer (SSL) protocol with 128-bit data encryption. SSL encryption is the process of encrypting data to prevent unauthorized access during its transmission.\n" +
                "\n" +
                "This enables safe transfer of information and prevents unauthorized access to data during communication between your account and the WebPay service, and vice versa.\n" +
                "\n" +
                "The WebPay service and financial institutions exchange data using a virtual private network (VPN), which is protected against unauthorized access. In this way, it is ensured that the numbers of your cards and transactions are not stored.",
            subCategories: ["orders", "other"]
        },
        {
            id: 9,
            frontendSlug: "faq9",
            question: "How to cancel an order?",
            answer: "The order can be canceled within 12 hours by sending an e-mail to rene.levec@outlook.com, which contains your information and the order number. In that case, we cancel the card payment or return the money to your account (depending on the payment method).",
            subCategories: ["orders"]
        },
        {
            id: 10,
            frontendSlug: "faq10",
            question: "What is the deadline for delivery?",
            answer: "Delivery is made within 2-5 working days.",
            subCategories: ["orders", "delivery"]
        },
        {
            id: 11,
            frontendSlug: "faq11",
            question: "Where do you deliver the goods?",
            answer: "We deliver only within the Republic of Croatia.",
            subCategories: ["orders", "delivery"]
        },
        {
            id: 12,
            frontendSlug: "faq12",
            question: "You don't have the product I'm looking for in the webshop, can I get it from you?",
            answer: "Of course, send an inquiry to rene.levec@outlook.com or call us on 01 3864 288.",
            subCategories: ["orders", "other"]
        },
        {
            id: 13,
            frontendSlug: "faq13",
            question: "Where can I write my opinion about your online pharmacy?",
            answer: "Your opinion is important to us. You can send your comments, suggestions, compliments, complaints to: rene.levec@outlook.com.",
            subCategories: ["orders", "other"]
        },
    ]
}
   
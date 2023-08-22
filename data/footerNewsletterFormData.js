export const footerNewsLetterFormData = {
    id: 1,
    frontendSlug: "newsletter",
    title: "Newsletter",
    description: "Professional advice from the Master of Pharmacy and information about upcoming promotions and discounts will be delivered to your email completely free of charge.",
    error: "Provided email has already been subscribed for the newsletter",
    input: {
        id: 1,
        fieldType: "custom",
        type: "text",
        frontendSlug: "email",
        name: "email",
        placeholder: "Enter Your e-mail",
        validation: "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$",
        error: "Invalid Email",
    },
    button: {
        id: 1,
        frontendSlug: "sing_up",
        title: "Sign Up",
    },
    checkbox: {
        id: 1,
        type: "checkbox",
        fieldType: "checkbox",
        frontendSlug: "gdpr",
        titleOne: "I accept the GDPR",
        titleTwo: "privacy statement",
        error: "Accept the privacy statement to proceed with newsletter subscription"
    }
}

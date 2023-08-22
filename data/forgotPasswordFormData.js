export const forgotPasswordFormData = {
    formLabel: "Password Recovery",
    formError: "Form Entries are Invalid",
    inputs: [
        {
            id: 1,
            label: "E-mail",
            type: "email",
            frontendSlug: "email",
            name: "email",
            placeholder: "Enter Your Email",
            validation: "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$",
            error: "Invalid Email",
            fieldType: "regularUnderline"
        },
    ],
    buttonLabel: "Reset Password",
}
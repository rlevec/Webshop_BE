export const loginFormData = {
    formLabel: "Login",
    inputs: [
        {
            id: 1,
            label: "E-mail",
            frontendSlug: "email",
            name: "email",
            placeholder: "Enter Your Email",
            validation: "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$",
            error: "Invalid Email",
            type: "email"
        },
        {
            id: 2,
            label: "Password",
            frontendSlug: "password",
            name: "password",
            placeholder: "Enter Your Password",
            validation: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d@$!%*#?&^_-]{8,}$",
            error: "Invalid Password",
            type: "password"
        }
    ],
    formError: "Form Entries are Invalid",
    submitEmailError: "No Account Registered With The Provided Email Address",
    submitPasswordError: "Invalid Password For The Provided Email Address",
    submitUnregisteredError: "Unregistered User",
    buttonLabel: "Sign In",
    forgotPasswordLabelOne: "Forgot",
    forgotPasswordLabelTwo: "Password",
    signUpLabel: "Sign Up"
}
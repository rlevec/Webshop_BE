export const changePasswordFormData = {
    formLabel: "Change Password",
    inputs: [
        {
            id: 1,
            label: "Old Password",
            frontendSlug: "oldPassword",
            name: "oldPassword",
            type: "password",
            placeholder: "Old Password",
            validation: "",
            error: "Invalid Old Password",
    
        },
        {
            id: 2,
            label: "New Password",
            frontendSlug: "newPassword",
            name: "newPassword",
            type: "password",
            placeholder: "New Password",
            validation: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d@$!%*#?&^_-]{8,}$",
            error: "Invalid New Password",
        },
        {
            id: 3,
            label: "Confirm New Password",
            frontendSlug: "confirmNewPassword",
            name: "newPassword",
            type: "password",
            placeholder: "Confirm New Password",
            validation: "",
            error: "Passwords do not match",
        },
    ],
    submitButtonLabel: "Submit",
    backButtonLabel: "Back",
}
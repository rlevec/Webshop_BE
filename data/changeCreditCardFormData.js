import { handleFormValues } from "./handleFormValues.js"

export const changeCreditCardFormData = {
    formLabel: "Change Credit Card",
    inputs: [
        {
            id: 1,
            label: "New Credit Card Number",
            frontendSlug: "newCreditCard",
            name: "newCreditCardNumber",
            type: "tel",
            placeholder: "New Credit Card Number",
            validation: "^4[0-9]{3}(?:-[0-9]{4}){3}$",
            error: "Invalid New Credit Card Number",
        },
        {
            id: 2,
            label: "New CCV",
            frontendSlug: "newCcv",
            name: "newCcv",
            type: "number",
            placeholder: "New CCV",
            validation: "(?!000)[0-9]{3}",
            error: "Invalid new CCV number",
        },
        {
            id: 3,
            label: "New Valid Thru Month",
            frontendSlug: "newExpireMonth",
            name: "newExpireMonth",
            type: "number",
            placeholder: "New Expire Month",
            min: handleFormValues()?.monthMin,
            max: handleFormValues()?.monthMax,
            validation: "",
            error: `Select Year Between ${handleFormValues()?.monthMin} and ${handleFormValues()?.monthMax}`,
        },
        {
            id: 4,
            label: "New Valid Thru Year",
            frontendSlug: "newExpireYear",
            name: "newExpireYear",
            type: "number",
            placeholder: "New Expire Year",
            min: handleFormValues()?.expireYearMin,
            max: handleFormValues()?.expireYearMax,
            validation: "",
            error: `Select Year Between ${handleFormValues()?.expireYearMin} and ${handleFormValues()?.expireYearMax}`,
        },
    ],
    submitButtonLabel: "Submit",
    backButtonLabel: "Back",
}
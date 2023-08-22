export const newsletterInteractiveFormDate = {

        inputs: [
            {
                id: 1,
                fieldType: "custom",
                label: "E-mail",
                frontendSlug: "email",
                name: "email",
                type: "email",
                placeholder: "Enter Your Email",
                validation: "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$",
                error: "Invalid Email",
            },
            {
                id: 2,
                fieldType: "custom",
                label: "First Name",
                frontendSlug: "firstName",
                name: "firstName",
                type: "text",
                placeholder: "Enter Your First Name",
                validation: "",
                error: "",
            },
            {
                id: 3,
                fieldType: "custom",
                label: "Last Name",
                frontendSlug: "lastName",
                name: "lastName",
                type: "text",
                placeholder: "Enter Your Last Name",
                validation: "",
                error: "",
            },
        ],
        content:
            `
         <h1>Join us and be the first to find out about sales, discounts and news!</h1>
         <p>By registering for membership in CydexPharm, you expressly agree that Cydex Pharm, Ulica Kresimira Baranovica 2, 10 000 Zagreb, Croatia, in this case the data controller, processes your personal data for the purposes specified in this Privacy Notice and in accordance with the Privacy Rules which are available at the following link: Privacy Policy</p>
         <p>If the user does not respond to any of the emails sent for a period of 3 consecutive years, we will permanently delete all data of that user.</p>
         <p>
            The user can, at any time and without giving reasons, withdraw his consent by sending a request
            to: <a href={"mailto:rene.levec@outlook.com"}>rene.levec@outlook.com</a> or by clicking on the
            "Unsubscribe" link at the bottom of each of our emails, after which we will delete his data from
            database and notify the user immediately. The user can contact us at the same address if he
            wants to change his data, if he wants to access or delete it, as well as if he has any other
            question regarding the processing of his data.
        </p>
        `
        ,
        marketing: {
            title: "Marketing Allowances",
            paragraphOne: "Choose the way you would like for us to contact You:",
            input: {
                id: 1,
                label: "Email",
                frontendSlug: "checked",
                placeholder: "Enter Your Email",
                type: "checkbox",
                validation: "",
                error: "Choose a valid contact method",
            },
            paragraphTwo: "You can unsubscribe at any time by clicking the link in the footer of our email. For more detailed information about privacy, please visit our website.",
            mailchimp: {
                frontendSlug: "mailChimp",
                paragraph: `<p>We use <strong>Mailchimp</strong> as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/terms/">Learn more about Mailchimp's privacy practices here</a>.</p>`,
            }
        },
        button: {
            frontendSlug: "submit",
            title: "Submit",
        }
}
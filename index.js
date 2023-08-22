import express from "express";
import bodyParser from "body-parser";
import cors from "cors"


import loginFormDataRoute from "./routes/loginFormDataRoute.js"
import registrationFormDataRoute from "./routes/registrationFormDataRoute.js"
import forgotPasswordFormDataRoute from "./routes/forgotPasswordFormDataRoute.js";
import headerFormDataRoute from "./routes/headerFormDataRoute.js"
import changeCreditCardFormRoute from "./routes/changeCreditCardFormDataRoute.js"
import changePasswordFormDataRoute from "./routes/changePasswordFormDataRoute.js"
import promotionsFormDataRoute from "./routes/promotionsFormDataRoute.js"
import generalInfoFormDataRoute from "./routes/generalInfoFormDataRoute.js"
import productsInfoFormDataRoute from "./routes/productsInfoFormDataRoute.js"
import promotionZoneFormDataRoute from "./routes/promotionsZoneFormDataRoute.js"
import footerNewsletterFormDataRoute from "./routes/footerNewsletterFormDataRoute.js"
import footerLocationsFormDataRoute from "./routes/footerLocationsFormDataRoute.js"
import footerInfoFormDataRoute from "./routes/footerInfoFormDataRoute.js"
import shippingDeliveryFormDataRoute from "./routes/shippingDeliveryFormDataRoute.js"
import returnsComplaintsFormDataRoute from "./routes/returnsComplaintsFormDataRoute.js"
import paymentMethodsFormDataRoute from "./routes/paymentMethodsFormDataRoute.js"
import contractTerminationFormDataRoute from "./routes/contractTerminationFormDataRoute.js"
import privacyStatementFormDataRoute from "./routes/privacyStatementFormDataRoute.js"
import dataPrivacyFormDataRoute from "./routes/dataPrivacyFormDataRoute.js"
import termsFormDataRoute from "./routes/termsFormDataRoute.js"
import faqFormDataRoute from "./routes/faqFormDataRoutes.js"
import newsletterInteractiveFormDataRoute from "./routes/newsletterInteractiveFormData.js"
import aboutUsFormDataRoute from "./routes/aboustUsFormDataRoute.js"
import contactFormDataRoute from "./routes/contactFormDatRoute.js"
import editConsentFormDataRoute from "./routes/editConsentFormDataRoute.js"
import locationsFormDataRoute from "./routes/locationsFormDataRoute.js"
import cartFormDataRoute from "./routes/cartFormDataRoute.js"
import wishlistFormDataRoute from "./routes/wishlistFormDataRoute.js"
import profileFormDataRoute from "./routes/profileFormDataRoute.js"
import helpFormDataRoute from "./routes/helpFormDataRoute.js"
import blogFormDataRoute from "./routes/blogFormDataRoute.js"
import productsCategorizedFormDataButtonsRoute from "./routes/productsCategorizedFormDataButtonsRoute.js"
import transactionModalFormDataRoute from "./routes/transactionModalFormDataRoute.js"
import warningModalFormDataRoute from "./routes/warningModalFormDataRoute.js"
import discountsFormDataRoute from "./routes/discountsFormDataRoute.js"
import leftoverDecentralizedFormDataRoute from "./routes/leftoverDecentralizedFormDataRoute.js"
import brandLogoImagesDataRoute from "./routes/brandLogoImagesDataRoute.js"
import categoriesFormDataRoute from "./routes/categoriesModalFormDataRoute.js"
 
import loggedUsersDataRoute from "./routes/loggedUsersData.js"
import registeredUsersDataRoute from "./routes/registeredUsersData.js"
import productsDataRoute from "./routes/productsDataRoute.js"
import transactionsDataRoute from "./routes/transactionsDataRoute.js"
import { categoriesModalFormData } from "./data/categoriesModalFormData.js";

const app = express();
const PORT = 9000;


app.use(bodyParser.json());


const allowedOrigins = ["http://localhost:5173", "http://127.0.0.1:5173", "http://localhost:3000"]

app.use((req, res, next) => {
    const origin = req.headers.origin;
    console.log
    if (allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
  
    // Set other CORS headers
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
    // Allow credentials (if needed)
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  
    next();
  });

  

app.use(express.static("./public"))
app.use(cors())

app.use("/logged_users", loggedUsersDataRoute);
app.use("/registered_users", registeredUsersDataRoute);
app.use("/products", productsDataRoute)
app.use("/transactions", transactionsDataRoute)

app.use("/login_form_data", loginFormDataRoute);
app.use("/registration_form_data", registrationFormDataRoute);
app.use("/forgot_password_form_data", forgotPasswordFormDataRoute);
app.use("/header_form_data", headerFormDataRoute);
app.use("/change_password_form_data", changePasswordFormDataRoute);
app.use("/change_credit_card_form_data", changeCreditCardFormRoute);
app.use("/promotions_form_data", promotionsFormDataRoute)
app.use("/general_info_form_data", generalInfoFormDataRoute)
app.use("/products_info_form_data", productsInfoFormDataRoute)
app.use("/promotion_zone_form_data", promotionZoneFormDataRoute)
app.use("/footer_newsletter_form_data", footerNewsletterFormDataRoute)
app.use("/footer_locations_form_data", footerLocationsFormDataRoute)
app.use("/footer_info_form_data", footerInfoFormDataRoute)
app.use("/shipping_delivery_form_data", shippingDeliveryFormDataRoute)
app.use("/returns_complaints_form_data", returnsComplaintsFormDataRoute)
app.use("/payment_methods_form_data", paymentMethodsFormDataRoute)
app.use("/contract_termination_form_data", contractTerminationFormDataRoute)
app.use("/privacy_statement_form_data", privacyStatementFormDataRoute)
app.use("/data_privacy_form_data", dataPrivacyFormDataRoute)
app.use("/terms_form_data", termsFormDataRoute)
app.use("/faq_form_data", faqFormDataRoute)
app.use("/newsletter_interactive_form_data", newsletterInteractiveFormDataRoute)
app.use("/about_us_form_data", aboutUsFormDataRoute)
app.use("/contact_form_data", contactFormDataRoute)
app.use("/edit_consent_form_data", editConsentFormDataRoute)
app.use("/locations_form_data", locationsFormDataRoute)
app.use("/cart_form_data", cartFormDataRoute)
app.use("/wishlist_form_data", wishlistFormDataRoute)
app.use("/profile_form_data", profileFormDataRoute)
app.use("/help_form_data", helpFormDataRoute)
app.use("/blog_form_data", blogFormDataRoute)
app.use("/products_categorized_form_data_buttons", productsCategorizedFormDataButtonsRoute)
app.use("/warning_modal_form_data", warningModalFormDataRoute)
app.use("/transaction_modal_form_data", transactionModalFormDataRoute)
app.use("/discounts_form_data", discountsFormDataRoute)
app.use("/decentralized_form_data", leftoverDecentralizedFormDataRoute)
app.use("/brand_logo_images", brandLogoImagesDataRoute)
app.use("/categories_modal_form_data", categoriesFormDataRoute)


app.get("/", (req, res) => {
    res.send(`<div style="
                    display: flex;
                    background: #F0F8FF;
                    margin: 0 auto;
                    color: #002878;
                    height: 100%;
                    width: 100vw;
                    font-size: 56px;
                    justify-content: center;
                    align-items: center;
                    font-family: -apple-system, -apple-system, 
                    BlinkMacSystemFont, 'Segoe UI', Roboto, 
                    Oxygen, Ubuntu, Cantarell, 'Open Sans', 
                    'Helvetica Neue', sans-serif;
                     font-weight: 600;"
             >⚡️[server]: http://localhost:${PORT}<div>`
    );
})

app.listen(PORT) ;

 
import express from "express";


let registeredUsers = []

const router = express.Router();

router.get("/", (req, res) => {
    res.send(registeredUsers);
})


router.delete("/", (req, res) => {
    let userEmail = req.body.payload

    console.log("userEmail", userEmail)

    const userIndex = registeredUsers.findIndex(user => user.email === userEmail);

  if (userIndex !== -1) {
    // Remove the user from the loggedUsers array
    registeredUsers.splice(userIndex, 1);
    res.sendStatus(200); // Sending a success status code
  } else {
    res.sendStatus(404); // Sending a not found status code if the user doesn't exist
  }
})


router.post("/", (req, res) => {
    let dataToPost = req.body.payload
    let userRegistered


    console.log("dataToPost")

    const {type, email, newPassword, newCreditCard, newCcv, newExpireMonth, newExpireYear} = dataToPost

    console.log("TYPE", type)

    if(type === "changePassword") {
      const index = registeredUsers.findIndex(obj => obj.email === email);
      // Update the password if the email is found
      if (index !== -1) {
        registeredUsers[index].password = newPassword;
        registeredUsers[index].confirmPassword = newPassword;
      }
    }

    else if(type === "changeCreditCard") {
      const index = registeredUsers.findIndex(obj => obj.email === email);
      // Update the password if the email is found
      if (index !== -1) {
        registeredUsers[index].creditCard = newCreditCard;
        registeredUsers[index].ccv = newCcv;
        registeredUsers[index].newExpireMonth = expireMonth;
        registeredUsers[index].newExpireYear = expireYear;
      }
    }

    else {
      registeredUsers.forEach(element => {
        if(element?.email === dataToPost?.email) userRegistered = true
      });

      if(userRegistered) res.status(404).send({error: 'User Already Registered With That Email'}).end();
      else {
        registeredUsers.push(dataToPost)
        res.send(req.body.payload);
      }
    }
})

export default router;

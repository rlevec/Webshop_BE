import express from "express";


let loggedUsers = []

const router = express.Router();

router.get("/", (req, res) => {
    res.send(loggedUsers);
})

router.delete("/", (req, res) => {
    let userEmail = req.body.payload

    console.log("userEmail", userEmail)

    const userIndex = loggedUsers.findIndex(user => user.email === userEmail);

  if (userIndex !== -1) {
    loggedUsers.splice(userIndex, 1);
    res.sendStatus(200); // Sending a success status code
  } else {
    res.sendStatus(404); // Sending a not found status code if the user doesn't exist
  }
})

router.post("/", (req, res) => {
    let dataToPost = req.body.payload

    let userExists

    const {type, email, newPassword, newCreditCard, newCcv, newExpireMonth, newExpireYear} = dataToPost


    if(type === "changePassword") {
      const index = loggedUsers.findIndex(obj => obj.email === email);
      if (index !== -1) {
        loggedUsers[index].password = newPassword;
        loggedUsers[index].confirmPassword = newPassword;
      }
    }

    else if(type === "changeCreditCard") {
      const index = loggedUsers.findIndex(obj => obj.email === email);
      if (index !== -1) {
        loggedUsers[index].creditCard = newCreditCard;
        loggedUsers[index].ccv = newCcv;
        loggedUsers[index].expireMonth = newExpireMonth;
        loggedUsers[index].expireYear = newExpireYear;
      }
    }
  
    else {
      loggedUsers.forEach(element => {
        if(element?.email === dataToPost?.email) userExists = true
    });

    if(userExists) res.status(404).send({error: 'User Already Logged In'}).end();
    else {
        loggedUsers.push(dataToPost)
        res.send(req.body.payload);
    }
    }
})

export default router;



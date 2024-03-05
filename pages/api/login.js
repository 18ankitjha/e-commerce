import User from "../../models/User"
import connectDb from "../../middleware/mongoose"
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if (req.method == "POST") {
        console.log(req.body)
        let user = await User.findOne({ "email": req.body.email })
        if (user) {
            const bytes = CryptoJS.AES.decrypt(user.password, process.env.CRYPTO_KEY);
            const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
            // console.log(CryptoJS.AES.encrypt(req.body.password, 'secret key 123').toString() )
            if (req.body.email == user.email && decryptedData == req.body.password) {
                var token = jwt.sign({  name: user.name, email: user.email }, process.env.JWT_KEY,{expiresIn: '3d'});
                res.status(200).json({success:true,name:user.name, token})

            }else{
                res.status(200).json({ success: false, error: "Invalid Crediantials" });    
            }
        } else {
            res.status(200).json({ success: false, error: "No user found" });
        }
        // res.status(200).json({ success: "Success" })
    } else {
        res.status(400).json({ error: "Invalid request method" })
    }


    // res.status(200).json({ products })
}

export default connectDb(handler)

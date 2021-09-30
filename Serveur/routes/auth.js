const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt=require('jsonwebtoken');


// trouvé sur https://codeburst.io/to-handle-authentication-with-node-js-express-mongo-jwt-7e55f5818181


const {
    registerValidation,
    loginValidation
} = require("../validation");
const User = require("../models/User");


// register=authentification
router.post("/register", async (req, res) => {

    const {
        error
    } = registerValidation(req.body);
    if (error) {
        return res.status(400).json({
            error: error.details[0].message
        });
    }
    const isEmailExist = await User.findOne({
        email: req.body.email
    });
    if (isEmailExist)
        return res.status(400).json({
            error: "Email already exists"
        })

    // hash du password
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password,
        role: req.body.role
    });
    try {
        const savedUser = await user.save();
        res.json({
            error: null,
            data: savedUser
        });
    } catch (error) {
        res.status(400).json({
            error
        });
    }
});
// login
router.post("/login", async (req, res) => {
    // validate the user
    const {
        error
    } = loginValidation(req.body);
    // throw validation errors
    if (error) return res.status(400).json({
        error: error.details[0].message
    });
    const user = await User.findOne({
        email: req.body.email
    });
    // throw error when email is wrong
    if (!user) return res.status(400).json({
        error: "Email n'est pas bon"
    });
    // check for password correctness
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword)
        return res.status(400).json({
            error: "Password n'est pas bon"
        });
    // create token
    const token = jwt.sign(
        // payload data
        {
            name: user.name,
            id: user._id,
        },
        process.env.TOKEN_SECRET
    );
    res.header("auth-token", token).json({
        error: null,
        data: {
            token,
        },
    });
    // res.json({
    //     error: null,
    //     data: {
    //         message: "Login successful",
    //     },
    // });
});
router.get("/", async (req, res) => {
	const userlist = await User.find()
	res.send(userlist);
})
// modification du role avec patch:
router.patch("/update/:_id", async (req, res) => {
	try {
		const role = await User.findOne({ _id: req.params.id })

		if (req.body.role) {
			role.role = req.body.role
		}
		await role.save()
		res.send(regle)
	} catch {
		res.status(404)
		res.send({ error: "User doesn't exist!" })
	}
})
// router.get('/testtoken',(req,res)=>{
//     const token = jwt.sign({test: "ts"}, "vivelabelgique")

//     res.status(200).send(token)
// })
module.exports = router;
/* eslint-disable @typescript-eslint/no-require-imports */
const bcrypt = require("bcrypt");
const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const { Resend } = require("resend");
const resend = new Resend("re_BBJp4XVA_52vjjKQdjYptebdBb5ctQLuM");
// const resend = new Resend(process.env.RESEND_API_KEY);

const registerController = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const existingUser = await User.findOne({ email });
  try {
    if (existingUser) {
      res.status(409).json({
        status: "error",
        message: "This email is already in use",
      });
    } else {
      const hashedPassword = bcrypt.hash(password, 10);
      newUser = new User({ email, hashedPassword });
      await newUser.save();
      const userId = newUser._id;
      console.log(userId);
      const emailToken = jwt.sign(
        { userId: userId, email: email },
        "AY91tETekSum27Bskeq_WBDxK7B9Aqbo6ujjeZFKiMKJ09HGREXASWQONHGFDS9vsewrqcfadsewliy5@&kabgstr!%ghklpoihsbfre",
        { expiresIn: "1h" }
      );
      await sendEmail(emailToken, email, userId);
      res.status(201).json({
        status: "success",
        message: "User registered Successfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const verifyUserController = async (req, res) => {
  const { id, token } = req.params;
  const user = await User.findOne({ _id: id });
  console.log(user)
  if (!user)
    return res.status(400).send({
      status: "error",
      message: "User not found",
    });

  try {
    const decode = jwt.verify(
      token,
      "AY91tETekSum27Bskeq_WBDxK7B9Aqbo6ujjeZFKiMKJ09HGREXASWQONHGFDS9vsewrqcfadsewliy5@&kabgstr!%ghklpoihsbfre"
    );
    if (!decode) {
      res.status(400).json({
        status: "error",
        message: "Invalid Link",
      });
    } else {
      console.log(decode)
      await user.updateOne({ _id: user._id, isVerified: true });
      res.status(200).send(` <div style="display:block;background-color:white; padding:10px;  text-align:center;">
                      <h2 style="font-weight:bold; text-transform:uppercase; color:black;text-align:center text-decoration:none; font-size: 18px;">
                      account Verification successful
                      </h2>
                </div>
                <div style="display:flex; flex-direction:column;justify-content:center;align-items:center;">
                  <div>
                    <div>
                      <h2   style="font-weight:bold; color:black; text-decoration:none; font-size: 18px; text-decoration: none;">
                      Your   <span
                     style="text-align:center; text-transform:uppercase; color:#686fff; font-size:13;"
                    >
                    SYNDEO
                     </span> account has been verified. 
                      </h2>
                       <a    style="font-weight:bold; color:blue; text-decoration:none; font-size: 18px;"
                          href="http://localhost:3000/login"
                        >
                          You can proceed to Login 
                        </a>${" "}
                    </div>
                    
                    
                    <div style="padding-top:10px; padding-bottom:10px; >
                     <span style="text-align:center; color:grey; font-size:13;">
                     Thanks, <span
                     style="text-align:center; text-transform:uppercase; color:#686fff; font-size:13;"
                    >
                    SYNDEO Team
                     </span>
                    </span>
                  </div>  
                  </div>
                </div>
              </div>`)
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const signInController = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  try {
    if (!user) return res.status(404).send({ message: "User not found!" });

    const { email, _id } = user;
    // const user = {id:id,email:email}
    const token = jwt.sign(
      { id:_id, email:email },
      "AY91tETekSum27Bskeq_WBDxK7B9Aqbo6ujjeZFKiMKJ09HGREXASWQONHGFDS9vsewrqcfadsewliy5@&kabgstr!%ghklpoihsbfre",
      {
        expiresIn: "1h",
      }
    );
    const passwordMatch = bcrypt.compareSync(user.password, password);
    if (user && passwordMatch) {
      return res.status(201).json({ token, message: "User Logged In" });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }

};


const resetPasswordRequestController = async (req,res) => {
  const { email } = req.body
  const user = await User.findOne({email});
  
  try {
if(!user) {return res.status(404).json({
  status:"error",
  message:"User not found!"
})}else {
const { _id } = user
const token = jwt.sign(
      { id:_id, email:email },
      "AY91tETekSum27Bskeq_WBDxK7B9Aqbo6ujjeZFKiMKJ09HGREXASWQONHGFDS9vsewrqcfadsewliy5@&kabgstr!%ghklpoihsbfre",
      {
        expiresIn: "1h",
      }
    );

    res.status(201).json({
      status:"successful",
      message:"Password reset request created",
     id:id,
     token:token
    })
}


  } catch (error) {
     res.status(400).json({
        status: "error",
        message: error.message,
      });
  }

}

const resetPasswordController = async (req,res) => {
  const {password,token,id } = req.body
  const user = await User.findOneById({id});
  
  try {
if(!user) {return res.status(404).json({
  status:"error",
  message:"invalid Token!"
})}else {
 const decode = jwt.verify(
      token,
      "AY91tETekSum27Bskeq_WBDxK7B9Aqbo6ujjeZFKiMKJ09HGREXASWQONHGFDS9vsewrqcfadsewliy5@&kabgstr!%ghklpoihsbfre"
    );
    if (!decode) {
      res.status(400).json({
        status: "error",
        message: "Invalid Link",
      });
    }else{
  const hashedPassword = bcrypt.hash(password, 10);
   await user.updateOne({ _id: id, password: hasshedPasword });
res.status(201).json({
      status:"successful",
      message:"New password created successfully",
     id:id,
     token:token
    })
    }

    
}


  } catch (error) {
     res.status(400).json({
        status: "error",
        message: error.message,
      });
  }

}
const auth = { registerController, signInController,verifyUserController,resetPasswordRequestController,resetPasswordController }
module.exports = auth

async function sendEmail(token, email, id) {
  const url = `http://localhost:5000/api/auth/verify-email/${id}/${token}`;
  const { data, error } = await resend.emails.send({
  
    from: "syndeo@modaonlinestore.com",
    to: [`${email}`],
    subject: `SYNDeO Portal Verification Email `,
    html: ` <div style="display:block;background-color:white; padding:10px;  text-align:center;">
                      <h2 style="font-weight:bold; color:black;text-align:center text-decoration:none; font-size: 18px;">
                       Verify Your Account
                      </h2>
                </div>
                <div style="display:flex; flex-direction:column;justify-content:center;align-items:center;">
                  <div>
                    <div>
                      <h2   style="font-weight:bold; color:black; text-decoration:none; font-size: 18px; text-decoration: none;">
                       Welcome and thank you for registering on  <span
                     style="text-align:center; text-transform:uppercase; color:#686fff; font-size:13;"
                    >
                    SYNDEO
                     </span>! Please Click on the link to verify your account. 
                      </h2>
                       <a    style="font-weight:bold; color:blue; text-decoration:none; font-size: 18px;"
                          href=${url}
                        >
                          click here to verify your account
                        </a>${" "}
                    </div>
                    
                    
                    <div>
                     <span style="text-align:center; color:grey; font-size:13;">
                     Thanks, <span
                     style="text-align:center; text-transform:uppercase; color:#686fff; font-size:13;"
                    >
                    SYNDEO Team
                     </span>
                    </span>
                  </div>  
                  </div>
                </div>
              </div>`,
  });
  console.log(data)
  if (error) {
    return console.error({ error });
  }
}

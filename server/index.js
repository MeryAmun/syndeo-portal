/* eslint-disable @typescript-eslint/no-require-imports */
const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
//require("./envConfig")
const authRoutes = require('./routes/authRoutes');
//const resend = new Resend(process.env.RESEND_API_KEY);

dotenv.config()

const app = express()
const port = process.env.NEXT_PUBLIC_PORT || 5000
console.log(process.env.NEXT_PUBLIC_PORT)
app.use(express.json())
app.get("/",(req,res) => {
    res.send({message:"Welcome to syndeo server"})
})

app.use("/api/auth",authRoutes.registerRoute)
app.use("/api/auth",authRoutes.signInRoute)
mongoose.connect("mongodb+srv://meryamun:K7OZ9J6SVHMe97ZE@transport.jlugw.mongodb.net/?retryWrites=true&w=majority&appName=Transport")
// .then(() => console.log("connected to db"))
// .cath(err => console.log("could not connect to DB", err))

app.listen(port, () => {
    console.log(`server is connected to db and running on  port ${port}`)
})





// async function sendEmail() {
//       const image =
//         "https://modaonlinestore.com/assets/no-bg-logo-9bdc9fe5.png";
//       const site = "https://modaonlinestore.com";
//       const { data, error } = await resend.emails.send({
//         from: "moda.moda@modaonlinestore.com",
//         to: ["evaldine2016@gmail.com"],
//         subject: `Customer Made a  Shipping Transaction `,
//         html: ` <div style="display:block;background-color:white; padding:10px;  text-align:center;">
//                       <h2 style="font-weight:bold; color:black;text-align:center text-decoration:none; font-size: 18px;">
//                         Shipping Transaction Status:
//                         <span
//                           style="font-wieght:bold; color:green;font-size:15px"
//                         >
//                           ${" "}
//                           ${shippingTransaction?.status}
//                         </span>
//                         ,
//                       </h2>
//                 <div style="width:184px; height:184px; border-radius:50%;">
//                   <img
//                     src=${image}
//                     alt="moda"
//                     style="width:100%; height:100%; object-fit: cover;"
//                   />
//                 </div>
//                 <div style="display:flex; flex-direction:column;justify-content:center;align-items:center;">
//                   <div>
//                     <div>
//                       <h2   style="font-weight:bold; color:black; text-decoration:none; font-size: 18px; text-decoration: none;">
//                         Hello ${shippingTransaction?.createdBy?.firstName} ${" "}
//                         ${shippingTransaction?.createdBy?.lastName} here is the latest shipping transaction
//                        on ${" "}
//                         <a
//                             style="font-weight:bold; color:blue; text-decoration:none; font-size: 18px;"
//                           href=${site}
//                         >
//                           moda online store
//                         </a>${" "}
//                       </h2>
//                     </div>
                    
//                     <div style=" text-align:center">
//                       <a
//                         style="font-weight:bold; color:blue; text-align:center text-decoration:none; font-size: 18px;"
//                         href=${shippingTransaction?.commercialInvoiceUrl}
//                       >
//                         Click here to Download Commercial Invoice
//                       </a>${" "}
//                     </div>
//                     <div style=" text-align:center">
//                       <a
//                         style="font-weight:bold; color:blue; text-align:center text-decoration:none; font-size: 18px;"
//                         href=${shippingTransaction?.labelUrl && shippingTransaction?.labelUrl}
//                       >
//                         Click here to Download Shipping Label
//                       </a>${" "}
//                     </div>
//                     <div>
//                      <span style="text-align:center; color:grey; font-size:13;">
//                       Moda Online Store
//                     </span>
//                     <span
//                      style="text-align:center; color:grey; font-size:13;"
//                     >
//                      15 Corner Brook gate NE
//                      </span>
//                       <span
//                      style="text-align:center; color:grey; font-size:13;"
//                     >
//                      Calgary, AB
//                     </span>
//                       <span
//                      style="text-align:center; color:grey; font-size:13;"
//                     >
//                     Canada
//                     </span>
//                   </div>  
//                   </div>
//                 </div>
//               </div>`,
//       });

//       if (error) {
//         return console.error({ error });
//       }
//     }
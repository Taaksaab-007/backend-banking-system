const express=require("express")
const cookieParser=require("cookie-parser")

const authRouter=require("./routes/auth.routes.js")
const accountRouter=require("./routes/account.routes.js")
const transactionRoutes = require("./routes/transaction.routes")
const app=express()
app.get("/", (req, res) => {
    res.send("Ledger Service is up and running")
})
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth",authRouter)
app.use("/api/accounts",accountRouter)
app.use("/api/transactions",transactionRoutes)
module.exports=app
const express=require("express");
const transactionController=require("../controllers/transaction.controller.js")
const authMiddleware=require("../middleware/auth.middleware")

const router=express.Router();
router.post("/",authMiddleware.authMiddleware,transactionController.createTransaction);

router.post("/system/initial-funds",authMiddleware.authSystemUserMiddleware,transactionController.createIntialFundsTransaction)
module.exports=router


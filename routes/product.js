const express = require("express")
const router = express.Router();

const { getProducts , newProduct} = require("../controllers/productcontrollers")

router.route("/products").get(getProducts);
router.route("/product/:id").get(getSingleProduct);
router.route("/products/new").post(newProduct)

module.exports = router;

const express = require("express")
const router = express.Router();

const { updateProduct,getProducts, getSingleProduct , newProduct, deleteProduct} = require("../controllers/productcontrollers")

router.route("/products").get(getProducts);
router.route("/product/:id").get(getSingleProduct);
router.route("/admin/product/new").post(newProduct);
router.route("/admin/product/:id").put(updateProduct).delete(deleteProduct);

module.exports = router;
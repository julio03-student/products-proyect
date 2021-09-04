const controller = require("../controller/logic/product.controller")

exports.productRoutes = (app) => {
    
    app.get("/product", (request, response, next) => {
        controller.getAll(request, response, next)
    })

    app.get("/product/bycode/:code", (request, response, next) => {
        console.log("Getting product by code");
        controller.getByCode(request, response, next)
    })

    app.post("/product", (request, response, next) => {
        controller.createProduct(request, response, next)
    })

    app.put("/product", (request, response, next) => {
        controller.updateProduct(request, response, next)
    })
    
    app.delete("/product", (request, response, next) => {
        controller.deleteProduct(request, response, next)
    })
}
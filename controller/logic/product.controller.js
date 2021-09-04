/** Dto */
const productDto = require("../../model/dto/product.dto")

exports.createProduct = (request, responds, next) => {
    /* console.log(request.body); */
    let product = {
        id: request.body.id,
        name: request.body.name,
        price: request.body.price,
        existence: request.body.existence,
        calification: request.body.calification,
        category: request.body.category,
        mark: request.body.mark,
        discount: request.body.discount
    }
    productDto.create(product, (erro, data) => {
        if(erro){
            return responds.status(400).json({
                error: erro
            })
        }
        responds.status(201).json({
            info: data
        })
    })
}

exports.updateProduct = (request, responds, next) => {
    let product = {
        id: request.body.id,
        name: request.body.name,
        price: request.body.price,
        existence: request.body.existence,
        calification: request.body.calification,
        category: request.body.category,
        mark: request.body.mark,
        discount: request.body.discount
    }
    productDto.update({_id: request.body.id}, product, (erro, data) => {
        if(erro){
            return responds.status(400).json({
                error: erro
            })
        }
        responds.status(201).json({
            info: data
        })
        
        
    })
}

exports.getAll = (request, responds, next) => {
    productDto.getAll({}, (erro, data) => {
        if(erro){
            return responds.status(400).json({
                error: erro
            })
        }
        responds.status(200).json({
            info: data
        })
        
    })
}

exports.getByCode = (request, responds, next) => {
    productDto.getByCode({code: request.params.code}, (erro, data) => {
        if(erro){
            return responds.status(400).json({
                error: erro
            })
        }
        responds.status(200).json({
            info: data
        })
        
    })
}

exports.deleteProduct = (request, responds, next) => {
    productDto.delete({_id: request.body.id}, (erro, data) => {
        if(erro){
            return responds.status(400).json({
                error: erro
            })
        }
        responds.status(204).json()
        
    })
}
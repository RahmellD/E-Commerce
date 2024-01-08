const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const createProduct = async (req, res) => {
    try {
        const { name, description, price, quantity } = req.body;
        const products = await prisma.product.create({
            data: {
                name,
                description,
                price,
                quantity
            }
        })
        res.json(products)
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error!");
    }
}

const updateProducts = async (req, res) => {
    try {
        const { name, description, price, quantity } = req.body;
        const updateProducts = await prisma.product.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                name,
                description,
                price,
                quantity
            },
        })
        res.json(updateProducts)
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error!");
    }
}

const deleteProduct = async (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const product = await prisma.product.delete({
            where: {
                id: productId
            }
        })
        res.status(200).send('Product deleted Successfully');

    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error!');
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany()

        res.json(products)

    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error!');
    }
}

const getProductById = async (req, res) => {
    try {
        const productId = parseInt(req.params.id)
        const product = await prisma.product.findUnique({
            where: {
                id: productId
            }
        })
        res.json(product)
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error!');
    }
}

module.exports = { createProduct, updateProducts, deleteProduct, getProducts, getProductById }
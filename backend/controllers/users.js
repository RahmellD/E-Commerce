const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');


const createUser = async (req, res) => {
    try {
        const {first_name, last_name, email, password} = req.body
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = await prisma.user.create({
            data:{
                first_name,
                last_name,
                email,
                password: hashedPassword
            }
        })

        res.json(user)
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error!");
    }
};

const updateUser = async (req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body
        const updateUser = await prisma.user.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                first_name,
                last_name,
                email,
                password
            }
        })
        res.status(200).send('User updated successfully!')

    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error!");
    }
}

const deleteUser = async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        const user = await prisma.user.delete({
            where: {
                id: userId
            }
        })
        res.status(200).send('User deleted Successfully');

    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error!');
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany()

        res.json(users)

    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error!');
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findFirst({
            where: {
                email,
            },
        });
        if (user) {
            const validPass = await bcrypt.compare(password, user.password)
            const token = await jwt.sign(user, process.env.SECRET_KEY, {
                expiresIn: '10m',
            });
            res.json(token);
        } else {
            res.status(404).send('Please check your credentials.');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error!');
    }
};




module.exports = { createUser, updateUser, deleteUser, getUsers, login }

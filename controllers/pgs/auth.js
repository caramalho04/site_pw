const bcrypt = require('bcryptjs');
const authenticateUtil = require('../../utils/authenticate.js');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.users.findUnique({
            where: { email: email },
        });

        if (user) {
            const passwordIsValid = bcrypt.compareSync(password, user.password);
            if (passwordIsValid) {
                const accessToken = authenticateUtil.generateAccessToken({
                    id: user.id,
                    name: user.name,
                    isAdmin: user.isAdmin,
                });
                res.status(200).json({ name: user.name, token: accessToken });
            } else {
                res.status(401).json({ msg: 'Password inválida!' });
            }
        } else {
            res.status(404).json({ msg: 'Utilizador não encontrado!' });
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

exports.signup = async (req, res) => {
    try {
        const { name, email, password, isAdmin } = req.body;
        await prisma.users.create({
            data: {
                email: email,
                name: name,
                password: bcrypt.hashSync(password, 8),
                isAdmin: isAdmin,
            },
        });
        return this.signin(req, res);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

exports.readToken = async (req, res) => {
    // Lógica para ler o token
    res.status(200).json({ msg: 'Token read' });
};

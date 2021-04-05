const { User } = require('../models');

const userData = [
    {
        username: "ElonMusk",
        twitter: "elonmusk",
        github: "elonmusk",
        email: "elonmusk@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "Jeff Bezos",
        twitter: "jeffbezos",
        github: "jeffbezos",
        email: "jeffbezos@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "Bill Gates",
        twitter: "billgates",
        github: "billgates",
        email: "billgates@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "Joe Rogan",
        twitter: "joerogan",
        github: "joerogan",
        email: "joerogan@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "LexFridman",
        twitter: "lexfridman",
        github: "lexfridman",
        email: "lexfridman@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "Mark Zuckerberg",
        twitter: "markzuckerberg",
        github: "markzuckerberg",
        email: "markzuckerberg@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
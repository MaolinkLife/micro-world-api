const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    'db_name',
    'user',
    'password',
    {
        dialect: 'postgres',
        pool: {
            max: 10, //максимальное кол-во соединений в пуле (Default: 5)
            min: 0, //минимальное кол-во соединений в пуле (Default: 0)
            acquire: 30000, //время в миллисекундах, в течение которого будет осуществляться попытка установить соединение, прежде чем будет сгенерировано исключение (Default: 60000)
            idle: 10000, //время простоя в миллисекундах, по истечении которого соединение покинет пул (Default: 1000)
        },
    }
)


const Sequelize = require('sequelize')

class Book extends Sequelize.Model { }

Book.init(
    {
        id: {
            type: Sequelize.NUMBER,
            primaryKey: true,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            comment: "Book 's title",
        },
        author: {
            type: Sequelize.STRING,
            field: '_author',
        },
        description: {
            type: Sequelize.TEXT,
        },
        publishDate: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
    },
    { sequelize, modelName: 'book' }
)


sequelize
    .authenticate()
    .then(() => console.log('Connected.'))
    .catch((err) => console.error('Connection error: ', err))

sequelize
    .close()
    .then(() => console.log('Closed.'))
    .catch((err) =>
        console.error('Close connection error: ', err)
    )


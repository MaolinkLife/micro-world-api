const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    'db_name',
    'user',
    'password',
    {
        dialect: 'postgres',
    }
)

sequelize.sync()

// title: {
//     type: Sequelize.STRING,
//         allowNull: false,
//             set(value) {
//         this.setDataValue('title', `${this.getDataValue('author')}, ${this.getDataValue('author')}`);
//     }
// }


class Car extends Sequelize.Model { }
class Driver extends Sequelize.Model { }

Car.init(
    {
        id: {
            type: Sequelize.NUMBER,
            primaryKey: true,
        },
        model: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        year: {
            type: Sequelize.NUMBER,
            allowNull: false,
            validate: {
                isNumeric: true,
            },
        },
    },
    { sequelize, modelName: 'car' }
)

Driver.init(
    {
        id: {
            type: Sequelize.NUMBER,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { sequelize, modelName: 'driver' }
)

//Создание связи "один к одному"
Car.belongsTo(Driver)
//или так
Car.hasOne(Driver)


Driver.hasMany(Car, {
    foreignKey: 'driver_fk',
    sourceKey: 'uuid',
})
Car.belongsTo(Driver, {
    foreignKey: 'driver_fk',
    sourceKey: 'uuid',
})


class CarDriver extends Sequelize.Model { }

CarDriver.init(
    {
        expired: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
    },
    { sequelize, modelName: 'CarDriver' }
)


//вернет все записи со всеми полями из таблицы cars
sequelize.car.findAll()

//вернет первую запись из таблицы cars
sequelize.car.findOne()

//вернет поле model для каждой записи таблицы cars
sequelize.car.findAll({
    attributes: ['model'],
})

//вернет поле model для первой записи таблицы cars
sequelize.car.findOne({
    attributes: ['model'],
})

//вернет все записи таблицы cars со всеми полями, кроме поля model
sequelize.car.findAll({
    attributes: { exclude: ['model'] },
})

//вернет все машины с маркой BMW таблицы cars
sequelize.car.findAll({
    where: { model: 'BMW' },
})

//пример использования с оператором and
const Operators = Sequelize.Op

sequelize.car.findAll({
    where: {
        model: 'BMW',
        year: {
            [Operators.and]: 2019,
        },
    },
})

//пример с сортировкой и ограничением выборки
sequelize.car.findAll({
    order: ['year', 'DESC'],
    offset: 0,
    limit: 10,
})

//подсчет количества всех записей в таблице
sequelize.car.count().then((count) => console.log(count))

//определение самой новой машины
sequelize.car.max('year').then((max) => console.log(max))

//получение данных связанной таблицы
// sequelize.driver.findAll((include: [
//     {
//         model: Car, //здесь передается модель
//         through: {
//             attributes: ['model', 'year'],
//         },
//     }
// ]))



//создание новой записи, если передать неполную модель, то недостающие поля будут null
sequelize.car
    .create({
        model: 'Audi',
        year: 2019,
    })
    .then((record) => console.log(record))

//создание сразу множества записей
sequelize.car
    .bulkCreate(
        [
            {
                model: 'Audi A5',
                year: 2019,
            },
            {
                model: 'Audi A7',
                year: 2018,
            },
        ],
        { returning: true }
    )
    .then((records) => console.log(records))

sequelize.car
    .update(
        {
            model: 'Audi',
        },
        {
            where: { model: 'BMW' },
        }
    )
    .then((record) => console.log(record))
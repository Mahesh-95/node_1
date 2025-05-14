    const  sequelize = require('sequelize');

    const Task = sequelize.define('Task', {
        Name: {
            type: sequelize.DataTypes.STRING,
            allowNull: false
        },
        Description: {
            type: sequelize.DataTypes.STRING,
            allowNull: false
        },
        Status: {
            type: sequelize.DataTypes.STRING,
            allowNull: false
        },
    }, {
    });

    export default Task;
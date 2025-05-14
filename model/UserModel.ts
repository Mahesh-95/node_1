    const  sequelize = require('sequelize');

    const User = sequelize.define('User', {
        Name: {
            type: sequelize.DataTypes.STRING,
            allowNull: false
        },
        Email: {
            type: sequelize.DataTypes.STRING,
            allowNull: false
        },
    }, {
    });

    export default User;
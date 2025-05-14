    const  sequelize = require('sequelize');

    const Chat = sequelize.define('User', {
        Name: {
            type: sequelize.DataTypes.STRING,
            allowNull: false
        },
    }, {
    });

export default Chat;
    const Sequelize = require('sequelize');

    const dbConnection = () => {
    const sequelize = new Sequelize('defaultdb', 'avnadmin', 'AVNS_8x_NvQMK0m_pi44yy55', {
      host: 'mysql-113ee18b-shawnfrost289-66a3.l.aivencloud.com',
      dialect: 'mysql'
    });

    

        sequelize.authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      });
    }

export default dbConnection;
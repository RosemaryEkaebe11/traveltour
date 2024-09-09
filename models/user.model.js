module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
      "User",
      {
          id: {
              autoIncrement: true,
              type: Sequelize.INTEGER,
              primaryKey: true,
            },

            name: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            email: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            password: {
                type:Sequelize.STRING,
                allowNull:false
              },
            verified:{
              type: Sequelize.BOOLEAN,
              allowNull: false,
              defaultValue: false,
            },
      },
      { }
  )
    User.associate = (models) => {
      User.hasOne(models.Profile);
    }
    return User;
  };
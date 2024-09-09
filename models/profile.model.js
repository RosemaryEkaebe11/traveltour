module.exports = (sequelize, Sequelize) => {
    const Profile = sequelize.define(
      "Profile",
      {
        id: {
            autoIncrement: true,
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        user_id: {
            type: Sequelize.INTEGER,
          },
        name:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        phone:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        country: {
            type:Sequelize.STRING,
            allowNull:false
        },  
        marital_status: {
            type:Sequelize.STRING,
            allowNull:false
        },
        travel_interests: {
            type:Sequelize.STRING,
            allowNull:false
        },  
        destination_preferences: {
            type:Sequelize.STRING,
            allowNull:false
        },  
        travel_frequency: {
            type:Sequelize.STRING,
            allowNull:false
        },    
        verified:{
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
      },
      { timestamp: true}
    ) 

    Profile.associate = (models) => {   
        Profile.belongsTo(models.User,{foreignKey: "user_id"});
    }
    return Profile; 
};
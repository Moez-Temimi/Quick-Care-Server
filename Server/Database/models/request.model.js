// Define and export the sequelize model that represents the table requests.

module.exports = (sequelize, DataTypes) => {
    const Request = sequelize.define("requests", {
      description: {
        type: DataTypes.STRING,
        
      },
      status: {
        type: DataTypes.STRING,
        
      },
      TreatedORNot : {
        type : DataTypes.BOOLEAN
      },
    });
  
    return Request;
  };
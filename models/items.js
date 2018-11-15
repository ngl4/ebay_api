module.exports = function (sequelize, DataTypes) {
    var Items = sequelize.define("Items", {
        // Giving the Items model a name of type STRING
        itemName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        itemURL: {
            type: DataTypes.STRING,
            //allowNull: false,
            validate: {
                isUrl: true
            }
        },
        Reason: {
            type: DataTypes.TEXT,
            //allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    return Items;
};
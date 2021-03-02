module.exports = function (sequelize, DataTypes) {
    var Orchestra = sequelize.define("Orchestra", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
    });

    Orchestra.associate = function (models) {
        Orchestra.belongsTo(models.User, { //orchestra's have an owner
            foreignKey: {
                allowNull: false
            }
        });
        Orchestra.hasMany(models.Musician, {
            onDelete: "NO ACTION" // the disbanding of band does not destroy musician
        })
    };

    return Orchestra;
};

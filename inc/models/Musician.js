module.exports = function (sequelize, DataTypes) {
    var Musician = sequelize.define("Musician", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        public: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        synth: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
            // I'm gonna try to invoke it like this:
            // Tone[dbOb.synth]() and save it as a string
        },
        gain: {
            type: DataTypes.FLOAT,
            allowNull: false,

        },
        transpose: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    Musician.associate = function (models) {
        Musician.belongsTo(models.User, { //orchestra's have an owner
            foreignKey: {
                allowNull: false
            }
        });
        Musician.belongsTo(models.Orchestra, {
            //optionally
        })
    };

    return Post;
};


'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ServicePrice extends Model {
        static associate(models) {
            ServicePrice.belongsTo(models.Specialty, { foreignKey: 'specialtyId' });
        }
    }

    ServicePrice.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            group: {
                type: DataTypes.STRING
            },
            price: {
                type: DataTypes.FLOAT,
                allowNull: false
            },

            isSelectable: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            },
            specialtyId: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'Specialty',
                    key: 'id'
                }
            }
        },
        {
            sequelize,
            modelName: 'ServicePrice',
        }
    );

    return ServicePrice;
};

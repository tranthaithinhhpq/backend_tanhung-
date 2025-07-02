'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class DrugPrice extends Model {
        static associate(models) {
            // Bạn có thể thêm liên kết sau nếu cần
        }
    }

    DrugPrice.init(
        {
            code: DataTypes.STRING, // Mã thuốc
            name: DataTypes.STRING, // Tên thuốc
            activeIngredient: DataTypes.STRING, // Hoạt chất
            concentration: DataTypes.STRING, // Hàm lượng
            unit: DataTypes.STRING, // Đơn vị
            price: DataTypes.FLOAT, // Đơn giá
            insurancePrice: DataTypes.FLOAT // Đơn giá bảo hiểm
        },
        {
            sequelize,
            modelName: 'DrugPrice',
        }
    );

    return DrugPrice;
};

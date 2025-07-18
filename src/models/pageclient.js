'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class PageClient extends Model {
        static associate(models) {
            // chưa cần liên kết với bảng nào
        }
    }

    PageClient.init(
        {
            slug: DataTypes.STRING,
            title: DataTypes.STRING,
            contentThumbnail: DataTypes.TEXT,
            videoYoutubeId: DataTypes.STRING,
            status: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: 'PageClient',
        }
    );

    return PageClient;
};

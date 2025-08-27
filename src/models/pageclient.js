'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
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
            image: DataTypes.STRING,
            videoYoutubeId: DataTypes.STRING,
            status: DataTypes.BOOLEAN,
            section: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'PageClient',
        }
    );

    return PageClient;
};

import db from "../models/index.js";


const searchAll = async (keyword) => {
    const Op = db.Sequelize.Op;
    const likeQuery = { [Op.like]: `%${keyword}%` };

    const [news, doctors, specialties] = await Promise.all([
        db.NewsArticle.findAll({
            where: { title: likeQuery, status: 'published' },
            attributes: ['id', 'title', 'image'],
            limit: 10
        }),
        db.DoctorInfo.findAll({
            where: { doctorName: likeQuery },
            attributes: ['id', 'doctorName', 'image', 'specialtyId']
        }),
        db.Specialty.findAll({
            where: { name: likeQuery },
            attributes: ['id', 'name', 'image']
        })
    ]);

    return { news, doctors, specialties };
};

export default {
    searchAll
};

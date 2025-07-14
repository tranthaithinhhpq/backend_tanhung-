import db from '../models/index.js';
import { Op } from 'sequelize';

const readPaginate = async (page, limit, q) => {
    const offset = (page - 1) * limit;
    const where = q ? { name: { [Op.like]: `%${q}%` } } : {};

    const { count, rows } = await db.DrugPrice.findAndCountAll({
        where,
        limit,
        offset,
        order: [['id', 'DESC']]
    });

    return {
        rows,
        totalPages: Math.ceil(count / limit)
    };
};

const create = async (data) => {
    const requiredFields = ['code', 'name', 'activeIngredient', 'concentration', 'unit', 'price', 'insurancePrice'];
    for (let field of requiredFields) {
        if (!data[field]) {
            return { EC: 1, EM: `Thiếu trường: ${field}` };
        }
    }

    const newDrug = await db.DrugPrice.create(data);
    return { EC: 0, EM: 'Tạo thành công', DT: newDrug };
};

const update = async (id, data) => {
    const drug = await db.DrugPrice.findByPk(id);
    if (!drug) return { EC: 1, EM: 'Không tìm thấy thuốc' };

    await drug.update(data);
    return { EC: 0, EM: 'Cập nhật thành công', DT: drug };
};

const remove = async (id) => {
    await db.DrugPrice.destroy({ where: { id } });
    return { EC: 0, EM: 'Xóa thành công' };
};

export default {
    readPaginate,
    create,
    update,
    remove
};
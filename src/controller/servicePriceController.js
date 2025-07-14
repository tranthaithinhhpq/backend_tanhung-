import servicePriceService from '../service/servicePriceService';
import db from '../models/index.js';

const getAllServicePrices = async (req, res) => {
    try {
        const result = await servicePriceService.getAll(req.query);
        return res.status(200).json(result);
    } catch (err) {
        console.error("getAllServicePrices error:", err);
        return res.status(500).json({ EC: -1, EM: "Lỗi server", DT: [] });
    }
};

const createServicePrice = async (req, res) => {
    try {
        const result = await servicePriceService.create(req.body);
        return res.status(201).json(result);
    } catch (err) {
        console.error("createServicePrice error:", err);
        return res.status(500).json({ EC: -1, EM: "Lỗi server rồi con chó" });
    }
};

const updateServicePrice = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await servicePriceService.update(id, req.body);
        return res.status(200).json(result);
    } catch (err) {
        console.error("updateServicePrice error:", err);
        return res.status(500).json({ EC: -1, EM: "Lỗi server" });
    }
};

const deleteServicePrice = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await servicePriceService.remove(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error("deleteServicePrice error:", err);
        return res.status(500).json({ EC: -1, EM: "Lỗi server" });
    }
};

const readPaginate = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const data = await servicePriceService.getPaginatedServices(+page, +limit);
        return res.status(200).json({
            EC: 0,
            DT: data
        });
    } catch (err) {
        console.error('❌ Lỗi đọc bảng giá:', err);
        return res.status(500).json({ EC: -1, EM: 'Lỗi máy chủ' });
    }
};


const getSelectableServicesBySpecialty = async (req, res) => {
    try {
        const { specialtyId } = req.params;

        const services = await db.ServicePrice.findAll({
            where: {
                specialtyId,
                isSelectable: true
            },
            attributes: ['id', 'name', 'price', 'priceInsurance', 'group']
        });

        return res.status(200).json({ EC: 0, DT: services });
    } catch (error) {
        console.error("❌ getSelectableServicesBySpecialty:", error);
        return res.status(500).json({ EC: 1, EM: 'Server error', DT: [] });
    }
};


const getAll = async (req, res) => {
    try {
        const { page = 1, limit = 10, specialtyId, name } = req.query;
        const offset = (page - 1) * limit;

        let where = {};
        if (specialtyId) where.specialtyId = specialtyId;
        if (name) where.name = { [db.Sequelize.Op.like]: `%${name}%` };

        const { rows, count } = await db.ServicePrice.findAndCountAll({
            where,
            offset: +offset,
            limit: +limit,
            include: [{ model: db.Specialty, attributes: ['name'] }],
            order: [['name', 'ASC']],
        });

        return res.status(200).json({
            EC: 0,
            DT: {
                totalRecords: count,
                totalPages: Math.ceil(count / limit),
                records: rows
            }
        });
    } catch (error) {
        console.error("Fetch serviceprice failed", error);
        return res.status(500).json({
            EC: -1,
            EM: "Lỗi server",
        });
    }
};



const getPublicServicePrices = async (req, res) => {
    try {
        const { page = 1, limit = 10, specialtyId, q } = req.query;
        const data = await servicePriceService.getPublicList({ page, limit, specialtyId, q });
        return res.status(200).json({ EC: 0, DT: data });
    } catch (error) {
        console.error("getPublicServicePrices error:", error);
        return res.status(500).json({ EC: -1, EM: "Lỗi server", DT: [] });
    }
};


export default {
    getAllServicePrices,
    createServicePrice,
    updateServicePrice,
    deleteServicePrice,
    readPaginate,
    getSelectableServicesBySpecialty,
    getAll,
    getPublicServicePrices
};

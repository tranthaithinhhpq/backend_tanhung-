import servicePriceService from '../service/servicePriceService';

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
        return res.status(500).json({ EC: -1, EM: "Lỗi server" });
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

export default {
    getAllServicePrices,
    createServicePrice,
    updateServicePrice,
    deleteServicePrice,
    readPaginate
};

import drugPriceService from '../service/drugPriceService.js';

const readPaginate = async (req, res) => {
    try {
        const { page, limit, q } = req.query;
        const data = await drugPriceService.readPaginate(+page, +limit, q);
        return res.status(200).json({ EC: 0, DT: data });
    } catch (err) {
        console.error('Error in readPaginate:', err);
        return res.status(500).json({ EC: -1, EM: 'Lỗi server' });
    }
};

const createDrug = async (req, res) => {
    try {
        const result = await drugPriceService.create(req.body);
        return res.status(201).json(result);
    } catch (err) {
        console.error('Error in createDrug:', err);
        return res.status(500).json({ EC: -1, EM: 'Lỗi server' });
    }
};

const updateDrug = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await drugPriceService.update(id, req.body);
        return res.status(200).json(result);
    } catch (err) {
        console.error('Error in updateDrug:', err);
        return res.status(500).json({ EC: -1, EM: 'Lỗi server' });
    }
};

const deleteDrug = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await drugPriceService.remove(id);
        return res.status(200).json(result);
    } catch (err) {
        console.error('Error in deleteDrug:', err);
        return res.status(500).json({ EC: -1, EM: 'Lỗi server' });
    }
};

const getPublicDrugPrices = async (req, res) => {
    try {
        const { page = 1, limit = 10, q } = req.query;
        const result = await drugPriceService.getPublicList({ page, limit, q });
        return res.status(200).json({ EC: 0, DT: result });
    } catch (error) {
        console.error("getPublicDrugPrices error:", error);
        return res.status(500).json({ EC: -1, EM: "Lỗi server", DT: [] });
    }
};

export default {
    readPaginate,
    createDrug,
    updateDrug,
    deleteDrug,
    getPublicDrugPrices
};
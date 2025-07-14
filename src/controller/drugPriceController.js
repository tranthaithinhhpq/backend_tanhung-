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

export default {
    readPaginate,
    createDrug,
    updateDrug,
    deleteDrug
};
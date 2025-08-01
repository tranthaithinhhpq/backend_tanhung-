import newsCategoryService from '../service/newsCategoryService';

const getPaginate = async (req, res) => {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 5;
    const data = await newsCategoryService.getPaginate(page, limit);
    return res.status(200).json(data);
};

const create = async (req, res) => {
    const data = await newsCategoryService.create(req.body);
    return res.status(200).json(data);
};

const update = async (req, res) => {
    const data = await newsCategoryService.update(req.params.id, req.body);
    return res.status(200).json(data);
};

const remove = async (req, res) => {
    const data = await newsCategoryService.remove(req.body.id);
    return res.status(200).json(data);
};

const getAllCategories = async (req, res) => {
    try {
        const data = await newsCategoryService.getAllCategories();
        return res.status(200).json({
            EC: 0,
            EM: 'OK',
            DT: data,
        });
    } catch (error) {
        console.error("❌ getAllCategories error:", error);
        return res.status(500).json({
            EC: 1,
            EM: 'Internal server error',
            DT: [],
        });
    }
};


export default { getPaginate, create, update, remove, getAllCategories };

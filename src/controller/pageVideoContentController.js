import service from '../service/pageVideoContentService.js';

const getPaginate = async (req, res) => {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 5;
    const data = await service.getPaginate(page, limit);
    return res.status(200).json(data);
};

const create = async (req, res) => {
    const data = await service.create(req.body);
    return res.status(200).json(data);
};

const update = async (req, res) => {
    const data = await service.update(req.params.id, req.body);
    return res.status(200).json(data);
};

const remove = async (req, res) => {
    const data = await service.remove(req.body.id);
    return res.status(200).json(data);
};

export default { getPaginate, create, update, remove };

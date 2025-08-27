import service from '../service/workingSlotTemplateService.js';

const getPaginate = async (req, res) => {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 5;
    const doctorName = req.query.doctorName || '';
    const result = await service.getPaginate(page, limit, doctorName);
    return res.status(200).json(result);
};

const create = async (req, res) => {
    const result = await service.create(req.body);
    return res.status(200).json(result);
};

const update = async (req, res) => {
    const result = await service.update(req.params.id, req.body);
    return res.status(200).json(result);
};

const remove = async (req, res) => {
    const result = await service.remove(req.body.id);
    return res.status(200).json(result);
};

export default { getPaginate, create, update, remove };

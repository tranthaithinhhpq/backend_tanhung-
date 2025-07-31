import pageTextcontentService from '../service/pageTextcontentService';

const getPaginate = async (req, res) => {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 5;
    const data = await pageTextcontentService.getPaginate(page, limit);
    return res.status(200).json(data);
};

const create = async (req, res) => {
    const data = await pageTextcontentService.create(req.body);
    return res.status(200).json(data);
};

const update = async (req, res) => {
    const data = await pageTextcontentService.update(req.params.id, req.body);
    return res.status(200).json(data);
};

const remove = async (req, res) => {
    const data = await pageTextcontentService.remove(req.body.id);
    return res.status(200).json(data);
};

export default { getPaginate, create, update, remove };

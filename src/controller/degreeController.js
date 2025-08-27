import db from "../models/index.js";
import degreeService from '../service/degreeService.js';

const read = async (req, res) => {
    try {
        const degrees = await db.Degree.findAll({
            attributes: ["id", "name", "description"]
        });

        return res.status(200).json({
            EM: 'Fetched degrees successfully',
            EC: 0,
            DT: degrees
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'Error from server',
            EC: -1,
            DT: null
        });
    }
};
const getAll = async (req, res) => {
    const result = await degreeService.getAll();
    return res.status(200).json(result);
};

const create = async (req, res) => {
    const result = await degreeService.create(req.body);
    return res.status(200).json(result);
};

const update = async (req, res) => {
    const result = await degreeService.update(req.params.id, req.body);
    return res.status(200).json(result);
};

const remove = async (req, res) => {
    const result = await degreeService.remove(req.body.id);
    return res.status(200).json(result);
};

const getPaginate = async (req, res) => {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 5;
    const data = await degreeService.getPaginate(page, limit);
    return res.status(200).json(data);
};

export default {
    read,
    getAll,
    getPaginate,
    create,
    update,
    remove
};

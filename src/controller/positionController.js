import db from "../models/index.js";
import positionService from '../service/positionService.js';

const read = async (req, res) => {
    try {
        const positions = await db.Position.findAll({
            attributes: ["id", "name", "description"]
        });

        return res.status(200).json({
            EM: 'Fetched positions successfully',
            EC: 0,
            DT: positions
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

const getPaginate = async (req, res) => {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 5;
    const result = await positionService.getPaginate(page, limit);
    return res.status(200).json(result);
};

const create = async (req, res) => {
    const result = await positionService.create(req.body);
    return res.status(200).json(result);
};

const update = async (req, res) => {
    const result = await positionService.update(req.params.id, req.body);
    return res.status(200).json(result);
};

const remove = async (req, res) => {
    const result = await positionService.remove(req.body.id);
    return res.status(200).json(result);
};

export default { read, getPaginate, create, update, remove };

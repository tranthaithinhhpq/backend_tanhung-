import specialtyService from "../service/specialtyService.js";

const readSpecialties = async (req, res) => {
    const data = await specialtyService.getAllSpecialties();
    return res.status(data.EC === 0 ? 200 : 500).json(data);
};

const createSpecialty = async (req, res) => {
    const data = await specialtyService.createNewSpecialty(req.body, req.file);
    return res.status(data.EC === 0 ? 201 : 400).json(data);
};

const updateSpecialty = async (req, res) => {
    const data = await specialtyService.updateSpecialty(req.params.id, req.body, req.file);
    return res.status(data.EC === 0 ? 200 : 400).json(data);
};

const deleteSpecialty = async (req, res) => {
    const data = await specialtyService.deleteSpecialty(req.params.id);
    return res.status(data.EC === 0 ? 200 : 400).json(data);
};

export default {
    readSpecialties,
    createSpecialty,
    updateSpecialty,
    deleteSpecialty
};

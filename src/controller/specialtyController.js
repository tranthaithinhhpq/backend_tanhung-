import specialtyService from "../service/specialtyService";

const readSpecialties = async (req, res) => {
    const data = await specialtyService.getAllSpecialties();
    return res.status(data.EC === 0 ? 200 : 500).json(data);
};

export default {
    readSpecialties
};

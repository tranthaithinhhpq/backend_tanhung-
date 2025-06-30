import db from "../models";

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

module.exports = {
    read
};

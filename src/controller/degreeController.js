import db from "../models";

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

module.exports = {
    read
};

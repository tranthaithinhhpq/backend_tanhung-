import groupService from '../service/groupService.js';

const read = async (req, res) => {
    try {
        let data = await groupService.getGroups();
        return res.status(200).json({
            EM: data.EM, // error message
            EC: data.EC, // error code
            DT: data.DT, //data
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'error from server ngu', // error message
            EC: '-1', // error code
            DT: '', //data
        })
    }
}
export default { read }
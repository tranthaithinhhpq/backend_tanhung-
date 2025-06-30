import db from '../models/index';
const createDoctorInfo = async (body) => {
    try {
        await db.DoctorInfo.create({
            userId: body.userId,
            specialtyId: body.specialtyId,
            degreeId: body.degreeId,
            positionId: body.positionId,
            markdownContent: body.markdownContent || ''
        });
        return { EC: 0, EM: 'Tạo thông tin bác sĩ thành công', DT: '' };
    } catch (e) {
        console.error(e);
        return { EC: 1, EM: 'Lỗi khi tạo thông tin', DT: '' };
    }
};

const updateDoctorInfo = async (userId, body) => {
    try {
        let info = await db.DoctorInfo.findOne({ where: { userId } });
        if (!info) {
            return { EC: 2, EM: 'Thông tin bác sĩ không tồn tại', DT: '' };
        }

        await info.update({
            specialtyId: body.specialtyId,
            degreeId: body.degreeId,
            positionId: body.positionId,
            markdownContent: body.markdownContent || ''
        });
        return { EC: 0, EM: 'Cập nhật thông tin thành công', DT: '' };
    } catch (e) {
        console.error(e);
        return { EC: 1, EM: 'Lỗi khi cập nhật thông tin', DT: '' };
    }
};

export default { createDoctorInfo, updateDoctorInfo };
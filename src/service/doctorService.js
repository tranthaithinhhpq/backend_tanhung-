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

const readDoctorGallery = async () => {
    try {
        const doctors = await db.User.findAll({
            where: { groupId: 2 },  // Bác sĩ
            attributes: ['id', 'username', 'image'],
            include: [
                {
                    model: db.DoctorInfo,
                    include: [
                        { model: db.Position, attributes: ['id', 'name'] },
                        { model: db.Degree, attributes: ['id', 'name'] },
                        { model: db.Specialty, attributes: ['id', 'name'] }
                    ]
                }
            ]
        });

        // Log dữ liệu ra console
        console.log("Doctor Gallery Data:", JSON.stringify(doctors, null, 2));

        return {
            EC: 0,
            EM: 'Fetched doctor gallery successfully',
            DT: doctors
        };
    } catch (err) {
        console.error("readDoctorGallery error:", err);
        return {
            EC: -1,
            EM: 'Server error fetching doctor gallery',
            DT: null
        };
    }
};

export default { createDoctorInfo, updateDoctorInfo, readDoctorGallery };
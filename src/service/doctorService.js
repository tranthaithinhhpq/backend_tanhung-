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
        //console.log("check doctor ", doctors);


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

const getDoctorDetailById = async (userId) => {
    try {
        const doctor = await db.User.findOne({
            where: { id: userId, groupId: 2 },  // Chỉ lấy user là bác sĩ
            attributes: ['id', 'username', 'image'],
            include: [
                {
                    model: db.DoctorInfo,
                    attributes: ['markdownContent'],
                    include: [
                        { model: db.Specialty, attributes: ['id', 'name'] },
                        { model: db.Position, attributes: ['id', 'name'] },
                        { model: db.Degree, attributes: ['id', 'name'] },
                    ]
                }
            ]
        });

        if (!doctor) {
            return { EC: 1, EM: 'Bác sĩ không tồn tại hoặc không hợp lệ', DT: null };
        }

        return { EC: 0, EM: 'Lấy thông tin bác sĩ thành công', DT: doctor };
    } catch (err) {
        console.error("Error getDoctorDetailById:", err);
        return { EC: -1, EM: 'Lỗi server khi lấy thông tin bác sĩ', DT: null };
    }
};

const getOtherDoctors = async (currentUserId) => {
    try {
        let doctors = await db.User.findAll({
            where: {
                groupId: 2,
                id: { [db.Sequelize.Op.ne]: currentUserId }
            },
            include: [
                {
                    model: db.DoctorInfo,
                    include: [
                        { model: db.Position },
                        { model: db.Specialty }
                    ]
                }
            ]
        });

        return {
            EC: 0,
            EM: 'OK',
            DT: doctors
        };
    } catch (e) {
        console.log("Error in getOtherDoctors service", e);
        return {
            EC: 1,
            EM: 'Lỗi server',
            DT: []
        };
    }
};

const getDoctorBySpecialty = async (specialtyId) => {
    try {
        const doctors = await db.User.findAll({
            where: { groupId: 2 }, // groupId = 2 là bác sĩ
            include: [
                {
                    model: db.DoctorInfo,
                    where: { specialtyId }
                }
            ]
        });

        return {
            EC: 0,
            EM: 'Lấy danh sách bác sĩ thành công',
            DT: doctors
        };
    } catch (err) {
        console.error("getDoctorBySpecialty error: ", err);
        return {
            EC: 1,
            EM: "Lỗi server khi lấy bác sĩ theo chuyên khoa",
            DT: []
        };
    }
};

export default { createDoctorInfo, updateDoctorInfo, readDoctorGallery, getDoctorDetailById, getOtherDoctors, getDoctorBySpecialty };
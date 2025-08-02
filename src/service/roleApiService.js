import db from '../models/index';

const createNewRoles = async (roles) => {
    try {
        // Lấy tất cả role hiện tại trong DB
        let currentRoles = await db.Role.findAll({
            attributes: ['url', 'description'],
            raw: true
        });

        // Lọc ra các role chưa tồn tại trong DB
        const persists = roles.filter(({ url: url1 }) =>
            !currentRoles.some(({ url: url2 }) => url1 === url2)
        );

        // Nếu không có role mới nào để tạo
        if (persists.length === 0) {
            return {
                EM: 'Nothing to create ...',
                EC: 0,
                DT: []
            };
        }

        // Tạo các role mới
        await db.Role.bulkCreate(persists);

        return {
            EM: `Create roles succeeds: ${persists.length} roles...`,
            EC: 0,
            DT: []
        };


    } catch (error) {
        console.log("Error in createNewRoles:", error);
        return {
            EM: 'Something went wrong',
            EC: -1,
            DT: []
        };
    }
};

const getAllRoles = async () => {
    try {
        let data = await db.Role.findAll({
            order: [['id', 'ASC']]
        });

        return {
            EM: 'Get all Roles succeeds',
            EC: 0,
            DT: data
        };
    } catch (error) {
        console.log(error);
        return {
            EM: 'Something went wrong with services',
            EC: 1,
            DT: []
        };
    }
};

const deleteRole = async (id) => {
    try {
        let role = await db.Role.findOne({
            where: { id: id }
        });

        if (role) {
            await role.destroy();
        }

        return {
            EM: 'Delete Roles succeeds',
            EC: 0,
            DT: []
        };
    } catch (error) {
        console.log(error);
        return {
            EM: 'Something wrong with services',
            EC: 1,
            DT: []
        };
    }
};

const getRoleByGroup = async (id) => {
    try {
        if (!id) {
            return {
                EM: 'Not found any roles',
                EC: 0,
                DT: []
            };
        }

        let roles = await db.Group.findOne({
            where: { id: id },
            attributes: ["id", "name", "description"],
            include: {
                model: db.Role,
                attributes: ["id", "url", "description"],
                through: { attributes: [] } // loại bỏ thuộc tính trung gian
            }
        });

        return {
            EM: 'Get roles by group succeeds',
            EC: 0,
            DT: roles
        };

    } catch (error) {
        console.log("Error in getRoleByGroup:", error);
        return {
            EM: 'Something wrong with services',
            EC: 1,
            DT: []
        };
    }
};

const assignRoleToGroup = async (data) => {
    try {
        // Xóa hết các role cũ của group này
        await db.Group_Role.destroy({
            where: { groupId: +data.groupId }
        });

        // Tạo mới danh sách roles được gán
        await db.Group_Role.bulkCreate(data.groupRoles);

        return {
            EM: 'Assign Role to Group succeeds',
            EC: 0,
            DT: []
        };
    } catch (error) {
        console.log(error);
        return {
            EM: 'Something went wrong with services',
            EC: 1,
            DT: []
        };
    }
};

const updateRole = async (data) => {
    try {
        // if (!data.groupId) return { EM: "Error with empty GroupId", EC: 1, DT: "group" };

        let role = await db.Role.findOne({ where: { id: data.id } });
        if (role) {
            role.url = data.url;
            role.description = data.description;
            await role.save();
            return { EM: 'Update role success', EC: 0, DT: '' };
        } else {
            return { EM: 'Role not found', EC: 1, DT: '' };
        }
    } catch (e) {
        console.log('❌ Error update role:', e);
        return { EM: 'Something wrong in service...', EC: 1, DT: '' };
    }
};

module.exports = {
    createNewRoles, getAllRoles, deleteRole, getRoleByGroup, assignRoleToGroup, updateRole
};


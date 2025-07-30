import searchService from '../service/searchService';

const searchAll = async (req, res) => {
    try {
        const { keyword } = req.query;
        if (!keyword || keyword.trim() === '') {
            return res.status(400).json({ EC: 1, EM: 'Vui lòng nhập từ khóa tìm kiếm', DT: null });
        }

        const results = await searchService.searchAll(keyword.trim());
        return res.status(200).json({ EC: 0, EM: 'OK', DT: results });
    } catch (error) {
        console.error('Search error:', error);
        return res.status(500).json({ EC: 1, EM: 'Lỗi hệ thống', DT: null });
    }
};

export default {
    searchAll
};

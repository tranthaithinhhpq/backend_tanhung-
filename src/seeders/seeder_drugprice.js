'use strict';

export default {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('DrugPrice', [
            {
                code: 'TH001',
                name: 'Paracetamol 500mg',
                activeIngredient: 'Paracetamol',
                concentration: '500mg',
                unit: 'viên',
                price: 1000,
                insurancePrice: 800,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                code: 'TH002',
                name: 'Amoxicillin 500mg',
                activeIngredient: 'Amoxicillin',
                concentration: '500mg',
                unit: 'viên',
                price: 1500,
                insurancePrice: 1200,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                code: 'TH003',
                name: 'Vitamin C 500mg',
                activeIngredient: 'Ascorbic Acid',
                concentration: '500mg',
                unit: 'viên',
                price: 500,
                insurancePrice: 400,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('DrugPrice', null, {});
    }
};

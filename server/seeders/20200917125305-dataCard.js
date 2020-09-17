'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let data = [
      {
        imageUrl: 'http://pngimg.com/uploads/pokemon/pokemon_PNG161.png',
        code: 'a',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        imageUrl: 'http://pngimg.com/uploads/pokemon/pokemon_PNG161.png',
        code: 'a',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        imageUrl: 'http://pngimg.com/uploads/pokemon/pokemon_PNG160.png',
        code: 'b',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        imageUrl: 'http://pngimg.com/uploads/pokemon/pokemon_PNG160.png',
        code: 'b',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        imageUrl: 'http://pngimg.com/uploads/pokemon/pokemon_PNG159.png',
        code: 'c',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        imageUrl: 'http://pngimg.com/uploads/pokemon/pokemon_PNG159.png',
        code: 'c',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        imageUrl: 'http://pngimg.com/uploads/pokemon/pokemon_PNG158.png',
        code: 'd',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        imageUrl: 'http://pngimg.com/uploads/pokemon/pokemon_PNG158.png',
        code: 'd',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        imageUrl: 'http://pngimg.com/uploads/pokemon/pokemon_PNG157.png',
        code: 'e',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        imageUrl: 'http://pngimg.com/uploads/pokemon/pokemon_PNG157.png',
        code: 'e',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        imageUrl: 'http://pngimg.com/uploads/pokemon/pokemon_PNG156.png',
        code: 'f',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        imageUrl: 'http://pngimg.com/uploads/pokemon/pokemon_PNG156.png',
        code: 'f',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        imageUrl: 'http://pngimg.com/uploads/pokemon/pokemon_PNG155.png',
        code: 'g',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        imageUrl: 'http://pngimg.com/uploads/pokemon/pokemon_PNG155.png',
        code: 'g',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        imageUrl: 'http://pngimg.com/uploads/pokemon/pokemon_PNG154.png',
        code: 'h',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        imageUrl: 'http://pngimg.com/uploads/pokemon/pokemon_PNG154.png',
        code: 'h',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        imageUrl: 'http://pngimg.com/uploads/pokemon/pokemon_PNG153.png',
        code: 'i',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        imageUrl: 'http://pngimg.com/uploads/pokemon/pokemon_PNG153.png',
        code: 'i',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        imageUrl: 'http://pngimg.com/uploads/pokemon/pokemon_PNG152.png',
        code: 'j',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        imageUrl: 'http://pngimg.com/uploads/pokemon/pokemon_PNG152.png',
        code: 'j',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('Cards', data, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Cards', null, {})
  }
};

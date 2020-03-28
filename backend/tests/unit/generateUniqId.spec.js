const generateUniqId = require('../../src/Utils/generateUniqId');

describe('Generate Uniq ID', () => {
    it('should generate an unique ID', () => {
        const id = generateUniqId();

        expect(id).toHaveLength(8)
    })
})
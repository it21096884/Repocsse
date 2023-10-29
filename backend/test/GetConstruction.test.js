const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon'); 
// const purchaseOrderRepository = require('../repositories/purchaseOrderRepository');
// const purchaseOrderController = require('../controllers/purchaseOrderController');
const constructionRepo = require('../controllers/constructionRepo');
const constructionController = require('../controllers/ConstructionsController');

const Product = require('../models/Construction'); 

describe('construction  Controller', () => {
  describe('createConstruction', () => {
    it('construction creation', async () => {
      // Arrange: Prepare the test data
      const testData = {
        date: '2023-10-31',
        location: 'Kandy',
        suppiler: 'John',
        budget: 35000,
        
      };

      // Stub the create method of purchaseOrderRepository to simulate database interaction
      const stubCreate = sinon.stub(constructionRepo, 'create');
      


  



      // Create a fake order object to return from the stub
      const fakeCreatedConstruction = {
        _id: 'fakeconstId123', 
        date: testData.date,
        location: testData.location,
        suppiler: testData.suppiler,
        budget: testData.budget,

      };
      
      // Configure the stubs
      stubCreate.withArgs(testData).resolves(fakeCreatedConstruction);

      // Act: Call the function to test
      const createdConst = await constructionController.createConstruction(testData);

      // Assert: Check the expected outcome
      expect(createdConst).to.be.an('object');
      expect(createdConst).to.deep.equal(fakeCreatedConstruction);
      

      // Restore the stubs after the test
      stubCreate.restore();
      stubFindById.restore();
    });

  
  





  
});
}
);
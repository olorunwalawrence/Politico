import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
const { should } = chai;
should();

describe('API ENDPOINTS', () => {
  describe('POST', () => {
    it('should return success for a successful creation of political party', (done) => {
      chai
        .request(app)
        .post('/api/v1/parties')
        .send({
          name: 'olorunwa',
          hqAddress: 'abuja',
          logoUrl: 'https://google.com/img.jpeg'
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.an('object');
          res.body.should.have.property('status');
          res.body.should.have.property('data');
        });
      done();
    });
    it('should not return success for a successful creation of political party', (done) => {
      chai
        .request(app)
        .post('/api/v1/parties')
        .send({
          name: '',
          hqAddress: 'abuja',
          logoUrl: 'https://google.com/img.jpeg'
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.an('object');
          res.body.should.have.property('message');
        });
      done();
    });
    it('should not return success for a successful creation of political party', (done) => {
      chai
        .request(app)
        .post('/api/v1/parties')
        .send({
          name: 'name',
          hqAddress: '',
          logoUrl: 'https://google.com/img.jpeg'
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.an('object');
          res.body.should.have.property('message');
        });
      done();
    });
    it('should not return success for a successful creation of political party', (done) => {
      chai
        .request(app)
        .post('/api/v1/parties')
        .send({
          name: 'name',
          hqAddress: 'address',
          logoUrl: ''
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.an('object');
          res.body.should.have.property('message');
        });
      done();
    });
    it('should not return success for a successful creation of political party', (done) => {
      chai
        .request(app)
        .post('/api/v1/parties')
        .send({
          name: 'name4',
          hqAddress: 'address',
          logoUrl: ''
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.an('object');
          res.body.should.have.property('message');
        });
      done();
    });
  });

  describe('GET', () => {
    it('should get all party ', (done) => {
      chai.request(app)
        .get('/api/v1/parties')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('data');
        });
      done();
    });
  });

  describe('GET', () => {
    it('should not get a single party', (done) => {
      chai.request(app)
        .get('/api/v1/parties/fakeId')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.an('object');
          res.body.should.have.property('message');
        });
      done();
    });
    it('should get a single party', (done) => {
      chai.request(app)
        .get('/api/v1/parties/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('data');
        });
      done();
    });
  });

  describe('PATCH', () => {
    it('should update a request and return 400 status code', (done) => {
      chai.request(app)
        .patch('/api/v1/parties/1')
        .send({
          name: 'namew',
          hqAddress: 'address',
          logoUrl: 'urlendpoint'
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('status');
        });
      done();
    });
    it('should not update a request and return 400 status code', (done) => {
      chai.request(app)
        .patch('/api/v1/parties/fakeId')
        .send({
          name: 'namew',
          hqAddress: 'address',
          logoUrl: 'urlendpoint'
        })
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.an('object');
          res.body.should.have.property('message');
        });
      done();
    });
  })

  describe('PATCH', () => {
    it('should not delete a party ', (done) => {
      chai.request(app)
        .delete('/api/v1/parties/fakeId')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.an('object');
          res.body.should.have.property('status');
          res.body.data.message.should.be.eql('political party not found');
        });
      done();
    });
  })
});

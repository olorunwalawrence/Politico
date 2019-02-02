import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);
const { should } = chai;
should();

describe('API ENDPOINTS', () => {
  describe('POST', () => {
    it('should create a single office', (done) => {
      chai.request(app)
        .post('/api/v1/offices')
        .send({
          id: 1,
          type: 'officetype',
          name: 'officename'
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.an('object');
        });
      done();
    });
  });

  it('should not create a single office', (done) => {
    chai.request(app)
      .post('/api/v1/offices')
      .send({
        id: 1,
        type: '',
        name: 'officename'
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.an('object');
        res.body.should.have.property('message');
        res.body.message.should.be.equal('Office type is required');
      });
    done();
  });
  it('should not create a single office', (done) => {
    chai.request(app)
      .post('/api/v1/offices')
      .send({
        id: 1,
        type: 'officetype',
        name: ''
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.an('object');
        res.body.should.have.property('message');
        res.body.message.should.be.equal('Office name is required');
      });
    done();
  });

  describe('Get all office', () => {
    it('should return status code 200', (done) => {
      chai.request(app)
        .get('/api/v1/offices')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('data');
          done();
        });
    });
  });

  describe('GET', () => {
    it('should not return a single office', (done) => {
      chai.request(app)
        .get('/api/v1/offices/fakeoffice')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.an('object');
          res.body.should.have.property('message');
          res.body.message.should.be.equal('office does not exist');
          res.body.status.should.be.eql(404);
          res.body.message.should.be.a('string');
          done();
        });
    });
    it('should return a single office', (done) => {
      chai.request(app)
        .get('/api/v1/offices/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('message');
          res.body.message.should.be.equal('office retrieved successfully');
          res.body.should.have.property('status');
          res.body.status.should.be.eql(200);
          res.body.message.should.be.a('string');
        });
      done();
    });
  });
});
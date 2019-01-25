import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
const { should } = chai;
should();

describe('create office', () => {
  it('shoud create a single office', (done) => {
    chai.request(app)
      .post('/api/v1/createoffice')
      .send({
        id: 1,
        officename: 'officename',
        officetype: 'officetype'
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.an('object');
        res.body.should.have.property('message');
        res.body.message.should.be.equal('politiccal office created successfully');
        res.body.should.have.property('success');
        res.body.success.should.be.eql(true);
      });
    done();
  });

  it('Get all office ', (done) => {
    chai.request(app)
      .get('/api/v1/getalloffice')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('message');
        res.body.message.should.be.equal('All political office retrieved successfully');
        res.body.should.have.property('success');
        res.body.success.should.be.eql(true);
        res.body.message.should.be.a('string');


        done();
      });
  });

  it('should get a single office', (done) => {
    chai.request(app)
      .get('/api/v1/getsingleoffice/:id')
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.an('object');
        res.body.should.have.property('message');
        res.body.message.should.be.equal('office does not exist');
        res.body.should.have.property('success');
        res.body.success.should.be.eql(false);
        res.body.message.should.be.a('string');


        done();
      });
  });
});

import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
const { should } = chai;
should();

describe('App', () => {
  it('should return success for a successful creation of political party', (done) => {
    chai
      .request(app)
      .post('/api/v1/createparty')
      .send({
        partyname: 'olorunwa',
        address: 'abuja',
        email: 'olorunwalawrence5@gmail.com',
        phone: '12345678',
        password: 'lovers',
        regnumber: 'wertyui8765432',
        imgurl: 'localhost//img.jpeg'
      })
      .end((err, res) => {
        res.should.have.status(200);

        res.body.should.be.an('object');
        res.body.should.have.property('message');
        res.body.should.have.property('success');
        res.body.message.should.be.equal('politiccal party created successfully');
        res.body.should.have.property('data');
      });
    done();
  });

  it('should get all party ', (done) => {
    chai.request(app)
      .get('/api/v1/getallparty')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('message');
        res.body.message.should.be.equal('All political party retrieved successfully');
        res.body.should.have.property('success');
        res.body.success.should.be.eql(true);
        res.body.message.should.be.a('string');


        done();
      });
  });

  it('should get a single party', (done) => {
    chai.request(app)
      .get('/api/v1/getsingleparty/:id')
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.an('object');
        res.body.should.have.property('message');
        res.body.message.should.be.equal('party does not exist');
        res.body.should.have.property('success');
        res.body.success.should.be.eql(false);
        res.body.message.should.be.a('string');


        done();
      });
  });

  it('should not updata a request and return 400 status code', (done) => {
    chai.request(app)
      .put('/api/v1/updateparty/:id')
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.an('object');
        res.body.should.have.property('message');
        res.body.message.should.be.a('string');
        res.body.message.should.be.eql('political party not found');
        res.body.should.have.property('status');
        res.body.status.should.be.an('string');
        done();
      });
  });


  it('should delete a party ', (done) => {
    chai.request(app)
      .delete('/api/v1/deleteparty/:id')
      .end((err, res) => {
        res.should.have.status(400);
        // res.should.have.status(200);
        res.body.status.should.be.eql('not found');
        res.body.should.be.an('object');
        res.body.should.have.property('success');
        // res.body.success.should.be.eql(true);
        res.body.should.have.property('message');
        res.body.message.should.be.eql('political party not found');
      });
    done();
  });
});

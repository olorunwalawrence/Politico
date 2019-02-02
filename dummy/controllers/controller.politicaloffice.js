/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
import getSingleQuery from '../utils/helper';
import politicalOfficeDb from '../dummyDatabase/politicalOfficeDb';

export default class PoliticalOffice {
  // Create political office
  /**
   *
   * @param {*} req  THE REQUEST OBJECT
   * @param {*} res   THE RESPONSE OBJECT
   * @param {*} json  THE  RETURN JSON
   */
  static createOffice(req, res) {
    const { type, name } = req.body;
    if (name.trim() === '') {
      return res.status(400).send({
        status: 400,
        message: 'Office name is required'
      });
    }
    if (type.trim() === '') {
      return res.status(400).send({
        status: 400,
        message: 'Office type is required'
      });
    }

    // CHECK IF THE PARTY NAME ALREADY EXIST
  /**
   *
   * @param {*} req  THE REQUEST OBJECT
   * @param {*} res   THE RESPONSE OBJECT
   * @param {*} json  THE  RETURN JSON
   */

    const result = politicalOfficeDb.filter(
      officeName => officeName.name === name.toLowerCase()
    );
    if (!result.length < 1) {
      return res.status(400).json({ message: 'party already exit' });
    }
    const data = {
      id: politicalOfficeDb.length + 1,
      name: name.toLowerCase(),
      type
    };

    // PUSH DATA INTO DUMMY DATABASE

    politicalOfficeDb.push(data);
    return res.status(201).json({
      status: 201,
      message: 'political office created successfully',
      data
    });
  }

  // Get political office
 /**
 /**
   *
   * @param {*} req  THE REQUEST OBJECT
   * @param {*} res   THE RESPONSE OBJECT
   * @param {*} json  THE  RETURN JSON
   */
  static getAllOffice(req, res) {
    return res.status(200).json({
      status: 200,
      data: politicalOfficeDb
    });
  }

  // Get a single political office
 /**
   *
   * @param {*} req  THE REQUEST OBJECT
   * @param {*} res   THE RESPONSE OBJECT
   * @param {*} json  THE  RETURN JSON
   */
  static getSingleOffice(req, res) {
    const id = parseInt(req.params.id, 10);

    getSingleQuery(
      politicalOfficeDb,
      id,
      'office retrieved successfully',
      'office does not exist',
      res
    );
  }
}

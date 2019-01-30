/* eslint-disable require-jsdoc */
import getSingleQuery from '../utils/utils';
import politicalOfficeDb from '../dummyDatabase/politicalOfficeDb';


export default class politicalOffice {
  /*
    =========================================
    Create political office
    ==========================================
    */
  static createOffice(req, res) {
    if (!req.body.officename) {
      return res.status(400).send({
        success: 'false',
        message: 'office name is required'
      });
    } if (!req.body.officetype) {
      return res.status(400).send({
        success: 'false',
        message: 'hqaddress is required'
      });
    }
    const { officename, officetype } = req.body;
    const data = {
      id: politicalOfficeDb.length + 1,
      officename,
      officetype
    };

    politicalOfficeDb.push(data);
    return res.status(200).json({
      success: true,
      message: 'politiccal office created successfully',
      data
    });
  }


  /*
    =========================================
    Get political office
    ==========================================
    */

  static getAllOffice(req, res) {
    return res.status(200).json({
      success: true,
      message: 'All political office retrieved successfully',
      politicalOfficeDb
    });
  }


  /*
    =========================================
        Get a single political office
    ==========================================
    */

  static getSingleOffice(req, res) {
    const id = parseInt(req.params.id, 10);

    getSingleQuery(politicalOfficeDb, id, 'political office retrieved successfully', political office does not exist', res )
  }
}

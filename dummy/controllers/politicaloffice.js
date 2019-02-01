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
    const { officename, officeAddress } = req.body;
    if (!officename) {
      return res.status(400).send({
        success: 'false',
        message: 'office name is required'
      });
    }
    if (!officeAddress) {
      return res.status(400).send({
        success: 'false',
        message: 'hqaddress is required'
      });
    }
      /*
    =========================================
      CHECK IF THE PARTY NAME ALREADY EXIST
    ==========================================
    */ 
    const result = politicalOfficeDb.filter(officeName => officeName.officename === officename.toLowerCase());
    if (!result.length < 1) {
      return res.status(400).json({ message: 'party already exit' });
    }
    const data = {
      id: politicalOfficeDb.length + 1,
      officename: officename.toLowerCase(),
      officeAddress
    };
      /*
    =========================================
        PUSH DATA INTO DUMMY DATABASE
    ==========================================
    */

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

    getSingleQuery(politicalOfficeDb, id, 'political office retrieved successfully', 'party does not exist', res )
  }
}

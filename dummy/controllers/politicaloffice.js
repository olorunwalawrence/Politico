/* eslint-disable require-jsdoc */

import politicalOfficeDb from '../dummyDatabase/politicalOfficeDb';
import handleSingleQuery from '../utils/getSingleQuery';

export default class politicalOffice {
  /*
    =========================================
    Create political office
    ==========================================
    */
  static createOffice(req, res) {
    const {
      officename,
      hqaddress
    } = req.body;

    if (!officename) {
      return res.status(400).send({
        success: 'false',
        message: 'office name is required'
      });
    }
    if (!hqaddress) {
      return res.status(400).send({
        success: 'false',
        message: 'hqaddress is required'
      });
    }
    const result = politicalOfficeDb
      .filter(officeName => officeName.officename === officename.toLowerCase());

    if (!result.length < 1) {
      return res.status(400).json({ message: 'Office has been created' });
    }
    const data = {
      id: politicalOfficeDb.length + 1,
      officename: officename.toLowerCase(),
      hqaddress
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
    Get  all political office
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

    handleSingleQuery(politicalOfficeDb, id, 'office retrieved successfully', 'office does not exist', res);
  }
}

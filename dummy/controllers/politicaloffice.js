/* eslint-disable require-jsdoc */

import politicalOfficeDb from '../dummyDatabase/politicalOfficeDb';
import { office } from '../util/util';


export default class politicalOffice {
  /*
    =========================================
    Create political office
    ==========================================
    */
   /**
    * 
    * @param {*} req 
    * @param {*} res 
    */
  static createOffice(req, res) {
    const { type, name } = req.body;
  

    office(type, name,res);


    /*
    =========================================
      CHECK IF THE PARTY NAME ALREADY EXIST
    ==========================================
    */
    const result = politicalOfficeDb.filter(officeName => officeName.name === name.toLowerCase());
    if (!result.length < 1) {
      return res.status(400).json({ message: 'Office already exist already exit' });
    }
    const data = {
      id: politicalOfficeDb.length + 1,
      type,
      name,
    };
      /*
    =========================================
        PUSH DATA INTO DUMMY DATABASE
    ==========================================
    */

    politicalOfficeDb.push(data);
    return res.status(200).json({
      status: 200,
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
      data: politicalOfficeDb
    });
  }


  /*
    =========================================
        Get a single political office
    ==========================================
    */

  static getSingleOffice(req, res) {
    const id = parseInt(req.params.id, 10);
    let result;
    politicalOfficeDb.map((office) => {
      if (office.id === id) {
        result = office;
      }
    });
    if (result) {
      return res.status(200).json({
        status: 200,
        message: 'office retrieved successfully',
        office: result
      });
    }
    return res.status(404).json({
      status: 404,
      message: 'office does not exist',
    });
  }
}

/* eslint-disable require-jsdoc */

import politicalPartyDb from '../dummyDatabase/politicalPartyDb';

export default class politicalParty {
  


  /*
    =========================================
                Create political party
    ==========================================
    */
  static createParty(req, res) {
    const {
 partyname, address, phone, email, regnumber, imgurl } = req.body;

    if (!partyname || !address || !phone || !email || !regnumber || !imgurl) {
      return res.status(400).send({
        success: 'false',
        message: 'undefined field detected'
      });
    }
     /*
    =========================================
      CHECK IF THE PARTY NAME ALREADY EXIST
    ==========================================
    */ 
    const result = politicalPartyDb.filter(partyName => partyName.partyname === partyname.toLowerCase());
    if (!result.length < 1) {
      return res.status(400).json({ message: 'party already exit' });
    }
    const data = {
      id: politicalPartyDb.length + 1,
      partyname: partyname.toLowerCase(),
      address,
      phone,
      email,
      regnumber,
      imgurl
    };
  /*
    =========================================
        PUSH DATA INTO DUMMY DATABASE
    ==========================================
    */
    politicalPartyDb.push(data);
    return res.status(200).json({
      success: true,
      message: 'politiccal party created successfully',
      data
    });
  }

  /*
    =========================================
    Get all political party
    ==========================================
    */

  static getAllParty(req, res) {
    return res.status(200).json({
      success: true,
      message: 'All political party retrieved successfully',
      politicalPartyDb
    });
  }

  /*
    =========================================
        Get a single political party
    ==========================================
    */
   static getSingleParty(req, res) {
    const id = parseInt(req.params.id, 10);

    politicalPartyDb.map((party) => {
      if (party.id === id) {
        return res.status(201).json({
          success: true,
          message: 'party retrieved successfully',
          party
        });
      }
    });
    return res.status(404).json({
      success: false,
      message: 'party does not exist',
    });
  }



  /*
    =========================================
                Update political party
    ==========================================
    */

  static updateparty(req, res) {
    const id = parseInt(req.params.id, 10);
    let partyFound;
    let partyIndex;
    politicalPartyDb.map((party, index) => {
      if (party.id === id) {
        partyFound = party;
        partyIndex = index;
      }
    });
    if (!partyFound) {
      return res.status(400).send({
        status: 'updated',
        success: 'false',
        message: 'political party not found'
      });
    }
    const updatedParty = {
      id: partyFound.id,
      partyname: req.body.partyname || partyFound.partyname,
      address: req.body.address || partyFound.address,
      phone: req.body.phone || partyFound.phone,
      email: req.body.email || partyFound.email,
      regnumber: req.body.regnumber || partyFound.regnumber,
      imgurl: req.body.imgurl || partyFound.imgurl
    };

    politicalPartyDb.splice(partyIndex, 1, updatedParty);

    return res.status(201).send({
      success: 'true',
      message: 'political party updated successfully',
      updatedParty
    });
  }

  static DeleteParty(req, res) {
    const id = parseInt(req.params.id, 10);
    let partyFound;
    let partyIndex;
    politicalPartyDb.map((party, index) => {
      if (party.id === id) {
        partyFound = party;
        partyIndex = index;
      }
    });
    if (!partyFound) {
      return res.status(400).send({
        status: 'not found',
        success: 'false',
        message: 'political party not found'
      });
    }

    politicalPartyDb.splice(partyIndex, 1);
    return res.status(200).send({
      success: 'true',
      message: 'political party deleted successfuly'
    });
  }
}

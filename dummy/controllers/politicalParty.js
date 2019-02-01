/* eslint-disable require-jsdoc */

import politicalPartyDb from '../dummyDatabase/politicalPartyDb';
import { parties, getParties, handleSinglePary } from '../util/util';

export default class politicalParty {
  /*
    =========================================
                Create political party
    ==========================================
    */
  static createParty(req, res) {
    const { name, hqAddress, logoUrl } = req.body;
    /*
    =========================================
      CHECK IF THE PARTY NAME ALREADY EXIST
    ==========================================
    */
    parties(name, hqAddress, logoUrl, res);

    const result = politicalPartyDb.filter(
      Name => Name.name === name.toLowerCase()
    );
    if (!result.length < 1) {
      return res.status(400).json({ message: 'party already exit' });
    }
    const data = {
      id: politicalPartyDb.length + 1,
      name: name.toLowerCase(),
      hqAddress: hqAddress.toLowerCase(),
      logoUrl
    };
    /*
    =========================================
        PUSH DATA INTO DUMMY DATABASE
    ==========================================
    */
    politicalPartyDb.push(data);
    return res.status(201).json({
      status: 201,
      data
    });
  }

  /*
    =========================================
    Get all political party
    ==========================================
    */

  static getAllParty(req, res) {
    getParties(res, politicalPartyDb);
  }

  /*
    =========================================
        Get a single political party
    ==========================================
    */
  static getSingleParty(req, res) {
    const id = parseInt(req.params.id, 10);

    handleSinglePary(
      politicalPartyDb,
      id,
      'specified party does not exist',
      res
    );
  }

  /*
    =========================================
                Update political party
    ==========================================
    */

  static updateparty(req, res) {
    let updatedparty;
    const { id } = req.params;
    politicalPartyDb.forEach((party) => {

      if (party.id === parseInt(id, 10)) {
        party.hqAddress = req.body.hqAddress;
        party.name = req.body.name;
        party.logoUrl = req.body.logoUrl;
        updatedparty = party;
      }
    });
    if (updatedparty) {
      return res.status(200).json({
        status: 200,
        data: updatedparty
      });
    }
    return res.status(404).json({
      status: 404,
      message: 'party not found'
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
      return res.status(404).send({
        status: 404,
        data: {
          message: 'political party not found'
        }
      });
    }

    politicalPartyDb.splice(partyIndex, 1);
    return res.status(200).send({
      status: 200,
      message: 'political party deleted successfuly'
    });
  }
}

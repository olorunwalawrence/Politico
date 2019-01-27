/* eslint-disable require-jsdoc */

export default class Validator {
  static officeValidator(req, res, next) {
    const { officename, hqaddress } = req.body;

    if (!officename || officename.trim().toLowerCase() === '') {
      return res.status(400).json({ message: ' officename cannot be empty' });
    } if (!hqaddress || hqaddress.trim().toLowerCase() === '') {
      return res.status(400).json({ message: 'head quater address cannot be empty' });
    }
    next();
  }


  static PartyValidation(req, res, next) {
    const {
      partyname, address, phone, email, regnumber, imgurl
    } = req.body;

    if (!partyname || partyname.trim().toLowerCase() === '') {
      return res.status(400).json({ message: ' Partyname cannot be empty' });
    } if (address.trim().toLowerCase() === '') {
      return res.status(400).json({ message: 'Address cannot be empty' });
    }
    if (!phone || phone.trim().toLowerCase() === '') {
      return res.status(400).json({ message: ' Phone cannot be empty' });
    } if (!email || email.trim() === '') {
      return res.status(400).json({ message: 'Email type cannot be empty' });
    }
    if (!regnumber || regnumber.trim().toLowerCase() === '') {
      return res.status(400).json({ message: ' Registration number cannot be empty' });
    } if (!imgurl || imgurl.trim().toLowerCase() === '') {
      return res.status(400).json({ message: 'Image URL  type cannot be empty' });
    }
    next();
  }

  static validatePartyMessage(req, res, next) {
    const {
      partyname
    } = req.body;

    if (partyname) {
      const regex = /^[a-zA-Z ]+$/ig;
      const test = regex.test(partyname);
      if (!test) {
        return res.status(400).json({

          message: 'party name can only contain letters'
        });
      }
      next();
    } else {
      next();
    }
  }

  static validateOfficeMessage(req, res, next) {
    const { officename, hqaddress } = req.body;
    if (officename || hqaddress) {
      const regex = /^[a-zA-Z ]+$/ig;
      const test = regex.test(officename, hqaddress);
      if (!test) {
        return res.status(400).json({

          message: 'Message can only contain letters'
        });
      }
      next();
    } else {
      next();
    }
  }
}

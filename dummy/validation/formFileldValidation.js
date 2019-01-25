/* eslint-disable require-jsdoc */

export default class Validator {
  static officeValidator(req, res, next) {
    const { officename, officetype } = req.body;

    if (officename === '') {
      return res.status(400).json({ message: ' officename cannot be empty' });
    } if (officetype === '') {
      return res.status(400).json({ message: 'office type cannot be empty' });
    }
    next();
  }


  static PartyValidation(req, res, next) {
    const {
      partyname, address, phone, email, regnumber, imgurl
    } = req.body;
    if (partyname === '') {
      return res.status(400).json({ message: ' Partyname cannot be empty' });
    } if (address === '') {
      return res.status(400).json({ message: 'Address cannot be empty' });
    }
    if (phone === '') {
      return res.status(400).json({ message: ' Phone cannot be empty' });
    } if (email === '') {
      return res.status(400).json({ message: 'Email type cannot be empty' });
    }
    if (regnumber === '') {
      return res.status(400).json({ message: ' Registration number cannot be empty' });
    } if (imgurl === '') {
      return res.status(400).json({ message: 'Image URL  type cannot be empty' });
    }
    next();
  }
}

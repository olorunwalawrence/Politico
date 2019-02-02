/* eslint-disable require-jsdoc */

export default class Validator {
  // eslint-disable-next-line valid-jsdoc
  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @param {*} json
   * @param {*} message
   */

  // VALIDATE   POLITICAL OFFICE FORM FIELD
  static officeValidation(req, res, next) {
    const { name, type } = req.body;
    try {
      const regex = /^[a-zA-Z\s]*$/;
      if (name.trim() === '') {
        return res
          .status(400)
          .json({ message: ' office name cannot be empty' });
      }
      if (!regex.test(name)) {
        return res
          .status(400)
          .json({ message: 'office name can only be letters' });
      }
      if (type.trim() === '') {
        return res.status(400).json({ message: 'type cannot be empty' });
      }
      if (!regex.test(type)) {
        return res
          .status(400)
          .json({ message: 'hqAdress can only contain letter' });
      }

      next();
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: 'JSON object should contain { name, type}'
      });
    }
  }

  // VALIDATE   POLITICAL PARTY FORM FIELD
  static PartyValidation(req, res, next) {
    const { name, hqAddress, logoUrl } = req.body;
    try {
      const regex = /^[a-zA-Z\s]*$/;
      if (name.trim() === '') {
        return res.status(400).json({ message: ' Partyname cannot be empty' });
      }
      if (!regex.test(name)) {
        return res
          .status(400)
          .json({ message: 'Party name can only be letters' });
      }
      if (hqAddress.trim() === '') {
        return res.status(400).json({ message: 'Address cannot be empty' });
      }
      if (!regex.test(hqAddress)) {
        return res
          .status(400)
          .json({ message: 'hqAdress can only contain letter' });
      }
      if (logoUrl.trim() === '') {
        return res
          .status(400)
          .json({ message: 'Image URLtype cannot be empty' });
      }
      next();
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: 'JSON object should contain { name, hqAddress, logoUrl }'
      });
    }
  }
}

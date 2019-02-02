const partiesValidation = (name, hqAddress, logoUrl, res) => {
  if (!name || !hqAddress || !logoUrl) {
    return res.status(400).send({
      success: 'false',
      message: 'field required'
    });
  }
};
const office = (type, name, res) => {
  if (!type || !name) {
    return res.status(400).send({
      success: 'false',
      message: 'field required'
    });
  }
};

const getParties = (res, db) => res.status(200).json({
  status: 200,
  data: db
});

const handleSinglePary = (dataBase, userId, errorMessage, res) => {
  let singleParty = false;
  let object;
  dataBase.map((value) => {
    object = value;
    if (value.id === userId) {
      singleParty = true;
    }
  });
  if (singleParty) {
    return res.status(200).json({
      status: 200,
      data: object
    });
  }
  return res.status(404).json({
    status: 404,
    message: errorMessage
  });
};

export {
  partiesValidation, getParties, handleSinglePary, office
};
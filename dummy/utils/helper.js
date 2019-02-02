const handleSingleQuery = (
  dataBase,
  userId,
  successMessage,
  errorMessage,
  res
) => {
  let result;
  dataBase.map((object) => {
    if (object.id === userId) {
      result = object;
    }
  });
  if (result) {
    return res.status(200).json({
      status: 200,
      message: successMessage,
      result
    });
  }
  return res.status(404).json({
    status: 404,
    message: errorMessage
  });
};

export default handleSingleQuery;

const handleSingleQuery = (dataBase, userId, successMessage, errorMessage, res) => dataBase
  .map((object) => {
    if (object.id === userId) {
      return res.status(200).json({
        success: true,
        message: successMessage,
        result: object
      });
    }
    return res.status(404).json({
      success: false,
      message: errorMessage
    });
  });


export default handleSingleQuery;

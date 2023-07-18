const handleError = (error: any, res: any, msg?: string) => {
  console.log(error);
  res.status(500).send(error.message ? error.message : msg);
};

module.exports = { handleError };

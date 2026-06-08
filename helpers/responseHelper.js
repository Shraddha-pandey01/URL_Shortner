const handleSuccess = (res, data) => {
  return res.status(201).send({
    result: true,
    message: "Success",
    payload: data,
  });
};

const handleError = (res, err, payload = null) => {
  return res.status(500).send({
    result: false,
    message: err?.message || null,
    payload: payload,
  });
};


module.exports = {
  handleSuccess,
  handleError,
};

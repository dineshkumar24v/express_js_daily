const checkAPI_Key = (req, res, next) => {
  const { api_key } = req.query;
  if (api_key === "4567fjhsd45") {
    next(); // Call the next middleware or route handler
  } else {
    res.status(401).json({
      message: "Unauthorized: Invalid API Key"
    });
  }
};

module.exports = { checkAPI_Key };
const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === 'august') {
    req.user = { name: 'august', id: 3 };
    next();
  } else {
    res.status(401).send('Unanthorized');
  }
};

module.exports = authorize;

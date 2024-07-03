const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  // Check for Authorization header
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  // Check if Authorization header format is correct
  const parts = authHeader.split(' ');
  console.log("authhearer:",authHeader)
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return res.status(401).json({ message: 'Authorization header format is invalid' });
  }

  const token = parts[1];
  console.log("token",token);

  if (!token) {
    return res.status(401).json({ message: 'Authorization token missing' });
  }

  // Verify JWT token
  jwt.verify(token, 'abcdefg', (err, decoded) => {
    console.log("decoded:-",decoded);
    if (err) {
      console.log("Err:",err)
      return res.status(403).json({ message: 'Failed to authenticate token' });
      
    }

    // Store decoded token data for further use if needed
    req.user = decoded;
    console.log("req.user:",req.user);
    next(); // Move to the next middleware or route handler
  });
};

module.exports = { authenticate };

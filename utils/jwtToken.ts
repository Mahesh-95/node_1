const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const comparePassword = async (plainText: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(plainText, hash);
};

export const generateToken = (userId: number): string => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET!, { expiresIn: '1h' });
};

export const getPassword = (req) => {
    let token:string

    try {
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
            token = req.headers.authorization.split(' ')[1]
            return jwt.verify(token, process.env.JWT_SECRET)
        }
    } catch (error) {
        throw error(error)
    }
}
import { register } from '../services/registerService.js';

export const registerUser = async (req, res) => {
  try {
    const response = await register(req.body);
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

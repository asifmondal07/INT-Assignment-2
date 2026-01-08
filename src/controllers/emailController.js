import generateEmail from "../services/aiEmailService.js";

const generateEmailController = async (req, res) => {
  try {
    const { purpose, recipient_name, tone } = req.body;

    if (!purpose || !recipient_name || !tone) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const result = await generateEmail(
      purpose,
      recipient_name,
      tone
    );

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate email' });
    console.log(error.message)
  }

};

export {generateEmailController}

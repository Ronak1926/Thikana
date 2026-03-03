const Contact = require("../models/Contact");

// @desc    Create a new contact message
// @route   POST /api/contact
exports.createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = await Contact.create({ name, email, message });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contact,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

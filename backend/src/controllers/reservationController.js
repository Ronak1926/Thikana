const Reservation = require("../models/Reservation");

// @desc    Create a new reservation
// @route   POST /api/reservations
exports.createReservation = async (req, res) => {
  try {
    const { name, email, phone, guests, date, time, specialRequests } =
      req.body;

    const reservation = await Reservation.create({
      name,
      email,
      phone,
      guests,
      date,
      time,
      specialRequests,
    });

    res.status(201).json({
      success: true,
      message: "Reservation created successfully",
      data: reservation,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get all reservations
// @route   GET /api/reservations
exports.getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: reservations.length,
      data: reservations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

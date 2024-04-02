const { Schema, model, models } = require("mongoose");

const appointmentSchema = new Schema({
  name: String,
  date: Date,
});
const Appointment =
  models.Appointment || model("Appointment", appointmentSchema);

export default Appointment;

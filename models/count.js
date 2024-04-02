const { Schema, model, models } = require("mongoose");

const countSchema = new Schema({
  count: { type: Number, default: 0 },
});

const Count = models.Count || model("Count", countSchema);

export default Count;



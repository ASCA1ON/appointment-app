import { connectToDB } from "@/utils/database";
import Appointment from "@/models/appointment";
import Count from "@/models/count";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const appointments = await Appointment.find({});
    const count = await Count.findOne({});
    return new Response(
      JSON.stringify({ appointment: appointments, count: count.count }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error getting appointments:", error);
    return new Response("Failed to get appointments :-(", { status: 500 });
  }
};

export const POST = async (req, res) => {
  const { name, date } = await req.json();
  try {
    await connectToDB();
    const newAppointment = new Appointment({
      name,
      date,
    });
    const savedAppointment = await newAppointment.save();

    // Increment the API call count
    const count = await Count.findOneAndUpdate(
      {},
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );
    return new Response(
      JSON.stringify({ appointment: savedAppointment, count: count.count }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding appointment:", error);
    return new Response("Failed to create a new appointment :-(", {
      status: 500,
    });
  }
};

import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const NewAppointmentForm = (props) => {
  const { setAppointmentsAndCount, appointments } = props;
  const [newAppointment, setNewAppointment] = useState({ name: "", date: "" });

  const handleAddAppointment = async () => {
    if (
      newAppointment.name.trim() === "" ||
      newAppointment.date.trim() === ""
    ) {
      toast.error("Please fill in all fields.");
    } else {
      try {
        const response = await axios.post("/api/appointments", newAppointment);
        setAppointmentsAndCount(
          [...appointments, response.data.appointment],
          response.data.count
        );
        setNewAppointment({ name: "", date: "" });
        toast.success("Appointment added successfully.");
      } catch (error) {
        toast.error("Error adding appointment.");
        console.error("Error adding appointment:", error);
      }
    }
  };

  return (
    <div className="w-full h-full mt-7 mx-4">
      <h3 className="text-lg font-bold underline mb-5">Add New Appointment</h3>
      <div className="flex flex-wrap gap-3">
        <input
          className="rounded border-[1px] border-gray-400 px-2 w-52"
          type="text"
          placeholder="Appointment Name"
          value={newAppointment.name}
          onChange={(e) =>
            setNewAppointment({ ...newAppointment, name: e.target.value })
          }
        />
        <input
          className="rounded border-[1px] border-gray-400 px-2 w-52"
          type="date"
          value={newAppointment.date}
          onChange={(e) =>
            setNewAppointment({ ...newAppointment, date: e.target.value })
          }
        />
        <button
          onClick={handleAddAppointment}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default NewAppointmentForm;

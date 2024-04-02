import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AppointmentList = (props) => {
  const { appointment, appointments, setAppointmentsAndCount } = props;
  const [updatedAppointment, setUpdatedAppointment] = useState({
    name: appointment.name,
    date: appointment.date,
  });
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdateAppointment = async (id, updatedAppointment) => {
    if (
      updatedAppointment.name.trim() === "" ||
      updatedAppointment.date.trim() === ""
    ) {
      toast.error("Please fill in all fields.");
    } else {
      try {
        const response = await axios.patch(
          `/api/appointments/${id}`,
          updatedAppointment
        );
        const updatedAppointments = appointments.map((appointment) =>
          appointment._id === id ? response.data.appointment : appointment
        );
        setAppointmentsAndCount(updatedAppointments, response.data.count);
        handleEdit();
        toast.success("Appointment updated successfully.");
      } catch (error) {
        toast.error("Error updating appointment.");
        console.error("Error updating appointment:", error);
      }
    }
  };

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="rounded-lg border-[1px] border-[#ddd] shadow-lg  p-6 text-surface shadow-secondary-1 h-40 ">
      {!isEditing ? (
        <div key={appointment._id} className="flex flex-col flex-wrap gap-3">
          <p>Name: {appointment.name}</p>
          <p>Date: {appointment.date.split("T")[0]}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            onClick={() => handleEdit()}
          >
            Edit
          </button>
        </div>
      ) : (
        <div key={appointment._id} className="flex flex-col flex-wrap gap-3">
          <input
            className="rounded border-[1px] border-gray-400 px-2"
            type="text"
            placeholder="Appointment Name"
            value={updatedAppointment.name}
            onChange={(e) =>
              setUpdatedAppointment({
                ...updatedAppointment,
                name: e.target.value,
              })
            }
          />
          <input
            className="rounded border-[1px] border-gray-400 px-2"
            type="date"
            value={updatedAppointment.date.split("T")[0]}
            onChange={(e) =>
              setUpdatedAppointment({
                ...updatedAppointment,
                date: e.target.value,
              })
            }
          />
          <div className="flex gap-2 h-10">
            <button
              onClick={() =>
                handleUpdateAppointment(appointment._id, updatedAppointment)
              }
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Update
            </button>
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={() => setIsEditing(!isEditing)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentList;

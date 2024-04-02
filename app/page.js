"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Resizable } from "re-resizable";
import AppointmentList from "@/components/AppointmentList";
import NewAppointmentForm from "@/components/NewAppointmentForm";
import ApiCount from "@/components/ApiCount";
import { Toaster } from "react-hot-toast";

const MainPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [apiCallCount, setApiCallCount] = useState(0);

  useEffect(() => {
    fetchAppointmentsAndCount();
  }, []);

  const fetchAppointmentsAndCount = async () => {
    try {
      const response = await axios.get("/api/appointments");
      setAppointments(response.data.appointment);
      setApiCallCount(response.data.count);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const setAppointmentsAndCount = (app, count) => {
    setAppointments(app);
    setApiCallCount(count);
  };

  return (
    <div>
      <Toaster />
      <nav className="h-16 w-full bg-blue-500 text-white flex items-center text-xl px-4">
        {" "}
        DataNeuron Task
      </nav>
      <div className="flex mb-5 space-x-5 w-full mt-5 mx-4">
        <Resizable
          className=" border-[1px] border-[#ddd] shadow-lg rounded"
          defaultSize={{ width: "30%", height: 300 }}
          minWidth={100}
          minHeight={200}
        >
          <ApiCount apiCallCount={apiCallCount} />
        </Resizable>
        <div className="flex flex-1">
          <Resizable
            className="border-[1px] border-[#ddd] shadow-lg rounded w-full"
            defaultSize={{ width: "97%", height: 300 }}
            minWidth={250}
            minHeight={200}
            enable={{
              top: true,
              right: true,
              bottom: true,
              left: false,
              topRight: true,
              bottomRight: true,
              bottomLeft: true,
              topLeft: true,
            }}
          >
            <NewAppointmentForm
              setAppointmentsAndCount={setAppointmentsAndCount}
              appointments={appointments}
            />
          </Resizable>
        </div>
      </div>
      <div className="mx-4">
        <Resizable
          className=" border-[1px] border-[#ddd] h-full shadow-lg rounded p-4"
          // defaultSize={{ height: "100%" }}
          minWidth={310}
          minHeight={"auto"}
          enable={{
            top: false,
            right: true,
            bottom: true,
            left: true,
            topRight: true,
            bottomRight: true,
            bottomLeft: true,
            topLeft: true,
          }}
        >
          <div>
            <h3 className="text-lg font-bold underline mb-5"> Appointments</h3>
            <div className="flex flex-wrap gap-3">
              {appointments.map((appointment) => (
                <AppointmentList
                  appointment={appointment}
                  key={appointment._id}
                  setAppointmentsAndCount={setAppointmentsAndCount}
                  appointments={appointments}
                />
              ))}
            </div>
          </div>
        </Resizable>
      </div>
    </div>
  );
};

export default MainPage;

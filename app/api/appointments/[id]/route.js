import { connectToDB } from "@/utils/database";
import Appointment from "@/models/appointment";
import Count from "@/models/count";

export const PATCH = async(req,{params})=>{
    const { name, date } = await req.json();

    try{
        await connectToDB()
        
        const existingAppointment = await Appointment.findById(params.id)
        
        if(!existingAppointment){return new Response('Appointment not found',{status:404})}

        existingAppointment.name = name
        existingAppointment.date = date

        await existingAppointment.save()
        
      // Increment the API call count
      const count = await Count.findOneAndUpdate(
        {},
        { $inc: { count: 1 } },
        { new: true, upsert: true }
      );
      return new Response(
        JSON.stringify({ appointment: existingAppointment, count: count.count }),
        { status: 200 }
      );
    }catch(error){
        return new Response("Failed to update quip :-(",{status:500})
    }
}
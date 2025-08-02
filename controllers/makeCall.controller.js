import twilio from "twilio";
import { gatherInputFromUser } from "./gather.controller.js";

const client = () => {

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    return twilio(accountSid, authToken);

}

export async function createCall() {
    
    const call = await client().calls.create({
        from: process.env.TWILIO_PHONE,
        to: process.env.USER_PHONE,
        twiml: gatherInputFromUser("Hi, Welcome to Gemini"),
    });

    console.log(call.sid);
}

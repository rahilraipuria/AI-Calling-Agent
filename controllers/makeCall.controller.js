import twilio from "twilio";

export async function createCall() {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    
    const client = twilio(accountSid, authToken);
    const call = await client.calls.create({
        from: process.env.TWILIO_PHONE,
        to: process.env.USER_PHONE,
        twiml: "<Response><Say>Ahoy, World!</Say></Response>",
  });

  console.log(call.sid);
}

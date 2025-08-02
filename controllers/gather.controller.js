import twilio from 'twilio';

export function gatherInputFromUser(inputMessage) {
    const VoiceResponse = twilio.twiml.VoiceResponse;
    const response = new VoiceResponse();

    const gather = response.gather({
        input: 'speech',               
        timeout: 5,
        action: `${process.env.NGROK_URL}/handle-response`,
        method: 'POST'
    });

    gather.say(inputMessage);
    console.log("Gemini: ",inputMessage);

    response.say("No input received. Goodbye!");
    response.hangup();

    return response.toString();
}

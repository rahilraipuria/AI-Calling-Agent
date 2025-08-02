import { geminiCall } from './gemini.controller.js';
import { gatherInputFromUser } from './gather.controller.js';

export const responseFromTwilio = async (req, res) => {

    let userReply = req.body.SpeechResult;
    console.log("User: ",userReply);
    
    const responseFromGemini = await geminiCall(userReply);
    const twiml = gatherInputFromUser(responseFromGemini);
    res.type('text/xml');
    res.send(twiml);
};

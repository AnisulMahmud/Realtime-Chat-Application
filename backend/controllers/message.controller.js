import Message from '../models/message.model.js'
import User from '../models/user.model.js'
import Conversation from '../models/conversation.model.js'




export const sendMessage = async(req, res) =>{

    try {

        
		const { message } = req.body;
		const { id: receiverId } = req.params;
		const senderId = req.user._id;

		let conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		});

		if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderId, receiverId],
			});
		}

		const newMessage = new Message({
			senderId,
			receiverId,
			message,
		});

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }
        
        await conversation.save();
        await newMessage.save();

        res.status(200).json(newMessage);

    } catch(error){
        console.log("error in sendMessage in messageController", error.message)
        res.status(500).json({message: 'Internal Server Error'})

    }

    // console.log("message sent", req.params.id)

}
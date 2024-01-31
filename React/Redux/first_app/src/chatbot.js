import ChatBot from 'react-simple-chatbot'
import { Segment } from 'semantic-ui-react'

function Chat() {

    const steps = [
        {
            id:'Greet',
            message: 'Hello, How can I help you',
            trigger: 'Ask Name'
        },
        {
            id:'Ask Name',
            message: 'Please enter your name',
            trigger: 'waiting1'
        },
        {
            id:'waiting1',
            user: true,
            trigger:'name'
        },
        {
            id:'name',
            message:'Hi {previousvalue}, Please select the issues',
            trigger:'issues'
        },
        {
            id:'issues',
            options:[{value:'React',label:'React',trigger:'React'},
            {value:'Angular',label:'Angular',trigger:'Angular'}],
        },
        {
            id:'React',
            message:'Thanks for telling ur react issue',
            end:true
        },
        {
            id:'Angular',
            message:'Thanks for telling ur angular issue',
            end:true
        }
    ]

    return (
        <>
            <Segment >
                <ChatBot steps={steps}/>

            </Segment>
        </>
    )
}
export default Chat
function ChatMessage(props){
    return(
        <>
        <div className="d-flex">
            {
         props.user ? (
            <span>
                <span>{props.message}</span>

            </span>
         )  :
         <span>
            <span>{props.message}</span>

         </span>     
            }
        </div>
        </>
    )
}
export default ChatMessage
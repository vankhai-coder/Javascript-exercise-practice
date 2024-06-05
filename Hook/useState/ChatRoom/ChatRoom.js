


// import boostrap css : 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';


// mang cac doan chat : 
const chats = [
    {
        userId: 'userA',
        content: 'xin chao ',
        image: 'https://www.bing.com/th?id=OIP.pjREFG9s_ck7kAk-nbZKdQHaLH&w=127&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
    },
    {
        userId: 'userB',
        content: 'xin chao lai nha ! ',
        image: 'https://www.bing.com/th?id=OIP.dYIvtFW6wpC2AxZOomaQwgHaKb&w=138&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
    },
    {
        userId: 'userA',
        content: 'em co bo chua ? ',
        image: 'https://www.bing.com/th?id=OIP.pjREFG9s_ck7kAk-nbZKdQHaLH&w=127&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
    },
    {
        userId: 'userB',
        content: 'chua a',
        image: 'https://www.bing.com/th?id=OIP.dYIvtFW6wpC2AxZOomaQwgHaKb&w=138&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
    },
    {
        userId: 'userA',
        content: 'ke em ! ',
        image: 'https://www.bing.com/th?id=OIP.pjREFG9s_ck7kAk-nbZKdQHaLH&w=127&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
    },

]



// Component ChatRoom : 

function ChatRoom() {

    return (

        <Container>
            <h1>trongconterns </h1>

            {chats.map((chat) =>
                <Row className={chat.userId === 'userB' ? 'flex-row-reverse justify-content-start text-end ' : 'text-start'} >
                    <Col sm={1}   >
                        <div style={{ width: 50, height: 50, backgroundImage: `url('${chat.image}')` , backgroundSize : 'contain' }}  ></div>
                    </Col>
                    <Col sm={5} > {chat.content} </Col>
                </Row>
            )}
        </Container>

    )


}




// export ra Component ; 
export default ChatRoom; 
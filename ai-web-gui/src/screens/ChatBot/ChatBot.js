import React,{useRef,useState} from "react";
import { useSelector,connect,useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { HomeAction } from "./../../screenReducer";
import {/* withRouter ,*/useHistory,useLocation,useNavigate} from "react-router-dom";
import {Row,Col,Layout,Affix,Typography} from "antd";
const{Title,Text} = Typography;


const ChatBot = (props)=>{
    console.log("INside MAin");
    const dispatch = useDispatch();
    const location = useLocation();
    console.log("++ LOcation Inside ChatBot++", location) 
    
    React.useEffect(()=>{
        const{actions} = props;
        actions.saveHomeDetails()

    },[])

    let [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
    const handleSendMessage = async() => {
        if (inputValue.trim() === '') return;
        
        const inputData = inputValue.trim()
        const newMessage = {
          text: inputData,
          sender: 'user',
        };
        // let msg = messages
        // msg.push(newMessage)
        messages = [...messages,newMessage]
        setMessages(messages)

        setInputValue('');

        let response = await HomeAction.getChatbotData(newMessage)

        const botMessage = {
            text: response.response,
            sender: 'bot',
          };
        messages = [...messages,botMessage]
        setMessages(messages)

        // msg.push(botMessage)
        
        console.log("inputmessages",messages);
        
      };

    const newDesign = () => {
        return (
            <div>
                <nav class="navbar background">
                    <ul class="nav-list">
                        <div class="logo">
                            <div>
                            <Text style={{fontSize:"22px",fontWeight:"bold"}}>CodeCraftsmanRag14</Text>
                            </div>
                            {/* <img src=
    "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png" /> */}
                        </div>
                        <li><a href="/chatbot">Chat Bot</a></li>
					    <li><a href="#products">Buy Products</a></li>
                        {/* <li><a href="#jobs">Jobs</a></li>
                        <li><a href='#student'>Student</a></li> */}
                    </ul>
    
                    <div class="rightNav">
                        <input type="text" name="search" id="search" />
                        <button class="btn btn-sm">Search</button>
                    </div>
                </nav>
    
                {/* <section class="section">
                    <div class="box-main">
                        <div class="firstHalf">
                            <h1 class="text-big">
                                Talk to me
                            </h1>
                            <p class="text-small">
                                Hunting down a relevant job requires
                                proper techniques for showcasing your
                                potential to the employer. But with
                                the advent of COVID-19, it has become
                                a bit challenging and competitive to
                                reach out for your dream job. Many
                                individuals have lost their jobs
                                during these times, and on the other
                                hand, freshers are facing difficulties
                                while applying for a new job. But
                                there is no need for panic, you can
                                change your ways and streamline things
                                in a way that you get a proper result.
                            </p>
                        </div>
                    </div>
                </section>
                <section class="section">
                    <div class="box-main">
                        <div class="secondHalf">
                            <h1 class="text-big" id="program">
                                JavaScript Tutorial
                            </h1>
                            <p class="text-small">
                                JavaScript is the world most popular
                                lightweight, interpreted compiled
                                programming language. It is also
                                known as scripting language for
                                web pages. It is well-known for
                                the development of web page many
                                non-browser environments also use
                                it. JavaScript can be used for
                                Client-side developments as well
                                as Server-side developments.
                            </p>
                        </div>
                    </div>
                </section>
                <section class="section">
                    <div class="box-main">
                        <div class="secondHalf">
                            <h1 class="text-big" id="program">
                                Java Programming Language
                            </h1>
                            <p class="text-small">
                                When compared with C++, Java codes
                                are generally more maintainable
                                because Java does not allow many
                                things which may lead to
                                bad/inefficient programming if used
                                incorrectly. For example,
                                non-primitives are always references
                                in Java. So we cannot pass large
                                objects (like we can do in C++) to
                                functions, we always pass references
                                in Java. One more example, since there
                                are no pointers, bad memory access
                                is also not possible. When compared
                                with Python, Java kind of fits between
                                C++ and Python. The programs are written
                                in Java typically run faster than
                                corresponding Python programs and slower
                                than C++. Like C++, Java does static
                                type checking, but Python does not.
                            </p>
                        </div>
                    </div>
                </section>
                <section class="section">
                    <div class="box-main">
                        <div class="secondHalf">
                            <h1 class="text-big" id="program">
                                What is Machine Learning?
                            </h1>
                            <p class="text-small">
                                Machine Learning is the field of study
                                that gives computers the capability to
                                learn without being explicitly
                                programmed. ML is one of the most exciting
                                technologies that one would have ever
                                come across. As it is evident from the
                                name, it gives the computer that makes
                                it more similar to humans: The ability
                                to learn. Machine learning is actively
                                being used today, perhaps in many more
                                places than one would expect.
                            </p>
                        </div>
                    </div>
                </section> */}
                 {chatBot()}
                
                <footer className="footer">
                {/* <div className="chatbot-input" style={{position:"fixed",bottom:"100px",width:"100%",padding:"10px 0px 10px 0px"}}> */}
                <div className="text-footer">
                    <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    style={{width:"50%",height:"40px",borderRadius:"5px"}}
                    />
                    <button 
                    style={{width:"5%",borderRadius:"5px"}}
                    onClick={handleSendMessage}
                    >Send</button>
                    {/* </div> */}
                    {/* <p className="text-footer">
                            Copyright ©-All rights are reserved
                        </p> */}
                    </div>
                </footer>
            </div>
        )
    }

   const chatBot = ()=>{
        return(
            <Row>
                  {/* <Col span={24} style={{display:"flex",justifyContent:"center",alignItems:"center",background:"gray",padding:"0px 10px 0px 10px",height:"80px"}}>
            <Text style={{fontFamily:"-moz-initial", fontSize:"24px",fontWeight:"bold"}}>I am Bot</Text>
        </Col> */}
      <div className="chatbot-messages" style={{marginBottom:"100px"}}>
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`} style={{display:"flex",justifyContent:(message.sender != "bot")?"flex-end":"flex-start",padding:"10px 200px 10px 200px"}}>
            <Text>
                {(message.sender == "bot")?"bot":"me"}{":"} {message.text}
            </Text>
          </div>
        ))}
      </div>
     
      {/* <div className="chatbot-input" style={{position:"fixed",bottom:"100px",width:"100%",padding:"10px 0px 10px 0px"}}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div> */}
            </Row>
        )
    }
  
    // const handleSendMessage = async() => {
    //   if (inputValue.trim() === '') return;

    //   const inputData = inputValue.trim()
    //   const newMessage = {
    //     text: inputData,
    //     sender: 'user',
    //   };
    //   let msg = messages
    //   msg.push(newMessage)
    // //   setMessages(msg)
    // //   setMessages([...messages, newMessage]);
    //   setInputValue('');
    //   console.log("inputmessages",messages,msg);
    //    // Here you can add logic to send the user's message to the chatbot API and handle the response
    //   let response = await HomeAction.getChatbotData(newMessage)
    //   console.log("resposnse in screen = ", response);
    //   newMessage.text = response.response
    //   newMessage.sender = 'bot'
    // //   msg.push(newMessage)

    // //   messages.push(newMessage)
    // // await setMessages(msg)
    //  console.log("messages before update",messages,msg);
    // //   setMessages([...messages, newMessage]);
    // //   dispatch(HomeAction.onStoreChatbot([...messages, newMessage]));
    // };
console.log("messages --",messages);
return(
    <Row className="chatbot-screen">
        {newDesign()}
    </Row>
);
}


const mapStateToProps = state =>{
    return{
        homeState:state.homeState
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        actions: bindActionCreators(HomeAction,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(ChatBot))

export function withRouter( Child ) {
    return ( props ) => {
      const location = useLocation();
      const navigate = useNavigate();
      return <Child { ...props } navigate={ navigate } location={ location } />;
    }
  }
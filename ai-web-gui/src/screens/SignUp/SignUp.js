import React,{useRef} from "react";
import { useSelector,connect } from "react-redux";
import { bindActionCreators } from "redux";
import { HomeAction } from "./../../screenReducer";
import {/* withRouter ,*/useHistory,useLocation,useNavigate} from "react-router-dom";
import {Layout,Affix,Typography} from "antd";
const{Title,Text} = Typography;


const SignUp = (props)=>{
    console.log("INside MAin");
    const location = useLocation();
    console.log("++ LOcation Inside SignUp++", location) 
    
    React.useEffect(()=>{
        const{actions} = props;
        actions.saveHomeDetails()

    },[])
return(
    <div style={{backgroundColor:"gray",height:"100px",
    alignItems:"center",flex:"display",justifyContent:"center"}}>
        <div style={{height:"100px",
    alignItems:"center",flex:"display",justifyContent:"center"}}>
            <Text> SignUp    </Text>
        </div>
    </div>
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
)(withRouter(SignUp))

export function withRouter( Child ) {
    return ( props ) => {
      const location = useLocation();
      const navigate = useNavigate();
      return <Child { ...props } navigate={ navigate } location={ location } />;
    }
  }
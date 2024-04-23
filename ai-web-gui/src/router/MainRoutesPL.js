import React,{lazy} from "react";
import{
    Route,
    Navigate,//react-router-dom v6 has Navigate replace props - for Redirect use <v6 ,
    BrowserRouter,
    Routes, // instead of "Switch" in v6,
    useLocation,
    useNavigate //history
}from "react-router-dom";

import Home from '../screens/Home/Home';
import SignUp from "../screens/SignUp/SignUp";
import ChatBot from "../screens/ChatBot/ChatBot";
import NotFound from "../screens/Home/Home";



const routesPl = [
    {
        path:"/",
        component: Home,
        // component: lazy(()=>import('../screens/Home/Home')),
        exact:true
    },
    {
        path:"signup",
        component: SignUp,
        // component: lazy(()=>import('../screens/SignUp/SignUp')),
        exact:true
    },
    {
        path:"chatbot",
        component: ChatBot,
        // component: lazy(()=>import('../screens/SignUp/SignUp')),
        exact:true
    },
    {
        path:"/",
        component: Home,
        // component: lazy(()=>import('../screens/SignUp/SignUp')),
        exact:true
    }
];

export default ()=>{
    return(
    <BrowserRouter>
        <Routes>
            {
                routesPl.map((route,index)=>{
                    console.log("++ INside MainRoutePL.js ++", route,index);
                    return(
                        // <Route path={route.path} key ={index} exact={route.exact}>
                        //     <route.component/>
                        // </Route>

                        <Route path={route.path} element={<route.component/>} key ={index} />
                    )
                    
                })
            }
        </Routes>
    </BrowserRouter>
    )
}
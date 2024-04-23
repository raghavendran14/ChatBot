import React,{lazy,Suspense} from "react";
import{
    Route,
    Navigate,//react-router-dom v6 has Navigate replace props - for Redirect use <v6 ,
    BrowserRouter,
    Routes, // instead of "Switch" in v6,
    useLocation,
    useNavigate //history
}from "react-router-dom";
import Loader from "../components/Loader/loader";

// import MainPreLogin from "../screens/Main/Main";
const MainPreLogin = lazy(()=> import('../screens/Main/Main'))
const MainRoutesPl = lazy(()=> import('./MainRoutesPL'))


/* For Pre-login */
let PublicRoute = ({children,...rest})=>{
    let location = useLocation();
console.log("Inside PublicRoute ++",children, rest )
return <Route path="/" element={<MainPreLogin />} />
    // return <Route path = {...rest}>
    //         {children}
    //        </Route>

}
/* End */

const RoutesWeb = ()=>{
// return(
//     <BrowserRouter>
//         <Routes>
//         <Route path="/" element={<MainPreLogin />} />
//             {/* <PublicRoute /> */}
//                 {/* <MainPreLogin/>
//             </PublicRoute> */}
//         </Routes>
//     </BrowserRouter>
//     )
// }

// const location = useLocation();
// const navigate = useNavigate();


return(
    <div>
        <Suspense fallback={<Loader/>}>
            <MainRoutesPl/>
        </Suspense>
        
    </div>
)
}

export default RoutesWeb;

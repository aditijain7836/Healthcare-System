import React, { act, useState, useEffect } from "react"
import './LoginSignup.css'
import PersonIcon from '@mui/icons-material/Person';
import PasswordIcon from '@mui/icons-material/Password';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Navbar from "./Navbar";
import { useUser } from "../hooks/UserContext";

const AdminLoginSignup = () => {

    const {user} = useUser();
    const [action, setAction] = useState("Admin Login");

    useEffect(()=>{
        if(user === true){
            setAction("Admin Login");
        }
        else{
            setAction("Patient Login");
        }
    }, [user]);

    return(
        <>
        <Navbar />
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            
            <div className="inputs">
                {action === "Admin Login" || action === "Patient Login" ? <div></div> : 
                    <div className="input">
                        <span className="icons"><PersonIcon/></span>
                        <input type="text" placeholder="Name"/>
                    </div>
                }
                <div className="input">
                    <span className="icons"><EmailIcon/></span>
                    <input type="email" placeholder="Email Id"/>
                </div>

                {action === "Patient Sign Up" ? 
                <div className="input">
                    <span className="icons"><CallIcon/></span>
                    <input type="text" placeholder="Mobile no."/>
                </div>
                : null}

                {action === "Patient Sign Up" ? 
                <div className="input">
                    <span className="icons"><PersonOutlineIcon/></span>
                    <input type="text" placeholder="Age"/>
                </div>
                : null}

                <div className="input">
                    <span className="icons"><PasswordIcon/></span>
                    <input type="password" placeholder="Password"/>
                </div>
            </div>

            {action === "Admin Sign Up" || action === "Patient Sign Up" ? <div></div> :
                <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
            }
            
            <div className="submit-container">
                <div className={action === "Admin Login" || action === "Patient Login" ? "submit gray" : "submit"} onClick={() => setAction(user === true ? "Admin Sign Up" : "Patient Sign Up")}>Sign Up</div>
                <div className={action === "Admin Sign Up" || action === "Patient Sign Up" ? "submit gray" : "submit"} onClick={() => setAction(user === true ? "Admin Login" : "Patient Login")}>Login</div>
            </div>
        </div>
    
        </>
    );
}

export default AdminLoginSignup;
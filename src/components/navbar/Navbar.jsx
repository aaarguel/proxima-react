import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Proxima_Logo.png'
import { RiMenu3Line, RiCloseLine, RiArrowDownSLine } from 'react-icons/ri'
import { UserContext, proxima } from '../../containers/App'



const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
      
    const user = useContext(UserContext);

    const sendData = ()=>{
        proxima.postDataUser(user);
    }

    useEffect(()=>{
        setTimeout(()=>{
            if(toggleMenu){
                setToggleMenu(false);
            }
        },5000);
    },[ toggleMenu ]);

    useEffect(() => {        
        window.onscroll = function() {narvbarScroll()};
        let navbar = document.getElementById("navbar");
        let header = document.getElementById("header");
        let home = document.getElementById("home");

        let sticky = header.offsetTop;
        let hide_show = home.offsetTop;            

        let before= 0;
        let down = true;
        const narvbarScroll = () =>{
            let now = window.pageYOffset;         
            down = now>before? true: false;                                    
            if (now  < sticky && now  > hide_show ) {
                if(down){
                    navbar.classList.add("hide_navbar");
                }else{
                    navbar.classList.remove("hide_navbar");
                }
            } 
            else if(window.pageYOffset > sticky){
                navbar.classList.add("sticky_navbar");
            }
            else {                
                navbar.classList.remove("sticky_navbar");
            }
            before=now;
        }
           
    },[]);

    return (
        <div className='proxima__navbar' id="navbar">
                <div className='proxima__navbar-links'>
                    <div className="proxima__navbar-links_logo">
                        <img src={logo} alt="logo"></img>
                        <div>                                                    
                            <p><a href="#header">PROXIMA</a></p>                            
                        </div>                    
                    </div>
                    <div className='proxima__navbar-links_container'>                                        
                        <p><a className="nav_link" href="/">About Us</a></p>
                        <p><a className="nav_link" href="/">Nearshoring <RiArrowDownSLine size={27} alignmentBaseline='central'/> </a></p>    
                        <p><a className="nav_link" href="/">Insurtech <RiArrowDownSLine size={27} alignmentBaseline='central'/> </a></p>    
                        <p><a className="nav_link" href="/">Careers</a></p>                                                                                                                     
                    </div>
                </div>

                <div className="proxima__navbar-sign">                
                    <button className='buttonNavbar' 
                        onClick={(e) => {e.preventDefault();
                            sendData();                                            
                        }}
                    type="button">Contact Us</button>
                </div>

                <div className="proxima__navbar-menu">
                    {toggleMenu
                        ? <RiCloseLine  size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line  size={27} onClick={() => setToggleMenu(true)} />}
                    {toggleMenu && (
                    <div className="proxima__navbar-menu_container scale-up-center">
                    <div className="proxima__navbar-menu_container-links">                    
                        <p><a className="nav_link" href="/">About Us</a></p>
                        <p><a className="nav_link" href="/">Nearshoring</a></p>    
                        <p><a className="nav_link" href="/">Insurtech</a></p>    
                        <p><a className="nav_link" href="/">Careers</a></p>
                    </div>
                    <div className="proxima__navbar-menu_container-links-sign">
                        <button type="button" onClick={(e) => {e.preventDefault();
                            sendData();
                            }}>Contact Us</button>
                    </div>
                </div>
                    )}
                </div>
        </div>
    )
}

export default Navbar
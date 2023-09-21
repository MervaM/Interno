import  React  from  'react' ;
import {slide as  Menu } from  'react-burger-menu' ;

export  default props => {
   return (
     < Menu > 
      < a  className = "menu-item"  href = "/home" >
        Home
      </ a > 
      < a  className = "menu-item"  href = "/about" >
        About
      </ a > 
      < a  className = "menu-item"  href = "/services" >
        Services
      </ a > 
      < a  className = "menu-item"  href = "/project" >
        Project
      </ a > 
      < a  className = "menu-item"  href = "/comtact" >
        Contact
      </ a > 
    </ Menu >
  );
};
import React,{useState} from 'react';
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import {useSelector} from 'react-redux';
import {selectCars} from '../features/car/carSlice' 

function Header() {

    const[showBurger,setShowBurger] = useState(false)

    const cars = useSelector(selectCars)

    console.log(showBurger)

  return (
    <Container>
        
       <Logo src="/images/logo.svg" alt='logo'/>
       <Menu>
           {cars && cars.map((cars,index)=>{
               return( <li><a key={index} href='/#'>{cars}</a></li>)

           })}
    
       </Menu>
       <RightMenu>

        <a href='/#'>Shop</a>
        <a href='/#'>Account</a>
        <a href='/#' onClick={()=>setShowBurger(true)}>Menu</a>

       </RightMenu> 
       <BurgerMenu show={showBurger}>
           <CustomClose onClick={()=>setShowBurger(false)}>
               <a href='/#'>
                    <CloseIcon />
               </a>
               
           </CustomClose>

           {cars && cars.map((cars,index)=>{
               return( <li><a key={index} href='/#'>{cars}</a></li>)

           })}
           <li><a href='/#'>Exiting Inventory</a></li>
           <li><a href='/#'>Used Inventory</a></li>
           <li><a href='/#'>Trade In</a></li>
           <li><a href='/#'>Test drive</a></li>
           <li><a href='/#'>Insurance</a></li>
           <li><a href='/#'>Cybertruck</a></li>
           <li><a href='/#'>Roadster</a></li>

       </BurgerMenu>
      
    </Container>
  )
}

export default Header

const Container = styled.div`

    position:fixed;
    min-height:60px;
    top: 0;
    left:0;
    right:0;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px;
    z-index:1;

`

const Logo = styled.img`

      cursor: pointer;

`

const Menu = styled.div`


    display:flex;
    align-items:center;
    justify-content: center;
    flex-wrap:nowrap;
    flex:1;


   a{

    font-weight:500;
    font-size:16px;
    padding: 5px 15px;
    transition: all 10  0ms cubic-bezier(0.75, 1, 0.40, 1);
    border-radius:10px;
    cursor: pointer;
    color:#171a20;

   }

   a:hover{

    background-color:rgba(0,0,0,0.1);
    
    
   }

   @media (max-width:768px) {
        display:none;

   }

`

const RightMenu = styled.div`

        a{

        font-weight:500;
        font-size:16px;
        padding: 5px 15px;
        transition: all 10  0ms cubic-bezier(0.75, 1, 0.40, 1);
        border-radius:10px;
        cursor: pointer;
        color:#171a20;

        }
        a:hover{

            background-color:rgba(0,0,0,0.1);


            }

`

const BurgerMenu = styled.div`

    position:fixed;
    top: 0;
    right:0;
    bottom:0;
    z-index:10;
    background-color:white;
    width:300px;
    padding:30px;
    box-shadow: -4px -3px 45px 2px rgba(0,0,0,0.3);
    transform:${props=>props.show ? `translateX(0)`:`translateX(100%)`};
    transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);

    a{

        font-size:15px;
        font-weight:600;
        color:#171a20;
       
    }

    li{

        padding:10px;
        margin-bottom :5px;
        cursor: pointer;
        border-radius:15px;
        
    }

    li:hover{
        background-color:#e9ecef;
        transition: 0.3s  cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    
`

const CustomClose = styled.div`
    display:flex;
    justify-content:flex-end;
    cursor: pointer;

    a{

        width:40px;
        height:40px;
        display:flex;
        align-items: center;
        justify-content: center;
        border-radius:50%;
        transition:0.3s ease-in;
        font-weight:400;
        
    }

    a:hover{
        background-color:#e9ecef;

          
       

    }


`
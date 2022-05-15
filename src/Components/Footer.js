import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import {useSelector} from "react-redux";
import {selectFooter} from "../features/footer/footer"

function Footer() {

    const Footer = useSelector(selectFooter)
  return (
    <Container>
        <Fade bottom>

            {Footer && Footer.map((item,index)=>{

                return(<li><a href='/#'>{item}</a></li>)
            })}
            {/* <li><a href='/#'>Tesla &copy; 2022</a></li>
            <li><a href='/#'>Privacy & Legal</a></li>
            <li><a href='/#'>Vehicle Recall</a></li>
            <li><a href='/#'>Contact</a></li>
            <li><a href='/#'>Careers</a></li>
            <li><a href='/#'>News</a></li>
            <li><a href='/#'>Engage</a></li>
            <li><a href='/#'>Location</a></li> */}
      

        </Fade>
       
    </Container>
  )
}

export default Footer

const Container = styled.div`

    display:flex;
    align-items:center;
    justify-content: center;
    margin-bottom:25px;

    a{
        text-decoration:none;
        color:#171a20;
        font-size:12px;
        opacity:0.80;
    }

    li{

        font-weight:600;
        padding: 0 10px;

    }


`
import React from 'react';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section({title, description, LeftButtonText, RightButtonText, backgroundImg, SpanText}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
            <ImageText>
                <h1>{title}</h1>
                <p>{description} <span>{SpanText}</span></p>
            </ImageText>

        </Fade>
        
        <ButtonBox>

            <Fade bottom>
                <Buttons>
                    <LeftTextButton>
                    {LeftButtonText}
                    </LeftTextButton>

                    {RightButtonText && 
                        <RightTextButton>
                            {RightButtonText}
                        </RightTextButton>
                    }
                    
                </Buttons>


            </Fade>
            

            <DownArrow src="/images/down-arrow.svg"/>
        </ButtonBox>
       
      
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`

    width:100vw;
    height:100vh;
    background-image: url("/images/model-s.jpg");
    background-image:${props=>`url("/images/${props.bgImage}")`};
    background-size:cover;
    background-position:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
   

`

const ImageText = styled.div`

    display:flex;
    flex-direction: column;
    align-items:center;
    padding-top:70px;
    color:#171A20;

    h1{
        font-size:40px;
        font-weight:600;
        margin-bottom:10px;
    }

    p{
        font-weight:500;
        font-size:14px;
        
        
    }
    span{

        text-decoration:underline;
        cursor: pointer;
        
    }
`

const Buttons = styled.div`
    display:flex;
    margin-bottom:30px;
    display:flex;
    justify-content:space-between;
    gap:30px;

    @media (max-width:768px){

        display:flex;
        flex-direction:column;

    }

`

const LeftTextButton = styled.div`
    
    background-color:#3D4045;
    opacity:0.95;
    color:white;
    padding:13px;
    width:300px;
    text-align:center;
    text-transform:uppercase;
    font-size:13px;
    font-weight:600;
    border-radius:100px;
    cursor: pointer;


`

const RightTextButton = styled(LeftTextButton)`
    background-color:white;
    color:black;

`

const ButtonBox = styled.div`
        display:flex;
        flex-direction:column;
        align-items:center;

`

const DownArrow = styled.img`

   width:45px;
   height:45px;
   margin-bottom:15px;
   animation: animateDown 0.8s infinite;
  
`
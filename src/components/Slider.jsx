import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import { styled } from 'styled-components';
import { sliderItems } from "../data";
import { useState } from 'react';

const Container = styled.div`
display:flex;
overflow:hidden;
width:100%;
height:100vh;
position:relative;
`;
const Arrow = styled.div`
border-radius :50%;
background-color:#fff7f7;
width:50px;
height:50px; 
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
left:${props => props.direction === "left" && "10px"};
right:${props => props.direction === "right" && '10px'};
margin:auto;
opacity:0.5;
cursor:pointer;
z-index:2`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translatex(${props => props.slideindex * -100}vw);
  transition: all 1.5s ease;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color:#${props => props.bg}
  
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
  object-fit:cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export default function Slider() {

    const [sliderIndex, setSliderIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
        } else {
            setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => { handleClick("left") }}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideindex={sliderIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} /></ImgContainer>
                        <InfoContainer><Title>{item.title}</Title><Desc>{item.desc}</Desc><Button>SHOW NOW</Button></InfoContainer>
                    </Slide>
                ))}

            </Wrapper>
            <Arrow direction="right" onClick={() => { handleClick("right") }}>
                <ArrowRightOutlined />

            </Arrow>
        </Container>
    )
}

import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
height: 60px;
`
const Wrapper = styled.div`
margin:10px 20px;
display:flex;
align-items:center;
justify-content: space-between;
`
const Left = styled.div`
flex:1;
display:flex;
align-items:center;

`
const Language = styled.span`
font-size :14px;
cursor:pointer;
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left:25px;
padding:5px;
`
const Input = styled.input`
border:none;
`

const Middle = styled.div`
flex:1;
text-align:center;
`
const Logo = styled.h1`
font-weight:bold;
`

const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`
const MenuItem = styled.div`
cursor:pointer;
font-size:14px;
font-weight:bold;
margin-left:25px`

export default function NavBar() {


    return (

        <Container><Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer><Input /><Search style={{ color: "grey", fontSize: 16 }} /></SearchContainer>

            </Left>
            <Middle><Logo>KIRA</Logo></Middle>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>login</MenuItem>
                <MenuItem><Badge color='primary' badgeContent={4}>
                    <ShoppingCartOutlined /></Badge></MenuItem>
            </Right>
        </Wrapper></Container>
    )
}

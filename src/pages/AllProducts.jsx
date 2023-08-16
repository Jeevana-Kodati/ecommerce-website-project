import React from 'react'
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { styled } from 'styled-components';

const Container = styled.div``;


const Title = styled.h1`
margin:20px;`;

const FilterContainer = styled.div`
display:flex;
justify-content:space-between;

`

const Filter = styled.div`
margin:20px;
`;

const FilterText = styled.span`
font-size: 20px;
  font-weight: 600;
  margin-right: 20px;`

const Select = styled.select`
margin-right: 20px;
padding: 10px;`

const Option = styled.option`
`;
export default function AllProducts() {
    return (
        <Container>
            <Announcement />
            <NavBar />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter >
                    <FilterText>Filter Products</FilterText>
                    <Select>
                        <Option disabled selected>color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter >
                    <FilterText>sort Products</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price(Asec)</Option>
                        <Option>price(Desc)</Option>

                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

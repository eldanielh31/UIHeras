import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import { Badge } from '@material-ui/core'

//NAVBAR
const Container = styled.div`
  height: 60px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

//NAVBAR IZQUIERDA

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.div`
  border: none;
`

//NAVBAR CENTRO

const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
`

//NAVBAR DERECHA

const Rigth = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;   
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px; 
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
            EN
          </Language>
          <SearchContainer>
            <Input></Input>
            <Search style={{color:"gray", frontSize: 16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>HERAS.</Logo>
        </Center>
        <Rigth>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SING IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined/>
            </Badge>
          </MenuItem>
        </Rigth>
      </Wrapper>
    </Container>
  )
}

export default Navbar
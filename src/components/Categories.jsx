import styled from 'styled-components';
import {categories} from "../data";
import CategoryItem from './CategoryItem';

const Conteiner = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

const Categories = () => {
  return (
    <Conteiner>
        {categories.map((item)=>(
            <CategoryItem item={item} key = {item.id}/>
        ))}
    </Conteiner>
  )
}

export default Categories
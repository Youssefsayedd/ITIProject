import React, { useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useLocation, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductsList from '../components/ProductsList';
import FiltersContainer from '../UI/Containers/FiltersContainer';
import { Filter, FilterTitle } from '../UI/Filter';
import Title from '../UI/Title';

const Container = styled.div``;
const Products = () => {
  const location = useLocation()
  const history = useHistory()
  let cat;
  if (location?.pathname?.split('/')?.length > 2)
    cat = location?.pathname?.split('/')[2]
  const [category, setCategory] = useState(cat || 'All Products')
  const [sort, setSort] = useState('newest')
  const changeCategoryHandler = (e) => {
    setCategory(prev => e.target.value)
    history.push(`/products/${e.target.value}`)
  }
  const changeSortHandler = (e) => {
    setSort(prev => e.target.value)
  }
  const formatTitle = (text) => {
    let newForm = text;
    newForm = newForm.split("");
    newForm[0] = newForm[0].toUpperCase();
    newForm = newForm.join("");
    return newForm;
  }
  return (
    <Container>
      <Navbar />
      <Title style={{ margin: '1.5rem' }}>{formatTitle(category)}</Title>
      <FiltersContainer>
        <Filter>
          <FilterTitle>Filter Products:</FilterTitle>
          <FormControl style={{ width: 170 }}>
            <InputLabel id="category">Choose Category</InputLabel>
            <Select
              style={{ height: 50 }}
              labelId="category"
              id="category"
              value={category}
              label="Choose Category"
              onChange={changeCategoryHandler}
            >
              <MenuItem value="All Products">All Products</MenuItem>
              <MenuItem value="phones">Phones</MenuItem>
              <MenuItem value="pcs">pcs</MenuItem>
              <MenuItem value="gadgets">Gadgets</MenuItem>
              
            </Select>
          </FormControl>
        </Filter>
       
      </FiltersContainer>
      <ProductsList cat={category} sort={sort} />
      <Footer />
    </Container>
  )
}

export default Products
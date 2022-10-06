import {
  AppBar,
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag } from '@mui/icons-material';

import { useAppDispatch, useAppSelector } from '../App/hooks';
import { fetchProducts, productsList } from '../features/ProductListSlice';
import { ProductsSortType } from '../types/ProductsSortType';
import { Loader } from './Loader';
import ProductItem from './ProductItem';

export const ProductsList: React.FC = () => {
  const { products, loaded } = useAppSelector(productsList);
  const [sortType, setSortType] = useState(ProductsSortType.ByName);

  const theme = createTheme();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      {/* <section>
        <div>
          <button
            type="button"

          >
            Add new product
          </button>

          <select
            value={sortType}
            onChange={(event) => {
              setSortType(+event.target.value);
            }}
          >
            <option value={ProductsSortType.ByName}>Name</option>
            <option value={ProductsSortType.ByCount}>Count</option>
          </select>
        </div>

        {loaded
          ? (
            <table style={{ width: '100vw' }}>
              <thead>
                <tr>
                  <td>Image</td>
                  <td>Name</td>
                  <td>Count</td>
                  <td>Size</td>
                  <td>Weight</td>
                  <td>Comments</td>
                  <td>Actions</td>
                </tr>
              </thead>

              <tbody>
                {products.map(product => (
                  <ProductItem
                    key={product.id}
                    product={product}
                  />
                ))}
              </tbody>
            </table>
          )
          : <Loader />}
      </section> */}

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <ShoppingBag sx={{ mr: 2 }} />
            <Typography variant="h6" color="inherit" noWrap>
              Products List
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Products catalog
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                You can add a new product or change sorting list
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button
                  variant="contained"
                  onClick={() => navigate('/product/edit')}
                >
                  Add new product
                </Button>
                <FormControl>
                  <InputLabel id="sort-by-select-label">SortBy</InputLabel>
                  <Select
                    labelId="sort-by-select-label"
                    id="sort-by-select-label"
                    value={sortType}
                    label="Sort By"
                    onChange={(event) => {
                      setSortType(+event.target.value);
                    }}
                  >
                    <MenuItem value={ProductsSortType.ByName}>Name</MenuItem>
                    <MenuItem value={ProductsSortType.ByCount}>Count</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Container>
          </Box>
          <Container sx={{ py: 8 }} maxWidth="md">
            {loaded
              ? (
                <Grid container spacing={4}>
                  {products.map((product) => (
                    <ProductItem product={product} key={product.id} />
                  ))}
                </Grid>
              ) : (
                <Loader />
              )}
          </Container>
        </main>
        {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" to="https://github.com/illnino380">
              Your Website
            </Link>
            {' '}
            {new Date().getFullYear()}
            .
          </Typography>
        </Box>
      </ThemeProvider>
    </>
  );
};

import styled from '@emotion/styled';
import {
  Button, Card, CardActions, CardContent, CardMedia, Collapse, Grid, Typography,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import React, { useState } from 'react';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ModalProduct from './ModalProduct';
import { Product } from '../types/Product';
import { yellow } from '@mui/material/colors';

interface Props {
  product: Product;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;

  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProductItem: React.FC<Props> = ({ product }) => {
  const [expanded, setExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {/* <tr>
        <td>
          <img
            src={imageUrl}
            alt={name}
            style={{ height: '100px' }}
          />
        </td>
        <td>{name}</td>
        <td>{count}</td>
        <td>{`${size.height} x ${size.width}`}</td>
        <td>{weight}</td>
        <td>
          {comments?.map(comment => (
            comment?.description
          ))}
        </td>
        <td>
          <Link to={`/product/edit/${id}`}>
            <button type="button">Edit</button>
          </Link>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
          >
            Delete
          </button>
        </td>
      </tr> */}
      {/* <tr>
        <td>
          {isModalOpen && (
            <ModalProduct
              onModalClose={setIsModalOpen}
              id={product.id}
            />
          )}
        </td>
      </tr> */}

      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'yellow',
          }}
        >
          <CardMedia
            component="img"
            sx={{
              height: '200px',
              objectFit: 'contain',
              pt: 2,
            }}
            image={product.image}
            alt={product.title}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {product.title}
            </Typography>
            <Typography>
              Price:
              {`${product.price} UAH`}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Edit</Button>
            <Button size="small">Delete</Button>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                Description:
              </Typography>
              <Typography paragraph>
                {product.description}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </>
  );
};

export default ProductItem;

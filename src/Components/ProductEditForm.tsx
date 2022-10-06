/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FormEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../App/hooks';
import { Comment } from '../types/Comment';

const initialProduct = {
  imageUrl: '',
  name: '',
  count: 0,
  size: {
    width: 0,
    height: 0,
  },
  weight: '',
  comments: [] as Comment[],
};

const ProductEditForm: React.FC = () => {
  const { productId = 0 } = useParams();
  const navigate = useNavigate();

  const currentProduct = useAppSelector(state => (
    state.productsListState.products.find(product => (
      `${product.id}` === productId
    )) || initialProduct
  ));

  const [product, setProduct] = useState(currentProduct);

  const hasAllRequiredData = product.name
    && product.imageUrl
    && product.count
    && product.size.height
    && product.size.width
    && product.weight;

  const handleSumbit = (event: FormEvent) => {
    event.preventDefault();
  };

  const handleProductDataChange = (field: string, value: string | number) => {
    setProduct(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleProductSizeChange = (field: string, value: number) => {
    setProduct(prev => ({
      ...prev,
      size: {
        ...prev.size,
        [field]: value,
      },
    }));
  };

  return (
    <form
      onSubmit={handleSumbit}
    >
      <label>
        image URL:
        <input
          type="text"
          placeholder="Image URL"
          value={product.imageUrl}
          onChange={(event) => (
            handleProductDataChange('imageUrl', event.target.value)
          )}
          required
        />
      </label>

      <label>
        Name:
        <input
          type="text"
          placeholder="Name"
          value={product.name}
          onChange={(event) => (
            handleProductDataChange('name', event.target.value)
          )}
          required
        />
      </label>

      <label>
        Count:
        <input
          type="number"
          placeholder="Enter a number"
          value={product.count || ''}
          onChange={(event) => (
            handleProductDataChange('count', Number(event.target.value))
          )}
          required
          min="1"
        />
      </label>

      <label>
        Width:
        <input
          type="number"
          placeholder="Enter a number"
          value={product.size.width || ''}
          onChange={(event) => (
            handleProductSizeChange('width', Number(event.target.value))
          )}
          required
          min="0"
        />
      </label>

      <label>
        Height:
        <input
          type="number"
          placeholder="Enter a number"
          value={product.size.height || ''}
          onChange={(event) => (
            handleProductSizeChange('height', Number(event.target.value))
          )}
          required
          min="0"
        />
      </label>

      <label>
        Weight:
        <input
          type="text"
          placeholder="Weight"
          value={product.weight}
          onChange={(event) => (
            handleProductDataChange('weight', event.target.value)
          )}
          required
        />
      </label>

      <button
        type="submit"
        disabled={!hasAllRequiredData}
      >
        {productId ? 'Edit product' : 'Add product'}
      </button>

      <button
        type="button"
        onClick={() => navigate('/')}
      >
        Cancel
      </button>
    </form>
  );
};

export default ProductEditForm;

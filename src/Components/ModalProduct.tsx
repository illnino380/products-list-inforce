import React from 'react';

interface Props {
  onModalClose: (value: boolean) => void;
  id: number | string;
}

const ModalProduct: React.FC<Props> = ({ onModalClose, id }) => {
  const handleSubmitDelete = () => {
    onModalClose(false);
  };

  return (
    <div>
      <h1>Do you want to delete this product?</h1>
      <button
        type="button"
        onClick={() => onModalClose(false)}
      >
        Cancel
      </button>

      <button
        type="button"
        onClick={handleSubmitDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default ModalProduct;

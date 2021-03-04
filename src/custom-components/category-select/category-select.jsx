import React from 'react';
import { Select } from '@components';

const options = [
  {
    name: "Distribuidor",
    value: "Distribuidor",
  },
  {
    name: "Fornecedor",
    value: "Fornecedor",
  },
  {
    name: "Produtor",
    value: "Produtor",
  },
]

const CategorySelect = ({ ...props }) => (
  <Select
    label="Classificação"
    placeholder="Escolha sua Categoria"
    required
    options={options}
    {...props}
  />
);

export default CategorySelect;

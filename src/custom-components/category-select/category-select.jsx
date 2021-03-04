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

const CategorySelect = () => (
  <Select
    label="Classificação"
    placeholder="Escolha sua Categoria"
    required
    options={options}
  />
);

export default CategorySelect;

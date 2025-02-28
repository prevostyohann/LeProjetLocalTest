import React from 'react';
import axios from 'axios';
import MyForm from './MyForm';

const MyAddProduct = () => {
  const fields = [
    { name: 'name', label: 'Nom Du produit :  ', type: 'text', placeholder: 'Entrer le nom du produit', required: false },
    { name: 'image', label: 'Image : ', type: 'file', required: false },
    { name: 'description', label: 'Description : ', type: 'text', placeholder: 'Entrer la description du produit', required: false },
    { name: 'quantity', label: 'Quantité : ', type: 'text', placeholder: 'Entrer la quantité', required: false },
    { name: 'price', label: 'Prix : ', type: 'text', placeholder: 'Entrer le prix du produit', required: false },
    { name: 'size', label: 'Taille : ', type: 'select', placeholder: 'Entrer la taille', required: false },
    { name: 'discount', label: 'Promotion : ', type: 'select', placeholder: 'Entrer la promotion', required: false },
    { name: 'reference', label: 'Référence : ', type: 'text', placeholder: 'Entrer la reference', required: false },
  ];

  const handleSubmit = async (formData) => {
    const formDataObj = new FormData();
    for (const key in formData) {
      formDataObj.append(key, formData[key]);
    }

    try {
      const response = await axios.post('http://localhost:8000/api/products', formDataObj, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Produit ajouté avec succès:', response.data);
    } catch (error) {
      console.error('Erreur lors de l\'ajout du produit', error);
    }
  };

  return <MyForm fields={fields} onSubmit={handleSubmit} />;
};

export default MyAddProduct;
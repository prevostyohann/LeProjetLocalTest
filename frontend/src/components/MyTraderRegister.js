import React, { useState } from 'react';
import MyForm from './MyForm';

const MyTraderRegister = () => {
    const fields = [
      { name: 'market_name', label: 'Nom de la Boutique :  ', type: 'text', placeholder: 'Entrer le nom de votre boutique' },
      { name: 'address', label: 'Addresse Postale : ', type: 'text', placeholder: 'Entrer votre addresse postale' },
      { name: 'city', label: 'Ville : ', type: 'text', placeholder: 'Entrer votre ville' },
      { name: 'phone', label: 'Téléphone : ', type: 'phone', placeholder: 'Entrer votre N° tel' },
      { name: 'email', label: 'Email : ', type: 'email', placeholder: 'Entrer votre email' },
      { name: 'siret', label: 'SIRET : ', type: 'text', placeholder: 'Entrer votre n° de SIRET' },
      { name: 'category', label: 'Catégorie : ', type: 'select', placeholder: 'Entrer votre catégorie' },
      { name: 'sub_category', label: 'Sous Catégorie : ', type: 'select', placeholder: 'Entrer votre sous-catégorie' },

      { name: 'password', label: 'Password', type: 'password', placeholder: 'Ecrire votre mot de passe' },
      { name: 'confirm-password', label: 'Confirm Password', type: 'password', placeholder: 'Retapez votre mot de passe' },
      { name: 'image', label: 'Photo de Profile : ', type: 'file' },
    ];

    const handleSubmit = (formData) => {
        console.log('Form Data:', formData); 
       }; 

       return (
          <MyForm fields={fields} onSubmit={handleSubmit} />
      );
    };
    
    export default MyTraderRegister;
    
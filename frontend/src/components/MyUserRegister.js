import React, { useState } from 'react';
import MyForm from './MyForm';

const MyUserRegister = () => {
    const fields = [
      { name: 'username', label: 'Nom D\'Utilisateur :  ', type: 'text', placeholder: 'Entrer votre nom d\'utilisateur' },
      { name: 'lastname', label: 'Nom : ', type: 'text', placeholder: 'Entrer votre nom' },
      { name: 'firstname', label: 'Prénom : ', type: 'text', placeholder: 'Entrer votre prénom' },
      { name: 'email', label: 'Email : ', type: 'email', placeholder: 'Entrer votre email' },
      { name: 'address', label: 'Addresse Postale : ', type: 'text', placeholder: 'Entrer votre addresse postale' },
      { name: 'city', label: 'Ville : ', type: 'text', placeholder: 'Entrer votre ville' },
      { name: 'phone', label: 'Téléphone : ', type: 'phone', placeholder: 'Entrer votre N° tel' },
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
    
    export default MyUserRegister;
    
import React from 'react';
import MyForm from './MyForm';

function Contact(){
    const fields = [ 
        { name: 'lastname', label: 'Nom : ', type: 'text', placeholder: 'Entrer votre nom' },
        { name: 'firstname', label: 'Prénom : ', type: 'text', placeholder: 'Entrer votre prénom' },
        { name: 'email', label: 'Email : ', type: 'email', placeholder: 'Entrer votre email' },
        { name: 'message', label: 'Message : ', type: 'textarea', placeholder: 'Ecrire votre message' }, ]; 
        
        const handleSubmit = (formData) => {
             console.log('Form Data:', formData); 
            }; 


            
        return ( 
            <div>
                 <MyForm fields={fields} onSubmit={handleSubmit} />
                 </div>
        );
}
export default Contact;
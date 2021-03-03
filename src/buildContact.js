import newElement from './newElement';
import sendNotification from './sendNotification';

export default () => {
    const content = document.getElementById('content');

    const contactForm = newElement({type:'div', className: 'contact'});
    const nameInput = newElement({type:'input', className: 'contact__input', placeholder: 'Name'});
    const emailInput = newElement({type:'input', className: 'contact__input', placeholder: 'Email'});
    const messageInput = newElement({type: 'textarea', className: 'contact__input message', placeholder: 'Message'});
    const submitButton = newElement({type: 'button', className: 'contact__button', innerHTML: 'Send Message'});


    submitButton.addEventListener('click', ()=> {
        if(!nameInput.value || !emailInput.value || !messageInput.value) {
            sendNotification('error', 'You must fill out every field!');
        } else {
            [nameInput, messageInput, emailInput].forEach(el => el.value = '');
            sendNotification('success', 'Your message has been sent!');
        }
    });

    contactForm.append(nameInput, emailInput, messageInput, submitButton);
    content.append(contactForm);
}
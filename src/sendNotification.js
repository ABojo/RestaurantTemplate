import newElement from './newElement';

export default (status, message) => {
    const noti = newElement({type: 'div', className: `noti ${status}`, innerHTML: message});
    document.body.append(noti);

    setTimeout(()=> {noti.remove()}, 3000);
}
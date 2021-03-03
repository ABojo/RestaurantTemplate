import newElement from './newElement';

export default () => {
    const content = document.getElementById('content');
    const menu = newElement({type:'div', className: 'menu'});

    for(let i=0; i < 6; i++) {
        const menuItem = newElement({type:'div', className: 'menu__item', style: {backgroundImage: `linear-gradient(rgb(0,0,0,.8), rgb(0,0,0,.8)), url('/img/food${i+1}.jpeg')`}});
        const menuItemPrice = newElement({type: 'p', className: 'menu__item-price', textContent: '$11.95'})
        const menuItemHeading = newElement({type: 'h1', className: 'menu__item-heading', textContent: 'Meal name'});
        const menuItemCalories = newElement({type: 'p', className: 'menu__item-calories', textContent: '1000 calories'});
        const menuItemBreak = newElement({type:'div', className: 'menu__item-break'});
        const menuItemText = newElement({type: 'p', className: 'menu__item-text', textContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, voluptates sunt blanditiis ab laborum numquam, esse doloremque reiciendis recusandae, eaque sint id aspernatur fugiat vitae. Totam quod neque repellat dolores!'})
        
        menuItem.append(menuItemPrice, menuItemHeading, menuItemCalories, menuItemBreak, menuItemText);
        menu.append(menuItem);
    };


    content.append(menu);
}
import newElement from './newElement';


export default () => {
    const content = document.getElementById('content');
    const splitBox = newElement({type: 'div', className: 'split-box'});
    const splitBoxText = newElement({type: 'div', className: 'split-box__item'});
    const homeHeading = newElement({type: 'h1', className: 'home-heading', textContent: 'Welcome to restaurant name!'});
    const homeParagraph = newElement({type: 'p', className: 'home-para', textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl nunc mi ipsum faucibus. Urna neque viverra justo nec ultrices dui sapien eget mi. Fermentum posuere urna nec tincidunt praesent semper. Nunc lobortis mattis aliquam faucibus purus in massa. Quis enim lobortis scelerisque fermentum dui faucibus in. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Et odio pellentesque diam volutpat commodo sed. Nec nam aliquam sem et. Nunc sed id semper risus in hendrerit. Pharetra pharetra massa massa ultricies. Nullam ac tortor vitae purus. Ut diam quam nulla porttitor. Feugiat nisl pretium fusce id velit. Bibendum arcu vitae elementum curabitur vitae nunc sed. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Lorem ipsum dolor sit amet consectetur adipiscing elit. Sollicitudin nibh sit amet commodo.'});
    const splitBoxImage = newElement({type: 'div', className: 'split-box__item'});
    const thumbnailImage = newElement({type: 'img', className: 'template-img', src: 'img/template.jpg'});
    const mapHeading = newElement({type: 'h1', className: 'map-heading', textContent: 'Visit Us'});



    splitBox.append(splitBoxText, splitBoxImage);
    splitBoxText.append(homeHeading, homeParagraph);
    splitBoxImage.append(thumbnailImage);
    content.append(splitBox, mapHeading);
    content.innerHTML += `<iframe class='map-embed'frameborder="0" scrolling="no"src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=2880%20Broadway,%20New%20York&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>`;
}
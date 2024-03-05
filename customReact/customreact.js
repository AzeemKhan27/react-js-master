

function customRender(reactElement, mainContainer){
   /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    mainContainer.appendChild(domElement);
    */

    // optimise way

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(let prop of reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

const reactElement = {
    type : 'a',
    props : {
        href : 'http://google.com',
        target : "_blank"
    },
    children : "Click me to visit on google"
}

const mainContainer = document.getElementById("root")
customRender(reactElement,mainContainer)
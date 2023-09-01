# What is Emmet?
    Emmet is a toolKit or Extension for web developers which we can use for writing code efficiently.
    It has a set of html and CSS shortcuts which we can generate the html tags easily, with just giving tags will it generate the tags directly.

# Difference between Library and Framework?
### Library
    Library is just a pre-written functions,classes , modules which developers can be used to perform some tasks efficiently.
    For example: React is nothing but Javascript functions because it is React library is written in javascript language.
    Developers can call those methods or functions inside their code 
    Library is like a tool which developers can use to accomplish the tasks which they want.
### Framework
    Framework is like a blueprint for an house to build, if we want to build an house we have to follow the rules or blueprint to build the project
    It has a some structured way to follow 
#### Difference
    The main difference between Library and Framework is that library is a tool which developers can use methods to develop and framework is like structured way, plans and guidelines ,so developers has to follow those plans and guidelines  to develop.

# what is CDN?
    CDN -> content delivery network is group of geographically interconnected servers.
    CDN is a network which will connect inter-connected servers that speeds up the loading webpages for data-heavy applications. 
    There are websites those host their code in CDN, react is one of those.
    React has hosted their code in CDN.
    We can Use CDN links to integrate our project with React by just adding the CDN links in script tags.

# why is React known as React?

    The name React was chosen because of the core principles of the React library, 
    Reactive UI programming : when data changes react updates the UI effectively
    Declarative UI : gives desired output based on declarative code by developers
    Component based architecture : The whole UI is divided into components which we can re-use. Components accepts the props and state which will changes on the basis of props and state.
    Virtual DOM: React changes the DOM to efficiently updates the only parts of the UI.


# what is cross-origin in script tags?

    The cross-origin allows resources on a webpage to be requested from another domain outside the own domain.
    Webpages often make request to load resources from other servers, here CORS come in
    The cross-origin attribute sets the mode of request to be a HTTP CORS Request
    A cross origin request is a request for a resource (e.g. style sheets, iframe, images, fonts, or scripts) from another domain.

# what is Difference between React and React-DOM?
    
    React is  a javascript library, designed for building better user-interface
    ReactDOM is to render the UI in the browser
    ReactDOM is a complimentary library which glues react to the browser DOM
    Whenever we use components,classes we use React and whenever we use render() we use ReactDOM.

    React Developers has divided into two Libraries the React and ReactDOM because react has nothing to do with the browser or web.
    ReactDOM binds the idea of React to a web Browser.

# what is the difference between react.development.js and react.production.js files in CDN?

### Production
    In production it compress and minifies the code which will help to reduce the size of the files and performance is much faster in the production mode than in the development  mode.

### Development

    In development it is developer friendly which enables us to utilize React developer tools which will help us to debug the code and we can use various functionalities like Hot Module Replacement, diagnostics so that we can easily debug the code in development mode. 

# what is difference between async and defer?

### Async
    when we use async in script tag, while browser parsing the html code if it sees the script tag with async word it will work parallelly  with html but for execution of script tag it will stop parsing html code.

### Defer
    while parsing the html code if it sees the script tag it will parallelly  work with script tag and after completion of html parsing it will execute the script

### Script without async and defer
    when we don not mention async or defer in the script tag while parsing the html code if it sees script tag without async or defer it will stop parsing it will work only on script tag until it done its execution of script tag.

#####  when to use async and defer

    If there are so many dependencies better to use defer and if there are less scripts to get then we can use async. 
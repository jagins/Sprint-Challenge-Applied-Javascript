// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createNewCard(data)
{
    const mainDiv = document.createElement('div');
    const headDiv = document.createElement('div');
    const authDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');
    
    mainDiv.classList.add('card');
    headDiv.classList.add('headline');
    authDiv.classList.add('author');
    imgDiv.classList.add('img-container');
    
    headDiv.textContent = data.headline;
    img.src = data.authorPhoto;
    span.textContent = data.authorName;
    
    mainDiv.appendChild(headDiv);
    mainDiv.appendChild(authDiv);
    authDiv.appendChild(imgDiv);
    imgDiv.appendChild(img);
    authDiv.appendChild(span);

    const cardContainer = document.querySelector('.cards-container');
    cardContainer.appendChild(mainDiv);
}

function apiCall()
{
    axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then((result) => 
    {  
       console.log(result);
       result.data.articles.javascript.forEach(article => createNewCard(article));
       result.data.articles.bootstrap.forEach(article => createNewCard(article));
       result.data.articles.technology.forEach(article => createNewCard(article));
       result.data.articles.jquery.forEach(article => createNewCard(article));
       result.data.articles.node.forEach(article => createNewCard(article));
    })
    .catch((err) => 
    {  
       console.log("OOPS something went wrong ", err); 
    });
}

apiCall();
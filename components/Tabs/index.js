// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function newTab(topicArray)
{
    const newTopicArray = [];

    for(let i = 0; i < topicArray.length; i++)
    {
        const div = document.createElement('div');
        div.classList.add('tab');
        div.textContent = topicArray[i];
        newTopicArray[i] = div;
    }

    return newTopicArray;
}

function apiCall()
{
    axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then((result) =>
    {
        const topicContainer = document.querySelector('.topics');
        const resultArray = newTab(result.data.topics);
        resultArray.forEach(item =>
        {
            topicContainer.appendChild(item);
        })
    })
    .catch((err) => 
    {
        console.log("Something went wrong ", err);
    });
}

apiCall();
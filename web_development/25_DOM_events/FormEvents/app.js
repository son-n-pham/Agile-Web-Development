

// const tweetForm = document.querySelector('#tweetForm');
// const tweetsContainer = document.querySelector('#tweets');
// tweetForm.addEventListener('submit', function (e) {
//     e.preventDefault();

//     // const usernameInput = document.querySelectorAll('input')[0];
//     // const tweetInput = document.querySelectorAll('input')[1];
//     const usernameInput = tweetForm.elements.username;
//     const tweetInput = tweetForm.elements.tweet;
//     addTweet(usernameInput.value, tweetInput.value)
//     usernameInput.value = '';
//     tweetInput.value = '';
// });

// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(username)
//     newTweet.append(bTag);
//     newTweet.append(`- ${tweet}`)
//     tweetsContainer.append(newTweet);
// }

// Form Components
const username = document.querySelector('input[name="username"]');
const tweet = document.querySelector('input[name="tweet"]');
const postBtn = document.querySelector('button');

// Select ul for output
const tweetOutput = document.querySelector('#tweets');

// eventListener
postBtn.addEventListener('click', (e) => {
    // Prevent action of form to redirect to new page
    e.preventDefault();

    // Extract data from inputs
    const usernameInput = username.value;
    const tweetInput = tweet.value;

    // Create new li element
    const newLi = document.createElement("li");
    newLi.innerHTML = `<h3>${usernameInput}: ${tweetInput}`;

    // Append new li as the new child to ul element
    tweetOutput.appendChild(newLi);

    // Reset values of inputs back to blank
    username.value = "";
    tweet.value = "";
});



## Synonym Generator

#### Created by: Yashira Baggett


### Technologies Used:
To create the synonym generator app, I used HTML, CSS, Javascript, and JQuery languages to design and to program the app.

### Project Approach:

My initial approach to the project was to plan as conservatively as possible because of my current skill set. I knew I wanted to create a useful app related to education, so I began planning a spelling game for children in grades K-2. This plan quickly turned into a word game for children in grades 3-5 due to API accessibility. After some planning and beginning the project, I soon found that the API needed to supply words for children in this age group was going to be quite difficult. In the absence of a suitable API to supply words for my target age group, I changed the word game to a game that referenced synonyms, as synonym API's were a bit more accessible. After finding a working synonym API, I began to realize my conservative plan for my synonym game wasn’t quite conservative enough, and I began to feel inundated by the various moving parts required to produce a functional game app. After much trial and error and little progress, I decided to scale back my synonym game idea and instead create a simple synonym generator, with plans to enhance its features if time allowed. Although not my original project choice, the synonym generator would still allow students in my original target age group to engage in something useful to aid their studies.
Here is the link to my github site. You can check out the synonym generator I created [here](https://github.com/yashira85/yashira85.github.io).

### Installation Instructions:

To create the synonym generator, I used an API that would supply synonyms upon user input. I used form tags that would allow the user to input their desired word into the input box (identified by the “Type word here” command) and then click the adjacent “Get Synonyms” button. I used AJAX (Asynchronous Javascript and XML) to enable my page to get data from my chosen API. After successfully making the AJAX request, I then began to code in how to populate the DOM with my AJAX data. I created a parsedWords variable to retrieve the sifted data as there were a few layers that I needed to work through to get to the actual synonyms:
```javascript
	const parsedWords = JSON.parse(data).noun.syn;
  ```
I then established an if statement so the API would only supply eight synonyms for each word request. This required that I use the .length method and then set up a for loop that would iterate over each synonym supplied by the API.

A central feature of my synonym generator was the use of a carousel to display returned synonyms. To establish the carousel, I first defined a few variables, including “currentWordIndex”,“numOfWords”, and “$currentWord”. To define two of these variables, “numOfWords” and “$currentWord”, I referenced my html div class of “carousel-synonyms” and appended the children method to return elements that were direct children of the div class. To enable the user to click through the synonym carousel, I created both “previous” and “next” buttons, and, using if statements that referenced the variables currentWordIndex and numOfWords, I was able to add both “move forward” and “move backward” functionality to my synonym generator.

Lastly, I used the .on method to attach an event handler to my JQuery form object, enabling the function to be called after the user input is received. I created a “randomWord” variable which referenced the input-box id (in my html form tag) and enabled me to get the current value of the first element in the set of matched elements. I then printed the result of the variable “randomWord” and then placed it as a parameter inside of the variable addWord, which had been established at the beginning of the code. I then added a preventDefault method to prevent the generated synonym results from lingering on the page after another word had been searched, and used the .trigger method on the carousel synonyms object to trigger default reset behavior.

### Lingering Issues:

Some issues concerning my synonym generator in need of resolve would be:
- Improving the click function of my “previous word” and “next word” buttons
- Improving the synonym display section that appears between the “previous word” button and “next word” button
- Finding a more suitable API to generate synonyms. The current API does generate synonyms, but the output is a bit colloquial for elementary students to find useful for their studies.
- Continuing to improve the page styling
- Improving the carousel display, ensuring that only one synonym appears at a time

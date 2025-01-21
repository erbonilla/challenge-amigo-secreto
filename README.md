

Challenge Secret Friend 

[https://github.com/erbonilla/challenge-amigo-secreto/blob/main/amigo-secreto-img.png?raw=true](https://github.com/erbonilla/challenge-amigo-secreto/blob/c165913e2ad4c70d51827d5efc1d2d9733bc0dba/amigo-secreto-img.png)

In this challenge, I develop an app that allows users to enter friends' names into a list and then run a random draw and determine who the "secret friend" is.
The user must add names using a text field and an "Add" button. The names entered will be displayed in a visible list on the page, and at the end, a "Draw Friend" button will select one of the names randomly, showing the result on the screen.

Functions:
* Add Names: Users will type a friend's name into a text field and add them to a visible list by clicking "Add."
* Validate Input: If the text field is empty, the program will display an alert asking for a valid name.
* View the list: The names entered will appear in a list below the input field.
* Random Draw: Clicking on the "Draw Friend" button will randomly select a name from the list and display it on the page.

Create an array to store the names
It starts by declaring an array-type variable, which will store the names of the entered friends. Example:
let friends = []

Implement a feature to add friends
It develops a feature, which allows the user to enter a name in the text field and add it to the previously created friends list.
Specific tasks:
 
* Capture the value of the input field: Use document.getElementById or document.querySelector to get the text entered by the user.
* Validate input: Implement validation to ensure that the field is not empty. If it is empty, display an alert with an error message: "Please insert a name."
* Update the friend array: If the value is valid, add it to the array that stores the friends' names using the .push() method.
* Clean up the input field: After adding the name, reset the text field to an empty string.

Implement a feature to update your friends list
Create a function that loops through the array friends and adds each name as an element <li> within an HTML list. Use innerHTML to clean up the list before adding new items.
Specific tasks:
1. Get the list item: Use document.getElementById() or document.querySelector() to select the list where friends will be displayed.
2. Clean up the existing list: Set list.innerHTML = "" to make sure there are no duplicates when updating.
3. Iterate over the array: Use a for loop to loop through the array, friends, and create list items (<li>) for each title.
4. Add Items to List: For each friend, create a new list item.

Implement a feature to get around friends
Write a function that randomly selects one of the names stored in the friends array. Use Math.random() and Math.floor() to get a random index.
Specific tasks:
1. Validate that there are friends available: Before drawing, check if the array friends is not empty.
2. Generate a random index: Use Math.random() and Math.floor() to select a random index from the array.
3. Get the name drawn: Use the random index to access the corresponding name in the array.
4. Show the result: Update the contents of the result element using document.getElementById() and innerHTML to display the drawn friend.

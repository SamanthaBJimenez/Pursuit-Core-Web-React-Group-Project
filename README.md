# Pursuit-Core-Web-React-Group-Project

For this project, in a group, build a Full-Stack Application with Express.js, PostgreSQL and React where users can upload and view images.  For more on persisting images, the link [here](https://stackoverflow.com/questions/15772394/how-to-upload-display-and-save-images-using-node-js-and-express) will be helpful.

## Requirements

- Users can create an account and sign in
- Users have a profile where thery can change their display name and profile image
- Users can post an image with a caption and/or hashtags
- Users can view images uploaded by other users in their feed

## Screens

Your app should have the functionality outlined below.  Feel free to add features, and make the UI whatever makes the most sense to your group.

### Login Screen

- An input for entering an email address
- A 'Sign In' button that logs the user in
- A 'Create Account" button that creates a new user

Logging in or creating an account should take the use their feed. Note that we won't be using a password for logging-in or signing-up just an the email address. Prevent a user signing-up with an email that is already registered. 

### Feed

- Display images uploaded by all users
- Have a search bar that can search by hashtags and display only the relevant images

### Profile

- Display the email address of the currently logged-in user
- Display the profile image of the current user and allow them to change their profile picture
- Include a "Logout" button that logs the user out and presents the login screen

### Upload image form

- Give the user the ability to upload an image
- The user should be able to add hashtags to their upload
- Include a "Post" button
You can do this in the feed page ala Tumblr or Reddit style or have it entirely in a separate front-end route.

## Bonus Feature ideas

- Like an image
- Leave an emoji response on an image
- Comment on an image
- Show trending hashtags in the feed
- Allow users to befriend/follow other users and in their feed only display posts of people they follow.



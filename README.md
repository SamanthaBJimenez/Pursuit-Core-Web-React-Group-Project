# Pursuit-Core-Web-React-Group-Project

For this project, in a group, build a Full-Stack Application with Express.js, PostgreSQL and React where users can upload and view images. 


## Groupwork

This is our second large group project.  There are three large things to be aware of for group projects:

1. Git
2. Trello
3. Group Roles

### Git

Unlike homework in the past where you forked a Pursuit repo, then committed and pushed at the end, a group project must be more collaborative.

The master branch should be the most current version of the project.  Whenever you want to make a change to the project, you should create a new branch named after the change you will be making.  Make your changes in the branch, then make a PR against master.  Someone else from your team should review the PR, then merge it into the master branch.  Everyone else should then pull the master branch to have the most current version on their local machines.


### Trello

Each group member should have an account on [Trello](https://trello.com/) and the group should have a well maintained list of who is working on what task.  Without this, two people might try to edit the same file and create merge conflicts.

[Example](https://trello.com/b/DnZvFigA/agile-board)


### Group Roles

The expectation is that everyone in a group is chiefly occupied with writing code.  In addition to that, the following roles are important for someone to have explicit ownership of:

|       Role        |                                                                                        Responsibilities                                                                                         |
| :---------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  Technical Lead   | In charge of maintaining the health of master branch and ensure that master is always safe to pull from.  Makes final decisions on project architecture in conversation with other team members |
|  Project Manager  |                                                         Is responsible for the health of the Trello or board.  Organizes daily standups                                                         |
|       UI/UX       |                                                                        Is responsible for the design and flow of the app                                                                        |
| PR Review Process |                                     Is responsible for ensuring that PRs into master are reviewed, and that all team members are reviewing each other's PRs                                     |


## App Specifications

- Users can create an account and sign in
- Users have a profile where thery can change their display name and profile image
- Users can post an image with a caption and/or hashtags
- Users can view images uploaded by other users in their feed

### Screens

Your app should have the functionality outlined below.  Feel free to add features, and make the UI whatever makes the most sense to your group.

#### Login and Signup form

- An input for entering an email address
- A 'Sign In' button that logs the user in
- A 'Create Account" button that creates a new user

Logging in or creating an account should take the use their feed. Note that we won't be using a password for logging-in or signing-up just an the email address. Prevent a user signing-up with an email that is already registered. 

#### Feed

- Display images uploaded by all users
- Have a search bar that can search by hashtags and display only the relevant images

#### Profile

- Display the email address of the currently logged-in user
- Display the profile image of the current user and allow them to change their profile picture
- Include a "Logout" button that logs the user out and presents the login screen

#### Upload image form

- Give the user the ability to upload an image
- The user should be able to add hashtags to their upload
- Include a "Post" button
You can do this in the feed page ala Tumblr or Reddit style or have it entirely in a separate front-end route.

### Bonus Feature ideas

- Like an image
- Leave an emoji response on an image
- Comment on an image
- Show trending hashtags in the feed
- Allow users to befriend/follow other users and in their feed only display posts of people they follow.

### Resources
- [Uploading an Image | Creating a REST API with Node.js [VIDEO]](https://www.youtube.com/watch?v=srPXMt1Q0nY)
- [React Image Upload Made Easy [VIDEO]](https://www.youtube.com/watch?v=XeiOnkEI7XI)
- [How to upload, display and save images using node.js and express [STACKOVERFLOW]](https://stackoverflow.com/questions/15772394/how-to-upload-display-and-save-images-using-node-js-and-express) 
- [Multer for file upload in Express.js](https://github.com/expressjs/multer)

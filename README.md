# politico
* Politico is a web application that allows users and politician registration and also allows users to vote for their choice electoral candidate

* This project motivates me a lot because its a challenges me a lot and its been my goal to be a web application developer

* Politico web application is built on JavaScript programming language, an implementation of JS on the front-end and back-end was adequate.

How to use the application

* As a new user, navigate to the sign-up page through the link provided at the top right corner of the home page.
* fill the form and sign up

* A signed up user can also log in through their signup credentials;
You can view all politician contesting for an electoral office, view all party, edit or delete a political party and cast your vote for your choice politician.
* as a politician, you can also register.
* As an admin, you can create a political party, create political offices,
* As an authenticated user, you can log in into your account via the login form provided at the home page. Only an authenticated user can log in otherwise sign up.
visit us at https://olorunwalawrence.github.io/politico/UI on your browser

Programming Stack

Express
html
Nodejs
css
How To Build politico app:

Download Nodejs app on your local machine
<li><a href="https://git-scm.com/downloads">Download git bash terminal on your local machine</a></li>
<li><a href="https://www.getpostman.com/apps">Download postman app on your local machine so that you can test your routes</a></li>
</ul>
After downloading the nodejs app, you will automatically have npm installed already. Npm, is node package manager.

Then clone or download this Repo to your local machine. On your terminal, cd into the directory where you have the file downloaded to and then install the packages by typing
npm install
this will install all dependencies and dev-dependencies for the project, then run this command in your terminal:
npm start

Open the postman and test the following existing routes:
visit us at https://olorunwalawrence.github.io/politico/UI on your browser

Programming Stack



    Express
    html
    Nodejs
    css



How To Build politico app:
    <ul>
        <li><a href="https://nodejs.org/en/download/">Download Nodejs app on your local machine</a></li>
    
    <li><a href="https://git-scm.com/downloads">Download git bash terminal on your local machine</a></li>
    <li><a href="https://www.getpostman.com/apps">Download postman app on your local machine so that you can test your routes</a></li>
    </ul>
After downloading the nodejs app, you will automatically have npm installed already. Npm, is node package manager.

Then clone or download this <a href="https://olorunwalawrence.github.io/politico/UI">Repo</a> to your local machine. On your terminal, cd into the directory where you have the file downloaded to and then install the packages by typing
    npm install
this will install all dependencies and devdependencies for the project, then run this command in your terminal:
    npm start

Open the postman and test the following existing routes:
<table>
    <tr>
        <th>API</th>
        <th>HTTP verb</th>
        <th>Action</th>
    </tr>
    <!-- yet to be implemented -->
    <tr>
        <td>/api/v1/signup</td>
        <td>POST</td>
        <td>Create new user</td>
    </tr>
     <!-- yet to be implemented -->
    <tr>
        <td>/api/v1/login</td>
        <td>POST</td>
        <td>Sign in user</td>
    </tr>
    <tr>
        <td>/api/v1/parties</td>
        <td>POST</td>
        <td>Create new party</td>
    </tr>
    <tr>
        <td>/api/v1/parties/:party id</td>
        <td>PATCH</td>
        <td>Update a party</td>
    </tr>
    <tr>
        <td>/api/v1/delete/:party id</td>
        <td>DELETE</td>
        <td>Remove a party</td>
    </tr>
    <tr>
        <td>/api/v1/business/:party id</td>
        <td> GET</td>
        <td>Find one party</td>
    </tr>
    <tr>
        <td>/api/v1/parties</td>
        <td>GET</td>
        <td>Find all parties </td>
    </tr>
    <tr>
        <td>/api/v1/officies</td>
        <td>POST</td>
        <td>Create office</td>
    </tr>
    <tr>
        <td>/api/v1/officies/:office id</td>
        <td>GET</td>
        <td>Find an office</td>
    </tr>

     <tr>
        <td>/api/v1/officies< /td>
        <td>GET</td>
        <td>Find all officies</td>
    </tr>
</table>

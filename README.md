# Max View

## Fandom Discovery and Entertainment Platform

Max View is a responsive Single Page Application (SPA) designed to provide a centralized platform for discovering and exploring fandom and entertainment content.

The platform brings together different categories including anime, gaming, movies, TV shows, K-pop, comics, manga, cosplay, merchandise, characters, articles, media, releases, and fandom-related events.

---

## 1. Project Features

Max View includes the following features:

* User registration
* User login and logout
* Password recovery and password reset
* Email verification interface
* Personalized user dashboard
* User profile
* Profile editing
* Avatar management
* Content search
* Fandom categories
* Articles
* Characters
* Cosplay
* Media and trailers
* Releases
* Events
* Calendar
* Bookmarks
* Bookmark notes
* Merchandise
* Administrator dashboard
* Role-based access
* Responsive user interface
* Sitemap

---

## 2. Technologies and Software Used

### Frontend

* React
* Vite
* JavaScript
* HTML
* CSS
* Lucide React

### Backend

* Python
* FastAPI
* SQLAlchemy
* PyMySQL
* JWT authentication
* Passlib/Bcrypt

### Database

* MySQL

### Development and Version Control

* Visual Studio Code
* Git
* GitHub
* MySQL Workbench

---

## 3. System Requirements

The following are required to run the project locally:

* Node.js and npm
* Python
* MySQL Server
* Git
* A modern web browser
* Internet connection where required for externally hosted media or resources

---

## 4. Project Structure

The project contains two major application components:

### Frontend

The frontend contains the React/Vite Single Page Application and provides the user interface.

### Backend

The backend contains the FastAPI application responsible for API requests, authentication, user management, bookmarks, and communication with the MySQL database.

---

## 5. Installation and Setup

### Step 1 — Obtain the Project

Download or clone the Max View project from the GitHub repository:

**GitHub:** [INSERT FINAL GITHUB URL]

Extract the project if it was provided as a ZIP file.

### Step 2 — Database Setup

1. Install and start MySQL Server.
2. Open MySQL Workbench.
3. Create the Max View database.
4. Import the SQL/schema file included with the project.
5. Confirm that the required tables have been created.

The SQL/schema file supplied with the project contains the database and table definitions.

### Step 3 — Backend Setup

Open a terminal in the project directory and navigate to the backend folder.

Create and activate a Python virtual environment.

Install the required Python dependencies.

Configure the backend environment variables with the appropriate MySQL database credentials and application secret key.

Start the FastAPI backend server.

### Step 4 — Frontend Setup

Open another terminal in the frontend project directory.

Install the Node.js dependencies using npm.

Start the Vite development server.

Open the local frontend address displayed by Vite in a web browser.

### Step 5 — Run the Application

The frontend and backend should both be running for features that require database and API communication.

The general system flow is:

**Browser → React Frontend → FastAPI Backend → MySQL Database**

---

## 6. Database

The project uses MySQL as its relational database management system.

The database contains the tables required for user management, bookmarks, content, and other application functionality.

The complete database structure is provided separately in the SQL/schema file included in the submission.

---

## 7. Test Credentials

The following accounts are provided for project evaluation.

### Normal User

**Email:** [logintest@example.com](mailto:logintest@example.com)
**Password:** [INSERT ACTUAL PASSWORD]

### Additional Normal User

**Email:** [user@test.com](mailto:user@test.com)
**Password:** [INSERT ACTUAL PASSWORD]

### Administrator

**Email:** [admin@test.com](mailto:admin@test.com)
**Password:** [INSERT ACTUAL PASSWORD]

The administrator account is provided to test role-based access to the administrative dashboard.

---

## 8. Test Data

The project uses sample data to test:

* User registration and authentication
* User profiles
* Bookmarks
* Bookmark notes
* Content discovery
* Search
* Categories
* Events
* Calendar
* Cosplay
* Merchandise
* Articles
* Characters
* Media
* Releases
* Administrator access

The test accounts listed above can be used to verify authenticated functionality.

---

## 9. User Access

### Normal Users

Normal users can:

* Register and log in.
* Access their dashboard.
* View and edit their profile.
* Search and explore content.
* View events and calendar information.
* Create and manage bookmarks.
* Recover their password.

### Administrators

Administrators have access to the administrator section of the application.

Administrator access is restricted according to the user's assigned role.

---

## 10. Assumptions

The following assumptions were made during development:

* Users have access to a modern web browser.
* MySQL Server is available when running the application locally.
* Required frontend and backend dependencies can be installed through the appropriate package managers.
* Internet access may be required for externally hosted images, media, or other external resources.
* The test credentials provided in this README are intended only for project evaluation.
* Some content displayed by the application is sample or demonstration content.
* The application is intended as a project demonstration and may require additional infrastructure and security configuration before production deployment.

---

## 11. Hosted Website

**Live Website:** [INSERT FINAL HOSTED WEBSITE URL]

The hosted website should be used for evaluation of the deployed application.

---

## 12. GitHub Repository

**GitHub Repository:** [INSERT FINAL GITHUB URL]

The repository contains the project source code required for development and evaluation.

---

## 13. Project Demonstration

An MP4 video demonstrating the working Max View application is included with the final project submission.

The demonstration covers the major implemented features of the application, including authentication, content discovery, user features, bookmarks, events, and administrator access.

---

## 14. Sitemap

A sitemap is included in the Max View application to provide an overview of the available pages and navigation structure.

The sitemap is also included in the project documentation.

---

## 15. AI Acknowledgement

Artificial Intelligence tools were used as supporting resources during the development of Max View.

AI assistance was used for activities such as troubleshooting programming errors, understanding technical concepts, receiving development guidance, reviewing implementation approaches, and assisting with documentation.

The project team remained responsible for the application's design decisions, implementation, integration, testing, and final verification. AI-generated suggestions were reviewed and modified where necessary before being incorporated into the project.

AI tools were therefore used as development and learning aids and not as a replacement for the team's own implementation and decision-making.

---

## 16. Evaluation Notes

For local evaluation, ensure that:

1. MySQL Server is running.
2. The Max View database has been created.
3. The supplied SQL/schema file has been imported.
4. The backend environment has been configured.
5. The FastAPI backend is running.
6. The React/Vite frontend is running.
7. The supplied test credentials are used where authentication is required.

The evaluator may also use the hosted website for direct testing of the deployed application.

---

## 17. Project Submission Contents

The consolidated project ZIP should contain:

* Complete project source code
* `README.md`
* Project documentation
* SQL/schema file
* Required project configuration files
* Other files necessary to run or evaluate the application

Sensitive personal credentials and unnecessary generated files should not be included in the submission.
`
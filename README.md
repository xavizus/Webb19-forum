# Forum Task
The task is to implement a simple forum functionality. Any questions regarding the task should be written in the public channel on Slack.

# To run:
Copy .env.example and rename it to: .env
Edit the .env and add URL at `NEXT_PUBLIC_API_URL`.

Shell script:
```shell script
cp .env.example ./.env && sed -i 's/NEXT_PUBLIC_API_URL=/NEXT_PUBLIC_API_URL=https://lab.willandskill.eu/'
```

# Requirements

## Pages

- Register Page
- Login Page
- Home Page
- Post List Page
- Post Create Page
- Post Detail Page

# Passing grade requirements:
Use following techs:
- [x] React (Self explained in the code)
- [x] React Components (See folder components)
- [x] Styled Components
- [x] useState
- [x] useEffect
- [x] Dynamic routes (SOON TM)
- [x] localStorage (Session Storage)

# Higher grade requirements
Use following techs:
- [x] Styled Components Inheritance
- [x] useContext (or useReducer)
- [x] Next.js (optional, but if you use it...)
    - [x] Either getServerSideProps or getStaticProps must be used
    - [ ] Deploy to Vercel
    
# Pages
## Register page
Register page should include a form with the following fields:
- [x] email
- [x] password
- [x] firstname
- [x] lastname
- [x] country (fetch list of countries from the back-end. See API below)

The form information can be found at: [Line 33 in file formsData](https://github.com/xavizus/Webb19-forum/blob/6e3b023e819a71320f47979215db1386b513de28/components/form/formsData.js#L33)

- [x] When the user has successfully registered, they should automatically navigate
to the login page.

## Login page
Login page must include:
- [x] Email
- [x] Password

- [x] The form should be able to handle wrong credentials. "Unable to log in with provided credentials."
- [x] When the user has successfully logged in, they should automatically navigate to the Home Page

## Home page
- [x] Should have some generic text about the forum
- [x] Add a link that let the user can navigate to Post List Page
- [x] Should show the user account

## Post List Page
- [x] List all posts
- [x] When the users click on a post they should navigate to the detail page for
      that post
- [x] Add link so user can navigate to Post Create Page

## Post Create Page
- [x] This page should render a form where the user can create a new Post.
The form should contain:
- [x] title
- [x] content
- [x] category (Please see API below for list of all categories)

- [x] When a post created successfully, the user should automatically navigate to
      the Post List Page
      
## Post Detail Page
- [x] This page should render all of the data that is returned from the API for Post Detail.
- [x] A link to navigate to all posts should be present.
- [x] (VG Option) Add possibility to add a response


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

- Register Page : [Line 12 in file signup.js](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/pages/auth/signup.js#L12)
- Login Page : [Line 13 in file login.js](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/pages/auth/login.js#L13)
- Home Page : [Line 5 in file index.js](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/pages/index.js#L5)
- Post List Page : [Line 11 in file posts/index.js](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/pages/posts/index.js#L11)
- Post Create Page : [Line 11 in file posts/create.js](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/pages/posts/create.js#L11)
- Post Detail Page : [Line 8 in file posts/[postId].js](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/pages/posts/%5BpostId%5D.js#L8)

# Passing grade requirements:
Use following techs:
- [x] React (Self explained in the code)
- [x] React Components (See folder components)
- [x] Styled Components : [Line 5 in file home.styled.js](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/styles/home.styled.js#L5)
- [x] useState : [Line 5 in file home.styled.js](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/styles/home.styled.js#L9)
- [x] useEffect : [Line 14 in pages/posts/[postId].js](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/pages/posts/%5BpostId%5D.js#L14)
- [x] Dynamic routes : [Line 39 in pages/posts/[postId].js](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/pages/posts/%5BpostId%5D.js#L39)
- [x] localStorage (Session Storage) [Line 65 in classes/postKit.js](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/classes/postKit.js#L65)

(These are only fast examples, but you can find the uses everywhere)

# Higher grade requirements
Use following techs:
- [x] Styled Components Inheritance [Line 9 in file home.styled.js](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/styles/home.styled.js#L9)
- [x] useContext (or useReducer) [Line 10 in file pages/posts/[postId].js](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/pages/posts/%5BpostId%5D.js#L10)
- [x] Next.js (optional, but if you use it...)
    - [x] Either getServerSideProps or getStaticProps must be used [Line 39 in file pages/posts[postId].js](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/pages/posts/%5BpostId%5D.js#L39)
    - [x] Deploy to Vercel [HERE! :D](https://webb19-forum.vercel.app/)
    
# Pages
## Register page
Register page should include a form with the following fields:
- [x] email
- [x] password
- [x] firstname
- [x] lastname
- [x] country (fetch list of countries from the back-end. See API below)

The form information can be found at: [Line 89 in file components/forms/formsData.js](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/components/form/formsData.js#L89)

- [x] When the user has successfully registered, they should automatically navigate
to the login page. [Line 26 in file pages/auth/signup](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/pages/auth/signup.js#L26)

## Login page
Login page must include:
- [x] Email
- [x] Password

The form information can be found at: [Line 4 in file components/forms/formsData.js](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/components/form/formsData.js#L4)

- [x] The form should be able to handle wrong credentials. "Unable to log in with provided credentials." [Line 55 in file components/form/formGenerator.jsx](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/components/form/formGenerator.jsx#L55)
- [x] When the user has successfully logged in, they should automatically navigate to the Home Page [Line 29 in file pages/auth/login.js](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/pages/auth/login.js#L29)

## Home page
- [x] Should have some generic text about the forum [Line 12 in file pages/index.js](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/pages/index.js#L12)
- [x] Add a link that let the user can navigate to Post List Page [Line 22 in file components/navbar.js](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/components/navbar.js#L22)
- [x] Should show the user account [Line 28 in file components/navbar.js](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/components/navbar.js#L28)

## Post List Page
- [x] List all posts [Line 29 in file pages/posts/index.js](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/pages/posts/index.js#L29)
- [x] When the users click on a post they should navigate to the detail page for that post [Line 14 in file components/posts/postListItem.jsx](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/components/posts/postListItem.jsx#L14)
- [x] Add link so user can navigate to Post Create Page [Line 25 in file components/navbar.js](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/components/navbar.js#L25)

## Post Create Page
- [x] This page should render a form where the user can create a new Post.
The form should contain:
- [x] title
- [x] content
- [x] category (Please see API below for list of all categories)

The form information can be found at: [Line 32 in file components/form/formsData.js](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/components/form/formsData.js#L32)

- [x] When a post created successfully, the user should automatically navigate to the Post List Page [Line 27 in file pages/posts/create.js](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/pages/posts/create.js#L27)
      
## Post Detail Page
- [x] This page should render all of the data that is returned from the API for Post Detail. [Line 87 in file components/posts/postItem.js](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/components/posts/postItem.js#L87)
- [x] A link to navigate to all posts should be present. [Line 22 in file components/navbar.js](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/components/navbar.js#L22)
- [x] (VG Option) Add possibility to add a response [Line 106 in file components/posts/postItem.js](https://github.com/xavizus/Webb19-forum/blob/c06f4d207b54adc443b511b2f0412ba3d6e0bb12/components/posts/postItem.js#L106)


## RISING TOGETHER API
Rising Together was created with the mission of bringing nonprofits, donors, and companies together to create a better world. By providing a platform for nonprofits to connect with donors and companies, we hope to help those who are doing important work in their communities to reach their goals and create positive change.

 ## Technologies used
- Visual Studio.
- Ruby on Rails.
- PostgreSQL.
- Postman.

## Installation
1. Clone this repository:
```
 https://github.com/Musyoki-Wambua/Rising-Together.git
```
2. Navigate to the directory using: 
```
cd Rising-Together-backend
```
3. Then run ``code .`` to open it in the vs code
4. Make sure your ruby version is: ``2.7.4`` or above.
5. Install the required dependencies using:
```
bundle install
```
6. Run the migrations using
```
 rails db:migrate
```
7. In the Gemfile we added:
``` 
bcrypt
``` 
```
active_model_serializers
```
```
rack-cors
```
```
rswag
```

8. Open the application in your browser:
```
 Rails server/ rails s
```




 ## Table

 # Endpoints

 ## 1. Users Endpoints

 - It should provide the following endpoints:

 ### a. POST/users
- It creates a new user. 
- It has the following attributes: 
 `Username, Email, Password_digest,Gender` and `Role`

### b. PATCH/ users/:id
- This endpoint updates an existing user. 
- It has the following attributes:
 ``Username, Email, Password_digest, Gender`` and ``Role``



 ### c. DELETE/ users/:id
 - It deletes an existing user, identified by the id parameter in the URL

 
## 2. Volunteer Endpoints
 ### a. POST/volunteers
 - It creates a new volunteer endpoint. 
 - The request should be a ``JSON object`` with the following attributes:
 ``organization_name, user_id`` and ``organization_id`` 
 ### b. GET/ Volunteers
 - This endpoint retrieves all volunteers. 
 - The response body is an array of volunteers objects, each with the following 
   attributes: ``organization_name, user_id`` and ``organization_id``

 ### c.  GET/volunteers/:id
 - It retrieves a single volunteer, identified by the id parameter in the URL.

 ###  d. PATCH/ volunteers
 - This endpoint updates an existing volunteer, identified by the id parameter. 
 - The request body should be a ``JSON object`` with the following attributes: 
  ``organization_name, user_id`` and ``organization_id``


 ### e. DELETE/ volunteers
 - It deletes an existing volunteer, identified by the id in the parameter. 

 ## 3. Reviews Endpoints
 ### a.  POST/ review
 - It creates a new review. 
- The request body should be a ``JSON object`` with the following attributes:
  ``user_id, organization_name, organization_id,username, rating`` and ``comments`` 


 ### b.  GET/ reviews/:id
 - It retrieves a single review, identified by the parameter in the URL. 
 - It has the following attributes: ``user_id, organization_name, organization_id,username, rating`` and ``comments`` 

 
 ### c. PATCH/reviews/:id
 - This endpoint updates an existing review, identified by the id parameter in the URL. 
 - The request body should be a ``JSON object.``

 ### d. DELETE/ reviews
 - It deletes a certain review identified by the ID parameter in the URL.

 ## 4. Profile endpoits
 ### a. POST/ profile
 - This endpoint creates a new profile. 
 - The request body should be a JSON object with the following attributes: 
   ``image_url, first_name,last_name, age, gender, country, contact, skills`` and 
   ``user_id``
### b. GET/ profile
- It retrieves all the profiles. The response body is an array of profile objects, each with the following attributes: ``image_url, first_name,last_name, age, gender, country, contact, skills`` and 
   ``user_id``

### c. PUT/ profile/ id
- It updates an existing profile identified by the id parameter in the URL.
- The request body should be a JSON object with the following attributes: ``image_url, first_name,last_name, age, gender, country, contact, skills`` and 
   ``user_id``

### d. DELETE/ profile/:id
- This endpoint deletes an existing profile, identified by the id parameter in the URL.

## 5. Organization Endpoints
### a. POST/ organization
- It creates a new organization. 
- The request body is a ``JSON object`` with the following attributes:
 ``name, description, Location, Year_established, image_url, video_url, info`` and ``user_id``
### b. GET/organization/:id
- This endpoint lets you get a certain organization by the id parameter in the URL. - The response body is an object representing the organization, with the following 
  attributes: ``name, description, Location, Year_established, image_url, 
  video_url, info`` and ``user_id``


# c. PATCH /organization/:id
- This endpoint updates an existing organization, identified by the id parameter in the URL. 
- The request body should be a ``JSON object`` with the following attributes: ``name, description, Location, Year_established, image_url, video_url, info`` and ``user_id``

- The response body is an object representing the newly updated organization, with 
 those attributes, plus a unique identifier

# d. DELETE/ profiles/:id
- This endpoint deletes an existing profile, identified by the id parameter in the 
 URL.

# 6. Donations Endpoints
### a. POST/ donations/:id
- This endpoint creates a new donor. The request body is a JSON object with the following attributes:
``Contributed_amount, Organization_id`` and ``user_id`` 

### b. GET/ donations/:id
- This endpoint returns a single donor, identified by the id parameter in the URL. 
- The response body is an object representing the user, with the following attributes: ``Contributed_amount, Organization_id`` and ``user_id``

### c. PATCH/ donations/:id
- This endpoint updates an existing donor, identified by the id parameter in the URL. The request body should be a ``JSON object`` with the following attributes:
``Contributed_amount, Organization_id`` and ``user_id``
 

### d. DELETE/ donations/:id
- This endpoint deletes an existing donor, identified by the id parameter in the URL.



## Contributors
- Project contributed to by:
1. [Joseph Wambua](https://github.com/Musyoki-Wambua)
2. [David Mwai](https://github.com/DKarimi90)
3. [Simon Muriithi](https://github.com/Fleur41)
4. [Trevor Thiiru](https://github.com/Febiasm)
5. [Antony Tulla](https://github.com/tony555t)
6. [Faith Kigen](https://github.com/faithkigen)


## License
- This project is licensed under the [MIT License](https://choosealicense.com/license/mit/)








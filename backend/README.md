## RISING TOGETHER API
This is web application generally intended for the NGOs to help those who are in need living in poverty with this websit a donor or volunteer can look for a specific NGO where they can send there contribution . It  is built using Ruby on Rails and Postgresql

## Getting started
## Installation
Clone this repository: https://github.com/Musyoki-Wambua/Porverty-Line.git
cd phase 5 project
then code . to open it in the vs code
. Install the required dependencies using Bundler:
bundle install
 . Run the migrations 
 rails db:migrate

 ## Usage
 .Start the server with 
 Rails server/ rails s

 ## Technologies used
 .Ruby on Rail
 .Visual studio
 . postgesql
 .Bcrypt
 ## Table
 # Endpoints
 # Users Endpoints
 It should provide the following endpoints
 # POST/users
 It creates a new user. It has the following properties: 
 . Username:The users name
 .Email: The users email
 .Password_digest: Users password
 . Gender: The gender of the user
 .Role: To specify what type of user they are

# PUT/ users/:id
This endpoint updates an existing user. It has the following properties:
. Username:The users name
 .Email: The users email
 .Password_digest: Users password
 . Gender: The gender of the user
 .Role: To specify what type of user they are

 # DELETE/ users/:id
 It seletes an existing user, identified by the id paramater in the URL
 
 # Volunteer endpoint
 # POST/volunters
 It creates a new volunteer endpoint The request should be a JSON object with the following properties:
 .organization_name: Shows the organization on where to volunteer
 .user_id: shows the users_id of the volunteer
 .organization_id: shows the organization where the they have volunteered
 # GET/ Volunteers
 This endpoint retrieves all volunteers. The response body is an array of volunteers objects, each with the following properties:
 .organization_name: Shows the organization on where to volunteer
 .user_id: shows the users_id of the volunteer
 .organization_id: shows the organization where the they have volunteer

 # GET/volunteers/:id
 It retrives a single volunteer , identified by the id parameter in the URL.

 # PUT/ Volunteers
 This endpoint updates an  existing volunteer, identified by the id parameter. The request body should be a JSON object with the following properties: 
 .Username: Name of the volunteer

 # DELETE/ volunteers
 . It deletes an existing volunteer, identified by the id in the parameter. 

 # Reviews endpoints
 # POST/ review
 It creates a new review . The request body should be a JSON object with the following properties:
 .user_id: The User who reviewed
 .organization_id: The organization being reviewed
 .rating: ratings of the review
 .comments: The comments from the review

 # GET/ reviews/:id
 It retrieves a single review, identified by the parameter in the URL . It has the following properties
 .user_id: The User who reviewed
 .organization_id: The organization being reviewed
 .rating: ratings of the review
 .comments: The comments from the review
 
 # PUT/reviews/:id
 This endpoint updates an existing review, identified by the id parameter in the URL. The request body should be a JSON object.

 # DELETE/ reviews
 It deletes a certain review identified by the ID parameter in the URL

 # Profile endpoits
 # POST/ profile
 This endpoint creates a new profile. The request body should be a JSON object with the following properties:
      .image_url: The image of the profile.
      .first_name: The fist_name of the profile.
      .last_name: The last_name of the profile.
      .age: The age of the profile.
      .gender: The gender of the profile.
      .country: The country of the profile.
      .contact: The contact of the profikle.
      .skills: The skills of the profile.
      .user_id: The profile of a certain user.
# GET/ profile
It retrieves all the profile. The response body as an array of profile objects, each with the following properties:
 .image_url: The image of the profile.
      .first_name: The fist_name of the profile.
      .last_name: The last_name of the profile.
      .age: The age of the profile.
      .gender: The gender of the profile.
      .country: The country of the profile.
      .contact: The contact of the profikle.
      .skills: The skills of the profile.
      .user_id: The profile of a certain user. 
# PUT/ profile/ id
It updates an existing profile identified by the id parameter in the URL.The request body should be a JSON object with the following properties:
 .first_name: The fist_name of the profile.
  .last_name: The last_name of the profile.
   .age: The age of the profile.
   .gender: The gender of the profile.
    .country: The country of the profile.
      .contact: The contact of the profikle.
      .skills: The skills of the profile.
       .user_id: The profile of a certain user. 
# DELETE/ profile/:id
This endpoint deletes an existing profile, identified by the id parameter in the URL.

# Organization endpoints
# POST/ organization
It creates a new organization. The request body is a JSON object with the following properties:
.name: name of the organization
.description: description about the organization
.Location: place where the organization is located
.Year_established: The year the organization was established.
.image_url: Image of the organization
.video_url: The video about the organization.
.info: information about the organization.
.user_id: The id of a certain user in organization.

# GET/organization/:id
This endpoints let you get a certain organization by the id parameter in the URL. The response body is an object representing the organization, with the following properties:
.name: name of the organization
.description: description about the organization
.Location: place where the organization is located
.Year_established: The year the organization was established.
.image_url: Image of the organization
.video_url: The video about the organization.
.info: information about the organization.
.user_id: The id of a certain user in organization.

# PUT /organization/:id
This endpoint updates an existing organization, identified by the id parameter in the URL. The request body should be a JSON object with the following properties:
.name: name of the organization
.description: description about the organization
.Location: place where the organization is located
.Year_established: The year the organization was established.
.image_url: Image of the organization
.video_url: The video about the organization.
.info: information about the organization.
.user_id: The id of a certain user in organization
The response body is an object representing the newly updated organization, with those properties, plus a unique identifier

# DELETE/ profiles/:id
This endpoint deletes an existing profiles, identified by the id parameter in the URL.

# Donations endpoints
# POST/ donations/:id
This endpoint creates a new donor. The request body is a JSON object with the following properties:
.Contributed_amount : The amount the donors contribute
.Organization_id: The id of a certain organization
.user_id: The idea o a certain us

# GET/ donations/:id
This endpoint returns a single donor, identified by the id parameter in the URL. The response body is an object representing the user, with the following properties:
.Contributed_amount : The amount the donors contribute
.Organization_id: The id of a certain organization
.user_id: The idea o a certain user

# PUT/ donations/:id
This endpoint updates an existing donor, identified by the id parameter in the URL. The request body should be a JSON object with the following properties:
.Contributed_amount : The amount the donors contribute
.Organization_id: The id of a certain organization
.user_id: The idea o a certain user 

# DELETE/ donations/:id
This endpoint deletes an existing donor, identified by the id parameter in the URL.

# Releases
No releases published

# Packages
No packages published

# Contributors
David Mwai
Trevor Febias
Joseph Musyoki
Tulla
Simon Mureithi
Faith Kigen








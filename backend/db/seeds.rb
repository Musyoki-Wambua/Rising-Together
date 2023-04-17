# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
#Create 10 random users 
# user1=User.create(username: "kante", email: "kante@kante", password_digest: "1234", gender: "Male", role: "user")
# user2=User.create(username: "mike", email: "mike@mike.com", password_digest: "efgh", gender: "Male", role: "user")
# user3=User.create(username: "sarahbrown", email: "sarah.brown@sarah.com", password_digest: "mnop", gender: "Female", role: "user")
# user4=User.create(username: "lona", email: "lona@emily.com", password_digest: "qrst", gender: "Female", role: "user")
# user5=User.create(username: "james", email: "james@james.com", password_digest: "3456", gender: "Male", role: "admin")
# user6=User.create(username: "ted", email: "ted@ted.com", password: "ted1", gender: "Male", role: "user")
# user7=User.create(username: "jane", email: "jane@jane.com", password_digest: "abcd", gender: "Female", role: "admin")
# user8=User.create(username: "emily", email: "emily@emily.com", password_digest: "yzab", gender: "Female", role: "user")
# user9=User.create(username: "manu", email: "manu@manu.com", password_digest: "1334", gender: "Male", role: "user")
# user10=User.create(username: "nina", email: "nina@nina.com", password_digest: "1774", gender: "Female", role: "user")

#Create 5 random organizations 
# organization1=Organization.create(
# image_url: "https://pbs.twimg.com/media/FMcDkWKXwAE4ZVm?format=jpg&name=4096x4096", 
# name: "Feed Children", 
# year_established: 2000, 
# about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tortor pulvinar, elementum ante facilisis, posuere lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed semper, nibh euismod elementum egestas, quam enim finibus libero, eu ornare leo sapien id urna. Ut semper viverra tincidunt. Pellentesque porta ex porttitor, imperdiet odio facilisis, sodales erat. Etiam tortor ligula, facilisis at elit vel, pretium gravida ligula. Quisque tincidunt dui non fringilla blandit. Cras pellentesque mi id varius lacinia. Duis eget risus finibus, bibendum est sed, fringilla nisi. Praesent in commodo nibh, non viverra nunc. Duis ut tellus in lorem tincidunt vulputate vitae a leo. Nullam bibendum cursus nulla, at viverra mi imperdiet in. Vestibulum id magna commodo, vulputate dolor ut, sodales arcu. Etiam mollis non velit eget pharetra. Maecenas dignissim, lacus eu pellentesque consectetur, nunc risus gravida ante, vitae tempor lectus dui at ipsum. Nam molestie tellus ipsum, sed eleifend ante sagittis a.", 
# address: "11510 POEMA PL CHATSWORTH CA 91311-1113 USA",
# contact: 02177764, 
# user_id: 5)

# organization2=Organization.create(
# image_url: "https://6amcity.brightspotcdn.com/dims4/default/dbd026e/2147483647/strip/true/crop/1440x1080+0+170/resize/500x375!/quality/90/?url=https%3A%2F%2Fk1-prod-sixam-city.s3.amazonaws.com%2Fbrightspot%2F30%2Fdc%2Fe3cd893842fe8500d194c03c29f0%2F277958277-1037397217185242-8235575626330250868-n.jpg", 
# name: "Charity Foundation International", 
# year_established: 2010, 
# about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tortor pulvinar, elementum ante facilisis, posuere lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed semper, nibh euismod elementum egestas, quam enim finibus libero, eu ornare leo sapien id urna. Ut semper viverra tincidunt. Pellentesque porta ex porttitor, imperdiet odio facilisis, sodales erat. Etiam tortor ligula, facilisis at elit vel, pretium gravida ligula. Quisque tincidunt dui non fringilla blandit. Cras pellentesque mi id varius lacinia. Duis eget risus finibus, bibendum est sed, fringilla nisi. Praesent in commodo nibh, non viverra nunc. Duis ut tellus in lorem tincidunt vulputate vitae a leo. Nullam bibendum cursus nulla, at viverra mi imperdiet in. Vestibulum id magna commodo, vulputate dolor ut, sodales arcu. Etiam mollis non velit eget pharetra. Maecenas dignissim, lacus eu pellentesque consectetur, nunc risus gravida ante, vitae tempor lectus dui at ipsum. Nam molestie tellus ipsum, sed eleifend ante sagittis a.", 
# address: "1  RUTH AVE CHICOPEE MA 01013-3037 USA",
# contact: 0217777564, 
# user_id: 7)

# organization3=Organization.create(
# image_url: "https://williamsburgcommunityfoundation.org/wp-content/uploads/2019/11/Walsingham-862x575.png", 
# name: "Wilsingham Academy", 
# year_established: 2019, 
# about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tortor pulvinar, elementum ante facilisis, posuere lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed semper, nibh euismod elementum egestas, quam enim finibus libero, eu ornare leo sapien id urna. Ut semper viverra tincidunt. Pellentesque porta ex porttitor, imperdiet odio facilisis, sodales erat. Etiam tortor ligula, facilisis at elit vel, pretium gravida ligula. Quisque tincidunt dui non fringilla blandit. Cras pellentesque mi id varius lacinia. Duis eget risus finibus, bibendum est sed, fringilla nisi. Praesent in commodo nibh, non viverra nunc. Duis ut tellus in lorem tincidunt vulputate vitae a leo. Nullam bibendum cursus nulla, at viverra mi imperdiet in. Vestibulum id magna commodo, vulputate dolor ut, sodales arcu. Etiam mollis non velit eget pharetra. Maecenas dignissim, lacus eu pellentesque consectetur, nunc risus gravida ante, vitae tempor lectus dui at ipsum. Nam molestie tellus ipsum, sed eleifend ante sagittis a.", 
# address: "3010  36TH ST FARGO ND 58103-6291 USA",
# contact: 756454763, 
# user_id: 7)

# organization4=Organization.create(image_url: "https://houchens.com/wp-content/uploads/2021/07/ckc-2.jpg", 
# name: "Royal Seed International", 
# year_established: 2018, 
# about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tortor pulvinar, elementum ante facilisis, posuere lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed semper, nibh euismod elementum egestas, quam enim finibus libero, eu ornare leo sapien id urna. Ut semper viverra tincidunt. Pellentesque porta ex porttitor, imperdiet odio facilisis, sodales erat. Etiam tortor ligula, facilisis at elit vel, pretium gravida ligula. Quisque tincidunt dui non fringilla blandit. Cras pellentesque mi id varius lacinia. Duis eget risus finibus, bibendum est sed, fringilla nisi. Praesent in commodo nibh, non viverra nunc. Duis ut tellus in lorem tincidunt vulputate vitae a leo. Nullam bibendum cursus nulla, at viverra mi imperdiet in. Vestibulum id magna commodo, vulputate dolor ut, sodales arcu. Etiam mollis non velit eget pharetra. Maecenas dignissim, lacus eu pellentesque consectetur, nunc risus gravida ante, vitae tempor lectus dui at ipsum. Nam molestie tellus ipsum, sed eleifend ante sagittis a.", 
# address: "501  6TH ST HANKINSON ND 58041-4223 USA",
# contact: 0217777564, 
# user_id: 5)

# organization5=Organization.create(
# image_url: "https://yuva.info/wp-content/uploads/2022/05/pexels-photo-9090746.jpeg", 
# name: "Africa Rising", 
# year_established: 2020, 
# about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tortor pulvinar, elementum ante facilisis, posuere lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed semper, nibh euismod elementum egestas, quam enim finibus libero, eu ornare leo sapien id urna. Ut semper viverra tincidunt. Pellentesque porta ex porttitor, imperdiet odio facilisis, sodales erat. Etiam tortor ligula, facilisis at elit vel, pretium gravida ligula. Quisque tincidunt dui non fringilla blandit. Cras pellentesque mi id varius lacinia. Duis eget risus finibus, bibendum est sed, fringilla nisi. Praesent in commodo nibh, non viverra nunc. Duis ut tellus in lorem tincidunt vulputate vitae a leo. Nullam bibendum cursus nulla, at viverra mi imperdiet in. Vestibulum id magna commodo, vulputate dolor ut, sodales arcu. Etiam mollis non velit eget pharetra. Maecenas dignissim, lacus eu pellentesque consectetur, nunc risus gravida ante, vitae tempor lectus dui at ipsum. Nam molestie tellus ipsum, sed eleifend ante sagittis a.", 
# address: "1072 DIAMOND ST SAN DIEGO CA 92109-2674 USA",
# contact: 0217777564, 
# user_id: 5)

# organization6=Organization.create(
# image_url: "https://ministrywatch.com/wp-content/uploads/2022/12/pexels-givingtuesday-9826021-scaled.jpg", 
# name: "Giving Tuesday", 
# year_established: 2023, 
# about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tortor pulvinar, elementum ante facilisis, posuere lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed semper, nibh euismod elementum egestas, quam enim finibus libero, eu ornare leo sapien id urna. Ut semper viverra tincidunt. Pellentesque porta ex porttitor, imperdiet odio facilisis, sodales erat. Etiam tortor ligula, facilisis at elit vel, pretium gravida ligula. Quisque tincidunt dui non fringilla blandit. Cras pellentesque mi id varius lacinia. Duis eget risus finibus, bibendum est sed, fringilla nisi. Praesent in commodo nibh, non viverra nunc. Duis ut tellus in lorem tincidunt vulputate vitae a leo. Nullam bibendum cursus nulla, at viverra mi imperdiet in. Vestibulum id magna commodo, vulputate dolor ut, sodales arcu. Etiam mollis non velit eget pharetra. Maecenas dignissim, lacus eu pellentesque consectetur, nunc risus gravida ante, vitae tempor lectus dui at ipsum. Nam molestie tellus ipsum, sed eleifend ante sagittis a.", 
# address: "2715  WEBB AVE BRONX NY 10468-3236 USA",
# contact: 19876543, 
# user_id: 7)

# organization7=Organization.create(
# image_url: "https://dekalbccf.org/wp-content/uploads/2023/02/GDC-2023_web_Header-960x400.jpg", 
# name: "Giving Dekab County", 
# year_established: 2021, 
# about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tortor pulvinar, elementum ante facilisis, posuere lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed semper, nibh euismod elementum egestas, quam enim finibus libero, eu ornare leo sapien id urna. Ut semper viverra tincidunt. Pellentesque porta ex porttitor, imperdiet odio facilisis, sodales erat. Etiam tortor ligula, facilisis at elit vel, pretium gravida ligula. Quisque tincidunt dui non fringilla blandit. Cras pellentesque mi id varius lacinia. Duis eget risus finibus, bibendum est sed, fringilla nisi. Praesent in commodo nibh, non viverra nunc. Duis ut tellus in lorem tincidunt vulputate vitae a leo. Nullam bibendum cursus nulla, at viverra mi imperdiet in. Vestibulum id magna commodo, vulputate dolor ut, sodales arcu. Etiam mollis non velit eget pharetra. Maecenas dignissim, lacus eu pellentesque consectetur, nunc risus gravida ante, vitae tempor lectus dui at ipsum. Nam molestie tellus ipsum, sed eleifend ante sagittis a.", 
# address: "400 COUNTY ROAD 3924 ARLEY AL 35541-2445 USA",
# contact: 19876543, 
# user_id: 7)

# organization8=Organization.create(
# image_url: "https://www.feedingahc.org/wp-content/uploads/2022/05/pexels-givingtuesday-9826015-2048x1365-1-1024x683.jpeg", 
# name: "Chairity Wagon", 
# year_established: 2023, 
# about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tortor pulvinar, elementum ante facilisis, posuere lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed semper, nibh euismod elementum egestas, quam enim finibus libero, eu ornare leo sapien id urna. Ut semper viverra tincidunt. Pellentesque porta ex porttitor, imperdiet odio facilisis, sodales erat. Etiam tortor ligula, facilisis at elit vel, pretium gravida ligula. Quisque tincidunt dui non fringilla blandit. Cras pellentesque mi id varius lacinia. Duis eget risus finibus, bibendum est sed, fringilla nisi. Praesent in commodo nibh, non viverra nunc. Duis ut tellus in lorem tincidunt vulputate vitae a leo. Nullam bibendum cursus nulla, at viverra mi imperdiet in. Vestibulum id magna commodo, vulputate dolor ut, sodales arcu. Etiam mollis non velit eget pharetra. Maecenas dignissim, lacus eu pellentesque consectetur, nunc risus gravida ante, vitae tempor lectus dui at ipsum. Nam molestie tellus ipsum, sed eleifend ante sagittis a.", 
# address: "400 COUNTY ROAD 3924 ARLEY AL 35541-2445 USA",
# contact: 76576543, 
# user_id: 5)

# organization9=Organization.create(
# image_url: "https://img.freepik.com/free-photo/group-people-volunteering-foodbank-poor-people_23-2149012197.jpg", 
# name: "Feeding the Future", 
# year_established: 2023, 
# about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tortor pulvinar, elementum ante facilisis, posuere lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed semper, nibh euismod elementum egestas, quam enim finibus libero, eu ornare leo sapien id urna. Ut semper viverra tincidunt. Pellentesque porta ex porttitor, imperdiet odio facilisis, sodales erat. Etiam tortor ligula, facilisis at elit vel, pretium gravida ligula. Quisque tincidunt dui non fringilla blandit. Cras pellentesque mi id varius lacinia. Duis eget risus finibus, bibendum est sed, fringilla nisi. Praesent in commodo nibh, non viverra nunc. Duis ut tellus in lorem tincidunt vulputate vitae a leo. Nullam bibendum cursus nulla, at viverra mi imperdiet in. Vestibulum id magna commodo, vulputate dolor ut, sodales arcu. Etiam mollis non velit eget pharetra. Maecenas dignissim, lacus eu pellentesque consectetur, nunc risus gravida ante, vitae tempor lectus dui at ipsum. Nam molestie tellus ipsum, sed eleifend ante sagittis a.", 
# address: "2715  WEBB AVE BRONX NY 10468-3236 USA",
# contact: 57654377, 
# user_id: 7)



#Create 8 random donations 
# donation1=Donation.create(contributed_amount:"$960,000", organization_id: 5, user_id: 2)
# donation2=Donation.create(contributed_amount:"$80,000", organization_id: 2, user_id: 4)
# donation3=Donation.create(contributed_amount:"$630,000", organization_id: 3, user_id: 8)
# donation4=Donation.create(contributed_amount:"$960,000", organization_id: 5, user_id: 1)
# donation5=Donation.create(contributed_amount:"$60,000", organization_id: 4, user_id: 6)
# donation6=Donation.create(contributed_amount:"$110,000", organization_id: 5, user_id: 3)
# donation7=Donation.create(contributed_amount:"$420,000", organization_id: 4, user_id: 10)
# donation8=Donation.create(contributed_amount:"$90,000", organization_id: 3, user_id: 9)

#Create 12 random reviews 
12.times do 
    review = Review.create(
      user_id: rand(1..20),
      organization_id: rand(1..20),
      rating: rand(1..5),
      comments: Faker::Lorem.sentence
    )
     end

# #Create 5 random profiles  
# profile1=Profile.create(
# image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgzc2yjRRStAWu5zWg3lrfR3qTEeNkEDn1ZA&usqp=CAU", 
# first_name: "Mike", 
# last_name: "Smith", 
# age: 32, 
# gender: "Male", 
# country: "United States", 
# contact: 2136746534, 
# skills: "Social Worker", 
# user_id: 2)

# profile1=Profile.create(
# image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGKIM5_A076h98Q5MnnlXaicxPiINChpa8og&usqp=CAU", 
# first_name: "Manu", 
# last_name: "Manu", 
# age: 29, 
# gender: "Male", 
# country: "United States", 
# contact: 923546876, 
# skills: "Delopmental Studies", 
# user_id: 9)

# profile1=Profile.create(
# image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXgNIXw5kLN-HYjnlFomLSomxXyb_MsCfqAQ&usqp=CAU", 
# first_name: "Sarah", 
# last_name: "Brown", 
# age: 22, 
# gender: "Female", 
# country: "Sweden", 
# contact: 764999982, 
# skills: "Health Services", 
# user_id: 3)

# profile1=Profile.create(
# image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5VfhhTE9EaqkF5GdKazjSEM-9Lr-1u3c7rg&usqp=CAU", 
# first_name: "Kante", 
# last_name: "Edwards", 
# age: 27, 
# gender: "Male", 
# country: "United States", 
# contact: 1166646534, 
# skills: "Architect", 
# user_id: 1)

# profile1=Profile.create(
# image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7rBIa-xgMsUOe_QcziX08QqOFD0MBz6Pk9g&usqp=CAU", 
# first_name: "Emily", 
# last_name: "Edwards", 
# age: 23, 
# gender: "Female", 
# country: "United Kingdom", 
# contact: 1134326675, 
# skills: "Human Activist", 
# user_id: 8)

    
# #Create 5 random volunteers 
# volunteer1=Volunteer.create(organization_name: "Africa Rising", user_id: 4, organization_id: 5)
# volunteer2=Volunteer.create(organization_name: "Feed Children", user_id: 1, organization_id: 1)
# volunteer3=Volunteer.create(organization_name: "Charity Foundation International", user_id: 6, organization_id: 2)
# volunteer4=Volunteer.create(organization_name: "Feeding the Future", user_id: 9, organization_id: 7)
# volunteer5=Volunteer.create(organization_name: "Royal Seed International", user_id: 8, organization_id: 4)




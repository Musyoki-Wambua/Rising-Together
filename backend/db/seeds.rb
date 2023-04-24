#Create 10 random users 
user1=User.create(username: "kante", email: "kante@kante", password_digest: "1234", gender: "Male", role: "user")
user2=User.create(username: "mike", email: "mike@mike.com", password_digest: "efgh", gender: "Male", role: "user")
user3=User.create(username: "sarahbrown", email: "sarah.brown@sarah.com", password_digest: "mnop", gender: "Female", role: "user")
user4=User.create(username: "lona", email: "lona@emily.com", password_digest: "qrst", gender: "Female", role: "user")
user5=User.create(username: "james", email: "james@james.com", password_digest: "3456", gender: "Male", role: "admin")
user6=User.create(username: "ted", email: "ted@ted.com", password: "ted1", gender: "Male", role: "user")
user7=User.create(username: "jane", email: "jane@jane.com", password_digest: "abcd", gender: "Female", role: "user")
user8=User.create(username: "emily", email: "emily@emily.com", password_digest: "yzab", gender: "Female", role: "user")
user9=User.create(username: "manu", email: "manu@manu.com", password_digest: "1334", gender: "Male", role: "user")
user10=User.create(username: "nina", email: "nina@nina.com", password_digest: "1774", gender: "Female", role: "user")

# Create 5 random organizations 
organization1=Organization.create(
    name: "Charity Water",
    description: "Charity Water is a non-profit organization bringing clean and safe drinking water to people in developing countries.",
    location: "Nairobi, Kenya",
    year_established: 2020,
    image_url: "https://yuva.info/wp-content/uploads/2022/05/pexels-photo-9090746.jpeg",
    video_url: "https://www.youtube.com/embed/Uoq2EG3BpS4",
    info: "Women Africa is a Non-Governmental Organisation promoting the broadest participation of women and girls in the leadership space through capacity development, civic education and public advocacy.",
    contact: "+25473457234",
    user_id:3
)
    
    organization2=Organization.create(
        name: "Action Against Hunger",
        description: "To end child hunger whilst providing communities with access to safe water and amazing solutions to hunger",
        location: "Paris, France",
        year_established: 1979,
        image_url: "https://www.actionagainsthunger.org/app/uploads/2022/09/SSD_2021_PeterCaton_0336-scaled.jpg",
        video_url: "https://www.youtube.com/embed/LN70VcYGYW0",
        info: "Action Against Hunger is a global humanitarian organization which originated in France and is committed to ending world hunger. The organization helps malnourished children and provides communities with access to safe water and sustainable solutions to hunger",
        contact: "+33-7345-7234",
        user_id:4
        )
    
        organization3=Organization.create(
            name: "SOS Children's Villages",
            description: "SOS Children's Villages is the largest non-governmental organisation focused on supporting children without parental care and families at risk.",
            location: "Nairobi, Kenya",
            year_established: 1973,
            image_url: "https://www.soschildrensvillages.ca/sites/default/files/what-we-do-sos-childrens-villages/foursoschildren.jpg",
            video_url: "https://www.youtube.com/embed/IFBj1XdQJ8M",
            info: "SOS Children's Villages is the world's largest organization focused on ensuring that children and young people without parental care or at risk of losing it grow up with the care, relationships and support they need to become their strongest selves.",
            contact: "+254-722-061",
            user_id:2
            )

            organization3=Organization.create(
                name: "Habitat For Humanity",
                description: "Habitat for Humanity is a nonprofit housing organization working to empower people in the world's poorest communities to overcome the chronic lack of decent housing. Our vision is a world where everyone has a decent place to live.",
                location: "Koinan, USA",
                year_established: 1942,
                image_url: "https://assets3.cbsnewsstatic.com/hub/i/r/2020/08/22/776c8ea8-f864-4b82-891f-9d5647dd0f74/thumbnail/1200x630/4c7e634e98343934d82417898bc549e6/corinne-oconnell.jpg",
                video_url: "https://www.youtube.com/embed/vsprhbJH6Yo",
                info: "Habitat for Humanity is a global nonprofit housing organization working in local communities across all 50 states in the U.S. and in approximately 70 countries. Habitat''s vision is of a world where everyone has a decent place to live. ",
                contact: "+1-724-954",
                user_id:6
                )
 
                organization4=Organization.create(
                    name: "Women Africa",
                    description: "Women Africa is a Non-Governmental Organisation promoting the broadest participation of women and girls in the leadership space through capacity development, civic education and public advocacy.",
                    location: "Rwanda",
                    year_established: 2015,
                    image_url: "https://techmoran.com/wp-content/uploads/2020/11/pexels-photo-3213283.jpg",
                    video_url: "https://www.youtube.com/embed/1pahb_VQdwQ",
                    info: "Women Africa promotes the broadest participation of women and girls in the leadership space, works to end sexual and gender-based violence and to empower communities to advocate for gender responsive interventions.",
                    contact: "+250-703-0978",
                    user_id:8
                    )

                    organization5=Organization.create(
                        name: "Vision Aid Organisation",
                        description: "Vision Aid Overseas (VAO) is a registered charity in the United Kingdom, which provides optical aid and services to developing countries in Africa",
                        location: "Crawley, West Sussex",
                        year_established: 1985,
                        image_url: "https://assets3.cbsnewsstatic.com/hub/i/r/2020/08/22/776c8ea8-f864-4b82-891f-9d5647dd0f74/thumbnail/1200x630/4c7e634e98343934d82417898bc549e6/corinne-oconnell.jpg",
                        video_url: "https://www.youtube.com/embed/Y0w0VMJ9jXg",
                        info: "What has Vision Aid Overseas achieved? Vision Aid Overseas was founded 1985 by dispensing opticians and optometrists who cared passionately about helping people in the developing world who needed good vision to live an ordinary life.",
                        contact: "+44-0106-296",
                        user_id:10
                        )

                        organization6=Organization.create(
                            name: "End Poverty Now",
                            description: "endPoverty is a global, faith-based organization empowering hard-working men and women with economic and spiritual resources that unleash their capacities and liberate them from the entanglements of poverty.",
                            location: "Sudan",
                            year_established: 1985,
                            image_url: "https://www.fao.org/typo3temp/pics/2bddcc421e.jpg",
                            video_url: "https://www.youtube.com/embed/4WRVZ2E8Ayk",
                            info: "endPoverty.org is a faith-based 501(c)(3) non-profit organization whose mission is to empower the working poor in developing countries to lift themselves out of poverty",
                            contact: "+157-278-606",
                            user_id:9
                        )
                        
        
    



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
# 12.times do 
#     review = Review.create(
#       user_id: rand(1..20),
#       organization_id: rand(1..20),
#       rating: rand(1..5),
#       comments: Faker::Lorem.sentence
#     )
#     end

#Create 5 random profiles  
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
# gender: "Male", https://agrilinks.org/sites/default/files/styles/featured/public/screen_shot_2019-11-26_at_12.42.15.png
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

Microchips provide an effective, permanent, and reliable means of identifying your animal. Microchips implanted by Animal Services are automatically registered in a national microchip database. It is important, however, that pet owners ensure their information is updated if they move or change phone numbers.
#Create 5 random volunteers 
volunteer1=Volunteer.create(organization_name: "Africa Rising", user_id: 4, organization_id: 5 username: "Lona")
volunteer2=Volunteer.create(organization_name: "Feed Children", user_id: 1, organization_id: 1 username:"Kante")
volunteer3=Volunteer.create(organization_name: "Charity Foundation International", user_id: 6, organization_id: 2 username:"Ted")
volunteer4=Volunteer.create(organization_name: "Feeding the Future", user_id: 9, organization_id: 7 username:"Manu")
volunteer5=Volunteer.create(organization_name: "Royal Seed International", user_id: 8, organization_id: 4 username:"Emily")Microchips provide an effective, permanent, and reliable means of identifying your animal. Microchips implanted by Animal Services are automatically registered in a national microchip database. It is important, however, that pet owners ensure their information is updated if they move or change phone numbers.

# 10 random services 
#service1= service.create(name: Dog walking and exercise service description: "This service enables the dog to exercise moreand stretch itself even more", price:"$13" image_url: "https://wag-club.co.uk/img/benefits_dog_walking.jpg"
#service2= service.create(name: Pet Adoption  Services , description:"Pet adoption is the process of transferring responsibility for a pet that was previously owned by another party such as a person, shelter, or rescue ..." , price:"" image_url: "https://agrilinks.org/sites/default/files/styles/featured/public/screen_shot_2019-11-26_at_12.42.15.png"
  #service3= service.create(name: Animal tagging services service description: "using a means of marking is a process done to identify and track specific animals. It is done for a variety of reasons including verification of ownership, biosecurity control, and tracking for research or agricultural purposes.", price:"500kshs" image_url: "https://d27p2a3djqwgnt.cloudfront.net/wp-content/uploads/2017/01/11144732/cows-1209635_1280.jpg"
  #service4= service.create(name: Dental Care services service description: "Veterinary dentistry includes the cleaning, adjustment, filing, extraction, or repair of your pets' teeth and all other aspects of oral health care. These procedures should be performed by a veterinarian or a board-certified veterinary dentist.", price:"" image_url: "https://thenoblevet.com/wp-content/uploads/2020/12/The-Noble-Veterinary-Surgeons-Pet-Dentistry.jpg.webp"
   #service5= service.create(name: Animal microchipping services service description: "Microchips provide an effective, permanent, and reliable means of identifying your animal. Microchips implanted by Animal Services are automatically registered in a national microchip database. It is important, however, that pet owners ensure their information is updated if they move or change phone numbers.", price:"$5" image_url: "https://www.msah.com/sites/default/files/Microchip.jpeg"
  #service1= service.create(name: Dental Care services service description: "", prMicrochips provide an effective, permanent, and reliable means of identifying your animal. Microchips implanted by Animal Services are automatically registered in a national microchip database. It is important, however, that pet owners ensure their information is updated if they move or change phone numbers.ice:"" image_url: "https://thenoblevet.com/wp-content/uploads/2020/12/The-Noble-Veterinary-Surgeons-Pet-Dentistry.jpg.webp"
                    
      


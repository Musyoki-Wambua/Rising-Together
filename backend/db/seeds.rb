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
organization1=Organization.create(
name: "Charity Water",
description: "Charity Water is a non-profit organization bringing clean and safe drinking water to people in developing countries.",
location: "Nairobi, Kenya",
year_established: 2020,
image_url: "https://yuva.info/wp-content/uploads/2022/05/pexels-photo-9090746.jpeg",
video_url: "https://www.youtube.com/embed/Uoq2EG3BpS4",
info: "Doctors Without Borders, also known as Médecins Sans Frontières (MSF), is an international humanitarian organization that provides medical aid to people in crisis situations around the world. The organization was founded in 1971 by a group of French doctors and journalists who wanted to provide emergency medical assistance to people affected by war, natural disasters, and other humanitarian crises.",
contact: "+25473457234",
user_id:3
)

organization1=Organization.create(
name: "Nelson Mandela Foundation",
description: "The Nelson Mandela Foundation is a non-profit organisation founded by Nelson Mandela in 1999 to promote Mandela's vision of freedom and equality for all. The chairman is professor Njabulo Ndebele.",
location: "Johannesburg, South Africa",
year_established: 1996,
image_url: "https://info.happy-science.org/files/2015/11/qzyt98zg.jpg",
video_url: "https://www.youtube.com/embed/zvAnEuRQV2Y",
info: "The Nelson Mandela Foundation was established in 1999 when its Founder, Mr Nelson Mandela, stepped down as the President of South Africa.

Mr Mandela was South Africas first democratically elected President. On 9 May 1994, soon after our landmark election results were in, he was unanimously elected President by South Africas new Members of Parliament.

The next day, Nelson Rolihlahla Mandela was sworn in at an inauguration ceremony at the Union Buildings in Pretoria.",
contact: "+27 (0)11 547 5600",
user_id:10
)

organization1=Organization.create(
name: "ALIMA (The Alliance for International Medical Action)",
description: "ALIMAs purpose is to save lives and to care for the most at-risk populations, without any discrimination based on identity, religion or political affiliation. Our actions rely on proximity, innovation, and the alliance of organizations and individuals.

We act with humanism, impartiality and with the respect of universal medical ethics.",
location: "Dakar , senegal",
year_established: 2003,
image_url: "https://www.chinadailyhk.com/attachments/image/242/231/76/670472_349579/670472_349579_800_auto_jpg.jpg",
video_url: "https://www.youtube.com/embed/WO-Sqx0W_Bw",
info: "The story of ALIMA began in 2009 in Niger. While the entire medical profession witnessed an alarming peak in acute malnutrition and increasing infant mortality rates, the health structures for managing malnutrition  were becoming increasingly rare.

In 2008, a year before ALIMA founding, many international humanitarian organizations had been expelled from the country. Local groups were the only ones left to act, but they lacked resources. A new model of humanitarian assistance was clearly needed: an African medical alliance connecting national NGOs and international research institutes..",
contact: " 831 620 398",
user_id:13
)

organization1=Organization.create(
name: "Wellbeing Foundation",
description: "The Wellbeing Foundation Africa (WBFA) is a non-governmental organization, founded in 2004, by Her Excellency, Mrs Toyin Ojora-Saraki, with the aim of improving health outcomes for women, infants and children. The Foundation combines its programmes with advocacy in Nigeria and around the world to provide robust support for its primary stakeholders from birth to age.",
location: "lagos , Nigeria",
year_established: 2004,
image_url: "https://wbfafrica.org/sites/default/files//slideIMG_24702.jpg",
video_url: "https://www.youtube.com/embed/6hHjUG_New8",
info: "The prioritisation of global impact, in alignment with the United Nations Sustainable Development Goals (SDG), informs the following three objectives of the Wellbeing Group towards measurable and meaningful outcomes.

Empowering and educating front line community health workers, including midwives and nurses.
Increasing accessibility of sustainable maternal, new-born, infant, child and adolescent continuum of care through a lifetime of healthy habits from reproductive health education and family planning, to improved water sanitation and handwashing (WASH) behaviours.",
contact: " +564907098",
user_id:14
)

organization1=Organization.create(
name: "Foundation for African Medicine & Education (FAME) (TANZANIA)",
description: "FAME is an organization entirely focused on advancing quality medical care in rural Tanzania. From the beginning, we set out to provide communities in the Northern Highlands of Tanzania with a unique healthcare experience one marked by patient-centered care and high-quality service. In that spirit, FAME endeavors to meet the medical needs of ordinary Tanzanian people, including underserved populations in the most rural parts of the region.",
location: "Dodoma , Tanzania",
year_established: 2010,
image_url: "https://blog.africadreamsafaris.com/",
video_url: "https://www.youtube.com/embed/hXVoLFwQvLE",
info: "IN ADDITION TO PROVIDING COMPREHENSIVE PRIMARY CARE IN OUR OUTPATIENT CLINIC AND INPATIENT HOSPITAL, FAME PROVIDES SERVICES IN SURGERY, MATERNAL & CHILD HEALTH, DIAGNOSTICS, COMMUNITY OUTREACH, AND EDUCATION & CAPACITY BUILDING.",
contact: " +255 769 996 888",
user_id:16
)
organization1=Organization.create(
name: "Foundation for African Medicine & Education (FAME) (TANZANIA)",
description: "FAME is an organization entirely focused on advancing quality medical care in rural Tanzania. From the beginning, we set out to provide communities in the Northern Highlands of Tanzania with a unique healthcare experience one marked by patient-centered care and high-quality service. In that spirit, FAME endeavors to meet the medical needs of ordinary Tanzanian people, including underserved populations in the most rural parts of the region.",
location: "Dodoma , Tanzania",
year_established: 2010,
image_url: "https://blog.africadreamsafaris.com/",
video_url: "https://www.youtube.com/embed/hXVoLFwQvLE",
info: "IN ADDITION TO PROVIDING COMPREHENSIVE PRIMARY CARE IN OUR OUTPATIENT CLINIC AND INPATIENT HOSPITAL, FAME PROVIDES SERVICES IN SURGERY, MATERNAL & CHILD HEALTH, DIAGNOSTICS, COMMUNITY OUTREACH, AND EDUCATION & CAPACITY BUILDING.",
contact: " +255 769 996 888",
user_id:16
)



#Create 8 random donations 
donation1=Donation.create(contribution_amount: 960000, organization_id: 5, user_id: 2)
donation2=Donation.create(contribution_amount:"$80,000", organization_id: 2, user_id: 4)
donation3=Donation.create(contribution_amount:"$630,000", organization_id: 3, user_id: 8)
donation4=Donation.create(contribution_amount:"$960,000", organization_id: 5, user_id: 1)
donation5=Donation.create(contribution_amount:"$60,000", organization_id: 4, user_id: 6)
donation6=Donation.create(contribution_amount:"$110,000", organization_id: 5, user_id: 3)
donation7=Donation.create(contribution_amount:"$420,000", organization_id: 4, user_id: 10)
donation8=Donation.create(contribution_amount:"$90,000", organization_id: 3, user_id: 9)

#Create 12 random reviews 

# 12.times do 
#     review = Review.create(
#       user_id: rand(1..20),
#       organization_id: rand(1..20),
#       rating: rand(1..5),
#       comments: Faker::Lorem.sentence
#     )
#      end

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




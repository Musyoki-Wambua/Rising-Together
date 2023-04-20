#Create 10 random users 
user1=User.create(username: "kante", email: "kante@kante", password_digest: "1234", gender: "Male", role: "user")
user2=User.create(username: "mike", email: "mike@mike.com", password_digest: "efgh", gender: "Male", role: "user")
user3=User.create(username: "sarahbrown", email: "sarah.brown@sarah.com", password_digest: "mnop", gender: "Female", role: "user")
user4=User.create(username: "lona", email: "lona@emily.com", password_digest: "qrst", gender: "Female", role: "user")
user5=User.create(username: "james", email: "james@james.com", password_digest: "3456", gender: "Male", role: "admin")
user6=User.create(username: "joy", email: "joy@ted.com", password: "7761", gender: "Female", role: "user")
user7=User.create(username: "jane", email: "jane@jane.com", password_digest: "abcd", gender: "Female", role: "user")
user8=User.create(username: "emily", email: "emily@emily.com", password_digest: "yzab", gender: "Female", role: "user")
user9=User.create(username: "manu", email: "manu@manu.com", password_digest: "1334", gender: "Male", role: "user")
user10=User.create(username: "nina", email: "nina@nina.com", password_digest: "1774", gender: "Female", role: "user")

#Create 18 random organizations 
organization1=Organization.create(
name: "Charity Water",
description: "Charity Water is a non-profit organization bringing clean and safe drinking water to people in developing countries.",
location: "Nairobi, Kenya",
year_established: 2020,
image_url: "https://yuva.info/wp-content/uploads/2022/05/pexels-photo-9090746.jpeg",
video_url: "https://www.youtube.com/embed/Uoq2EG3BpS4",
info: "Doctors Without Borders, also known as Médecins Sans Frontières (MSF), is an international humanitarian organization that provides medical aid to people in crisis situations around the world. The organization was founded in 1971 by a group of French doctors and journalists who wanted to provide emergency medical assistance to people affected by war, natural disasters, and other humanitarian crises.",
contact: "+254-734-234-234", 
user_id:3)
organization2=Organization.create(
name: "Doctors Without Borders",
description: "Doctors Without Borders is an international humanitarian organization that provides medical care to people affected by conflict, epidemics, and disasters.",
location: "Geneva, Switzerland",
year_established: 2021, 
image_url: "https://assets.tiltify.com/uploads/cause/image/21/doctors-without-borders-msf-image-1587513225216.jpg",
video_url: "https://www.youtube.com/embed/okrkVJRfOuk",
info: "Doctors Without Borders, also known as Médecins Sans Frontières (MSF), is an international humanitarian organization that provides medical aid to people in crisis situations around the world. The organization was founded in 1971 by a group of French doctors and journalists who wanted to provide emergency medical assistance to people affected by war, natural disasters, and other humanitarian crises.",
contact: "+41-001-675-324", 
user_id:2)
organization3=Organization.create(
name: "Greenpeace",
description: "Greenpeace is an environmental organization that campaigns for solutions to urgent environmental problems.",
location: "Amsterdam, Netherlands",
year_established: 2022, 
image_url: "https://www.greenpeace.org/static/planet4-africa-stateless/2018/11/fcbd0fd1-gp0stsle6-768x545.jpg",
video_url: "https://www.youtube.com/embed/bfsC3N1Vsi8",
info: "Greenpeace is an international environmental organization that campaigns for solutions to urgent environmental problems. The organization uses peaceful protest and creative communication to expose environmental issues and promote solutions that are essential to a green and peaceful future.",
contact: "+31-987-645-277", 
user_id:2)
organization4=Organization.create(
name: "Oxfam",
description: "Oxfam is an international confederation of 20 NGOs working together with partners in over 90 countries to end poverty and injustice.",
location: "Oxford, UK",
year_established: 2019,
image_url: "https://oi-files-d8-prod.s3.eu-west-2.amazonaws.com/s3fs-public/styles/link_block_extra_large/public/emergency/summary/oes_33479_-lpr.jpg?h=a1e1a043&itok=AeJ9FkTS",
video_url: "https://www.youtube.com/embed/3B5RYotkl9w",
info: "Oxfam is an international confederation of 20 NGOs working together with partners in over 90 countries to end poverty and injustice. Oxfam's work is focused on four main areas: economic justice, gender justice, climate justice, and humanitarian response. The organization works to empower communities to lift themselves out of poverty and to advocate for policies that create a more just and sustainable",
contact: "+44-987-454-325", 
user_id:7)
organization5=Organization.create(
name: "UNICEF",
description: "UNICEF works in over 190 countries and territories to save children's lives, defend their rights, and help them fulfill their potential.",
location: "New York, USA",
year_established: 2018, 
image_url: "https://www.unicef.org/wca/sites/unicef.org.wca/files/styles/hero_extended/public/UNI212395.jpg?itok=i9C4D-hi",
video_url: "https://www.youtube.com/embed/0ZiEwDJMxjs",
info: "Our mission is to provide humanitarian assistance and development support to children and their families, with a focus on health, education, child protection, and emergency response. We partner with governments, civil society organizations, and communities to deliver essential services, strengthen child protection systems, and advocate for policies and programs that benefit children.",
contact: "+1-564-345-4325", 
user_id:9)
organization6=Organization.create(
name: "Innovations for Poverty Action",
description: "We work hand-in-hand with local decision-makers to identify needs, create evidence, and put evidence into action. We are building a results-focused culture of learning and continuous improvement in the fight against poverty.", 
location: "Nairobi, Kenya",
year_established: 2020, 
image_url: "https://images.pexels.com/photos/9968380/pexels-photo-9968380.jpeg?cs=srgb&dl=pexels-lagos-food-bank-initiative-9968380.jpg&fm=jpg", 
video_url: "https://www.youtube.com/embed/Q9t6eVzV-Ik", 
info: "IPA exists to solve these problems. We test promising ideas across contexts and along the path to scale, proactively engage key decision-makers throughout the research process, share findings with the right people at the right time, and equip partners with the skills and tools they need to use data and evidence. Our vision? A world with more evidence and less poverty.",
contact: "+254-001-564-231",
user_id: 2)
organization7=Organization.create(
name: "Give Directly Incorporaton", 
description: "GiveDirectly is a nonprofit that lets donors like you send money directly to the world’s poorest households. We believe people living in poverty deserve the dignity to choose for themselves how best to improve their lives — cash enables that choice.", 
location: "Lilogwe, Malawi", 
year_established: 2017,
image_url: "https://media.licdn.com/dms/image/C561BAQFTngdzappICA/company-background_10000/0/1581023945622?e=1682226000&v=beta&t=ta3Kk7PP9onaUshHHeOVgQo0rF_UvBIwprPVu2523K0", 
video_url: "https://www.youtube.com/embed/QpDGJcoxxo4", 
info: "GiveDirectly is a nonprofit that lets donors like you send money directly to the world’s poorest households. We believe people living in poverty deserve the dignity to choose for themselves how best to improve their lives — cash enables that choice.", 
contact: "+265-098-564-876", 
user_id: 7)
organization8=Organization.create(
name: "Save the Children", 
description: "Save the Children was the first global organization devoted solely to protecting children from harm. Today, as COVID-19 threatens to exacerbate the risk of violence against children", 
location: "Orange-Street, United Kindgom", 
year_established: 1919,
image_url: "https://pbs.twimg.com/media/FrazvHBXgAANmHS.jpg", 
video_url: "https://www.youtube.com/embed/LoEyd6_jztc", 
info: "All children deserve better. We champion the rights and interests of children worldwide, putting the most vulnerable children first. With 25,000 dedicated staff across 116 countries, we respond to major emergencies, deliver innovative development programmes, and ensure children's voices are heard through our campaigning to build a better future for and with children.", 
contact: "+44-325-001-398", 
user_id: 8)
organization9=Organization.create(
name: "Care International", 
description: "Founded in 1945 with the creation of the CARE Package®, we are a leading humanitarian organization fighting global poverty.", 
location: "Geneva, Switzerland", 
year_established: 1919,
image_url: "https://www.care-international.org/sites/default/files/styles/og_image/public/2022-04/USA_Contact%20us%20food%20distribution_RS77801.jpg?h=56d0ca2e&itok=G_3pO0rN", 
video_url: "https://www.youtube.com/embed/qghBvHa-Z6E", 
info: "CARE International places special focus on working alongside women and girls. Equipped with the proper resources, women and girls have the power to lift whole families and entire communities out of poverty. In 2022, CARE International worked in over 111 countries, reaching 174 million people through nearly 1,631 projects.", 
contact: "+41-689-987-328", 
user_id: 1)
organization10=Organization.create(
name: "Women Africa",
description: "Women Africa is a Non-Governmental Organisation promoting the broadest participation of women and girls in the leadership space through capacity development, civic education and public advocacy.",
location: "Rwanda",
year_established: 2015,
image_url: "https://static.dw.com/image/48229991_905.jpg",
video_url: "https://www.youtube.com/embed/1pahb_VQdwQ",
info: "Women Africa promotes the broadest participation of women and girls in the leadership space, works to end sexual and gender-based violence and to empower communities to advocate for gender responsive interventions.",
contact: "+250-223-703-097",
user_id:8)
organization11=Organization.create(
name: "Action Against Hunger",
description: "To end child hunger whilst providing communities with access to safe water and amazing solutions to hunger",
location: "Paris, France",
year_established: 1979,
image_url: "https://www.actionagainsthunger.org/app/uploads/2022/09/NIG_FSL_2018_LysArango_distribution_Mayahi-13-scaled.jpg",
video_url: "https://www.youtube.com/embed/LN70VcYGYW0",
info: "Action Against Hunger is a global humanitarian organization which originated in France and is committed to ending world hunger. The organization helps malnourished children and provides communities with access to safe water and sustainable solutions to hunger",
contact: "+33-349-734-723",
user_id:4)
organization12=Organization.create(
name: "SOS Children's Villages",
description: "SOS Children's Villages is the largest non-governmental organisation focused on supporting children without parental care and families at risk.",
location: "Nairobi, Kenya",
year_established: 1973,
image_url: "https://happieesouls.com/media/ngo/gallery/sos_children_village/584a7d6c940a1sos_bglr.jpg",
video_url: "https://www.youtube.com/embed/IFBj1XdQJ8M",
info: "SOS Children's Villages is the world's largest organization focused on ensuring that children and young people without parental care or at risk of losing it grow up with the care, relationships and support they need to become their strongest selves.",
contact: "+254-722-061",
user_id:2)
organization13=Organization.create(
name: "Habitat For Humanity",
description: "Habitat for Humanity is a nonprofit housing organization working to empower people in the world's poorest communities to overcome the chronic lack of decent housing. Our vision is a world where everyone has a decent place to live.",
location: "Koinan, USA",
year_established: 1942,
image_url: "https://media.licdn.com/dms/image/C4D22AQHSBT_DwsY9Hw/feedshare-shrink_800/0/1674126311143?e=1684972800&v=beta&t=Q0uukkZDSChjtFnTdCCuObASqhpNmBL4MyRstZgTz10",
video_url: "https://www.youtube.com/embed/vsprhbJH6Yo",
info: "Habitat for Humanity is a global nonprofit housing organization working in local communities across all 50 states in the U.S. and in approximately 70 countries. Habitat''s vision is of a world where everyone has a decent place to live. ",
contact: "+1-7245-554-954",
user_id:6)
organization14=Organization.create(
name: "Vision Aid Organisation",
description: "Vision Aid Overseas (VAO) is a registered charity in the United Kingdom, which provides optical aid and services to developing countries in Africa",
location: "Crawley, West Sussex",
year_established: 1985,
image_url: "https://umbukstorage.blob.core.windows.net/media-cache/9/9f7b7d8cffcba66c88a0ebe49499d2415b65d640.webp",
video_url: "https://www.youtube.com/embed/Y0w0VMJ9jXg",
info: "What has Vision Aid Overseas achieved? Vision Aid Overseas was founded 1985 by dispensing opticians and optometrists who cared passionately about helping people in the developing world who needed good vision to live an ordinary life.",
contact: "+44-010-296-665",
user_id:10)
organization15=Organization.create(
name: "End Poverty Now",
description: "endPoverty is a global, faith-based organization empowering hard-working men and women with economic and spiritual resources that unleash their capacities and liberate them from the entanglements of poverty.",
location: "Sudan",
year_established: 1985,
image_url: "https://live.staticflickr.com/2096/5711570012_e46d5d8a07_z.jpg",
video_url: "https://www.youtube.com/embed/4WRVZ2E8Ayk",
info: "endPoverty.org is a faith-based 501(c)(3) non-profit organization whose mission is to empower the working poor in developing countries to lift themselves out of poverty",
contact: "+157-278-606-908",
user_id:9)
organization16=Organization.create(
name: "Foundation for African Medicine & Education (FAME) (TANZANIA)",
description: "FAME is an organization entirely focused on advancing quality medical care in rural Tanzania. From the beginning, we set out to provide communities in the Northern Highlands of Tanzania with a unique healthcare experience one marked by patient-centered care and high-quality service. In that spirit, FAME endeavors to meet the medical needs of ordinary Tanzanian people, including underserved populations in the most rural parts of the region.",
location: "Dodoma , Tanzania",
year_established: 2010,
image_url: "https://media.istockphoto.com/id/144954370/photo/after-water.jpg?s=612x612&w=0&k=20&c=-MBCLAgZAfEWWNxteVu_Pov8wYrvqYxqEYnmvjsPzfY=",
video_url: "https://www.youtube.com/embed/hXVoLFwQvLE",
info: "IN ADDITION TO PROVIDING COMPREHENSIVE PRIMARY CARE IN OUR OUTPATIENT CLINIC AND INPATIENT HOSPITAL, FAME PROVIDES SERVICES IN SURGERY, MATERNAL & CHILD HEALTH, DIAGNOSTICS, COMMUNITY OUTREACH, AND EDUCATION & CAPACITY BUILDING.",
contact: "+255-769-996-888",
user_id:4
)
organization17=Organization.create(
name: "Wellbeing Foundation",
description: "The Wellbeing Foundation Africa (WBFA) is a non-governmental organization, founded in 2004, by Her Excellency, Mrs Toyin Ojora-Saraki, with the aim of improving health outcomes for women, infants and children. The Foundation combines its programmes with advocacy in Nigeria and around the world to provide robust support for its primary stakeholders from birth to age.",
location: "lagos , Nigeria",
year_established: 2004,
image_url: "https://wbfafrica.org/sites/default/files//slideIMG_24702.jpg",
video_url: "https://www.youtube.com/embed/6hHjUG_New8",
info: "The prioritisation of global impact, in alignment with the United Nations Sustainable Development Goals (SDG), informs the following three objectives of the Wellbeing Group towards measurable and meaningful outcomes. Empowering and educating front line community health workers, including midwives and nurses.
Increasing accessibility of sustainable maternal, new-born, infant, child and adolescent continuum of care through a lifetime of healthy habits from reproductive health education and family planning, to improved water sanitation and handwashing (WASH) behaviours.",
contact: " +564907098",
user_id:3
)
organization18=Organization.create(
name: "Nelson Mandela Foundation",
description: "The Nelson Mandela Foundation is a non-profit organisation founded by Nelson Mandela in 1999 to promote Mandela's vision of freedom and equality for all. The chairman is professor Njabulo Ndebele.",
location: "Johannesburg, South Africa",
year_established: 1996,
image_url: "https://www.thesouthafrican.com/wp-content/uploads/2019/07/c78fd5b2-mandela-day-action-against-poverty.jpg",
video_url: "https://www.youtube.com/embed/zvAnEuRQV2Y",
info: "The Nelson Mandela Foundation was established in 1999 when its Founder, Mr Nelson Mandela, stepped down as the President of South Africa. Mr Mandela was South Africas first democratically elected President. On 9 May 1994, soon after our landmark election results were in, he was unanimously elected President by South Africas new Members of Parliament. The next day, Nelson Rolihlahla Mandela was sworn in at an inauguration ceremony at the Union Buildings in Pretoria.",
contact: "+27-11-547-5600",
user_id:10
)



#Create 13 random donations 
donation1=Donation.create(contributed_amount:"$960,000", organization_id: 7, user_id: 2, username: "Jane")
donation2=Donation.create(contributed_amount:"$80,000", organization_id: 2, user_id: 4, username: "Lona")
donation3=Donation.create(contributed_amount:"$630,000", organization_id: 3, user_id: 8, username: "Emily")
donation4=Donation.create(contributed_amount:"$960,000", organization_id: 5, user_id: 1, username: "Kante")
donation5=Donation.create(contributed_amount:"$60,000", organization_id: 4, user_id: 6, username: "Lona")
donation6=Donation.create(contributed_amount:"$110,000", organization_id: 5, user_id: 3, username: "Sarah")
donation7=Donation.create(contributed_amount:"$420,000", organization_id: 4, user_id: 10, username: "Nina")
donation8=Donation.create(contributed_amount:"$90,000", organization_id: 3, user_id: 9, username: "Manu")
donation9=Donation.create(contributed_amount:"$960,000", organization_id: 5, user_id: 2, username: "Mike")
donation10=Donation.create(contributed_amount:"$80,000", organization_id: 2, user_id: 6, username: "Lona")
donation11=Donation.create(contributed_amount:"$630,000", organization_id: 3, user_id: 9, username: "Manu")
donation12=Donation.create(contributed_amount:"$630,000", organization_id: 3, user_id: 4, username: "Lona")
donation13=Donation.create(contributed_amount:"$80,000", organization_id: 2, user_id: 7, username: "Jane")



#Create 9 random reviews 
review1=Review.create(user_id: 2, organization_id: 4, organization_name: "Oxfam", username: "Mike", rating: "9", comments: "A great organizatioin to work with. I was able to interact with other people who are guided by same goals as mine")
review2=Review.create(user_id: 1, organization_id: 3, organization_name: "Greenpeace", username: "Jane", rating: "8", comments: "Greenpeace is doing amazing work to protect the environment. I had a great experience volunteering with them.")
review3=Review.create(user_id: 3, organization_id: 2, organization_name: "Doctors Without Borders", username: "David", rating: "7", comments: "I admire the courage and dedication of the doctors and nurses in this organization. It was an honor to work with them.")
review4=Review.create(user_id: 4, organization_id: 1, organization_name: "UNICEF", username: "Emily", rating: "6", comments: "I think UNICEF is a good organization with a noble mission, but sometimes their methods are questionable. Nevertheless, I had a good experience volunteering with them.")
review5=Review.create(user_id: 10, organization_id: 10, organization_name: "Red Cross", username: "John", rating: "9", comments: "I've always respected the work of the Red Cross, and my experience volunteering with them only reinforced my admiration. They truly make a difference in people's lives.")
review6=Review.create(user_id: 6, organization_id: 4, organization_name: "Oxfam", username: "Sarah", rating: "7", comments: "While I appreciate the work that Oxfam does, I found some of their policies to be limiting for volunteers. Still, it was a valuable experience.")
review7=Review.create(user_id: 7, organization_id: 3, organization_name: "Greenpeace", username: "Tom", rating: "8", comments: "I'm impressed by the passion and dedication of the people at Greenpeace. They truly believe in their cause and are willing to fight for it.")
review8=Review.create(user_id: 8, organization_id: 2, organization_name: "Doctors Without Borders", username: "Karen", rating: "9", comments: "I was blown away by the expertise and professionalism of the doctors and nurses at Doctors Without Borders. They are true heroes.")
review9=Review.create(user_id: 9, organization_id: 1, organization_name: "UNICEF", username: "Alex", rating: "6", comments: "I think UNICEF is a well-meaning organization, but their bureaucracy can be frustrating at times. Overall, I had a positive experience volunteering with them.")


#Create 8 random profiles  
profile1=Profile.create(
image_url: "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?b=1&s=170667a&w=0&k=20&c=96pCQon1xF3_onEkkckNg4cC9SCbshMvx0CfKl2ZiYs=", 
first_name: "Mike", 
last_name: "Smith", 
age: 32, 
gender: "Male", 
country: "United States", 
contact: "+1-0945-894-954", 
skills: "Social-Worker", 
user_id: 2)

profile2=Profile.create(
image_url: "https://images.unsplash.com/photo-1643899965658-cc640a14aedb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80", 
first_name: "Cindy", 
last_name: "Jane", 
age: 29, 
gender: "Female", 
country: "Kenya", 
contact: "+254-754-554-233", 
skills: "Delopmental-Studies", 
user_id: 7)

profile3=Profile.create(
image_url: "https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?b=1&s=170667a&w=0&k=20&c=XPuGhP9YyCWquTGT-tUFk6TwI-HZfOr1jNkehKQ17g0=", 
first_name: "Sarah", 
last_name: "Brown", 
age: 22, 
gender: "Female", 
country: "Sweden", 
contact: "+46-764-999-982", 
skills: "Health-Services & Community-Development", 
user_id: 3)

profile4=Profile.create(
image_url: "https://images.unsplash.com/photo-1579983926774-399a9cb765c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFsZCUyMG1hbnxlbnwwfHwwfHw%3D&w=1000&q=80", 
first_name: "Kante", 
last_name: "Edwards", 
age: 27, 
gender: "Male", 
country: "United States", 
contact: "+1-166-646-53", 
skills: "Architect & Real-Estates", 
user_id: 1)

profile5=Profile.create(
image_url: "https://media.istockphoto.com/id/966355420/photo/portrait-of-a-malaysian-woman-on-the-cafe-in-kuala-lumpur.jpg?s=170667a&w=0&k=20&c=0Txb_9-7e0ceWypJ6HYKHFuLDIGbPE0zTHtaiPZUX2s=", 
first_name: "nina", 
last_name: "mirriams", 
age: 23, 
gender: "Female", 
country: "Morocco", 
contact: "+212-343-267-665", 
skills: "Journalist & Political-Writer", 
user_id: 10)

profile6=Profile.create(
image_url: "https://media.istockphoto.com/id/1320500308/photo/studio-shot-of-a-young-woman-looking-shocked-against-a-pink-background.jpg?s=612x612&w=0&k=20&c=mpBb5DENXXy5lbvV2Qo3IJWzjxZ2cbnfr7OJsW2jP2A=", 
first_name: "Joy", 
last_name: "Stewards", 
age: 23, 
gender: "Female", 
country: "South Africa", 
contact: "+27-343-266-75", 
skills: "Human Activist, Social-Work & Human-Resources", 
user_id: 6)

profile7=Profile.create(
image_url: "https://media.istockphoto.com/id/889902628/photo/african-american-senior-man-in-nature-portrait.jpg?s=612x612&w=0&k=20&c=L_CuLl6jPj1xSahDXZ04zjWoZEEFVp7ErnAdkfhOK1g=", 
first_name: "Manu", 
last_name: "Manu", 
age: 62, 
gender: "Male", 
country: "Egypt", 
contact: "+20-923-546-876", 
skills: "Developmental-Studies, Banking & Finance", 
user_id: 9)

profile8=Profile.create(
image_url: "https://media.istockphoto.com/id/1348830922/photo/shot-of-an-attractive-young-businesswomen-standing-alone-outside-with-her-arms-folded.jpg?b=1&s=170667a&w=0&k=20&c=sIsWIHDysN_AI0QYEqfxkySmTVspbtDP-OJgfdBk1pM=", 
first_name: "Emily", 
last_name: "Edwards", 
age: 23, 
gender: "Female", 
country: "Canada", 
contact: "+20-343-266-175", 
skills: "Software-Engineer & Technical-Writer", 
user_id: 8)
    
#Create 8 random volunteers 
volunteer1=Volunteer.create(organization_name: "Vision Aid Organization", user_id: 4, organization_id: 15, username: "Lina")
volunteer2=Volunteer.create(organization_name: "Care International", user_id: 1, organization_id: 9, username: "Kante")
volunteer3=Volunteer.create(organization_name: "Action Against Hunger", user_id: 6, organization_id: 11, username: "Joy")
volunteer4=Volunteer.create(organization_name: "Greenpeace", user_id: 9, organization_id: 3, username: "Sarah")
volunteer5=Volunteer.create(organization_name: "UNICEF", user_id: 8, organization_id: 5, username: "Emily")
volunteer6=Volunteer.create(organization_name: "End Poverty Now", user_id: 6, organization_id: 15, username: "Joy")
volunteer7=Volunteer.create(organization_name: "Women Africa", user_id: 9, organization_id: 10, username: "Manu")
volunteer8=Volunteer.create(organization_name: "Charity Water", user_id: 10, organization_id: 1, username: "Nina")






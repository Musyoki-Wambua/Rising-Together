import React from "react";
import NavBar from "./NavBar";

const WhoWeAre = () => {
  return (
    <section className="bg-gray-100 font-serif">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto text-center pb-12">
          <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
          <p className="mt-4 text-grey-600">
            We are a team of dedicated individuals who strive to make a positive
            impact in the world. Our mission is to help those in need and create
            a better future for generations to come. Below are the team meambers in our program.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="lg:w-1/3 px-4 mb-8">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                className="object-cover h-96 w-96"
                src="https://img.freepik.com/premium-vector/man-male-character-avatar-vector-portrait-businessman-type-clothes_491904-56.jpg?size=626&ext=jpg&ga=GA1.1.1160669967.1680895840&semt=ais"
                alt="Team member"
              /> 
              
            
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-800">
              Joseph Wambua
            </h3>
            <p1 className="mt-2 text-white-600">Co-founder and CEO.</p1><br></br>
            <p2 className="mt-2 text-White-500">I alongside Trevor and Simon initiated the organization, came up with the idea of this organization. I am  responsible for overseeing the day-to-day operations, making strategic decisions, and ensuring the organization's mission and goals are met. </p2>
          </div>
          <div className="lg:w-1/3 px-4 mb-8">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                className="object-cover h-full w-full"
                src="https://media.istockphoto.com/id/1378072714/photo/young-woman-standing-outdoors.jpg?b=1&s=170667a&w=0&k=20&c=WSur2x1htnIWNw7QmlxWgjquRW8Dz5GodPvZ3-d1-W8="
                alt="Team member"
              />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-800">
              Trevor Febias
            </h3>
            <p1 className="mt-2 text-white-600">Co-founder and COO.</p1><br></br>
            <p2 className="mt-2 text-White-500"> I alongside Joseph and Simon initiated the organization, came up with the idea of this organization. I oversee the organization's internal operations, ensuring that everything runs smoothly, from personnel management to logistics.</p2>
          </div>
          <div className="lg:w-1/3 px-4 mb-8">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                className="object-cover h-90 w-90"
                src="https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50581.jpg?size=626&ext=jpg&ga=GA1.2.1160669967.1680895840&semt=ais"
                alt="Team member"
              />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-800">
              Simon Muriithi
            </h3>
            <p1 className="mt-2 text-white-600">Co-founder and CFO.</p1><br></br>
            <p2 className="mt-2 text-White-500"> I alongside Joseph and Trevor initiated the organization, came up with the idea of this organization. I responsible for managing the organization's financial resources, including budgeting, financial reporting, and fundraising.</p2>
          </div>
          <div className="lg:w-1/3 px-4 mb-8">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                className="object-cover h-96 w-96"
                src="https://i.pinimg.com/236x/ec/2c/3d/ec2c3d6d4de6e36f5db171c31b730e8a.jpg"
                alt="Team member"
              />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-800">
              David Mwai
            </h3>
            <p1 className="mt-2 text-white-600">Marketing and Communications Director.</p1><br></br>
            <p2 className="mt-2 text-White-500">I am responsible for promoting the organization's mission, managing the organization's branding, and developing and executing marketing and communication strategies.</p2>
          </div>
          <div className="lg:w-1/3 px-4 mb-8">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                className="object-cover h-90 w-90"
                src="https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50583.jpg?size=626&ext=jpg&ga=GA1.1.1160669967.1680895840&semt=ais"
                alt="Team member"
              />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-800">
              Antony Tulla
            </h3>
            <p1 className="mt-2 text-white-600">Human Resources Manager.</p1><br></br>
            <p2 className="mt-2 text-White-500"> I am responsible for managing the organization's human resources, including hiring, training, and performance management.</p2>
          </div>
          <div className="lg:w-1/3 px-4 mb-8">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                className="object-cover h-96 w-96"
                src="https://i.pinimg.com/236x/2b/52/4e/2b524e336c16d5defec2f8cc532c765b.jpg"
                alt="Team member"
              />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-800">
              Faith Kigen
            </h3>
            <p1 className="mt-2 text-white-600">Program Coordinator.</p1><br></br>
            <p2 className="mt-2 text-White-500"> I support the Program Director/Manager in the development and implementation of the organization's programs and services.</p2>
          </div>
        </div>


        <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
          <div style={{width: '300px', marginRight: '30px', marginBottom: '30px'}}>
              <h3 style={{color: '#374151', fontSize: '1.5rem', fontWeight: 'bold'}}>Popular:</h3>
              <ul style={{listStyle: 'circle', paddingLeft: 0}}>
                <li style={{marginBottom: '10px', color: '#4B5563', fontSize: '1.125rem'}}>Volunteer management</li>
                <li style={{marginBottom: '10px', color: '#4B5563', fontSize: '1.125rem'}}>Public relations</li>
                <li style={{marginBottom: '10px', color: '#4B5563', fontSize: '1.125rem'}}>Capacity building</li>
                <li style={{marginBottom: '10px', color: '#4B5563', fontSize: '1.125rem'}}>Fundraising</li>
                <li style={{marginBottom: '10px', color: '#4B5563', fontSize: '1.125rem'}}>Capacity building</li>
              </ul>
          </div>

          <div style={{width: '300px', marginRight: '30px', marginBottom: '30px'}}>
            <h3 style={{color: '#374151', fontSize: '1.5rem', fontWeight: 'bold'}}>Projects:</h3>
            <ul style={{listStyle: 'circle', paddingLeft: 0}}>
              <li style={{marginBottom: '10px', color: '#4B5563', fontSize: '1.125rem'}}>Community development</li>
              <li style={{marginBottom: '10px', color: '#4B5563', fontSize: '1.125rem'}}>Health care and sanitation</li>
              <li style={{marginBottom: '10px', color: '#4B5563', fontSize: '1.125rem'}}>Impacting knowledge and education</li>
              <li style={{marginBottom: '10px', color: '#4B5563', fontSize: '1.125rem'}}>Environmental conservation</li>
              <li style={{marginBottom: '10px', color: '#4B5563', fontSize: '1.125rem'}}>Disaster relief and management</li>
            </ul>
          </div>

          <div style={{width: '300px', marginBottom: '30px'}}>
            <h3 style={{color: '#374151', fontSize: '1.5rem', fontWeight: 'bold'}}>Contacts:</h3>
            <ul style={{listStyle: 'circle', paddingLeft: '1em'}}>
              <li style={{marginBottom: '10px', color: '#4B5563', fontSize: '1.125rem'}}>
                USA – AUSTIN, 901 EAST E STREET,
              </li>
              <li style={{marginBottom: '10px', color: '#4B5563', fontSize: '1.125rem'}}>
                Email: <a href="mailto:info@example.com" style={{textDecoration: 'underline', color: '#4B5563'}} 
                onMouseOver={e => e.target.style.color = '#FF00FF'} onMouseOut={e => e.target.style.color = '#4B5563'}>
                info@example.com</a>
              </li>
              <li style={{marginBottom: '10px', color: '#4B5563', fontSize: '1.125rem'}}>
                Phone: <a href="tel:123-456-7890" style={{textDecoration: 'underline', color: '#4B5563'}} 
                onMouseOver={e => e.target.style.color = '#FF00FF'} onMouseOut={e => e.target.style.color = '#4B5563'}>
                123-456-7890</a>
              </li>
            </ul>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default WhoWeAre;

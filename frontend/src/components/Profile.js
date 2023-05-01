// import React from 'react';
// import { useState } from 'react';

// const Profile = () => {

//   const [profiles, setProfiles] = useState([])
//   const [formData, setFormData] = useState({
//     first_name: "", 
//     last_name: "",
//     contact: "", 
//     skills: ""


//   })

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     fetch('http://localhost:3000/profiles', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData)
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log(formData);
//       setProfiles([...profiles, data])
//       setFormData({
//         first_name: "", 
//         last_name: "",
//         contact: "", 
//         skills: ""

//       })
//       // setUpdated(true);
//     })
//     .catch(error => {
//       console.log(error);
//       // setErrors(error);
//     });
//   };


  

//   // const colors = [    { name: 'Red', value: 'red' },    { name: 'Blue', value: 'blue' },    { name: 'Green', value: 'green' },  ];

//   return (
//     <form onSubmit={handleSubmit} className='max-w-xl mx-auto'>
  

//       <div className='mb-6'>
//         <label htmlFor='first-name' className='block mb-2 text-gray-700 font-bold'>
//           First Name
//         </label>
//         <input
//           type='text'
//           id='first-name'
//           className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//           onChange={(e) => setFormData({...formData, first_name: e.target.value})}
//           value={formData.first_name}
//         />
//       </div>

//       <div className='mb-6'>
//         <label htmlFor='last-name' className='block mb-2 text-gray-700 font-bold'>
//           Last Name
//         </label>
//         <input
//           type='text'
//           id='last-name'
//           className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//           onChange={(e) => setFormData({...formData, last_name: e.target.value})}
//           value={formData.last_name}
//         />
//       </div>

//       <div className='mb-6'>
//         <label htmlFor='skills' className='block mb-2 text-gray-700 font-bold'>
//           Skills
//         </label>
//         <textarea
//           id='skills'
//           className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//           onChange={(e) => setFormData({...formData, skills: e.target.value})}
//           value={formData.skills}
//         ></textarea>
//       </div>

//       <div className='mb-6'>
//         <label htmlFor='contact-info' className='block mb-2 text-gray-700 font-bold'>
//           Contact Information
//         </label>
//         <textarea
//           id='contact-info'
//           className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//           onChange={(e) => setFormData({...formData, contact: e.target.value})}
//           value={formData.contact}
//         ></textarea>
//       </div>



//       <div className='flex items-center justify-between'>
//         <button
//           type='submit'
//           className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline'>
//           Save Changes
//         </button>
//         <button
//             type='button'
//             className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
//             // onClick={handleCancel}
//         >
//                 Cancel
//         </button>
//         </div>
//     </form>
//     );
// };
// export default Profile;





import { useEffect, useState } from "react"
import React from "react"
const Profile = () => {
    const [profiles, setProfiles] = useState([])
    const [formData, setFormData] = useState({
        image_url: "",
        first_name: "",
        last_name: "",
        age: "",
        gender: "",
        country: "",
        contact: "",
        skills: "",
        user_id: ""
    })
    useEffect(() => {
        fetch(`http://127.0.0.1:3000/profiles`)
        .then(res => {
            if(res.ok) {
                return res.json()
            }
        })
        .then(data => {
            console.log(data)
            setProfiles(data)
        })
    }, [])
    const handleDelete = (id) => {
        fetch(`http://127.0.0.1:3000/profiles/${id}`, {method: "DELETE"})
          .then(() => {
            const updatedProfiles = profiles.filter(profile => profile.id !== id)
            setProfiles(updatedProfiles)
          })
          .catch((error) => {
            console.error(error);
          });
      }
const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://127.0.0.1:3000/profiles', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(formData)
    })
    .then((response) => {
        if(response.ok) {
            return response.json()
        }
    })
    .then(data => {
        console.log(data)
        setProfiles([...profiles, data])
        setFormData({
            image_url: "",
            first_name: "",
            last_name: "",
            age: "",
            gender: "",
            country: "",
            contact: "",
            skills: "",
            user_id: ""
        })
    })
}
  return (
    <div className="grid grid-cols-2 ">
      <div>  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {profiles.map((profile) => (
    <div key={profile.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img className="w-full h-48 object-cover" src={profile.image_url} alt="Profile" />
      <div className="px-4 py-4">
        <h2 className="text-2xl font-bold text-gray-800">{`${profile.first_name} ${profile.last_name}`}</h2>
        <p className="text-gray-600 mt-2">{`${profile.age} years old, ${profile.gender}`}</p>
        <p className="text-gray-600 mt-2">{`From ${profile.country}`}</p>
        <p className="text-gray-600 mt-2">{`Contact: ${profile.contact}`}</p>
        <p className="text-gray-600 mt-2">{`Skills: ${profile.skills}`}</p>
      </div>
      <div className="px-4 py-2 bg-gray-100 flex justify-end">
        <button className="text-gray-600 hover:text-gray-800 font-bold py-2 px-4 border-b-4 border-gray-400 hover:border-gray-500 rounded" onClick={() => handleDelete(profile.id)}>Delete</button>
      </div>
    </div>
  ))}
</div>


      </div>
    <div  class=" mt-44 ">
      <div className="fixed  ">
  <form  onSubmit={handleSubmit} class="shadow-lg rounded-lg px-8 py-6 bg-white">
    <input type="text" value={formData.image_url} onChange={(e) => setFormData({...formData, image_url: e.target.value})} placeholder="Profile Image" required class="w-full mb-4 px-3 py-2 placeholder-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"/>
    <input type="text" value={formData.first_name} onChange={(e) => setFormData({...formData, first_name: e.target.value})} placeholder="First Name" required class="w-full mb-4 px-3 py-2 placeholder-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"/>
    <input type="text" value={formData.last_name} onChange={(e) => setFormData({...formData, last_name: e.target.value})} placeholder="Last Name" required class="w-full mb-4 px-3 py-2 placeholder-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"/>
    <input type="number" value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} placeholder="Age" required class="w-full mb-4 px-3 py-2 placeholder-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"/>
    <input type="text" value={formData.gender} onChange={(e) => setFormData({...formData, gender: e.target.value})} placeholder="Gender" required class="w-full mb-4 px-3 py-2 placeholder-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"/>
    <input type="text" value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value})} placeholder="Country" required class="w-full mb-4 px-3 py-2 placeholder-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"/>
    <input type="number" value={formData.contact} onChange={(e) => setFormData({...formData, contact: e.target.value})} placeholder="Contact" required class="w-full mb-4 px-3 py-2 placeholder-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"/>
    <input type="text" value={formData.skills} onChange={(e) => setFormData({...formData, skills: e.target.value})} placeholder="Skills" required class="w-full mb-4 px-3 py-2 placeholder-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"/>
    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Create Profile</button>

  </form>
  </div>
</div>
</div>
  )
}
export default Profile


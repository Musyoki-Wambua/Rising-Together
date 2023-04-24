import React from 'react';
import { useState } from 'react';

const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [skills, setSkills] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [color, setColor] = useState('');
  // const [loading, setLoading] = useState(false);
  // const [updated, setUpdated] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  const colors = [    { name: 'Red', value: 'red' },    { name: 'Blue', value: 'blue' },    { name: 'Green', value: 'green' },  ];

  return (
    <form onSubmit={handleSubmit} className='max-w-xl mx-auto'>
      <div className='mb-6'>
        <label htmlFor='profile-colors' className='block mb-2 text-gray-700 font-bold'>
          Profile Color
        </label>
        <select
          id='profile-colors'
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          onChange={(e) => setColor(e.target.value)}
          value={color}
        >
          {colors.map((color) => (
            <option value={color.value} key={color.name}>
              {color.name}
            </option>
          ))}
        </select>
      </div>

      <div className='mb-6'>
        <label htmlFor='first-name' className='block mb-2 text-gray-700 font-bold'>
          First Name
        </label>
        <input
          type='text'
          id='first-name'
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
      </div>

      <div className='mb-6'>
        <label htmlFor='last-name' className='block mb-2 text-gray-700 font-bold'>
          Last Name
        </label>
        <input
          type='text'
          id='last-name'
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      </div>

      <div className='mb-6'>
        <label htmlFor='skills' className='block mb-2 text-gray-700 font-bold'>
          Skills
        </label>
        <textarea
          id='skills'
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          onChange={(e) => setSkills(e.target.value)}
          value={skills}
        ></textarea>
      </div>

      <div className='mb-6'>
        <label htmlFor='contact-info' className='block mb-2 text-gray-700 font-bold'>
          Contact Information
        </label>
        <textarea
          id='contact-info'
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          onChange={(e) => setContactInfo(e.target.value)}
          value={contactInfo}
        ></textarea>
      </div>

     <div className='mb-6'>
  <label htmlFor='image' className='block mb-2 text-gray-700 font-bold'>
    Profile Image
  </label>
  <input
    type='file'
    id='image'
    accept='image/*'
    className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
    onChange={(e) => setImageUrl(URL.createObjectURL(e.target.files[0]))}
  />
</div>

      <div className='flex items-center justify-between'>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline'>
          Save Changes
        </button>
        <button
            type='button'
            className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            // onClick={handleCancel}
        >
                Cancel
        </button>
        </div>
    </form>
    );
};
export default Profile;


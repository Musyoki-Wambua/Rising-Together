import React from 'react';
import { useState } from 'react';
const OrganisationForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [year_established, setYear_established] = useState('');
  const [image_url, setImage_url] = useState('');
  const [contact, setContact] = useState('');
  const [video_url, setVideo_url] = useState('')
  const [info, setInfo] = useState('')
  const [user_id, setUser_id] = useState('')
  // const [loading, setLoading] = useState(false);
  // const [updated, setUpdated] = useState(false);
  const [errors, setErrors] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      description,
      location,
      year_established,
      info,
      contact,
      video_url,
      image_url,
      user_id
    };
    fetch('http://localhost:3000/organizations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then(data => {
      console.log('Success:', data);
      setName('');
      setLocation('');
      setDescription('');
      setYear_established('');
      setImage_url('');
      setContact('');
      setVideo_url('');
      setInfo('');
      setUser_id('')
    })
    .catch( error => {
      setErrors(error.message)
      console.error('Error:', error)
    })
  };
  return (
    <div className='  bg-green-100 h-full'>
     <div className="flex flex-col items-center justify-center h-screen bg-green-100">
  <form onSubmit={handleSubmit} className="w-full max-w-xl p-8 bg-white rounded-lg shadow-lg">
    <div className="mb-4">
      <label htmlFor="name" className="block mb-2 text-gray-700 font-bold">
        Organization Name
      </label>
      <input
        type="text"
        id="name"
        className="w-full px-4 py-2 leading-tight text-gray-700 border rounded-md focus:outline-none focus:shadow-outline"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
    </div>
      <div className='mb-6'>
        <label htmlFor='first-name' className='block mb-2 text-gray-700 font-bold'>
          Location
        </label>
        <input
          type='text'
          id='location'
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        />
      </div>
      <div className='mb-6'>
        <label htmlFor='first-name' className='block mb-2 text-gray-700 font-bold'>
          Image
        </label>
        <input
          type='text'
          id='image_url'
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          onChange={(e) => setImage_url(e.target.value)}
          value={image_url}
        />
      </div>
      <div className='mb-6'>
        <label htmlFor='video-url' className='block mb-2 text-gray-700 font-bold'>
          Video URL
        </label>
        <input
          type='text'
          id='video_url'
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          onChange={(e) => setVideo_url(e.target.value)}
          value={video_url}
        />
      </div>
      <div className='mb-6'>
        <label htmlFor='video-url' className='block mb-2 text-gray-700 font-bold'>
          User_id
        </label>
        <input
          type='text'
          id='video_url'
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          onChange={(e) => setUser_id(e.target.value)}
          value={user_id}
        />
      </div>
      <div className='mb-6'>
        <label htmlFor='last-name' className='block mb-2 text-gray-700 font-bold'>
          Description
        </label>
        <input
          type='text'
          id='description'
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <div className='mb-6'>
        <label htmlFor='skills' className='block mb-2 text-gray-700 font-bold'>
          Year Established
        </label>
        <textarea
          id='year_established'
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          onChange={(e) => setYear_established(e.target.value)}
          value={year_established}
        ></textarea>
      </div>
      <div className='mb-6'>
        <label htmlFor='contact-info' className='block mb-2 text-gray-700 font-bold'>
          Contact
        </label>
        <textarea
          id='contact'
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          onChange={(e) => setContact(e.target.value)}
          value={contact}>
        </textarea>
      </div>
      <div className='mb-6'>
        <label htmlFor='contact-info' className='block mb-2 text-gray-700 font-bold'>
          Info
        </label>
        <textarea
          id='info'
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          onChange={(e) => setInfo(e.target.value)}
          value={info}>
        </textarea>
      </div>
      <div className='flex items-center justify-between'>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline'
          onClick={handleSubmit}
          >
          Create Organisation
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
    </div>
    </div>
    );
};
export default OrganisationForm;
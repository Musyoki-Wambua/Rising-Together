import React from 'react';
import { useState } from 'react';

const OrganisationForm = () => {
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [address, setAddress] = useState('');
  const [yearEstablished, setYearEstablished] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  // const [loading, setLoading] = useState(false);
  // const [updated, setUpdated] = useState(false);
  const [errors, setErrors] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      about,
      address,
      yearEstablished,
      imageUrl,
      contactInfo,
    };

    fetch('URL', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(data)
    })
    .then(response => {
      if(!response.ok) {
        throw new Error( 'Could not complete action' )
      }
      return response.json()
    })
    .then(data => {
      console.log('Success:', data);
      setName('');
      setAbout('');
      setAddress('');
      setYearEstablished('');
      setImageUrl('');
      setContactInfo('');
    })
    .catch( error => {
      setErrors(error.message)
      console.error('Error:', error)
    })
  };


  return (
    <form onSubmit={handleSubmit} className='max-w-xl mx-auto'>
     <div className='mb-6'>
        <label htmlFor='first-name' className='block mb-2 text-gray-700 font-bold'>
          Organisation Name
        </label>
        <input
          type='text'
          id='organisation-name'
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>

      <div className='mb-6'>
        <label htmlFor='first-name' className='block mb-2 text-gray-700 font-bold'>
          About
        </label>
        <input
          type='text'
          id='about'
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          onChange={(e) => setAbout(e.target.value)}
          value={about}
        />
      </div>

      <div className='mb-6'>
        <label htmlFor='image' className='block mb-2 text-gray-700 font-bold'>
           Image
        </label>
        <input
          type='file'
          id='image'
          accept='image/*'
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          onChange={(e) => setImageUrl(URL.createObjectURL(e.target.files[0]))}
          />
      </div>

      <div className='mb-6'>
        <label htmlFor='last-name' className='block mb-2 text-gray-700 font-bold'>
          Address
        </label>
        <input
          type='text'
          id='address'
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
      </div>
      <div className='mb-6'>
        <label htmlFor='skills' className='block mb-2 text-gray-700 font-bold'>
          Year Established
        </label>
        <textarea
          id='year_established'
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          onChange={(e) => setYearEstablished(e.target.value)}
          value={yearEstablished}
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
      <div className='flex items-center justify-between'>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline'>
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
    );
};
export default OrganisationForm;


import {  useState } from "react"
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
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={formData.image_url} onChange={(e) => setFormData({...formData, image_url: e.target.value})} placeholder="profile-image" required/>
                <input type="text" value={formData.first_name} onChange={(e) => setFormData({...formData, first_name: e.target.value})} placeholder="first-name" required/>
                <input type="text" value={formData.last_name} onChange={(e) => setFormData({...formData, last_name: e.target.value})} placeholder="last-name" required/>
                <input type="number" value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} placeholder="age" required/>
                <input type="text" value={formData.gender} onChange={(e) => setFormData({...formData, gender: e.target.value})} placeholder="gender" required/>
                <input type="text" value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value})} placeholder="country" required/>
                <input type="number" value={formData.contact} onChange={(e) => setFormData({...formData, contact: e.target.value})} placeholder="contact" required/>
                <input type="text" value={formData.skills} onChange={(e) => setFormData({...formData, skills: e.target.value})} placeholder="skills" required/>
                <input type="text" value={formData.user_id} onChange={(e) => setFormData({...formData, user_id: e.target.value})} placeholder="user-id" required/>
                <button type="submit">Create Profile</button>
            </form>
    </div>
  )
}
export default Profile
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MapComp from './map';
import './UploadLocationPage.css';
import axios from 'axios';

const UploadLocationPage = () => {
  const [targetName, setTargetName] = useState('');
  const [category, setCategory] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleLocationSelected = (location) => {
    setLatitude(location.lat.toString());
    setLongitude(location.lng.toString());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8081/upload-location', {
        targetName,
        category,
        latitude,
        longitude,
      });
      console.log("Location attributes added successfully");
    } catch (error) {
      console.error("Error in uploading:", error);
    }
  };

  return (
    <><form onSubmit={handleSubmit}>
      <div className='upload-location-page'>
        <h2 className='text-UploadPage'>Upload Location</h2><br/>
        <div>
          <label className='text' htmlFor="targetName">Target Name:</label>
          <input
            type="text"
            id="target"
            name='target'
            value={targetName}
            onChange={(e) => setTargetName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='text' htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          /><br/>
          <label className='text' htmlFor='latitude'>Latitude</label>
          <input name='latitude' value={latitude} type="text" readOnly/><br/>
          <label className='text' htmlFor='longitude'>Longitude </label>
          <input name='longitude' value={longitude} type="text" readOnly/>
        </div>
        <MapComp onLocationSelected={handleLocationSelected} />
        <button type="submit" className='btn-upload'>Upload</button>
        <Link to="/Home">
          <button className='btn-cancel'>Cancel</button>
        </Link>
      </div>
    </form>
    
    
    </>
  );
};

export default UploadLocationPage;

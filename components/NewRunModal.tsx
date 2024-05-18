// components/NewRunModal.js
import { useState } from 'react';

const NewRunModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    athleteId: 43957994,
    name: '',
    distance: '',
    sportType: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/activities/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok || response.status === 201) {
        console.log('New run created successfully');
        onClose(); // Close the form on successful creation
      } else {
        throw new Error('Failed to create new run');
      }
  
    } catch (error) {
      console.error('Error creating new run:', error);
    }
  };


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Create New Run</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Distance</label>
            <input
              type="number"
              name="distance"
              value={formData.distance}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Sport Type</label>
            <input
              type="text"
              name="sportType"
              value={formData.sportType}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          
          
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 bg-gray-300 px-4 py-2 rounded">
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewRunModal;

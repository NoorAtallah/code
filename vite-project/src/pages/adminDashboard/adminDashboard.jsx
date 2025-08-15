import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceRequestsDashboard = () => {
  const [serviceRequests, setServiceRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedRequest, setSelectedRequest] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchServiceRequests();
  }, []);

  const fetchServiceRequests = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('https://codelakeback.onrender.com/api/service-requests', {
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      
      const data = await response.json();
      setServiceRequests(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch service requests');
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this request?')) {
      try {
        const token = localStorage.getItem('adminToken');
        const response = await fetch(`https://codelakeback.onrender.com/api/service-requests/${id}`, {
          method: 'DELETE',
          headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to delete');
        }
        
        fetchServiceRequests();
      } catch (err) {
        setError('Failed to delete request');
      }
    }
  };

  const handleLogout = () => {
    // Clear admin data from localStorage
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    
    // Redirect to login page
    navigate('/admin');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  return (
    <div className="p-6 max-w-6xl mx-auto mb-16 mt-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Service Requests Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
        >
          Logout
        </button>
      </div>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600"></div>
          <p className="ml-3 text-gray-600">Loading requests...</p>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {serviceRequests.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-10 text-center text-sm text-gray-500">
                      No service requests found
                    </td>
                  </tr>
                ) : (
                  serviceRequests.map((request) => (
                    <tr key={request._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {request.firstName} {request.lastName}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{request.email}</div>
                        <div className="text-sm text-gray-500">{request.phoneNumber}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{request.service}</div>
                        <div className="text-sm text-gray-500">Best time: {request.bestTimeToContact}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(request.createdAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button 
                          onClick={() => setSelectedRequest(request)} 
                          className="text-indigo-600 hover:text-indigo-900 mr-3"
                        >
                          View
                        </button>
                        <button 
                          onClick={() => handleDelete(request._id)} 
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modal for viewing request details */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-800">Service Request Details</h3>
              <button 
                onClick={() => setSelectedRequest(null)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ×
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-500">Full Name</h4>
                <p className="text-gray-800">{selectedRequest.firstName} {selectedRequest.lastName}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500">Email</h4>
                <p className="text-gray-800">{selectedRequest.email}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                <p className="text-gray-800">{selectedRequest.phoneNumber}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500">Service</h4>
                <p className="text-gray-800">{selectedRequest.service}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500">Best Time to Contact</h4>
                <p className="text-gray-800">{selectedRequest.bestTimeToContact}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500">Submitted On</h4>
                <p className="text-gray-800">{formatDate(selectedRequest.createdAt)}</p>
              </div>
            </div>
            <div className="border-t p-4 flex justify-end">
              <button
                onClick={() => setSelectedRequest(null)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceRequestsDashboard;
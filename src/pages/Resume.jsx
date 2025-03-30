import React, { useState } from 'react';
import { Upload, Download, Trash2, Edit, Plus, ExternalLink } from 'lucide-react';

const ResumeColumn = () => {
  const [resumes, setResumes] = useState([
    { id: 1, name: 'Developer_Resume_2025.pdf', date: 'Feb 15, 2025', isDefault: true, size: '1.2 MB' },
    { id: 2, name: 'Frontend_Specialist_CV.pdf', date: 'Jan 22, 2025', isDefault: false, size: '0.8 MB' }
  ]);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    await uploadFile(file);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    await uploadFile(file);
  };

  const uploadFile = async (file) => {
    const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage

    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await fetch("http://127.0.0.1:8000/api/auth/resumes/upload/", {
            method: "POST",
            headers: {
                "Authorization": `Token ${token}`, // Add the token here
            },
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            setMessage("File uploaded successfully");
            console.log("File uploaded successfully", data);
            setResumes([...resumes, {
                id: data.resume.id,
                name: data.resume.name,
                date: new Date(data.resume.uploaded_at).toLocaleDateString(),
                isDefault: data.resume.is_default,
                size: (data.resume.size / (1024 * 1024)).toFixed(2) + ' MB'
            }]);
        } else {
            const errorData = await response.json();
            setError(errorData.error || "Failed to upload file");
            console.error("Failed to upload file:", errorData);
        }
    } catch (error) {
        setError("Error uploading file. Please try again.");
        console.error("Error uploading file:", error);
    }
  };

  const handleDelete = (id) => {
    setResumes(resumes.filter(resume => resume.id !== id));
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Resume Management</h2>
        <button className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md transition">
          <Plus size={16} />
          <span>Add New</span>
        </button>
      </div>

      {/* Upload Zone */}
      <div 
        className={`border-2 border-dashed rounded-lg p-8 mb-6 text-center cursor-pointer transition-colors ${
          isDragging ? "border-amber-500 bg-amber-50" : "border-gray-300 hover:border-amber-400"
        }`}
        onDragEnter={handleDragEnter}
        onDragOver={(e) => e.preventDefault()}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Upload className="mx-auto text-amber-600 mb-3" size={32} />
        <p className="text-gray-600 mb-2">Drag and drop your resume here</p>
        <p className="text-gray-500 text-sm mb-4">Supports PDF, DOCX, RTF (Max 5MB)</p>
        <input
          type="file"
          className="hidden"
          id="fileInput"
          onChange={handleFileChange}
        />
        <label
          htmlFor="fileInput"
          className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md transition cursor-pointer"
        >
          Browse Files
        </label>
      </div>

      {/* Resume List */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-gray-700">Your Resumes</h3>
          <span className="text-sm text-gray-500">{resumes.length} files</span>
        </div>

        {/* Resume Items */}
        <div className="space-y-3">
          {resumes.map(resume => (
            <div key={resume.id} className="border rounded-lg p-4 flex items-center justify-between bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-100 rounded-md">
                  <Upload className="text-amber-600" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800 flex items-center">
                    {resume.name}
                    {resume.isDefault && (
                      <span className="ml-2 text-xs bg-green-100 text-green-800 py-1 px-2 rounded-full">
                        Default
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-gray-500">Uploaded: {resume.date} • {resume.size}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {!resume.isDefault && (
                  <button 
                    onClick={() => handleSetDefault(resume.id)}
                    className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-3 rounded-md transition"
                  >
                    Set Default
                  </button>
                )}
                <button className="p-2 text-gray-500 hover:text-amber-600 hover:bg-amber-50 rounded-full transition">
                  <ExternalLink size={16} />
                </button>
                <button className="p-2 text-gray-500 hover:text-amber-600 hover:bg-amber-50 rounded-full transition">
                  <Download size={16} />
                </button>
                <button className="p-2 text-gray-500 hover:text-amber-600 hover:bg-amber-50 rounded-full transition">
                  <Edit size={16} />
                </button>
                <button 
                  className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition"
                  onClick={() => handleDelete(resume.id)}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Resume Analytics Section */}
      <div className="mt-8 pt-6 border-t mb-6">
        <h3 className="font-medium text-gray-700 mb-4">Resume Analytics</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg border">
            <p className="text-sm text-gray-500">Views</p>
            <p className="text-2xl font-bold text-gray-800">14</p>
            <p className="text-xs text-green-600">+28% last week</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border">
            <p className="text-sm text-gray-500">Downloads</p>
            <p className="text-2xl font-bold text-gray-800">5</p>
            <p className="text-xs text-amber-600">+2 new</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border">
            <p className="text-sm text-gray-500">Match Rate</p>
            <p className="text-2xl font-bold text-gray-800">76%</p>
            <p className="text-xs text-gray-500">For DevOps positions</p>
          </div>
        </div>
      </div>
      
      {/* Resume Settings */}
      <div className="pt-6 border-t">
        <h3 className="font-medium text-gray-700 mb-4">Resume Settings</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <input id="auto-attach" type="checkbox" className="mt-1 text-amber-600 focus:ring-amber-500" defaultChecked />
            <label htmlFor="auto-attach" className="ml-3">
              <p className="text-sm font-medium text-gray-700">Auto-attach default resume to applications</p>
              <p className="text-xs text-gray-500">Your default resume will automatically be included with project applications</p>
            </label>
          </div>
          <div className="flex items-start">
            <input id="make-public" type="checkbox" className="mt-1 text-amber-600 focus:ring-amber-500" />
            <label htmlFor="make-public" className="ml-3">
              <p className="text-sm font-medium text-gray-700">Allow project owners to download your resume</p>
              <p className="text-xs text-gray-500">When enabled, project owners can download your resume after you apply</p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeColumn;
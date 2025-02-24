import React, { useState } from 'react';
import { 
  User, Github, MessageSquare, Settings, FileText, 
  ArrowRight, Upload, Eye, RefreshCw, Trash2
} from 'lucide-react';
import ResumeColumn from './Resume'; // Import the ResumeColumn component

// Define ProfileDetails component
const ProfileDetails = ({ skills, removeSkill, setActiveTab }) => {
  return (
    <div className="py-6">
    <form>
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="fullName">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          defaultValue="Geetanjali Johnson"
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          defaultValue="Geetanjalicodes"
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          defaultValue="Geetanjali.johnson@example.com"
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="location">
          Location
        </label>
        <input
          type="text"
          id="location"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          defaultValue="San Francisco, CA"
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="bio">
          Professional Bio
        </label>
        <textarea
          id="bio"
          rows="4"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          defaultValue="Full-stack developer with 4 years of experience building web applications using React, Node.js, and Python. Passionate about open source and creating accessible user interfaces. Looking to collaborate on projects with social impact."
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Top Skills
        </label>
        <div className="flex flex-wrap gap-2 mb-2">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
              {skill}
              <button 
                type="button" 
                onClick={() => removeSkill(skill)}
                className="text-gray-500 hover:text-gray-700 ml-1"
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <a href="#" onClick={() => setActiveTab('skills')} className="text-amber-600 text-sm hover:underline flex items-center gap-1">
          Manage all skills <ArrowRight size={14} />
        </a>
      </div>
      
      <div className="flex justify-end pt-4 border-t border-gray-100">
        <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded font-medium transition-colors">
          Save Changes
        </button>
      </div>
    </form>
  </div>


  );
};
// Define SkillsExpertise component
const SkillsExpertise = ({ skills, removeSkill, newSkill, setNewSkill, addSkill }) => {
  return (
    <div>
    <div className="py-6">
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Technical Skills
                  </label>
                  <div className="flex items-center mb-2">
                    <input
                      type="text"
                      placeholder="Add a skill and press Enter"
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyDown={addSkill}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {skills.map((skill, index) => (
                      <div key={index} className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
                        {skill}
                        <button 
                          type="button" 
                          onClick={() => removeSkill(skill)}
                          className="text-gray-500 hover:text-gray-700 ml-1"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="expLevel">
                    Experience Level
                  </label>
                  <select
                    id="expLevel"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    defaultValue="mid"
                  >
                    <option value="junior">Junior (0-2 years)</option>
                    <option value="mid">Mid-level (3-5 years)</option>
                    <option value="senior">Senior (6+ years)</option>
                    <option value="lead">Lead/Architect (8+ years)</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Preferred Project Types
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-gray-100 px-3 py-1 rounded-full">Web Applications</div>
                    <div className="bg-gray-100 px-3 py-1 rounded-full">Mobile Apps</div>
                    <div className="bg-gray-100 px-3 py-1 rounded-full">Open Source</div>
                    <div className="bg-gray-100 px-3 py-1 rounded-full">Social Impact</div>
                    <div className="bg-gray-100 px-3 py-1 rounded-full">AI/ML</div>
                  </div>
                </div>
                
                <div className="flex justify-end pt-4 border-t border-gray-100">
                  <button type="button" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded font-medium transition-colors">
                    Save Skills
                  </button>
                </div>
              </div>
          
    </div>
  );
};
const GitHubIntegration = () => {
  return(
    <div className="py-6">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg mb-6">
                  <Github size={32} className="text-gray-800 mr-4" />
                  <div>
                    <h3 className="font-medium">GitHub Account Connected</h3>
                    <p className="text-gray-500 text-sm">@Geetanjalij-dev • Connected on Feb 10, 2025</p>
                  </div>
                  <button className="ml-auto text-gray-700 hover:text-red-600 px-3 py-1 border border-gray-300 rounded text-sm font-medium">
                    Disconnect
                  </button>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-gray-800 mb-3">Import GitHub Profile Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input type="checkbox" id="importBio" className="mr-3" defaultChecked />
                      <label htmlFor="importBio">Import Bio</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="importSkills" className="mr-3" defaultChecked />
                      <label htmlFor="importSkills">Import Skills (based on repository languages)</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="importProjects" className="mr-3" defaultChecked />
                      <label htmlFor="importProjects">Import Public Repositories as Projects</label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-gray-800 mb-3">Featured Repositories</h3>
                  <p className="text-gray-500 text-sm mb-4">Select repositories to highlight on your DevHive profile</p>
                  
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-amber-500 transition-colors">
                      <div className="flex items-start">
                        <input type="checkbox" className="mt-1 mr-3" defaultChecked />
                        <div>
                          <h4 className="font-medium">react-component-library</h4>
                          <p className="text-gray-500 text-sm mb-2">A collection of reusable React components with Tailwind styling</p>
                          <div className="flex gap-2">
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">TypeScript</span>
                            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">React</span>
                          </div>
                        </div>
                        <div className="ml-auto text-gray-500 text-sm">
                          ★ 128
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-amber-500 transition-colors">
                      <div className="flex items-start">
                        <input type="checkbox" className="mt-1 mr-3" defaultChecked />
                        <div>
                          <h4 className="font-medium">node-api-starter</h4>
                          <p className="text-gray-500 text-sm mb-2">Boilerplate for Node.js REST APIs with authentication</p>
                          <div className="flex gap-2">
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">JavaScript</span>
                            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Node.js</span>
                          </div>
                        </div>
                        <div className="ml-auto text-gray-500 text-sm">
                          ★ 85
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end pt-4 border-t border-gray-100">
                  <button type="button" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded font-medium transition-colors">
                    Save GitHub Settings
                  </button>
                </div>
              </div>
            )}
  
// Define ErrorBoundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [skills, setSkills] = useState(['React', 'Node.js', 'TypeScript', 'UX Design', 'MongoDB']);
  const [newSkill, setNewSkill] = useState('');

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const addSkill = (e) => {
    if (e.key === 'Enter' && newSkill.trim() !== '') {
      if (!skills.includes(newSkill.trim())) {
        setSkills([...skills, newSkill.trim()]);
        setNewSkill('');
      }
    }
  };

  const tabConfig = [
    { id: 'profile', label: 'Profile Details' },
    { id: 'skills', label: 'Skills & Expertise' },
    { id: 'resume', label: 'Resume' },
    { id: 'github', label: 'GitHub Integration' }
  ];

  return (
    <ErrorBoundary>
      <div className="bg-gray-50 min-h-screen">
        {/* Navigation */}
        <nav className="bg-amber-50 px-6 py-4 flex justify-between items-center shadow-sm">
          <a href="/" className="flex items-center text-gray-800 font-bold text-xl">
            <div className="text-amber-600 mr-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 8V18.5L12 15.5L18 18.5V8L12 5L6 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5V15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            DevHive
          </a>
          <div className="flex space-x-8">
            <a href="/" className="text-gray-800 hover:text-amber-600 font-medium">Home</a>
            <a href="/explore" className="text-gray-800 hover:text-amber-600 font-medium">Explore</a>
            <a href="/projects" className="text-gray-800 hover:text-amber-600 font-medium">Projects</a>
            <a href="/matches" className="text-gray-800 hover:text-amber-600 font-medium">Matches</a>
          </div>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded font-medium transition-colors">
            Sign Out
          </button>
        </nav>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <img 
                src="/api/placeholder/150/150" 
                alt="Profile" 
                className="w-32 h-32 rounded-full mx-auto border-4 border-amber-500 object-cover"
              />
              <h2 className="text-xl font-bold text-center mt-4">Geetanjali Johnson</h2>
              <p className="text-gray-500 text-center">@Geetanjalicodes</p>

              <div className="flex justify-between py-4 mt-2 border-b border-gray-100">
                <div className="text-center">
                  <div className="text-amber-600 font-bold text-lg">18</div>
                  <div className="text-gray-500 text-sm">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-amber-600 font-bold text-lg">24</div>
                  <div className="text-gray-500 text-sm">Connections</div>
                </div>
                <div className="text-center">
                  <div className="text-amber-600 font-bold text-lg">92%</div>
                  <div className="text-gray-500 text-sm">Match Rate</div>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <a href="#" className="flex items-center gap-2 p-2 text-gray-700 hover:bg-gray-50 rounded transition-colors">
                  <User size={18} className="text-amber-600" />
                  View Public Profile
                </a>
                <a href="#" className="flex items-center gap-2 p-2 text-gray-700 hover:bg-gray-50 rounded transition-colors">
                  <Github size={18} className="text-amber-600" />
                  GitHub Profile
                </a>
                <a href="#" className="flex items-center gap-2 p-2 text-gray-700 hover:bg-gray-50 rounded transition-colors">
                  <MessageSquare size={18} className="text-amber-600" />
                  Messages
                </a>
                <a href="#" className="flex items-center gap-2 p-2 text-gray-700 hover:bg-gray-50 rounded transition-colors">
                  <Settings size={18} className="text-amber-600" />
                  Account Settings
                </a>
              </div>
            </div>

            {/* Main Content */}
            <div className="bg-white p-6 rounded-lg shadow-sm md:col-span-3">
              {/* Tabs */}
              <div className="flex border-b border-gray-200">
                {tabConfig.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-3 px-4 font-medium ${
                      activeTab === tab.id 
                        ? 'text-amber-600 border-b-2 border-amber-600' 
                        : 'text-gray-500 hover:text-amber-600'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === 'profile' && (
                <ProfileDetails 
                  skills={skills}
                  removeSkill={removeSkill}
                  setActiveTab={setActiveTab}
                />
              )}

              {activeTab === 'skills' && (
                <SkillsExpertise
                  skills={skills}
                  removeSkill={removeSkill}
                  newSkill={newSkill}
                  setNewSkill={setNewSkill}
                  addSkill={addSkill}
                />
              )}

              {activeTab === 'resume' && (
                <ResumeColumn /> // Render the ResumeColumn component
              )}
              {activeTab === 'github' && (
                <GitHubIntegration /> // Render the ResumeColumn component
              )}
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default ProfilePage;
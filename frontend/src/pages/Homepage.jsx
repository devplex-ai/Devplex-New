import React, { useState } from "react";
import { Search, Home, Globe, Layout, BookOpen, ChevronLeft, Download, Settings, HelpCircle, MessageSquare, Thermometer } from "lucide-react";

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-60 border-r border-gray-200 flex flex-col">
        {/* Logo and Navigation */}
        <div className="p-4 flex justify-between items-center border-b border-gray-200">
          <div className="flex items-center">
            <svg className="h-6 w-6 text-teal-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="ml-2 font-medium text-gray-800">perplexity</span>
          </div>
          <button className="text-gray-500">
            <ChevronLeft size={18} />
          </button>
        </div>

        {/* New Thread Button */}
        <div className="p-4">
          <button className="flex items-center px-4 py-2 rounded-md bg-gray-100 text-gray-700 text-sm font-medium">
            <span>New Thread</span>
            <span className="ml-4 text-xs text-gray-500">Ctrl</span>
            <span className="ml-1 text-xs text-gray-500">I</span>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-2 flex-1">
          <ul>
            <li className="px-4 py-2 flex items-center text-gray-700 hover:bg-gray-100 cursor-pointer">
              <Search size={18} className="mr-3" />
              <span>Home</span>
            </li>
            <li className="px-4 py-2 flex items-center text-gray-700 hover:bg-gray-100 cursor-pointer">
              <Globe size={18} className="mr-3" />
              <span>Discover</span>
            </li>
            <li className="px-4 py-2 flex items-center text-gray-700 hover:bg-gray-100 cursor-pointer">
              <Layout size={18} className="mr-3" />
              <span>Spaces</span>
            </li>
            <li className="px-4 py-2 flex items-center text-gray-700 hover:bg-gray-100 cursor-pointer">
              <BookOpen size={18} className="mr-3" />
              <span>Library</span>
            </li>
            <li className="pl-10 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer text-sm">
              Trump Eases Electronics T...
            </li>
          </ul>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200 flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-pink-500 flex items-center justify-center text-white font-medium">
              K
            </div>
            <span className="ml-2 text-gray-700 text-sm truncate">kgarg827147...</span>
          </div>
          <div className="flex items-center">
            <button className="text-gray-500 mr-2">
              <Settings size={16} />
            </button>
          </div>
        </div>

        {/* Download Button */}
        <div className="p-4 border-t border-gray-200">
          <button className="flex items-center text-gray-700">
            <Download size={16} className="mr-2" />
            <span>Download</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl font-medium text-gray-800 mb-8">What do you want to know?</h1>
          
          {/* Search Box */}
          <div className="w-full max-w-2xl relative">
            <input
              type="text"
              placeholder="Ask anything..."
              className="w-full p-4 pl-4 pr-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
              <button className="text-gray-500 hover:text-gray-700">
                <Globe size={18} />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <MessageSquare size={18} />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <div className="w-5 h-5 rounded-full bg-teal-500"></div>
              </button>
            </div>
          </div>

          {/* Feature Pills */}
          <div className="flex mt-3">
            <div className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-md flex items-center mr-2">
              <div className="mr-1 font-bold">pro</div>
            </div>
            <div className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-md flex items-center">
              <Search size={14} className="mr-1" />
              <span>Deep Research</span>
            </div>
          </div>

          {/* Windows App Promo */}
          <div className="mt-8 w-full max-w-2xl bg-gray-50 rounded-lg p-4 flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-800">Introducing our Windows App</p>
              <p className="text-gray-600 text-sm">Install the native Windows App</p>
            </div>
            <div className="text-blue-500">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#0078D4">
                <path d="M0,0H11.377V11.372H0Z" />
                <path d="M12.623,0H24V11.372H12.623Z" />
                <path d="M0,12.623H11.377V24H0Z" />
                <path d="M12.623,12.623H24V24H12.623Z" />
              </svg>
            </div>
          </div>

          {/* Weather and News Section */}
          <div className="mt-4 w-full max-w-2xl grid grid-cols-2 gap-4">
            {/* Weather Widget */}
            <div className="bg-gray-50 rounded-lg p-4 flex items-center">
              <div className="mr-4">
                <Thermometer size={24} className="text-gray-700" />
              </div>
              <div>
                <div className="text-xl font-medium">36°C</div>
                <div className="text-gray-600">Jaipur</div>
              </div>
              <div className="ml-auto text-gray-500 text-right">
                <div>Mist</div>
                <div className="text-xs">H: 37° L: 25°</div>
              </div>
            </div>
            
            {/* News Widget */}
            <div className="bg-gray-50 rounded-lg p-4 flex items-center">
              <div className="mr-4">
                <img src="/api/placeholder/56/56" alt="Boeing" className="w-14 h-14 object-cover rounded" />
              </div>
              <div>
                <div className="font-medium text-sm">China Halts Boeing Jet Deliveries</div>
              </div>
            </div>
          </div>

          {/* Sports Widget */}
          <div className="mt-4 w-full max-w-2xl">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center">
                <div className="text-gray-700 mr-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div className="font-medium">Sports</div>
              </div>
              <div className="mt-1 text-gray-600 text-sm">Choose your teams</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="p-4 border-t border-gray-200 flex justify-center space-x-4 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">Pro</a>
          <a href="#" className="hover:text-gray-900">Enterprise</a>
          <a href="#" className="hover:text-gray-900">API</a>
          <a href="#" className="hover:text-gray-900">Blog</a>
          <a href="#" className="hover:text-gray-900">Careers</a>
          <a href="#" className="hover:text-gray-900">Store</a>
          <a href="#" className="hover:text-gray-900">Finance</a>
          <div className="flex items-center">
            <span>English</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </footer>
      </div>

      {/* Help Button */}
      <div className="fixed bottom-6 right-6">
        <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white shadow-lg">
          <HelpCircle size={20} />
        </button>
      </div>
    </div>
  );
};

export default Homepage;
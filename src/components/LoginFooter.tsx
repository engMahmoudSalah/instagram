import React from 'react';

export function LoginFooter() {
  const links = [
    'Meta', 'About', 'Blog', 'Jobs', 'Help', 'API', 'Privacy',
    'Terms', 'Top Accounts', 'Locations', 'Instagram Lite',
    'Threads', 'Contact Uploading & Non-Users', 'Meta Verified'
  ];

  return (
    <footer className="mt-16 mb-12 text-xs text-gray-400">
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 max-w-[850px] px-4">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="hover:underline"
          >
            {link}
          </a>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <div className="flex justify-center items-center gap-4">
          <select
            className="bg-transparent text-xs text-gray-400 focus:outline-none cursor-pointer"
            defaultValue="en"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
          <span>© 2024 Instagram from Meta</span>
        </div>
      </div>
    </footer>
  );
}
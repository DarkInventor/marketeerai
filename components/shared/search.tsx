"use client"

// // import React, { useState } from 'react';

// // const Search: React.FC = () => {
// //   const [isSearchOpen, setIsSearchOpen] = useState(false);

// //   const toggleSearch = () => {
// //     setIsSearchOpen(!isSearchOpen);
// //   };

// //   return (
// //     <div className="relative">
// //       <button
// //         onClick={toggleSearch}
// //         className="flex w-36 items-center justify-between rounded-md border border-gray-300 px-4 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100"
// //       >
// //         <p className="text-gray-600">Search</p>
// //         <div
// //           className={`h-4 w-4 text-gray-600 transition-transform ${
// //             isSearchOpen ? 'rotate-180' : ''
// //           }`}
// //         >
// //           {/* Add your icon here (e.g., a search icon) */}
// //         </div>
// //       </button>
// //       {isSearchOpen && (
// //         <div className="absolute top-10 right-0 w-full rounded-md bg-white p-2 sm:w-40">
// //           {/* Add your search input and results here */}
// //           <input
// //             type="text"
// //             placeholder="Search..."
// //             className="w-full p-2 rounded-md border border-gray-300"
// //           />
// //           {/* Add search results or suggestions */}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Search;


// // import React, { useState } from 'react';

// // const Search: React.FC = () => {
// //   const [isExpanded, setIsExpanded] = useState(false);

// //   const handleInputClick = () => {
// //     setIsExpanded(true);
// //   };

// //   const handleSearch = () => {
// //     // Handle the search functionality here
// //     console.log('Searching...');
// //   };

// //   return (
// //     <div className="relative">
// //       <input
// //         type="text"
// //         placeholder="Search..."
// //         className="w-36 p-2 rounded-md border border-gray-300"
// //         onClick={handleInputClick}
// //       />
// //       {isExpanded && (
// //         <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-100 bg-opacity-80">
// //           <div className="bg-white p-4 rounded-lg shadow-md">
// //             <input
// //               type="text"
// //               placeholder="Search..."
// //               className="w-full p-2 border rounded-md"
// //             />
// //             <button
// //               onClick={handleSearch}
// //               className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
// //             >
// //               Search
// //             </button>
// //             <button
// //               onClick={() => setIsExpanded(false)}
// //               className="mt-2 px-4 py-2 ml-2 bg-gray-300 text-gray-700 rounded-md"
// //             >
// //               Close
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Search;

// // import React, { useState } from 'react';

// // const Search: React.FC = () => {
// //   const [isSearchOpen, setIsSearchOpen] = useState(false);

// //   const toggleSearch = () => {
// //     setIsSearchOpen(!isSearchOpen);
// //   };

// //   return (
// //     <div className="relative">
// //       <div className="flex items-center">
// //         <input
// //           type="text"
// //           placeholder="Search..."
// //           className={`w-${isSearchOpen ? 'full' : '56'} p-2 rounded-md border border-gray-300 transition-width duration-300`}
// //           onClick={toggleSearch}
// //         />
// //         <button
// //           onClick={toggleSearch}
// //           className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2"
// //         >
// //           Search
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Search;

// // // OGGGG fav so far
// // import React, { useState } from 'react';

// // const Search: React.FC = () => {
// //   const [isSearchOpen, setIsSearchOpen] = useState(false);

// //   const toggleSearch = () => {
// //     setIsSearchOpen(!isSearchOpen);
// //   };

// //   return (
// //     <div className="relative">
// //       <div className="flex items-center">
// //         <input
// //           type="text"
// //           placeholder="Search..."
// //           className="w-120 p-2 rounded-md border border-gray-300 transition-opacity duration-300"
// //         //   style={{ opacity: isSearchOpen ? 1 : 0 }}
// //           onClick={toggleSearch}
// //         />
// //         <button
// //           onClick={toggleSearch}
// //           className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2"
// //         >
// //           Search
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Search;

// // import React, { useState, ChangeEvent } from 'react';
// // // import puppeteer from '';

// // const Search: React.FC = () => {
// //   const [searchQuery, setSearchQuery] = useState<string>('');
// //   const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

// //   const toggleSearch = () => {
// //     setIsSearchOpen(!isSearchOpen);
// //   };

// //   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
// //     setSearchQuery(e.target.value);
// //   };

// //   const handleSearchClick = async () => {
// //     try {
// //       // Pass the searchQuery to your Puppeteer API route
// //       console.log('handleSearchClick called with query:', searchQuery);
// //       const response = await fetch(`/api/puppeteer?query=${encodeURIComponent(searchQuery)}`);
// //     // const response = await fetch(`/puppeteer?query=${encodeURIComponent(searchQuery)}`);

// //       if (response.ok) {
// //         // Handle the response if needed
// //       } else {
// //         // Handle error if needed
// //       }
// //     } catch (error) {
// //       console.error('An error occurred:', error);
// //     }
// //   };

// // const handleSearchClick = async () => {
// //     try {
// //       const response = await fetch(`/api/puppeteer?query=${encodeURIComponent(searchQuery)}`);
  
// //       if (response.ok) {
// //         const data = await response.json();
// //         console.log('Community Names:', data.communityNames);
// //         // Handle the community names data as needed in your component
// //       } else {
// //         // Handle error if needed
// //       }
// //     } catch (error) {
// //       console.error('An error occurred:', error);
// //     }
// //   };
  

// //   return (
// //     <div className="relative">
// //       <div className="flex items-center">
// //         <input
// //           type="text"
// //           placeholder="Search..."
// //           className="w-120 p-2 rounded-md border border-gray-300 transition-opacity duration-300"
// //           value={searchQuery}
// //           onChange={handleInputChange}
// //         />
// //         <button
// //           onClick={handleSearchClick}
// //           className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2"
// //         >
// //           Search
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Search;



// import React, { useState, ChangeEvent } from 'react';

// interface SearchProps {
//   onSearch: (communityNames: string[]) => void;
// }

// const Search: React.FC<SearchProps> = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState<string>('');

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearchClick = async () => {
//     try {
//       const response = await fetch(`/api/puppeteer?query=${encodeURIComponent(searchQuery)}`);

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Community Names:', data.communityNames);
//         onSearch(data.communityNames); // Pass the community names to the parent component
//       } else {
//         // Handle error if needed
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   };

//   return (
//     <div className="relative">
//       <div className="flex items-center">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="w-120 p-2 rounded-md border border-gray-300 transition-opacity duration-300"
//           value={searchQuery}
//           onChange={handleInputChange}
//         />
//         <button
//           onClick={handleSearchClick}
//           className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2"
//         >
//           Search
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Search;

// // OGG WOrking code
import React, { useState, ChangeEvent } from 'react';

interface SearchProps {
  onSearch?: (communityNames: string[]) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch = () => {} }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [communityNames, setCommunityNames] = useState<string[]>([]); // State for community names

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = async () => {
    try {   
      const response = await fetch(`/api/puppeteer?query=${encodeURIComponent(searchQuery)}`);

      if (response.ok) {
        const data = await response.json();
        console.log('Community Names:', data.communityNames);
        setCommunityNames(data.communityNames); 
        onSearch(data.communityNames); // Pass the community names to the parent component
      } else {
        // Handle error if needed
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-120 p-2 rounded-md border border-gray-300 transition-opacity duration-300"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button
          onClick={handleSearchClick}
          className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2"
        >
          Search
        </button>
        {/* <textarea
        className="w-120 p-8 rounded-md border border-gray-300 mt-2 ml-12"
        value={communityNames.join('\n')} // Convert the array to a newline-separated string
        readOnly // Make the textarea read-only
      /> */}
        <div className="w-150 p-2 mt-2">
        <img
          src="data:image/png;base64,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" // Replace with the actual path to your Reddit logo
          alt="Reddit Logo"
          className="absolute left-0 top-0 w-8 h-8"
        />
        <textarea
          className="w-full p-3 rounded-md border border-gray-300 pl-12 ml-10"
          value={communityNames.map((name, index) => `${index + 1}. ${name}`).join('\n')} // Add numbering
          readOnly // Make the textarea read-only
        />
     
    </div>
    {/* <button
          onClick={handleSearchClick}
          className="px-4 py-2 bg-blue-500 text-white rounded-full ml-2"
        >
          Search
        </button> */}
        <button
//   onClick={handleSearchClick}
  className="w-10 h-10 bg-blue-500 text-white rounded-full ml-2"
>
  +
</button>

      </div>
    </div>
  );
};

export default Search;

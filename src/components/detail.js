// // import React from 'react'

// // const Detail = () => {
// //   return (
// //     <div className='leftsection'>
// //         <h1>News</h1>
      
      
// //     </div>
// //   );
// // };

// // export default Detail;
// // News.js

// import React from 'react';

// const News = () => {
//   return (
//     <div className="news-container">
//       <h2>Latest News</h2>
//       <ul>
//         <li>
//           <h3>Cultural Council</h3>
//           <p>News Content 1</p>
//         </li>
//         <li>
//           <h3>Music council</h3>
//           <p>News Content 2</p>
//         </li>
//         </ul>
//         <ul>
//         <li>
//           <h3>Sports Council</h3>
//           <p>News Content 1</p>
//         </li>
//         <li>
//           <h3>Sort Council</h3>
//           <p>News Content 1</p>
//         </li>
//         </ul>
        
//         {/* Add more news items as needed */}
      
//     </div>
//   );
// };

// export default News;
// News.js

import React from 'react';

const News = () => {
  return (
    <div className="news-container">
      <div className="news-column">
        <h2>Latest News</h2>
        <ul>
          <li>
            <h3>Cultural Council</h3>
            <p>coming soon</p>
          </li>
          <li>
            <h3>Music Council</h3>
            <p>coming soon</p>
          </li>
        </ul>
      </div>
      <div className="news-column">
        <h2>&nbsp;</h2>
        <ul>
          <li>
            <h3>Sports Council</h3>
            <p>Outdoor games</p>
          </li>
          <li>
            <h3>Sport Council</h3>
            <p>coming soon</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default News;

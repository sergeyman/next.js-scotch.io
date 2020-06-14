// ./pages/index.js

// Import React
import React from "react";
// Import the Head Component
import Head from "next/head";

// Export an anonymous arrow function
// which returns the template
export default () => (
  <div>
    <Head>
      <title>League Table</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/purecss@0.6.1/build/pure-min.css"
      />
    </Head>
    <h1>This is just so easy 123!</h1>
  </div>
);

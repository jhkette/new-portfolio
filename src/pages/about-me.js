import React, { useState } from "react"
import Layout from "../components/layout"

import "../styles/404.scss";

// 404 page for gatsby
export default function about(){
  
    return (
      <Layout>
    
          <title>Portfolio: Joseph Ketterer</title>
        
        <div className="not-found">
          <h1 className="heading-warning">About</h1>
          <p>About</p>
        </div>
      </Layout>
    );
  }




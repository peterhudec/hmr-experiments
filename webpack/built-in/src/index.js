import React from 'react'
import {createRoot} from 'react-dom/client'

createRoot(document.body).render(
  <div>
    <h1>
      pice
    </h1>
  </div>
)

// Without this webpack will reload the page
module?.hot?.accept()
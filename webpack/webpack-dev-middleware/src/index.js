import React, {useEffect, useState} from 'react'
import {createRoot} from 'react-dom/client'

import App from './app'



window.__root__ ??= createRoot(document.getElementById('mountpoint'))

window.__root__.render(<App/>)

// Without this webpack will reload the page
// module?.hot?.accept()

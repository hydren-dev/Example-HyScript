const HyScript = require('hyscript-latest');  

const hy = new HyScript();  

// Set the directory containing `.hs` files  
hy.set('./pages');  

// Public Directory 
hy.static('public');

// Start the server on a specific port  
const PORT = 3000;  
hy.start(PORT, 'HyScript server is running!');  

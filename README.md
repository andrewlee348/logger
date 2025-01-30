# logger

use template:
'''
fetch('http://localhost:9999/api/data', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({ key1: 'value1', key2: 'value2' }),
})
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
'''

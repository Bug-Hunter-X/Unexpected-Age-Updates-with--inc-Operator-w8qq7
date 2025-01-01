```javascript
const query = { name: 'John Doe' };

// Incorrect use of $inc operator leading to unexpected results
db.collection('users').updateOne(query, { $inc: { age: -1 } });
```
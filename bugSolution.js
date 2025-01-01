```javascript
const query = { name: 'John Doe' };

// Correct use of $inc operator with a check to prevent negative values
db.collection('users').updateOne(query, { $inc: { age: -1 } }, { upsert: false }, function (err, res) {
  if (err) throw err;
  console.log('Document updated successfully:', res);
});
```
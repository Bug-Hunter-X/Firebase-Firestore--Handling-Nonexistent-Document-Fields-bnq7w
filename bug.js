The Firebase SDK may throw an error if you attempt to access a field that doesn't exist in your Firestore document. This can lead to unexpected behavior in your application.  For example:

```javascript
db.collection('users').doc('someUser').get().then(doc => {
  const name = doc.data().name; // Error if 'name' doesn't exist
  console.log(name);
});
```
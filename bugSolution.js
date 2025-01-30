To prevent errors, always check for the existence of a field before accessing it.  You can use optional chaining or the `hasOwnProperty()` method:

```javascript
db.collection('users').doc('someUser').get().then(doc => {
  const data = doc.data();
  const name = data?.name || 'Unknown'; // Optional chaining
  // Alternatively
  const name2 = data.hasOwnProperty('name') ? data.name : 'Unknown'; // hasOwnProperty
  console.log(name, name2);
});
```

Using optional chaining (`?.`) provides a concise way to handle potential null or undefined values.  The `||` operator provides a default value if the field is missing.  `hasOwnProperty()` offers a more explicit check.
db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'the_database',
    },
  ],
});

db.createCollection('persons');

//db.persons.insert({ name: 'Mary Poppendieck', phone: "39-23-6423122"});

//12.8
try {

  console.log('db.persons.insertOne');

  db.persons.insertOne( { name: 'Ada Lovelace', phone: '39-44-5323523' } );

} catch (error) {

   print(error);
};
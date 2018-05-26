import * as firebase from 'firebase'; //take all named exports dumps on new variable firebase
import moment from 'moment';
//import * as expensesActions from '../actions/expenses';

// Initialize Firebase
  var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);
  
  const database = firebase.database();


  //ref -> reference a specify path to db
  //set -> set the value to the reference
  //  database.ref().set({
  //     name: 'Eddie Mead',
  //     age: 23,
  //     stressLevel: 6,
  //     job:{
  //       title: 'Software Developer',
  //       company: 'Google'
  //     },
  //     location: {
  //         city: 'Sham Shui Po',
  //         country: 'Hong Kong'
  //     }
  //   }).then(()=>{
  //     console.log('Data is saved!');
  //   }).catch((err)=>{
  //     console.log('this is fail', err);
  //   });

    // database.ref().set('This is my data'); //json data not require


    // database.ref().set({
    //   age: 24
    // });  
    //override all data in db

     //ref to age
    // database.ref('age').set(27); 

    // ref to location.city
    // database.ref('location/city').set('Hung Hum'); 

    // setup then and catch
    // make sure catch actually works
    // swicth rules to open
    // make sure that then run
     

     //attributes
     // height
     // weight
    //  database.ref('attributes').set({
    //      height: 140,
    //      weight: 50
    //  }).then(function () {
    //    console.log('Synchronization succeeded');
    //  }).catch(function (error) {
    //     console.log('Synchronization failed', error);
    //  });

    //  console.log('Data changed');

    //remove isSingle from db
//  database.ref('isSingle')
//   .remove()
//   .then(function () {
//     console.log("Remove succeeded.")
//   })
//   .catch(function (error) {
//     console.log("Remove failed: " + error.message)
//   });


/*
 * Passing null for the new value is equivalent to calling remove(); namely, 
 * all data at this location and all child locations will be deleted.
 */
// database.ref('isSingle').set(null); 

//can update (root lv only) , add & delete attribute
//also support promise
  // database.ref().update({
  //   job: 'Manager',
  //   'location/city': 'Botson'
  // });

  //Change stress lv to 9
  //Change job company to Amazon
  //Change location.city to Seattle
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// })



// database.ref('location/city').once('value')
// .then((snapshot) =>{
//   const val = snapshot.val();
//   console.log(val);
// })
// .catch((e)=>{
//   console.log('fetching data error: ', e);
// });

//notify if server changes data
// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// }, (e)=>{
//   console.log('fetching data error: ', e);
// });

// setTimeout(()=>{
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   //cancel all subscription on that reference
//   // database.ref().off(); 

//   //cancel onValueChange subscription on that reference
//   database.ref().off(onValueChange); 

// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

//setup data sub -> Andrew is a Software Developer at Amazon
//  database.ref().set({
//     name: 'Andrew Mead',
//     age: 23,
//     job:{
//       title: 'Software Developer',
//       company: 'Amazon'
//     }
//   }).then(()=>{
//     console.log('Data is saved!');
//   }).catch((err)=>{
//     console.log('this is fail', err);
//   });


// //change the data and make sure it reprint
// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e)=>{
//   console.log('fetching data error: ', e);
// });


// const firebaseNotes = {
//   notes:{
//     apoiasdf:{
//       title: 'First note!',
//       body: 'This is my note'
//     },
//     apdwdwwjds:{
//       title: 'Another note!',
//       body: 'This is mt  note'
//     }
//   }
// };

// const notes = [{
//     id: '12',
//     title:'First note!',
//     body: 'This is mt  note'
// },{
//     id: '761ase',
//     title: 'Another note!',
//     body: 'This is mt  note'
// }];

// database.ref('notes').set(notes);

// database.ref('notes').push(
//     {
//       title: 'Course Topics',
//       body: 'React Native, Angular, Python'
//     },
// );

// database.ref('notes/-LDHDKarz61yk9FqfLAF').update({
//   body: 'Buy food'
// });

// database.ref('notes/-LDHDKarz61yk9FqfLAF').remove();

// Setup expenses with 3 items (description, note, amount, createdAt)


// database.ref('expenses').push(
//     {
//       description: 'Rent',
//       note: '',
//       amount: 109500,
//       createdAt: 12255445848
//     }
// );

// database.ref('expenses').push(
//   {
//     description: 'Phone bill',
//     note: '',
//     amount: 5900,
//     createdAt: 12255445848
//   }
// );


// database.ref('expenses').push(
//   {
//     description: 'Food',
//     note: '',
//     amount: 1200,
//     createdAt: 12255445848
//   }
// );

// database.ref('expenses').once('value')
//   .then((snapshot)=>{
//       const expenses = [];
//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val() //spread out obj
//         });
//       });
//       console.log(expenses);
//   });

//setup subscribtion to expenses
//print array when data changes in server
// database.ref('expenses').on('value',
//   (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val() //spread out obj
//       });
//     });
//     console.log(expenses);
// });

//child_removed event
// database.ref('expenses').on('child_removed',(snapshot)=>{
//   //show deleted obj
//   console.log(snapshot.key, snapshot.val());
// });

//child_changed event
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

//child_added
// database.ref('expenses').on('child_added', (snapshot)=>{
//   //show all data when child added
//   console.log(snapshot.key, snapshot.val());
// });

export {firebase, database as default};
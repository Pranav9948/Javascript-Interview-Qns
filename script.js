

// const arr=[2,3,4,5,6]

// const multiplyByThree=arr.map((x)=>{

//     return x*3
// })

// console.log('m3',multiplyByThree)


// const findOnlyGt4=arr.filter((x)=>{

//     return x>4
// })

// console.log('gt4',findOnlyGt4)


// const findSum=arr.reduce((acc,curr)=>{

//     return acc=acc+curr
// },0)

// console.log('findSum',findSum);


//polyfill for map


// const arr=[2,3,4,5,6]

// Array.prototype.myMap=function(cb){

//     let temp=[]

//     for(let i=0;i<this.length;i++){

//         temp.push(cb(this[i]))
//     }

//     return temp
// }

// const multiplyByThree=arr.myMap((x)=>{

//     return x*4
// })


// console.log('123Mu',multiplyByThree)


//polyfill for filter


// const arr=[2,3,4,5,6]



// Array.prototype.myFilter=function(cb){

//     let newArr=[]

//     for(let i=0;i<this.length;i++){

//         if(cb(this[i])){

//             newArr.push(this[i])
//         }

       
//     }

// }



// const findOnlyGt4=arr.filter((x)=>{

//     return x>4
// })

// console.log('gt4',findOnlyGt4)



// let students=[

//     {
//         name:'virat',age:23,place:'delhi',str:140
//     },
//        {
//         name:'dhoni',age:33,place:'ranchi',str:160
//     },
//        {
//         name:'sachin',age:43,place:'mumbai',str:130
//     },
//        {
//         name:'rohit sharma',age:33,place:'mumbai',str:150
//     },
//        {
//         name:'jaiswal',age:17,place:'kolkata',str:130
//     },
// ]


//   const Capitalize=students.map((x)=>{

//     return x.name.toUpperCase()
//   })


//   console.log('mh',Capitalize)


//capitalize using polyfills

// const capitalizze=function(){

//     let temps=[]

//     for(i=0;i<students.length;i++){

//         temps.push(students[i].name.toUpperCase())
//     }
//     return temps  
// }

// console.log('123',capitalizze())


//return only those students whos age is less than 30

// const ageGT30=students.filter((x)=>{

//     return x.age<30
// })

// console.log('age30',ageGT30);


//polyfill for above


// const ageGTT30=function(){

//     let temp=[]

//     for(i=0;i<students.length;i++){

//         if(students[i].age>30){

//             temp.push(students[i])
//         }


//     }

//     return temp
// }

// console.log('11111',ageGTT30());


//age greater than 30 and str grth 140


// const ggt4=students.filter((x)=>{

//     return x.age>30 && x.str>120

// })


// console.log("mnnn",ggt4)


//sum of age of everyone


// const sumOfStudents=students.reduce((acc,curr)=>{

//    return    acc=curr.age+acc
// },0)

// console.log('sum',sumOfStudents)


// return only name of players whos age is less than 30


// const namelt30=students.filter((x)=>{

//     return x.age <30
// }).map((x)=>{

//     return x.name
// })

// console.log('namelt30',namelt30)


//return total age for students with age gt than 40.after 10 age has been added to those age less than 30


// const ageGt=students.map((student)=>{

//      if(student.age<30 ){

//         student.age+=10
//      }

//      return student

//     }).filter((x)=>{
        
//         return x.age>30
//     }).reduce((acc,curr)=>{

//         return acc=acc+curr.age
//     },0)


// console.log('ageGtt',ageGt);


// }).map((x)=>{

//     return x.age+10
// }).filter((x)=>{

//     return x.age >40
// }).reduce((acc,curr)=>{
//     return acc=curr.age+acc
// },0)

// console.log('ageGt',ageGt)



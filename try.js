// const Data = [
//     { url: "/", name: "Home" },
//     { url: "/about-us", name: "About Us" },
//     { url: "/our-brand", name: "Our Brand" },
//     { url: "/investors", name: "Investors" },
//     { url: "/careers#", name: "Careers" },
//     { url: "/media/", name: "Media" },
//     { url: "/sustainability", name: "Sustainability" },
//     { url: "/our-blog", name: "Our Blog" },
//     { url: "/contact-us", name: "Contact Us" },
//   ];
  
//   // Find the index of "Our Blog"
//   // const index = Data.findIndex((item) => item.name === "Careers");
//   // console.log("index", index);

//   // const Data12 = [
//   //   {id:"1",name:"A"},
//   //   {id:"2",name:"B"},
//   //   {id:"3",name:"C"}
//   // ]

//   // const indexfind = Data12.findIndex((item)=> item.id === "1");
//   // console.log(indexfind);
  
  
//   // Remove "Our Blog" if it exists
//   // if (index !== -1) {
//   //   Data.splice(index, 5); // Remove 1 element at the found index
//   // }



//   const Array1 = [1,2,3,4,5,4,7,8,2,10];

//  const results = Array1.filter((item,index)=> Array1.indexOf(item) !== index);
//   console.log("results",results);

//   const resullts2 = Array1.filter((ite,index) => Array1.indexOf(ite));
//   console.log("resullts2",resullts2);


//   const Array111 = [1, 2, 3, 4, 5, 4, 7, 8, 2, 10];

//   let duplicates = [];
//   let countMap = {};
  
//   // Count occurrences of each number
//   Array111.forEach(num => {
//       countMap[num] = (countMap[num] || 0) + 1;
      

//   });

//   Array111.forEach((num)=> {
//     if(countMap[num] > 1){
//       duplicates.push(num);
//       if(duplicates.length > 1) {
//         console.log("Duplicate values:", duplicates);
//       }
//     }
//   })
//   console.log("duplicates",duplicates);
    
  
//   // Extract numbers that appear more than once
//   for (const num in countMap) {
//       if (countMap[num] > 1) {
//         duplicates.push(Number(num));
//       }
//   }



//   console.log("Duplicate values22222:", duplicates);



//   const newData = [3,5,3,7,3,4,3,2,1,4,6,8,3,5,2,6,8,2];
//   const uniqueData = [...new Set(newData)];
//   console.log("uniqueData",uniqueData);

//   const uniqueData2 = [...new Set(newData)]
//   console.log("uniqueData2",uniqueData2);



//   const newFind = Array1.filter((item,index) => Array1.indexOf(item) !== index);
//   console.log("newFind",newFind);

//   const newFindData2 = Array1.filter((item,index)=> Array1.indexOf((item)))
  
    




//   // console.log("resullts2",resullts2);




//   console.log("newArrya",Array1.indexOf(10));





// // const array = [1, 2, 3, 4, 5];

// // // Checks whether an element is even
// // const even = (element) => element % 2 === 0;

// // console.log(array.some(even));
// // // Expected output: true
  

// //   const newwwData = Data.map((item)=> item.url.split("/")[1]);
// //   console.log("newwwData",newwwData);

// //   console.log("newwData",newwwData);
  

// // //   split,splice,slice,forEach,map,

// // const arr = [4,6,3,6,6,43];
// // let max = arr[0];

// // for(let i =1; i<arr.length; i++){
// //     if(arr[i]<max){
// //         max = arr[i]
// //     }
// // }

// // const maxNum = Math.min(...arr);
// // console.log("maxNum",maxNum);

// // const array = [3,4,1,7,9];
// // const newArray = array.map((item)=>{
// //     return item*2;
// // })

// // const newArray2  = array.forEach((itm)=> itm);
// // console.log("newArray2",newArray2);
// // const qw = Array.from(array);
// // console.log("qw",typeof(qw));


// // const nw = array.map((itm)=> itm);
// // console.log("eee",typeof(nw));


// // const ww =[{ key: 2 }];
// // console.log("ww",ww);

// // const w2 = array.concat("A: 21")
// // const w21 = array.concat("AB: 210");

// // const new1Data = [
// //      [
// //         '',
// //         'about-us',
// //         'our-brand',
// //         'investors',
// //         'careers#',
// //         'sustainability',
// //         'our-blog',
// //         'contact-us'
// //       ]
// // ]

// // const months = ["March", "Jan", "Feb", "Dec"];
// // months.sort();
// // console.log(months);
// // // Expected output: Array ["Dec", "Feb", "Jan", "March"]

// // const array1 = [1, 30, 4, 21, 100000];
// // array1.sort();
// // console.log(array1);
// // // Expected output: Array [1, 100000, 21, 30, 4]




// // const values = [1, 10, 21, 2];
// // const sortedValues = values.toSorted((a, b) => a - b);

// // const sortedArray = arrraynew.sort((a, b) => a - b);
// // console.log(sortedArray);





// // console.log(sortedValues);



const Data = [4,2,5,6]







  
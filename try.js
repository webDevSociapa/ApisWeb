const Data = [
    { url: "/", name: "Home" },
    { url: "/about-us", name: "About Us" },
    { url: "/our-brand", name: "Our Brand" },
    { url: "/investors", name: "Investors" },
    { url: "/careers#", name: "Careers" },
    { url: "/media/", name: "Media" },
    { url: "/sustainability", name: "Sustainability" },
    { url: "/our-blog", name: "Our Blog" },
    { url: "/contact-us", name: "Contact Us" },
  ];
  
  // Find the index of "Our Blog"
  const index = Data.findIndex((item) => item.name === "investors");
  console.log("index", index);
  
  
  // Remove "Our Blog" if it exists
  if (index !== -1) {
    Data.splice(index, 5); // Remove 1 element at the found index
  }

  const newwwData = Data.map((item)=> item.url.split("/")[1]);
  console.log("newwwData",newwwData);

  console.log("newwData",newwwData);
  

//   split,splice,slice,forEach,map,

const arr = [4,6,3,6,6,43];
let max = arr[0];

for(let i =1; i<arr.length; i++){
    if(arr[i]<max){
        max = arr[i]
    }
}

const maxNum = Math.min(...arr);
console.log("maxNum",maxNum);

const array = [3,4,1,7,9];
const newArray = array.map((item)=>{
    return item*2;
})

const newArray2  = array.forEach((itm)=> itm);
console.log("newArray2",newArray2);
const qw = Array.from(array);
console.log("qw",typeof(qw));


const nw = array.map((itm)=> itm);
console.log("eee",typeof(nw));


const ww =[{ key: 2 }];
console.log("ww",ww);

const w2 = array.concat("A: 21")
const w21 = array.concat("AB: 210");

const new1Data = [
     [
        '',
        'about-us',
        'our-brand',
        'investors',
        'careers#',
        'sustainability',
        'our-blog',
        'contact-us'
      ]
]










  
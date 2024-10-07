// import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';

// export default function HexagonalPage() {
//   const hexagonData = [
//     { q: 0, r: -1, s: 1, image: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg', text: 'Tech' },
//     { q: 0, r: 1, s: -1, image: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg', text: 'Architecture' },
//     { q: 0, r: 0, s: 0, image: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg', text: 'Nature' },
//     { q: 1, r: -1, s: 0,image: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg', text: 'Business' },
//     { q: 1, r: 0, s: -1, image: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg', text: 'Food' },
//     { q: -1, r: 1, s: 0, image: 'https://source.unsplash.com/random/800x600?travel', text: 'Travel' },
//     { q: -1, r: 0, s: 1, image: 'https://source.unsplash.com/random/800x600?art', text: 'Art' },
//   ];

//   return (
//     <div style={{ width: '100%', height: '100vh', background: '#f0f0f0' }}>
//       <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
//         <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
//           {hexagonData.map((hex, index) => (
//             <Hexagon key={index} q={hex.q} r={hex.r} s={hex.s} fill={`pat-${index}`}>
//               <Text>{hex.text}</Text>
//             </Hexagon>
//           ))}
//           <Path start={new Hex(0, 0, 0)} end={new Hex(-1, 0, 1)} />
//         </Layout>
//         {hexagonData.map((hex, index) => (
//           <Pattern key={index} id={`pat-${index}`} link={hex.image} size={{ x: 10, y: 10 }} />
//         ))}
//       </HexGrid>
//     </div>
//   );
// }
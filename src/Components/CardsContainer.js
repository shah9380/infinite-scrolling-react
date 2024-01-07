import React, { useEffect, useState} from "react";
import Card from "./Card";
import axios from 'axios';
// import Data from './ImagesData.json';
import InfiniteScroll from "react-infinite-scroll-component";

const CardsContainer = (props)=>{
  const[imageData,setImageData]= useState([]);
  const[check,setCheck]= useState(false);
  const[pager,setPager] = useState(1);
  // const[hasMore,setHasMore]=useState(true);
  const[loading,setLoading]=useState(true);

  console.log("from container", props.searchValue);
  useEffect(()=>{
    const fetch = async ()=>{
      try{
        const response = await axios.get(`https://api.unsplash.com/photos/random?count=20&client_id=KLh5PUyoSDussIbC-UzHoAWcCQOh2ZvSzGGGjBvwk8s`);
        console.log(response);
        setImageData((prevData)=>[...prevData, ...response.data]);
        setCheck(true);
        setLoading(false);
      }catch(error){
        console.log(error);
      }
    }
    fetch();
  },[pager]);
  let filterData = imageData.filter((item)=> item.alt_description == null?true:item.alt_description.toLowerCase().includes(props.searchValue.toLowerCase()) || item.slug == null?true:item.slug.toLowerCase().includes(props.searchValue.toLowerCase()) || item.user.name == null?true:item.user.name.toLowerCase().includes(props.searchValue.toLowerCase()) || item.description == null?true:item.description.toLowerCase().includes(props.searchValue.toLowerCase()))
  
  return(
    <section>
      {   
          loading &&
          <div className="font-medium text-lg">Loading...</div>
      }
      
      { 
        !loading && check && <InfiniteScroll className="columns-1 md:columns-2 lg:columns-3 xl:columns-4"  dataLength={filterData.length} next={()=>{setPager((page)=> page+1)}} hasMore={true}>
                    {
                      filterData.map((item)=>{
                        return <Card imageUrl={item.urls.regular} bio={item.user.bio} name={item.user.name} created_at={item.created_at} ></Card>
                      })
                    }
        </InfiniteScroll> 
      }
    </section>
  )
}

export default CardsContainer;



// const CardsContainer = () => {
//   const [data, setData] = useState([]);
//   const [pager, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const observer = useRef();

//   const lastCardRef = useRef(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`https://api.unsplash.com/photos/random?count=20&page=${pager}&client_id=lC4KlUN0AsVjoF51nWfQcRjYQLJiFQqWQcY2l72T3Mc`);
//         setData((prevData) => [...prevData, ...response.data]);
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//     console.log(pager);
//   }, [pager]);

//   useEffect(() => {
//     if (loading) return;

//     observer.current = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting) {
//         setPage((prevPage) => prevPage + 1);
//       }
//     });

//     if (lastCardRef.current) {
//       observer.current.observe(lastCardRef.current);
//     }

//     return () => {
//       if (observer.current) {
//         observer.current.disconnect();
//       }
//     };
//   }, [loading]);

//   return (
//     <div className="gap-8 md:columns-2 sm:columns-1 lg:columns-3 xl:columns-4 m-4">
//       {data.map((item, index) => {
//         if (data.length === index + 1) {
//           return (
//             <div ref={lastCardRef} key={Date.now()}>
//               <Card
//                 imageUrl={item.urls.raw}
//                 name={item.user.name}
//                 bio={item.user.bio}
//                 created_at={item.created_at}
//               />
//             </div>
//           );
//         } else {
//           return (
//             <Card
//               key={Date.now()}
//               imageUrl={item.urls.raw}
//               name={item.user.name}
//               bio={item.user.bio}
//               created_at={item.created_at}
//             />
//           );
//         }
//       })}
//     </div>
//   );
// };

// export default CardsContainer;

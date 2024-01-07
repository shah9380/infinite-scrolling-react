

const Card = (props)=>{
    return(
        <div className='text-start flex flex-col relative border border-black mb-8 overflow-hidden rounded-2xl'>
            <img className='' src={props.imageUrl}></img>
            <div className='absolute z-10 text-white flex flex-col justify-center items-start gap-4 p-4'>
                <h3 className='font-medium text-lg'>{props.name}</h3>
                <p>{props.bio}</p>
                <p>{props.created_at}</p>
            </div>
        </div>
    )
}
export default Card;

// style={{backgroundImage: `url(${Data[0].urls.raw})`, backgroundSize: 'cover', backgroundPosition: 'center'}}

// {/* <div className='text-start flex flex-col relative border border-black mb-4 overflow-hidden'>
//             <img className='' src={Data[0].urls.raw}></img>
//             <div className='absolute z-10 text-white flex flex-col justify-center items-start gap-4 p-4'>
//                 <h3 className='font-medium text-lg'>{Data[0].user.name}</h3>
//                 <p>{Data[0].user.bio}</p>
//                 <p>{Data[0].created_at}</p>
//             </div>
// </div> */}
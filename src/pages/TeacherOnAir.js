import React from "react";
import { useState, useEffect } from "react";
import useFetch from 'react-fetch-hook'
import { useNavigate,Link } from "react-router-dom";

function TeacherActivity() {
  const url = 'https://randomuser.me/api/'
  const { data } = useFetch(url+'?results=2')
  const [contactList, setContactList] = useState()
  const [filterQuery, setFilterQuery] = useState()

  const navigate = useNavigate()
  
  // const selectedView=()=>{
  //   // navigate('/onairview',{state:{});
  //     }
  //     // navigate('/posts', {state: { test: 'test'}})


 //  https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCg_GB9WS6YKHilQZIJEC4kg&maxResults=2&order=date&key=AIzaSyA3zPwdG3oEguS56zMgTqQAU-HRmSbFknU

  useEffect(() => {
    if (!filterQuery) {
      setContactList(data?.results?.slice(0, 10))
    } else {
      const queryString = filterQuery.toLowerCase()
      const filteredData = data?.results?.filter(contact => {
        const fullName = `${contact.name.first} ${contact.name.last}`

        // if it's just one letter, return all names that start with it
        if (queryString.length === 1) {
          const firstLetter = fullName.charAt(0).toLowerCase()
          return firstLetter === queryString
        }
        else {
          return fullName.toLowerCase().includes(queryString)
        }
      })
      setContactList(filteredData)
    }
  }, [data, filterQuery])
  // console.log(contactList.index);
  return (
    <div className={"bg-gray-100"}>
      {/* <section>
        <form>
          <input
            type={"text"}
            placeholder={"type here to filter..."}
            onChange={event => setFilterQuery(event.target.value)}
            className={"ml-20 mt-6 rounded-md p-2"}
          />
        </form>
      </section> */}
      <section className={"block justify-center sm:grid-cols-4 md:grid-cols-4 gap-6 px-4 p-18"}>
        {/* {contactList?.length < 1 && (
          <h1>No data matches your search</h1>
        )} */}
       
        {contactList?.map((contact, index) => (
        <figure className="flex mt-5  border-2  bg-blue-500  text-white h-40 rounded-lg shadow-md " key={index}>
          <div className='px-2 '>
          <img alt="user" className="w-34 h-32 rounded-full mx-auto mt-4 border-2 " src={contact.picture.large} />
          </div>
        
          <figcaption className="text-center mt-5 ">
          
        <div  className=" relative w-full image-cover rounded-t-md" >
          <div className=" absolute -top-9 -right-8 p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
             <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
              <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
          </div>
        </div>
            <p className="text-gray-700 font-semibold text-xl mb-1">
              {contact.name.first} {contact.name.last}
            </p>
            <p className="text-gray-500 mt-2">
              <span className="font-medium  px-4">email:{contact.email}</span>
            </p>
            <p className="text-gray-500">
              <span className="font-medium">phone: </span>{contact.cell}
            </p>
            <p className="text-gray-500">
              <span className="font-medium">city: </span>{contact.location.city}
            </p>
          </figcaption>

          <Link to={`/onairview/${contactList.email}` }>
           <button  className="text-semibold">View</button>    </Link>     



        </figure>
      ))}
      </section>
      
    </div>
  )
}

export default TeacherActivity;

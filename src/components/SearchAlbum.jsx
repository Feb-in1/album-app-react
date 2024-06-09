import React, { useState } from 'react'
import Navbar from './Navbar'

const SearchAlbum = () => {
    const [data, setData] = useState(
     {
        "album":""
     }   
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        
<Navbar/>

        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                                <label htmlFor="" className="form-label">Album Id</label>
                                <input type="text" className="form-control" name='album' value={data.value} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Search</button>
                            </div>
                        </div>




                    </div>
                </div>
            </div>




        </div>
  )
}

export default SearchAlbum
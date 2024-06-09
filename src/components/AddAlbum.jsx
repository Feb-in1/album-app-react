import React, { useState } from 'react'
import Navbar from './Navbar'

const AddAlbum = () => {
    const [data, setData] =useState(
        {
            "userid":"",
            "id":"",
            "title":""
        
        }
    )


const inputHandler=(event)=>{
    setData({...data, [event.target.name]: event.target.value})
}

const readValue = ()=>{
    console.log(data)

}



    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">User Id</label>
                                <input type="text" className="form-control" name='userid' value={data.userid} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Id</label>
                                <input type="text" className="form-control" name='id' value={data.id} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Title</label>
                                <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <button className="btn btn-primary" onClick={readValue}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AddAlbum
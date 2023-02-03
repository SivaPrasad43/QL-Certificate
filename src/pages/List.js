import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import slug from 'slug';
import { data } from '../data/certificate-data'
import "./List.css"

function List() {

  let params = useParams();
  let searchParams = useSearchParams();
  let Title = params.event.toUpperCase()
  let listData = data.filter((el) => slug(el.event) === params.event && el.category === searchParams[0].get("category"))

  return (
    <div>
      <h1 className='Title'>{Title}</h1>
      <div className='ListContainer'>
      {listData.map((el) =>
        <Row key={el.id} data={el} />
      )}
      </div>
    </div>
  )
}

function Row({ data }) {
  return (
    <div className='row'>
      <h3 className='ListName'>{data.recipient_name}</h3>
      <p className='CollegeName'>{data.college}</p>
      <a className='btn' href={data.download_link} rel="noreferrer" target="_blank">Download</a>
    </div>
  )
}

export default List

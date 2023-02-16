import React from 'react'

const Paginador = ( { paginationInfo, setPageNumber, setPageSize }) => {
    let {next, previus, count, page, start, pageCount} = paginationInfo
  return (
    <div className='paginador'>
            <p>Items per page</p>
            <select name="cars" id="cars" onChange={(e)=>setPageSize(e.target.value)}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
            <h5>{ `${start + 1}-${(start + count)} of ${page}` }</h5>
            {
              page === 1 ? 
              <button onClick={()=> setPageNumber(page - 1)} disabled>{"<"}</button>
              :
              <button onClick={()=> setPageNumber(page - 1)} >{"<"}</button>
            }
            {
              page === pageCount ?
              <button onClick={()=> setPageNumber(page + 1)} disabled>{">"}</button>
              :
              <button onClick={()=> setPageNumber(page + 1)}>{">"}</button>
            }
    </div>
  )
}

export default Paginador 
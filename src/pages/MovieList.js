import React from 'react'

const MovieList = ({name , actor , id}) => {
    return (
        <div style={{ width:"40%", margin:"40px 30%" , display:"flex" , justifyContent:"space-between"}}>
            <div>{id}</div>
            <h3 style={{}}>{name}</h3>
            <h2>{actor}</h2>
        </div>
    )
}

export default MovieList;

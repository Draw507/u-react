import React from 'react';

const Info = ({info}) => {
    if(Object.keys(info).length === 0) return null;

    return ( 
        <div className="card border-ligth">
            <div className="card-header bg-primary text-ligth font-weight-bold">
                Información Artista
            </div>
            <div className="card-body">
                <img src={info.strArtistThumb} alt="Logo Artista"/>
            </div>
        </div>
     );
}
 
export default Info;
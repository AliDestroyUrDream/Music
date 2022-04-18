import React from "react";
import style from './Art.module.css';
import ArtCont from './art-cont/artCont';

const Art = () => {
    return (
        <div className={style.art}>
            <ArtCont />
            <ArtCont />
            <ArtCont />
            <ArtCont />
        </div>
     );
}
export default Art;
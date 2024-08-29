import { useEffect, useState } from "react";
import ProoertyCard from "../ProoertyCard/ProoertyCard";
import './FilterCard.css'
import { cardData } from "../../data/propData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export default function FilterCard() {
    const [selectBtn,setSelectBtn] = useState('Show All')
    const [filterItem, setFilterItem] = useState([]);

    useEffect(() => {
      if (selectBtn === 'Show All') {
          setFilterItem(cardData);
      } else {
          setFilterItem(cardData.filter(item => item.type === selectBtn));
      }
      }, [selectBtn]);

  return (
    <section className="filterCard">
       <div className="filter-btn" >
            <button onClick={()=>
                setSelectBtn('Show All')
            }
            className={` ${selectBtn == 'Show All' ? 'activeBtn': ''}`}>Show All</button>
            <button onClick={() => 
                setSelectBtn('Apartment')
            }
            className={`${selectBtn == 'Apartment' ? 'activeBtn' : ''}`}
            >Apartment</button>
            <button onClick={() => 
                setSelectBtn('Luxury Villa')
            } className={`${selectBtn == 'Luxury Villa' ? 'activeBtn' : ''}`}
            >Villa House</button>
            <button onClick={() =>
                setSelectBtn('Penthouse')
            } className={`${selectBtn == 'Penthouse' ? 'activeBtn' : ''}`}
            >Penthouse</button>
       </div>
       <div className="cards">
                {filterItem.map((property) => (
                    <ProoertyCard
                        key={property.id}
                        imgCard={property.img}
                        type={property.type}
                        price={property.price}
                        titleCard={property.title}
                        Bed={property.Bed}
                        Bath={property.Bath}
                        Area={property.Area}
                        Floor={property.floor}
                        parking={property.parking}
                    />
                ))}
       </div>
       <div className="num">
           <span>1</span>     
           <span>2</span>     
           <span>3</span>     
           <span><FontAwesomeIcon icon={faAnglesRight} /></span>     
       </div>
    </section>
  )
}

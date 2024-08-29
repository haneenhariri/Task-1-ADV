import { useState } from 'react';
import './FiltrBtn.css'

export default function FiltrBtn({onBtnChange}) {
  const [activeButton, setActiveButton] = useState('Appartment');
  const handleButtonClick = (buttonName, content) => {
    setActiveButton(buttonName);
    onBtnChange(content);
  };
  return (
    <div className='filter-btn'>
        <button 
         onClick={() => handleButtonClick( 'Appartment',{
          img: './imag/BestImg/deal-01.jpg',
          title: 'Extra Info About Property',
          p1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt qui vitae necessitatibus maiores omnis? Dicta porro ab possimus excepturi ducimus corrupti! Iusto molestiae autem magni quis. In beatae odit similique.',
          p2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, quibusdam.',
          pList: '185 m2',
          Floor: '26th',
          Room: '4',
          parking:'Yes',
          payment:'Bank'
         })
         }
         className={activeButton === 'Appartment' ? 'activeBtn' : ''}>
          Appartment
        </button>
        <button
          onClick={() => handleButtonClick('Villa House',{
            img: './imag/BestImg/deal-02.jpg',
            title: 'Extra Info About Villa',
            p1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt qui vitae necessitatibus maiores omnis? Dicta porro ab possimus excepturi ducimus corrupti! Iusto molestiae autem magni quis. In beatae odit similique.',
            p2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, quibusdam.',
            pList: '250 m2',
            Floor: '26th',
            Room: '5',
            parking:'Yes',
            payment:'Bank'
          })}
        className={activeButton === 'Villa House' ? 'activeBtn' : ''}>
        Villa House
        </button>
        <button
          onClick={() => handleButtonClick('Penthouse',{
            img: './imag/BestImg/deal-03.jpg',
            title: 'Extra Info About Penthouse',
            p1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt qui vitae necessitatibus maiores omnis? Dicta porro ab possimus excepturi ducimus corrupti! Iusto molestiae autem magni quis. In beatae odit similique.',
            p2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, quibusdam.',
            pList: '320 m2',
            Floor: '34th',
            Room: '4',
            parking:'Yes',
            payment:'Bank'
          })}
        className={activeButton === 'Penthouse' ? 'activeBtn' : ''}>
            Penthouse
        </button>
    </div>
  )
}

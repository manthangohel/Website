import React, { useContext } from 'react';
import { dataContext } from './A';


const B = () => {
   const { data, setdata } = useContext(dataContext);
   return (
      <>
         <div>{data}</div>
         <button onClick={()=>setdata("Gohel")}>change b</button>

      </>
   );
};

export default B;
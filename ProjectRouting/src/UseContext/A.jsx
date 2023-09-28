import React, { createContext, useState } from 'react';
import B from './B';

export const dataContext = createContext();

const A = () => {
   const [data, setdata] = useState("working");

   return (
      <dataContext.Provider value={{ data, setdata }}>
         <button onClick={()=>setdata("Manthan")}>change a</button>
         <div>{data}</div>
         <B/>
      </dataContext.Provider>
   );
};

export default A;
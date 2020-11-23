import React, {createContext, useState} from 'react';

export const CategoriesContext = createContext(null);

const CategoriesProvider = ({children}) => {
    const [categoryListData, setCategoryListData] = useState(null);

    return (
        <CategoriesContext.Provider value={{categoryListData, setCategoryListData}}>
            {children}
        </CategoriesContext.Provider>);
};

export default CategoriesProvider;
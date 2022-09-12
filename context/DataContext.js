import React, {useState, useContext, useEffect} from 'react'
import {SimpleLandingPagedata} from '../data/simpleLandingPage';
import {UberClone} from '../data/UberClone';

const DataContext = React.createContext()

export function useDataContext(){
    return useContext(DataContext)
}

export function DataProvider({children}){

    const value = {
        SimpleLandingPagedata,
        UberClone
    } 
    return(
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>

        // if we are not loading render children
    )
}
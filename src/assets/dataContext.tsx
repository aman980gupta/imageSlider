import React, { createContext, useState,FC,ReactNode,useReducer ,useCallback,ChangeEvent} from 'react';
import imageData from "../data.json"

type dataType = {
    id: number;
  url: string;
  urlToImage: string;
  content: string;
}

//const initState : dataType = {id:0,url:"",urlToImage:",",content:""}
const initState : dataType = {id:0,url:"",urlToImage:",",content:""}
const enum REDUCER_ACTION_TYPE {
  PLAYPAUSE,NEXT,PREVIOUS
}

type ReducerAction = {type:REDUCER_ACTION_TYPE,payload?:string}

const reducer = (data:dataType,action:ReducerAction)=>{
  switch(action.type){
    case REDUCER_ACTION_TYPE.NEXT:
      return {...data}
    case REDUCER_ACTION_TYPE.PLAYPAUSE:
      return {...data}
    case REDUCER_ACTION_TYPE.PREVIOUS:
      return {...data}
    
    default:
      throw new Error()
    }
}

const useDataContext = (initState: dataType) => {
  const [state, dispatch] = useReducer(reducer, initState)

  const next = useCallback(() => dispatch({ type: REDUCER_ACTION_TYPE.NEXT }), [])

  const previous = useCallback(() => dispatch({ type: REDUCER_ACTION_TYPE.PREVIOUS }), [])

  const playAndPause = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      dispatch({
          type: REDUCER_ACTION_TYPE.PLAYPAUSE,
          payload: e.target.value
      })
  }, [])

  return { state, next, previous, playAndPause }
}

type UseDataContextType = ReturnType<typeof useDataContext>

const initContextState: UseDataContextType = {
  state: initState,
  next: () => { },
  previous: () => { },
  playAndPause: (e: ChangeEvent<HTMLInputElement>) => { },
}

type UseCounterContextType = ReturnType<typeof useDataContext>

const DataContext = createContext< null>(null)


const dataContext:FC<ReactNode> = () => {

  return (
    <div>dataContext</div>
  )
}

export default dataContext

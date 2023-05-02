import React, { createContext, useState, FC, ReactNode, useReducer, useCallback, ChangeEvent } from 'react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import BigImg from '../components/BigImg';
import ImageText from '../components/ImageText';
import PlayPause from '../components/PlayPause';
import SmallImageCard from '../components/SmallImageCard'
import imgData from "../data.json"


interface dataType {
  id: number;
  url: string;
  urlToImage: string;
  content: string;
}
type daType = dataType[]
const enum REDUCER_ACTION_TYPE {
  PLAYPAUSE, NEXT, PREVIOUS
}
type ReducerAction = { type: REDUCER_ACTION_TYPE, payload?: string }

const reducer = (data: dataType, action: ReducerAction) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.NEXT:
      return { ...data }
    case REDUCER_ACTION_TYPE.PLAYPAUSE:
      return { ...data }
    case REDUCER_ACTION_TYPE.PREVIOUS:
      return { ...data }

    default:
      throw new Error()
  }
}
const initialState: dataType[] = imgData.articles

const TestPage = () => {
  const [state, setState] = useState(imgData.articles);
  const [isPlaying, setIsplaying] = useState(true)
  console.log(state)
  return (
    <div className='App' >

      <main className='main'>
        <section className='section'>
          <div className='sectionDiv1'>
             {/* <BigImg /> */}
            </div>
          <div className='sectionDiv2'>
            {/* <SmallImageCard  src='https://sportshub.cbsistatic.com/i/r/2023/04/29/1af0138f-e682-4975-bc0c-9188ac2ce71e/thumbnail/1200x675/8d86e87e3f3cad56a8f635ca7bd9a8a9/levispick.jpg' id='1'/>
            <SmallImageCard src='https://sportshub.cbsistatic.com/i/r/2023/04/29/1af0138f-e682-4975-bc0c-9188ac2ce71e/thumbnail/1200x675/8d86e87e3f3cad56a8f635ca7bd9a8a9/levispick.jpg' id='2'/>
            <SmallImageCard src='https://sportshub.cbsistatic.com/i/r/2023/04/29/1af0138f-e682-4975-bc0c-9188ac2ce71e/thumbnail/1200x675/8d86e87e3f3cad56a8f635ca7bd9a8a9/levispick.jpg' id='3'/>
            <SmallImageCard src='https://sportshub.cbsistatic.com/i/r/2023/04/29/1af0138f-e682-4975-bc0c-9188ac2ce71e/thumbnail/1200x675/8d86e87e3f3cad56a8f635ca7bd9a8a9/levispick.jpg' id='4'/>
            <SmallImageCard src='https://sportshub.cbsistatic.com/i/r/2023/04/29/1af0138f-e682-4975-bc0c-9188ac2ce71e/thumbnail/1200x675/8d86e87e3f3cad56a8f635ca7bd9a8a9/levispick.jpg' id='5'/> */}
          </div>
        </section>
        <aside>
          <div className='asideDiv1'>
                 hello
            {/* <ImageText content={imagesdata[counter + 2].content}/> */}
            </div>
          <div className='asideDiv2'>
            <PlayPause  />
          </div>
        </aside>
      </main>
    </div>

    // <div>

    //     {state.map((item,index)=>{
    //         return(
    //             <SmallImageCard id={item.id} urlToImage={item.urlToImage} />
    //         )
    //     })}
    // </div>
  )
}

export default TestPage
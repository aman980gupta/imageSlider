import React, { useState, useEffect, useRef } from 'react';
import BigImg from '../components/BigImg';
import ImageText from '../components/ImageText';
import jsonData from "../data.json"
import SliderCard from '../components/SliderCard';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';

const HomePage = () => {
    const [counter, setCounter] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const playingRef = useRef(isPlaying)
    playingRef.current = isPlaying
    const urlForBigImage = document.getElementById("displayCard")
    //console.log(urlForBigImage)
    const imagesdata = jsonData.articles
    const timeerId = useRef<boolean | null>(null)
    console.log(counter)

    useEffect(() => {
        const intervalID = setInterval(() => {
                if(counter+4 === imagesdata.length - 1){
                   setCounter(0)
                }
               
                
                setCounter(prev=> prev +1 )
            }, 2000);
        
        return () => {
            clearInterval(intervalID);
          };

    }, [isPlaying])
    

    const RightArrowHandler = () => {
        if (counter + 4 >= imagesdata.length - 1) {
            console.log(`value of counter ${counter}`)
            setCounter(prev => prev - imagesdata.length + 1 + 3)
        }
        if (counter >= imagesdata.length - 1) {
            setCounter(0)
        }
        setCounter(prev => prev + 1)
    }
    const leftArrowHandler = () => {
        if (counter < 1) {
            console.log(`value of counter before  ${counter}`)
            setCounter(prev => prev + imagesdata.length - 4)
            console.log(`value of counter after ${counter}`)
        }
        setCounter(prev => prev - 1)
    }

    const handlePlaybtn = () => {
        setIsPlaying(prev=>!prev) 
        
    }

    return (<div className='App' >

        <main className='main'>
            <section className='section'>
                <div className='sectionDiv1'>
                    <BigImg urlToImage={imagesdata[counter+2].urlToImage} />
                </div>
                <div className='sectionDiv2'>
                    <div className='arrowKeys'>
                        <span className='arrow'
                            onClick={() => leftArrowHandler()}
                        >
                            <ArrowLeftIcon />
                        </span>
                        <span className='arrow'
                            onClick={() => RightArrowHandler()}
                        >
                            <ArrowRightIcon />
                        </span>
                    </div>

                    <SliderCard urlToImage={imagesdata[counter].urlToImage} />
                    <SliderCard urlToImage={imagesdata[counter + 1].urlToImage} />
                    <div id='displayCard' >
                        <SliderCard urlToImage={imagesdata[counter + 2].urlToImage} />
                    </div>
                    <SliderCard urlToImage={imagesdata[counter + 3].urlToImage} />
                    <SliderCard urlToImage={imagesdata[counter + 4].urlToImage} />
                </div>
            </section>
            <aside>
                <div className='asideDiv1'><ImageText content={imagesdata[counter + 2].content}/></div>
                <div className='asideDiv2'>
                    <span onClick={()=>handlePlaybtn()}>
                    {!isPlaying ?<PlayCircleOutlineIcon />: <PauseCircleOutlineIcon/>}

                    </span>
                </div>
            </aside>
        </main>
    </div>

)
}

export default HomePage;
{/* <span onClick={() => handlePlaybtn() }><PlayPause /></span> */}
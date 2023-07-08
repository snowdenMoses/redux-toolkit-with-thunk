import './App.css';
import {useSelector, useDispatch} from "react-redux"
import { useEffect } from 'react';


import { getPhotos } from './redux/PictureSlice';

function Home() {


  const { photos } = useSelector(state => state.pictureSlice)
  const dispatch = useDispatch()
  console.log(photos);

  useEffect(()=>{
    dispatch(getPhotos())
  }, [dispatch])

  return (
    <div className='App'>
        <h3>Welcome to home Page</h3>
        {photos.map((photo, i)=>{
            return(
                <div key={i}><p1>{i+1} - {photo.url}</p1></div>
            )
        })}
    </div>
  );
}

export default Home;

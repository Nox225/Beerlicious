import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://api.punkapi.com/v2/beers/'

export default function SingleBeer(){
    const {id} = useParams();
    const [loading, setLoading] = React.useState(false)
    const [beer, setBeer] = React.useState(null)

    React.useEffect(() => {
        setLoading(true)
        async function getBeer(){
            try{
                const response = await fetch(`${url}${id}`)
                const data = await response.json()
                console.log(data)
                if(data){
                    const {name, tagline, description, image_url, abv, ibu} = data[0]
                    const newBeer = {
                        name, tagline, description, image_url, abv, ibu
                    }
                    setBeer(newBeer)
                }else{
                    setBeer(null)
                }
                setLoading(false)
            }catch (error){
                console.log(error)
                setLoading(false)
            }
        }
        getBeer()
    }, [id])

    if(loading){
        return <Loading />       
    }

    if(!beer){
        return <h2 className='section-title'>No beer to display</h2>
    }
    const {name, tagline, description, image_url, abv, ibu} = beer;
    // console.log(beer)
    return (
        <section className='beer-info-container'>
            <div className='beer-info'>
                <h2 className='beer-info-name'>{name}</h2>
                <h3 className='beer-info-tagline'>"{tagline}"</h3>
                <div className='beer-numbers'>
                    <h4 className='abv'>Alcohol by volume (abv): {abv}%</h4>
                    <h4 className='abv'>International Bitterness Units (ibu): {ibu}</h4>
                </div>
                <h2 className='beer-description-title'>Description</h2>
                <h3 className='beer-description'>{description}</h3>
            </div>
            <img src={image_url} className='beer-info-image' alt='No image was found'/>
        </section>
    )
}
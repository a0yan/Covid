import {React,useState,useEffect} from 'react'
import axios from 'axios'
import styles from './Latestnews.module.css'
import Newscard from './Newscard/Newscard'
const url=`https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`
const Latestnews = () => {
    const [articles, setarticles] = useState([])
    useEffect(() => {
        const response=axios.get(url)
        response.then(response=>{
            setarticles(response.data.articles.slice(0,9))
        })
    }, [])

    return (
        <div className={styles.Latestnews}>
        <h1 className={styles.Heading}>Latest News Regarding COVID</h1>
            <div className={styles.Newscards}>
                {articles.map((el,i)=>(
                <Newscard key={i} image_src={el.urlToImage} title={el.title} description={el.description} url={el.url}/>    
                )
                )}
            </div>
        </div>
    )
}
export default Latestnews

import './Hero.styles.css'
import Searchbar from '../Searchbar/Searchbar.component'

const Hero = ({bookData}) => {
  return (
    <div className='hero-container'>
        <div className='hero-content'>
            <p className='hero-search-heading'>Its simple just the type the title of your book.</p>
            <h1 className='hero-h1'>Book Searching Made Easy.</h1>
            <Searchbar bookData={bookData} placeholder='Enter a Book Name...' />
        </div>
    </div>
  )
}


export default Hero
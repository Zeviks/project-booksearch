import './Hero.styles.css'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero-content'>
            <p className='hero-search-heading'>Its simple just the type the title of your book.</p>
            <h1 className='hero-h1'>Book Searching Made Easy.</h1>
            <TextField fullWidth label='Search' id='search' />
            <Button variant='outlined' sx={buttonStyles}>Discover</Button>
        </div>
    </div>
  )
}

const buttonStyles = {
    'margin': '1rem 0',
    'font-size': '1.8rem'
}

export default Hero
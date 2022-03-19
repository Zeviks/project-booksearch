import './Searchbar.styles.css';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = ({placeholder, bookData}) => {
  return (
    <div className='search-bar-container'>
      <div className='search-inputs'>
        <input type='text' className='search-bar' placeholder={placeholder} />
        <div className='search-icon'>
          <SearchIcon/>
        </div>
      </div>
      <div className='dataResult'>
        {bookData.map((value, key) => {
          return <div>{(value.books.title)}</div>
        })}
      </div>
    </div>
  )
}



export default Searchbar;
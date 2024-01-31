
import ShowList from '../components/ShowList';
import ShowSlider from '../components/ShowSlider';

export default function Home({ shows, onShowClick }) {
  return (
    <>
      <ShowSlider shows={shows} onShowClick={onShowClick} />
      <ShowList shows={shows} onShowClick={onShowClick} />
    </>
    
  )
}

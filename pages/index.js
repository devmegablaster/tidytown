import Header from '../components/Header'
import Landing from '../components/Home/Landing'
import Features from '../components/Home/Features'
import Volunteer from '../components/Home/Volunteer'

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col overflow-y-scroll">
      <Header />
      <Landing />
      <Features />
      <Volunteer />
    </div>
  )
}

export default Home

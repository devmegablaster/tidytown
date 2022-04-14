import Header from '../components/Header'
import Landing from '../components/Home/Landing'
import Features from '../components/Home/Features'

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col overflow-y-scroll">
      <Header />
      <Landing />
      <Features />
    </div>
  )
}

export default Home

import Header from '../components/Header'
import Landing from '../components/Home/Landing'

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col overflow-y-scroll">
      <Header />
      <Landing />
    </div>
  )
}

export default Home

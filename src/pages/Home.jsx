import ListPosts from "../components/ListPosts";
import Hero from '../components/Hero'

export default function Home(){
  return (
<>
    <header>
    <Hero/>
    </header>
    <section className="home-page-container">
      <ListPosts/>
    </section>
</>
  )
}
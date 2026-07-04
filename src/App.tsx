import { useEffect } from 'react';

import Header from './sections/Header/Header';
import Disbanded from './sections/Disbanded/Disbanded';
import Compilation from './sections/Compilation/Compilation';
import Ranking from './sections/Ranking/Ranking';
import YeahCharts from './sections/YeahCharts/YeahCharts';
import AllYeahSongs from './sections/AllYeahSongs/AllYeahSongs';
import Footer from './sections/Footer/Footer';

import './App.css';

function App() {
  let isDisqusShow = false;

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const disqusElementPosition = scrollPosition + windowHeight;
  
      let disqusElement = document.querySelector("#disqus_thread");
      const disqusElementOffsetTop = disqusElement.getBoundingClientRect().top + scrollPosition - 100;

      if (disqusElementPosition >= disqusElementOffsetTop && !isDisqusShow) {
        loadDisqusComments();
        isDisqusShow = true;
      }
    }
    
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const loadDisqusComments = () => {
    window.disqus_config=function(){this.page.url="https://thepillows-ohyeah.github.io/",this.page.identifier="thepillows-ohyeah"};
    !function(){let e=document,t=e.createElement("script");t.async=true,t.src="https://thepillows-ohyeah.disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)}();
  }

  return (
    <>
      <Header />

      <main className='container-full'>
        <Disbanded />
        <Compilation />
        <Ranking />
        <YeahCharts />
        <AllYeahSongs />

        <aside className='container'>
          <div id='disqus_thread'></div>
        </aside>
      </main>
      
      <Footer />
    </>
  )
}

export default App

import { useEffect } from 'react';
import { gsap } from "gsap";
export default function Hero (){
  useEffect(() => {
    let tl = gsap.timeline();
    let duration = .9;

      gsap.set('.hero-container', { opacity: 0 });
  gsap.set('.img-container img', { opacity: 0, x: -500 });
    
    tl.to('.hero-container', {
      duration,
      opacity: 1,
      ease: 'linear'
    }, .8);
    
    tl.to('.img-container img', {
      duration,
      opacity: 1,
      x: 50,
      ease: "back.out"
    }, .4);
  }, []);
  return(
<>
    <section className="hero-container">
	<div className="hero">
		
		<div className="boxes">
			<div className="img-container">
        <img src="https://picsum.photos/324/410" alt=""/>
      </div>
		</div>
	</div>
	

<div className="content">
	<div className="site-container">
		<h2>Oh my God it's so nice to meet you</h2>
		<p>Quisque ut nisi. Phasellus gravida semper nisi. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci.</p>
	</div>
</div>
    </section>
    <div className="animated-border">
    </div>
</>

  )
}
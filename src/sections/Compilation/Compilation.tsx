import './Compilation.css';

const Compilation = () => {
	return (
		<section id="tp-compilation">
			<h2 className='title'>'Oh Yeah' examples compilation</h2>

			<article id='tp-compilation__description' className="container">
				<p>This band is known, among other things, for the countless times it's lead singer, Sawao Yamanaka, says <strong><em>'yeah'</em></strong> (often as 'oh yeah') throughout their songs.</p>
				
				<p>On this page, you'll find a series of charts analyzing and counting every 'yeah' across the band's discography. For consistency, the analysis counts <strong>each occurrence of the word 'yeah' rather than treating 'oh yeah' as a separate expression</strong>.</p>

				<p>The videos featured below were created by <a href='https://www.youtube.com/user/sononamida/' target='_blank' title='sononamida YouTube Channel' aria-label='sononamida YouTube Channel'>@sononamida</a>. Please, consider watching them directly on YouTube to support the original creator.</p>

				<div id='tp-compilation__videos'>
					<iframe width='640' height='480' src='https://www.youtube.com/embed/Y08_zl7Qhdg' allowFullScreen style={{ border: 'none' }}></iframe>
					<iframe width='640' height='480' src='https://www.youtube.com/embed/z3mqVlymwVA' allowFullScreen style={{ border: 'none' }}></iframe>
				</div>
			</article>
		</section>
	);
}

export default Compilation;

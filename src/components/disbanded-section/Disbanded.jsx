import './Disbanded.css';

const Disbanded = () => {
	return (
		<section id="tp-disbanded" className='container'>
			<h1 className='title'>Disbanded notice</h1>

			<article id='tp-disbanded__description'>
				<p>the pillows officially <u>disbanded</u> on January 31 of 2025 (1989.9.16 — 2025.1.31), during their <strong>'LOSTMAN GO TO CITY 2024-2025'</strong> last tour.</p>
				<p>You can see the following official notice from the band regarding this matter:</p>

				<div id='tp-disbanded__notice'>
					<img src='/the-pillows-disbanded-message-japanese.png' alt='the pillows disband message in japanese' />
					<img src='/the-pillows-disbanded-message-english.png' alt='the pillows disband message in english' />
				</div>

				<p>Source: <a href='https://x.com/thepillowsJPN/status/1885523472266264741' target='_blank' title='View the pillows disband notice on Twitter/X' aria-label='View the pillows disband notice on Twitter/X'>@thepillowsJPN</a></p>

				<div id="tp-disbanded__quote">
					<div>
						<blockquote>
							<p>'I believe good music has no borders, no race, and is timeless! And I can play good music for you!'</p>
						</blockquote>
						<p>— Sawao Yamanaka, <cite>Delicious Bump Tour in USA (2005)</cite></p>

						<div className='video-container'>
							<iframe width='640' height='480' src='https://www.youtube.com/embed/kyaUYJLz61k?start=209' allowFullScreen style={{ border: 'none' }}></iframe>
						</div>
						<p>Thanks to the author <a href='https://www.youtube.com/user/funnybunnyking/' target='_blank' title='funnybunnyking YouTube Channel' aria-label='funnybunnyking YouTube Channel'>@funnybunnyking</a>. Watch it directly from YouTube as appreciation.</p>
					</div>
				</div>

				<div id='tp-disbanded__farewell'>
					<p className='text-center'>Thank you so much for these wonderful 35 years, we will never forget this great legendary rock band!</p>
					<p className='text-center'>OH YEAH? 🎸</p>
				</div>
			</article>
		</section>
	);
}

export default Disbanded;

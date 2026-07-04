import CountUp from 'react-countup';
import './Ranking.css';
import { Stack } from '@mui/system';
import { GaugeChart } from '../../components/GaugeChart';

const Ranking = () => {
    return (
			<section id='tp-ranking-songs'>
				<h2 className='title'>Yeah Ranking Songs</h2>

				<article className="container">
					<div className='tp-ranking-yeahs'>
						<div id="tp-ranking-total-yeahs" className="stats stats-card-one">
							<div className="stat-card stat-card-one">
								<div className='tp-ranking-podium-numbers'>
									<CountUp start={0} end={647} duration={4} scrollSpyDelay={200} useEasing scrollSpyOnce enableScrollSpy>
										{({ countUpRef }) => <span ref={countUpRef} />}
									</CountUp>
								</div>
								<p>Total yeahs</p>
							</div>
						</div>

						<div id="tp-ranking-top3-yeahs" className="stats">
							<div className="stat-card stat-card-winner">
								<div className="stat-header">
									<div className="icon orange">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy-icon lucide-trophy"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"/><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"/><path d="M18 9h1.5a1 1 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"/><path d="M6 9H4.5a1 1 0 0 1 0-5H6"/></svg>
									</div>
									<span className="badge">Top 1 yeahs</span>
								</div>

								<CountUp start={0} end={76} duration={5} scrollSpyDelay={200} useEasing scrollSpyOnce enableScrollSpy>
									{({ countUpRef }) => <span className='tp-ranking-podium-numbers tp-ranking-first-position' ref={countUpRef} />}
								</CountUp>

								<p className='tp-ranking-song-winner'>Like a Lovesong (Back to Back)</p>
								<p>Album: Little Busters (1998)</p>
							</div>

							<div className="stat-card">
								<div className="stat-header">
									<div className="icon orange">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy-icon lucide-trophy"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"/><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"/><path d="M18 9h1.5a1 1 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"/><path d="M6 9H4.5a1 1 0 0 1 0-5H6"/></svg>
									</div>
									<span className="badge">Top 2 yeahs</span>
								</div>

								<CountUp start={0} end={42} duration={5} scrollSpyDelay={200} useEasing scrollSpyOnce enableScrollSpy>
									{({ countUpRef }) => <span className='tp-ranking-podium-numbers tp-ranking-second-position' ref={countUpRef} />}
								</CountUp>

								<p className='tp-ranking-song-winner'>Rookie Jet</p>
								<p>Album: Thank you, My Twilight (2002)</p>
							</div>

							<div className="stat-card">
								<div className="stat-header">
									<div className="icon orange">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy-icon lucide-trophy"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"/><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"/><path d="M18 9h1.5a1 1 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"/><path d="M6 9H4.5a1 1 0 0 1 0-5H6"/></svg>
									</div>
									<span className="badge">Top 3 yeahs</span>
								</div>

								<CountUp start={0} end={35} duration={5} scrollSpyDelay={200} useEasing scrollSpyOnce enableScrollSpy>
									{({ countUpRef }) => <span className='tp-ranking-podium-numbers tp-ranking-third-position' ref={countUpRef} />}
								</CountUp>

								<p className='tp-ranking-song-winner'>Back Seat Dog</p>
								<p>Album: Happy Bivouac (1999)</p>
							</div>
						</div>

						<div id="tp-ranking-first-last-yeah-song" className="stats">
							<div className="stat-card">
								<div className="stat-header">
									<div className="icon blue">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music-icon lucide-music"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
									</div>
									<span className="badge">First 'yeah' song</span>
								</div>

								<p className='tp-ranking-first-yeah tp-ranking-song-winner'>Never Find</p>
								<p>Album: 90's My Life (1990)</p>
							</div>

							<div className="stat-card">
								<div className="stat-header">
									<div className="icon blue">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music-icon lucide-music"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
									</div>
									<span className="badge">Last 'yeah' song</span>
								</div>

								<p className='tp-ranking-last-yeah tp-ranking-song-winner'>Before going bed</p>
								<p>Album: Rebroadcast (2018)</p>
							</div>
						</div>
					</div>
				</article>

				<article id='tp-yeah-overall'>
					<h2 className='title'>Yeah Overall</h2>

					<div className='tp-yeah-overall-container'>
						<Stack direction={{ xs: 'column', lg: 'row' }} spacing={{ xs: 6, lg: 3 }} justifyContent="center" alignItems="center">
							<GaugeChart value={68.57} label="24" fillColor='#28a745' textFooter="years with some 'yeahs'! 😀" />
							<GaugeChart value={45.71} label="16" fillColor='#28a745' textFooter="years with 'yeahs' in a row! 😄" />
							<GaugeChart value={34.28} label="12" fillColor='#dc3545' textFooter="years with no 'yeahs' ☹️" />
						</Stack>
					</div>
				</article>
			</section>
    );
}

export default Ranking;

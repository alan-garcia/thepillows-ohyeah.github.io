import { ProgressBarWithLabel } from '../ProgressBar';
import './YeahOverall.css';

const YeahOverall = () => {
	return (
		<section id='tp-yeah-overall'>
			<h2 className='title'>Yeah Overall</h2>

			<article className='tp-yeah-overall-container'>
				<div className='tp-yeah-overall-row'>
					<p>Total years with some 'yeahs'! 😀</p>
					<ProgressBarWithLabel value={24} size={35} color={`#28a745`} />
				</div>

				<div className='tp-yeah-overall-row'>
					<p>Total years with 'yeahs' in a row! 😄</p>
					<ProgressBarWithLabel value={16} size={35} color={`#28a745`} />
				</div>
				
				<div className='tp-yeah-overall-row'>
					<p>Total years with no 'yeahs' ☹️</p>
					<ProgressBarWithLabel value={12} size={35} color={`#dc3545`} />
				</div>
			</article>
		</section>
	);
}

export default YeahOverall;

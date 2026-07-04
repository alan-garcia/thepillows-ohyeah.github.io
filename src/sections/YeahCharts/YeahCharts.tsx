import { YeahsPerDecadeBarChart, YeahsPerLabelCompanyBarChart, YeahsPerYearBarChart } from '../../components/Charts';
import './YeahCharts.css';

const YeahCharts = () => {
	return (
		<>
			<section id='tp-yeahs-per-year-container'>
				<article className='tp-yeahs-per-year container'>
					<h2 className='title'>Number of 'yeahs' per year</h2>
					<YeahsPerYearBarChart height={700} colorBar={'#ffbc09'} />
				</article>
			</section>

			<section id='tp-yeahs-per-decade-container'>
				<article className='tp-yeahs-per-decade container'>
					<h2 className='title'>Number of 'yeahs' per decade</h2>
					<YeahsPerDecadeBarChart height={500} colorBar={'#ffbc09'} />
				</article>
			</section>

			<section id='tp-yeahs-per-label-company-container'>
				<article className='tp-yeahs-per-label-company container'>
					<h2 className='title'>Number of 'yeahs' per label company</h2>
					<YeahsPerLabelCompanyBarChart height={500} />
				</article>
			</section>
		</>
	);
}

export default YeahCharts;

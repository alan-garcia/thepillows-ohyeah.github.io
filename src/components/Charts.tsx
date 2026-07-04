import { Box } from "@mui/system";
import { BarChart } from "@mui/x-charts";

export function YeahsPerYearBarChart({ height, colorBar }: {
	height: number;
  	colorBar: string;
}) {
	const yeahsPerYear = [
		{ year: 1990, yeahs: 2 },
		{ year: 1991, yeahs: 0 },
		{ year: 1992, yeahs: 14 },
		{ year: 1993, yeahs: 0 },
		{ year: 1994, yeahs: 25 },
		{ year: 1995, yeahs: 39 },
		{ year: 1996, yeahs: 6 },
		{ year: 1997, yeahs: 29 },
		{ year: 1998, yeahs: 114 },
		{ year: 1999, yeahs: 101 },
		{ year: 2000, yeahs: 20 },
		{ year: 2001, yeahs: 36 },
		{ year: 2002, yeahs: 67 },
		{ year: 2003, yeahs: 25 },
		{ year: 2004, yeahs: 25 },
		{ year: 2005, yeahs: 8 },
		{ year: 2006, yeahs: 10 },
		{ year: 2007, yeahs: 41 },
		{ year: 2008, yeahs: 26 },
		{ year: 2009, yeahs: 5 },
		{ year: 2010, yeahs: 0 },
		{ year: 2011, yeahs: 17 },
		{ year: 2012, yeahs: 1 },
		{ year: 2013, yeahs: 0 },
		{ year: 2014, yeahs: 12 },
		{ year: 2015, yeahs: 0 },
		{ year: 2016, yeahs: 1 },
		{ year: 2017, yeahs: 9 },
		{ year: 2018, yeahs: 14 },
		{ year: 2019, yeahs: 0 },
		{ year: 2020, yeahs: 0 },
		{ year: 2021, yeahs: 0 },
		{ year: 2022, yeahs: 0 },
		{ year: 2023, yeahs: 0 },
		{ year: 2024, yeahs: 0 },
		{ year: 2025, yeahs: 0 }
	];

	return (
		<Box sx={{ width: "100%" }} >
			<BarChart
				series={[
					{
						label: 'Number of yeahs',
						barLabel: 'value',
						barLabelPlacement: 'outside',
						data: yeahsPerYear.map(item => item.yeahs)
					},
				]}
				xAxis={[
					{ 
						scaleType: 'linear',
						label: 'Number of yeahs',
						max: 120
					},
				]}
				yAxis={[
					{
						scaleType: 'band',
						label: 'Year',
						data: yeahsPerYear.map(item => item.year)
					},
				]}
				sx={{
					"& .MuiChartsLegend-label": {
						fontSize: 18
					}
				}}
				colors={[colorBar]}
				layout="horizontal"
				grid={{ horizontal: true }}
				height={height}
			/>
		</Box>
	);
}

export function YeahsPerDecadeBarChart({ height, colorBar }: {
	height: number;
  	colorBar: string;
}) {
	const yeahsPerDecade = [
		{ decade: '1990 - 1999', yeahs: 330 },
		{ decade: '2000 - 2009', yeahs: 263 },
		{ decade: '2010 - 2019', yeahs: 54 },
		{ decade: '2020 - 2025', yeahs: 0 }
	];

	return (
		<Box sx={{ width: "100%" }}>
			<BarChart
				series={[
					{ 
						label: 'Number of yeahs',
						barLabel: 'value',
						barLabelPlacement: 'center',
						data: yeahsPerDecade.map(item => item.yeahs)
					}
				]}
				xAxis={[
					{
						scaleType: 'band',
						data: yeahsPerDecade.map(item => item.decade)
					}
				]}
				yAxis={[
					{ scaleType: 'linear', label: 'Yeahs' },
				]}
				sx={{
					"& .MuiChartsLegend-label": {
						fontSize: 18
					}
				}}
				grid={{ vertical: true }}
				colors={[ colorBar ]}
				height={height}
			/>
		</Box>
	);
}

export function YeahsPerLabelCompanyBarChart({ height }: {
	height: number;
}) {
	return (
		<Box sx={{ width: "100%" }}>
			<BarChart
				series={[
					{ 
						label: 'Captain Records (1990)',
						data: [2],
						barLabel: 'value',
						barLabelPlacement: 'outside',
						color: "#ffbc09"
					},
					{
						label: 'Pony Canyon (1991-1993)',
						data: [14],
						barLabel: 'value',
						barLabelPlacement: 'outside',
						color: "#e70023"
					},
					{
						label: 'King Records (1994-2006)',
						data: [505],
						barLabel: 'value',
						barLabelPlacement: 'outside',
						color: "#009944"
					},
					{
						label: 'Avex Trax (2006-2016)',
						data: [90],
						barLabel: 'value',
						barLabelPlacement: 'outside',
						color: "#004ca3"
					},
					{
						label: 'Delicious Label (2016-2025)',
						data: [36],
						barLabel: 'value',
						barLabelPlacement: 'outside',
						color: "#080808"
					}
				]}
				xAxis={[
					{
						scaleType: 'band',
						data: ['Company Labels']
					}
				]}
				yAxis={[
					{ 
						scaleType: 'linear',
						label: 'Yeahs'
					},
				]}
				sx={{
					"& .MuiChartsLegend-label": {
						fontSize: 16
					}
				}}
				margin={{ top: 30 }}
				height={height}
			/>
		</Box>
	)
}

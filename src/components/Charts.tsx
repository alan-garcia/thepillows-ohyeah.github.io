import { Box } from "@mui/system";
import { BarChart } from "@mui/x-charts";
import { yeahsPerDecade, yeahsPerLabel, yeahsPerYear } from "../data/initData";

export function YeahsPerYearBarChart({ height, colorBar }: {
	height: number;
  	colorBar: string;
}) {
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
				series={
					yeahsPerLabel.labels.map(item => ({
						label: item.label,
						data: [item.yeahs],
						color: item.color,
						barLabel: "value",
						barLabelPlacement: "outside"
					}))
				}
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

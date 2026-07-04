import { Stack, Typography } from "@mui/material";
import { Gauge } from "@mui/x-charts";

export function GaugeChart({ value, label, fillColor, textFooter }: {
  value: number;
  label: string;
  fillColor: string;
  textFooter: string;
}) {
  return (
    <Stack alignItems="center">
      <Gauge
        width={300}
        height={220}
        value={value}
        text={() => label}
        startAngle={0}
        endAngle={360}
        innerRadius="85%"
        outerRadius="100%"
        sx={{
          "& .MuiGauge-valueArc": {
            fill: fillColor,
          },
          "& .MuiGauge-referenceArc": {
            fill: "#e0e0e0",
          },
          "& .MuiGauge-valueText": {
            fontSize: 42,
            fontWeight: 700,
          },
        }}
      />

      <Typography variant="h6" fontWeight={700} mt={2}>
        {textFooter}
      </Typography>
    </Stack>
  );
}
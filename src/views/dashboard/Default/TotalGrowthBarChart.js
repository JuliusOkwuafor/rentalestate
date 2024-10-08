import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { Grid, MenuItem, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';

// chart data

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const TotalGrowthBarChart = ({ isLoading, content }) => {
  const [value, setValue] = useState('today');
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);

  const { navType } = customization;
  const { primary } = theme.palette.text;
  const darkLight = theme.palette.dark.light;
  const grey200 = theme.palette.grey[200];
  const grey500 = theme.palette.grey[500];

  const primary200 = theme.palette.primary[200];
  const primaryDark = theme.palette.primary.dark;
  const secondaryMain = theme.palette.secondary.main;
  const secondaryLight = theme.palette.secondary.light;

  // import chartData from './chart-data/total-growth-bar-chart';
  // ===========================|| DASHBOARD - TOTAL GROWTH BAR CHART ||=========================== //

  const chartData = {
    height: 480,
    type: 'bar',
    options: {
      chart: {
        id: 'bar-chart',
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '40%'
        }
      },
      xaxis: {
        type: 'reports',
        categories: content.categories
      },
      legend: {
        show: true,
        fontSize: '14px',

        fontFamily: `'Roboto', sans-serif`,
        position: 'bottom',
        offsetX: 20,
        labels: {
          useSeriesColors: false
        },
        markers: {
          width: 16,
          height: 16,
          radius: 5
        },
        itemMargin: {
          horizontal: 15,
          vertical: 8
        }
      },
      fill: {
        type: 'solid'
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        show: true
      }
    },
    series: content.series
  };

  useEffect(() => {
    // chartData.series[0].data = [propertyData?.length, taskData?.length, leadData?.length, contactData?.length, 0, 0, 0];
    // console.log(chartData.series[0].data, 'chart data');
    const newChartData = {
      ...chartData.options,
      colors: [primary200, primaryDark, secondaryMain, secondaryLight],
      xaxis: {
        labels: {
          style: {
            colors: [primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary]
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: [primary]
          }
        }
      },
      grid: {
        borderColor: grey200
      },
      tooltip: {
        theme: 'light'
      },
      legend: {
        labels: {
          colors: grey500
        }
      }
    };

    // do not load chart when loading
    if (!isLoading) {
      ApexCharts.exec(`bar-chart`, 'updateOptions', newChartData);
    }
  }, [navType, primary200, primaryDark, secondaryMain, secondaryLight, primary, darkLight, grey200, isLoading, grey500]);

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <MainCard>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container alignItems="center" xs={12}>
                <Grid item xs={6}>
                  <Typography variant="subtitle2">{content.title}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" style={{ textAlign: 'right' }}>
                    Total Call Duration: {content.callTime}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Chart {...chartData} />
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

TotalGrowthBarChart.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalGrowthBarChart;

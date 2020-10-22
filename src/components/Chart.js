import React, {Component} from 'react';
import { Bar, Pie, Polar } from 'react-chartjs-2';

class Chart extends Component{
  constructor(props) {
    super(props);
    this.state = {
      chartData:{
        labels: ['Dog', 'Cat', 'Bird', 'Fish', 'Turtle', 'Rabbit'],
        datasets: [
          {
            label: 'October Sales',
            data:[
                61,
                50,
                20,
                30,
                9,
                15
            ],
            /*backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
            ]*/
          }
        ]
      }
    }
  }

  render() {
    return (
      <div className="chart">
        <Bar
            data={this.state.chartData}
            options={{
              title:{
                display:true,
                text:'October Sales',
                fontSize:25
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
        />

      </div>
    )
  }
}


export default Chart;
import {Line, LineChart} from 'recharts'

function App() {
  const data = [
    {year:'2010',react:98,angular:70,vue:80},
    {year:'2011',react:95,angular:31,vue:34},
    {year:'2012',react:68,angular:43,vue:87},
    {year:'2013',react:90,angular:34,vue:66},
    {year:'2014',react:81,angular:65,vue:98},
    {year:'2015',react:43,angular:22,vue:51},
    {year:'2016',react:90,angular:54,vue:67},
    {year:'2017',react:120,angular:80,vue:90},
  ]
  return (
    <LineChart width={800} height={800} data={data}>
      <Line dataKey={'react'} />
    </LineChart>
  )
}

export default App

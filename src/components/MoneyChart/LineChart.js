import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function LineChart({ data }) {
  const containerRef = useRef()

  useEffect(() => {
    drawChart();
  }, [data]);

  function drawChart() {

    x = ƒ(n)


      const svg = d3.select(containerRef)
          .attr("viewBox", [0, 0, width, height]);
    
      svg.append("g")
          .call(xAxis);
    
      svg.append("g")
          .call(yAxis);
    
      svg.append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", "steelblue")
          .attr("stroke-width", 1.5)
          .attr("stroke-linejoin", "round")
          .attr("stroke-linecap", "round")
          .attr("d", line);
    
      return svg.node();
    }


  return <svg id="container" ref={containerRef} />;
}


export default LineChart;
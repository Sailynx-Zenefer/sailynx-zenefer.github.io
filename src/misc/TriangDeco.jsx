export default function TriangDeco({direction,color}) {
  const bordColorDirection = `border-${direction}-color`
    return (
      <div id={`tri-${direction}`} style={{[bordColorDirection]:`${color}`}}/>
    )
  }
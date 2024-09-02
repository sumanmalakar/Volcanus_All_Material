
const Hero = () => {
//  Internal Styling
  const superman = {
    backgroundColor:'yellow',
    color:'black',
    padding:"20px",
    margin:'20px',
    borderRadius:"20px",
    border:"5px solid blue",
  }
  return (
    <div style={superman}>
        <h1>This data is coming from hero component</h1>
        <h1>Superman</h1>
        <h2>Spiderman</h2>
        <h3>Batman</h3>
    </div>
  )
}

export default Hero
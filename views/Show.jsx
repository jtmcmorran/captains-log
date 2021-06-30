const React = require('react')
class Show extends React.Component{
  render(){
    const log = this.props.log;
    return(
      <div>
      <h3>{log.title}</h3>
      <p>{log.entry}</p>
      {log.shipIsBroken? 'The ship is broken.' : 'The Ship is in working order'}<br/>
      <a href={`/logs/edit/${log._id}`}>edit</a><br/>
      <a href= '/logs'>return to main page</a>
      </div>
    )
  }
}
module.exports=Show

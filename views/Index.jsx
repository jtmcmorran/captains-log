const React = require('react');
class Index extends React.Component{
  render(){
    const logs = this.props.logs;
    return(
      <div>
      <nav><a href='/logs/new'>New Captain's Log</a></nav>
        <ul>
        {
          logs.map((log)=>{
            return(
              <li key={log._id}>
              <a href={`/logs/${log._id}`}>{log.title}</a>
              <form method="POST" action={`/logs/${log._id}?_method=DELETE`}>
                <input type="submit" value="Delete"/>
              </form>
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}
module.exports = Index;

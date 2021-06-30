const React = require('react');
class Edit extends React.Component{
  render(){
    const log = this.props.log
    return(
      <form action={`/logs/${log._id}?_method=PUT`} method="POST">
      Title: <input type="text" name="title" defaultValue={log.title}/><br/>
      Entry: <input type="textarea" name="entry" defaultValue={log.entry}/><br/>
      Ship is Broken:
        { log.shipIsBroken
          ? <input type="checkbox" name="shipIsBroken" defaultChecked />
          : <input type="checkbox" name="shipIsBroken" />
        }<br/>
      <input type="submit"/>
      </form>
    )
  }
}
module.exports = Edit

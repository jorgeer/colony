Status = React.createClass({
  mixins: [ReactMeteorData],
  
  propTypes: {

  },
  
  getMeteorData() {
    return {
      
    }
  },
  
  getInitialState() {
    return {

    }
  },
  
  componentDidMount() {
      
  },
  
  render() {
    let style = {
      "zIndex": "90",
      position: "relative",
      margin: "5px"
    };
    
    return <div style={style}>
      
      <h1 className="ui header">
        MyTown
        
        <div className="sub header">
          Mayor {"Bob"}
        </div>
      </h1>
      
      
      <div>
        Town Size 1
      </div>
      <div>
        {Utility.money(100000)}
      </div>
      
      <Divider />
      
      <h3 className="ui header">Materials</h3>
      <Table className="very basic">
        <tbody>
          <tr>
            <td>
              <Icon size="tiny" /> Stone
            </td>
            <td>
              {Utility.number(1230)}
            </td>
          </tr>
          <tr>
            <td>
              <Icon size="tiny" /> Wood
            </td>
            <td>
              {Utility.number(1230)}
            </td>
          </tr>
          <tr>
            <td>
              <Icon size="tiny" /> Metals
            </td>
            <td>
              {Utility.number(1230)}
            </td>
          </tr>
          <tr>
            <td>
              <Icon size="tiny" /> Clay
            </td>
            <td>
              {Utility.number(1230)}
            </td>
          </tr>
        </tbody>
      </Table>
      
      <h3 className="ui header">Gathering</h3>
      <Table className="very basic">
        <tbody>
          <tr>
            <td>
              <Icon size="tiny" /> Stone
            </td>
            <td>
              {Utility.number(1230)} / day
            </td>
          </tr>
          <tr>
            <td>
              <Icon size="tiny" /> Wood
            </td>
            <td>
              {Utility.number(1230)} / day
            </td>
          </tr>
          <tr>
            <td>
              <Icon size="tiny" /> Metals
            </td>
            <td>
              {Utility.number(1230)} / day
            </td>
          </tr>
          <tr>
            <td>
              <Icon size="tiny" /> Clay
            </td>
            <td>
              {Utility.number(1230)} / day
            </td>
          </tr>
        </tbody>
      </Table>
      
      <h3 className="ui header">Production</h3>
      <Grid className="two column">
        <Row>
            <Column>
              <Icon size="tiny" /> Smithy
            </Column>
            <Column>
              <Progress />
            </Column>
        <Row>
        </Row>
            <Column>
              <Icon size="tiny" /> Workshop
            </Column>
            <Column>
              <Progress />
            </Column>
        </Row>
        <Row>
            <Column>
              <Icon size="tiny" /> Baker
            </Column>
            <Column>
              <Progress />
            </Column>
        </Row>
        <Row>
            <Column>
              <Icon size="tiny" /> Lumber yard
            </Column>
            <Column>
              <Progress />
            </Column>
        </Row>
      </Grid>
      
      <h3 className="ui header">Militia</h3>
      <Table className="very basic">
        <tbody>
          <tr>
            <td>
              <Icon size="tiny" /> Musketmen
            </td>
            <td>
              {Utility.number(1230)}
            </td>
          </tr>
          <tr>
            <td>
              <Icon size="tiny" /> Cavalry
            </td>
            <td>
              {Utility.number(1230)}
            </td>
          </tr>
          <tr>
            <td>
              <Icon size="tiny" /> Cannons
            </td>
            <td>
              {Utility.number(1230)}
            </td>
          </tr>
          <tr>
            <td>
              <Icon size="tiny" /> Engineers
            </td>
            <td>
              {Utility.number(1230)}
            </td>
          </tr>
        </tbody>
      </Table>
      
    </div>;
  }
});
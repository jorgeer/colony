MilitiaUnit = React.createClass({
  mixins: [ReactMeteorData],
  
  propTypes: {

  },
  
  getMeteorData () {
    return {
      
    }
  },
  
  getInitialState() {
    return {

    }
  },
  
  componentDidMount() {
      
  },
  
  renderStats () {
    return <div>
      <div className="">3 Damage</div>
      <div className="">5 Defence</div>
    </div>
  },
  
  renderFunctionality () {
    return <Buttons className="vertical fluid">
      <Button>Train</Button>
      <Button>Recruit</Button>
      <Button>Dismiss</Button>
      <Button>Replace</Button>
    </Buttons>
  },
  
  render() {
    let props = this.props;
    
    return <Card
      className="centered"
      icon={this.props.icon}
      header={this.props.name}
      inlineIcon={this.props.inlineIcon}
      description={this.renderStats()}
      extra={this.renderFunctionality()} />;
  }
});
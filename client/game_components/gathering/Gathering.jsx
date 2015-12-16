Gathering = React.createClass({
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
    return <div>
    
      <Segment>
        <h2 className="ui header">Plots</h2>
        
        <Statistics>
          <Statistic value="3 / 10" label="plots used" />
          <Statistic value="289 / 300" label="settlers employed" />
        </Statistics>
      </Segment>
    
      <GatheringFacilities>
        <GatheringFacility icon="spade" name="Fields" plots={3} rate={4} resource="grain" />
        <GatheringFacility icon="wood-axe" name="Lumber camps" plots={1} rate={4} resource="log" />
        <GatheringFacility icon="meat-cleaver" name="Pastures" plots={5} rate={3} resource="meat" />
        <GatheringFacility icon="mining" name="Quarry" plots={0} rate={9} resource="stone" />
      </GatheringFacilities>
      
    </div>;
  }
});
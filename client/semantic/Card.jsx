Card = React.createClass({
  
  classes () {
    let props = this.props;
    let classes = "ui ";
    
    classes += props.className ? ` ${props.className} `: "";
    classes += " card";
    return classes;
  },
  
  renderIcon() {
    return <div className="image">
      <Icon icon={this.props.icon} size="large" />
    </div>
  },
  
  renderMeta () {
    return <div className="meta">{this.props.meta}</div>
  },
  
  renderHeader () {
    return <a className="header">{this.props.header}</a>
  },
  
  renderDescription () {
    return <div className="description">
      {this.props.description}
    </div>
  },
  
  renderExtra () {
    return <div className="extra content">
      {this.props.extra}
    </div>
  },
  
  render() {
    let props = this.props;
    
    return <div className={this.classes()}>
      {props.icon ? this.renderIcon() : ""}
      
      <div className="content">
        {props.header ? this.renderHeader() : ""}
        {props.meta ? this.renderMeta() : ""}
        {props.description ? this.renderDescription() : ""}
      </div>
      
      {props.extra ? this.renderExtra() : ""}
    </div>;
  }
});

Cards = React.createClass({
  
  classes () {
    let props = this.props;
    let classes = "ui cards ";
    
    classes += props.className ? ` ${props.className} `: "";
    return classes;
  },
  
  render() {
    return <div className={this.classes()}>
      {this.props.children}
    </div>;
  }
});
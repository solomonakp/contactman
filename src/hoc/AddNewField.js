import React, { Component } from 'react';

function AddNewField(WrapperComponent) {
  // // console.log(component)
  // return (
  //   <div>
  //     {component.map(() => {
  //       return <wrapperComponent />;
  //     })}
  //   </div>
  //   );
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        collection: [WrapperComponent]
      };
    }

    render() {
      const { collection } = this.state;
      // console.log(this.props);
      return (
        <React.Fragment>
          {collection.map((item, index) => {
            return <WrapperComponent key={index} />;
          })}
        </React.Fragment>
      );
    }
  };
}

export default AddNewField;

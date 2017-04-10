// ViewList
// The meta tag is important @:expose("ViewList")
// This exposes this class to outside world

package com.saumya.view;

import react.React;
import react.ReactDOM;
import react.ReactComponent;
import react.ReactMacro.jsx;


@:expose("ViewList")
class ViewList extends ReactComponent{
  public function new(props:Dynamic){
    super(props);
  }
  override public function render(){
    var aList = this.getListArray();
    return jsx('
      <div style={{margin:"10px", border:"black 2px solid"}}>
          <h3>ViewList</h3>
          ${/* aList */}
      </div>
    ');
  }
  private function getListArray(){
    var aResult = [];
    for (i in 0 ... 10) {
      aResult.push( jsx('<div key=${i} style={{margin:"10px", border:"#6666FF 1px solid"}}>${/* i */}</div>') );
    }
    return aResult;
  }
}


// ViewOne
// The meta tag is important @:expose("ViewOne")
// This exposes this class to outside world

package com.saumya.view;

import react.React;
import react.ReactDOM;
import react.ReactComponent;
import react.ReactMacro.jsx;

@:expose("ViewOne")
class ViewOne extends ReactComponent{
  public function new(props:Dynamic){
    super(props);
  }
  override public function render(){
    return jsx('
            <div style={{margin:"10px", border:"black 2px solid"}}>
                <h3>ViewOne</h3>
                <p>
                If you know how to fix up the tools, then everything just works!
                </p>
            </div>
        ');
  }
}


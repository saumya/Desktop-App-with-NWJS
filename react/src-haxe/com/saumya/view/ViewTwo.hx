// ViewTwo
// The meta tag is important @:expose("ViewTwo")
// This exposes this class to outside world

package com.saumya.view;

import react.React;
import react.ReactDOM;
import react.ReactComponent;
import react.ReactMacro.jsx;

import com.saumya.view.ViewOne;
import com.saumya.view.ViewList;

@:expose("ViewTwo")
class ViewTwo extends ReactComponent{
  public function new(props:Dynamic){
    super(props);
  }
  override public function render(){
    return jsx('
            <div style={{margin:"10px", border:"red 4px solid"}}>
                <h2>HAXE + React</h2>
                <h3>ViewTwo</h3>
                <ViewOne />
                <ViewList />
            </div>
        ');
  }
}


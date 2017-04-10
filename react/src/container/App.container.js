//

import React,{Component} from 'react'

import {ViewOne} from '../haxeJS/ViewOne'
import {ViewTwo} from '../haxeJS/ViewTwo'
import {ViewList} from '../haxeJS/ViewList'

class AppContainer extends Component{
    constructor(params){super(params)}
    render(){
        return(
            <div>
                Application Container
                <ViewTwo />
            </div>
        )
    }
}

export default AppContainer
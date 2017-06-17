//

import React,{Component} from 'react'

//HAXE components
import {ViewOne} from '../haxeJS/ViewOne'
import {ViewTwo} from '../haxeJS/ViewTwo'
import {ViewList} from '../haxeJS/ViewList'
// JS Componenets
import HelloWorld from '../component/Hello.component'


class AppContainer extends Component{
    constructor(params){super(params)}
    render(){
        return(
            <div>
                Application Container
                <HelloWorld />
            </div>
        )
    }
}

export default AppContainer
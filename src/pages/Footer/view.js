import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
export default class view extends Component {
    state = {
        data:[
            {
                id:0,
                name:"首页",
                path:"/home",
                icon:"icon iconfont icon-shouye"
            },
            {
                id:1,
                name:"购物车",
                path:"/shop",
                icon:"icon iconfont icon-gouwuche"
            },
            {
                id:2,
                name:"我的",
                path:"/my",
                icon:"icon iconfont icon-wode"
            }
        ]
    }
    render() {
        return (
            <footer>
                {
                    this.state.data.map((v,i)=>{
                        return <dl key={i}>
                        <NavLink to={v.path}>
                            <dt><i className={v.icon}></i></dt>
                            <dd>{v.name}</dd>
                        </NavLink>
                        </dl>
                    })
                }
            </footer>
        )
    }
}

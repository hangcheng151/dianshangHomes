import React, { Component } from 'react'
import './style.less'
import axios from 'axios'

import { Carousel } from 'antd';
export default class view extends Component {
    state = {
        autoPlay: [],
        listNav: [],
        shopList: [],
        InfoList:[]
    }
    componentDidMount() {
        axios.get("http://vueshop.glbuys.com/api/home/index/slide?token=1ec949a15fb709370f").then((res) => {

            this.setState({
                autoPlay: res.data.data
            })
        })

        axios.get("http://vueshop.glbuys.com/api/home/index/nav?token=1ec949a15fb709370f").then((res) => {

            this.setState({
                listNav: res.data.data
            })
        })

        axios.get("http://vueshop.glbuys.com/api/home/index/goodsLevel?token=1ec949a15fb709370f").then((res) => {

            this.setState({
                shopList: res.data.data
            })
        
            console.log(res.data.data)
        })

        axios.get("http://vueshop.glbuys.com/api/home/index/recom?token=1ec949a15fb709370f").then((res)=>{
            console.log(res.data.data)
            this.setState({
                InfoList:res.data.data
            })
        })


    }
    onScllo = ()=>{
        
        let SectionTop = this.refs.section.scrollTop
        let Header = this.refs.header
    
        if(SectionTop>50){
             Header.style.background="linear-gradient(#eb1625,hsla(0,0%,100%,0))";
        }else{
            Header.style.background="";
        }
    }

    render() {
        return (
            <div className="home">
                <header ref="header">
                    <p><i className="icon iconfont icon-fenlei"></i></p>
                    <span><input type="text" placeholder="请输入宝贝名称" /></span>
                    <p>登录</p>
                </header>
                <div className="section" onScroll={this.onScllo} ref="section">
                    <Carousel autoplay>
                        {
                            this.state.autoPlay.map((v, i) => {
                                return <div key={i}>
                                    <h3><img src={v.image} alt="" /></h3>
                                </div>
                            })
                        }

                    </Carousel>
                    <div className="list-Nav">
                        {
                            this.state.listNav.map((v, i) => {
                                return <dl key={i}>
                                    <dt><img src={v.image} alt="" /></dt>
                                    <dd>{v.title}</dd>
                                </dl>
                            })
                        }
                    </div>
                    <div className="main">
                        {
                            this.state.shopList.map((v, i) => {
                                return <React.Fragment key={i}>
                                    <h1>------{v.title}------</h1>
                                    <div className="main-Info">
                                        <div className="box">
                                            <div className="box-top">
                                                <div className="box-left">
                                                    {
                                                        v.items.map((v, i) => {
                                                            if (i == 0) {
                                                                return <dl key={i}>
                                                                    <dd>
                                                                        <h1>{v.title}</h1>
                                                                        <h2>精品打折 <span>{v.price}元</span></h2>
                                                                    </dd>
                                                                    <dt><img src={v.image} alt="" /></dt>
                                                                </dl>
                                                            }

                                                        })
                                                    }
                                                </div>
                                                <div className="box-right">
                                                    {
                                                        v.items.map((v, i) => {
                                                            if (i == 1 || i==2) {
                                                                return <dl key={i}>
                                                                    <dd>
                                                                        <h2>{v.title}</h2>
                                                                        <h3>精品挑选</h3>
                                                                    </dd>
                                                                    <dt><img src={v.image} alt="" /></dt>
                                                                </dl>
                                                            }
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            <div className="box-bot">
                                                {
                                                    v.items.map((v,i)=>{
                                                        if(i>=3){
                                                            return <dl key={i}>
                                                                <dd><h2>{v.title}</h2></dd>
                                                                <dt><img src={v.image} alt=""/></dt>
                                                                <dd>
                                                                    <h4>￥{v.price}</h4>
                                                                </dd>
                                                            </dl>
                                                        }
                                                    })
                                                }
                                            </div>
                                        </div>


                                    </div>


                                </React.Fragment>
                            })
                        }
                    </div>
                    <div className="Info">
                        <h1>------为您推荐------</h1>
                        <div className="Info-list">
                        {
                            this.state.InfoList.map((v,i)=>{
                                return <dl key={i}>
                                    <dt><img src={v.image} alt=""/></dt>
                                    <dd>
                                        <h2>{v.title}</h2>
                                        <h4>￥{v.price}</h4>
                                    </dd>
                                </dl>
                            })
                        }
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

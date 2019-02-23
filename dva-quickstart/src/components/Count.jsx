import React, { Component } from 'react';
// import $ from 'jQuery'
class Count extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.props = props
        console.log('111111111111'+this.props.keys)
    }

    componentDidMount=()=>{
        let aa=document.getElementById("bechange").innerText;
        if (localStorage.getItem('l-key')) {
            aa = document.getElementById("bechange").innerText=localStorage.getItem('l-key');
            localStorage.removeItem('l-key');
        }
        if(this.props.keys){
            aa=this.props.keys;
        }
        document.getElementById("bechange").innerText=this.getUserList(aa);

    }
    shouldComponentUpdate=()=>{
        console.log(this.props.keys);
        document.getElementById("bechange").innerText=this.getUserList(this.props.keys);
        return true;
    }
    getUserList = (key0) => {
        return new Promise((resolve, reject) => {
            console.log(key0)
            var xhr = new XMLHttpRequest();
            xhr.open("GET","http://localhost:3000/findUser?id="+key0,true);
            // var data0 = {id:key0}
            xhr.send();  
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    let data = JSON.parse(xhr.responseText);
                    let data2 = data[key0].news;
                    var data3=data2.split(',')
                    var html0="<ul>";
                    for(let i=0;i<data3.length;i++){
                        html0 += "<li>"+data3[i]+"</li>";
                    }
                    html0 += "</ul>";
                    console.log(html0)
                    document.getElementById("bechange").innerHTML=html0;
                }
            }   
           
        })
    }
    render() {
        return (
            <div  id="bechange" style={{ width: '100%', height: '100%',padding:'20px 30px',overflow:'hidden'}} >
                {/* {this.props.keys} */}
                {/* {this.getUserList.bind(this,this.props.keys)} */}
            </div>
        )
    }
}

export default Count
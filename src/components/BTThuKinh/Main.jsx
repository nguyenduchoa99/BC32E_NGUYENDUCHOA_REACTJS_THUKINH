import React, { Component } from 'react'
import data from './dataGlasses.json'
export default class Main extends Component {
    state = {
        glass: {
            id: 1,
            price: 30,
            name: "GUCCI G8850U",
            url: "./glassesImage/v1.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        isShow: false,
    }
    changeGlass = (value) => {
        this.setState({ glass: value, isShow:true })
    }
    render() {
        return (
            <div className='content'>
                <div className="row">
                    <div className="col-6">
                        <img src='./glassesImage/model.jpg' alt='...' className='models' />
                        <img src={data[2].url} alt={data[2].name} className='glasses' />
                        <div className='info'>
                            <h4>{data[2].name}</h4>
                            <p>{data[2].desc}</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src='./glassesImage/model.jpg' alt='...' className='models' />
                        {this.state.isShow && (<div>
                            <img src={this.state.glass.url} alt={this.state.glass.name} className='glasses' />
                            <div className="info">
                                <h4>{this.state.glass.name}</h4>
                                <p>{this.state.glass.desc}</p>
                            </div>
                        </div>)}

                    </div>
                </div>
                <div className='content-item container'>
                    {data.map((value) => {
                        return <img src={value.url} alt={value.name} key={value.id} onClick={() => this.changeGlass(value)} />
                    })}
                </div>
            </div>
        )
    }
}

import React, {Component} from 'react';
import * as axios from 'axios';
import "./LottoRandomHeader.css";
import LottoBoxComponent from './lotto-box/LottoBoxComponent';

class LottoRandomHeader extends Component {
    state = {
        lottoNumber : [],
        drwNo : 0
    }

    componentDidMount(){
        axios.get('http://localhost:5000/lottos/last').then((res)=>{
            const data = res.data;
            console.log(data);
            if(data){
                const lottoNumber = [];
                lottoNumber.push(data.drwtNo1);
                lottoNumber.push(data.drwtNo2);
                lottoNumber.push(data.drwtNo3);
                lottoNumber.push(data.drwtNo4);
                lottoNumber.push(data.drwtNo5);
                lottoNumber.push(data.drwtNo6);
                lottoNumber.push(data.bnusNo);
                this.setState({lottoNumber, drwNo: data.drwNo});
            }
            
        })
    }

    render() {
        return(
            <div className="lotto-random-header">
                <div className="lotto-title">
                    <h1>로랜생!</h1>
                    <p>선택한 숫자 중 랜덤으로 6개 번호를 뽑아줍니다. <span>{this.state.drwNo}</span></p>
                </div>
                <div>
                    <LottoBoxComponent
                        lottoNumber={this.state.lottoNumber}
                /></div>
            </div>
        );
    }
}

export default LottoRandomHeader;
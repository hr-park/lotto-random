import React, {Component} from 'react';
import LottoRandomHeader from './lotto/LottoRandomHeader';
import LottoRandomSideMenu from './lotto/LottoRandomSideMenu';
import LottoRandomContents from './lotto/LottoRandomContents';

import './LottoRandomTemplate.css';

class LottoRandomTemplate extends Component {

    state = {
        selected : [],
        lottoNumbers : [] // 로또 번호를 생성하여 담아줄 배열
    }

    componentDidMount() {
        const {selected} = this.state;
        for(let i=1; i<46; i++) {
            selected.push(false);
        }
        this.setState({selected});
    }

    handleChange = (checked, number) => {
        console.log(number);
        const { selected } = this.state;
        selected[number-1] = checked;
        this.setState({selected});
    };

    handleButtonOnClick = () => {
        const {selected, lottoNumbers} = this.state;
        const numbers = [];
        let selectedNumberCount = 0;
        console.log(selectedNumberCount);

        selected.forEach((s, i) => {
            console.log(s, i+1);
            if(s) {
                selectedNumberCount++;
                numbers.push(i+1);
            }
        })

        if (selectedNumberCount < 6){
            alert("번호를 6개 이상 선택해주세요.");
            return;
        } else {
            alert('로또 번호를 생성합니다.')
            const lotto = this.selectLotto([], numbers);
            lottoNumbers.push(lotto);
            this.setState({lottoNumbers});
            this.setState({lottoNumbers : [lotto, ...lottoNumbers]});
        }
    }

    selectLotto = (lottoNumber, numbers) => {
        if(lottoNumber.length === 6) {
            const temp = lottoNumber.slice(0, 5);
            temp.sort((a,b)=>a-b);
            temp.push(lottoNumber[5]);
            return temp
        }
        let n = numbers[Math.floor(Math.random() * numbers.length)];
        if(lottoNumber.indexOf(n) < 0) {
            lottoNumber.push(n);
        }
        return this.selectLotto(lottoNumber, numbers);
    }

    render() {
        return(
            <div className="lotto-random-template">
                <LottoRandomHeader/>
                <div className="lotto-random-main">
                    <LottoRandomSideMenu
                        selected ={this.state.selected}
                        handleChange={this.handleChange}
                        handleButtonOnClick={this.handleButtonOnClick}
                    />
                    <LottoRandomContents
                        lottoNumbers={this.state.lottoNumbers}
                    />
                </div>
            </div>
        );
    }
}

export default LottoRandomTemplate;
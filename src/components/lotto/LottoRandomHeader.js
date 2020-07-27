import React, {Component} from 'react';
import * as axios from 'axios';
import "./LottoRandomHeader.css";
import LottoBoxComponent from './lotto-box/LottoBoxComponent';
import styled from 'styled-components';

class LottoRandomHeader extends Component {
    state = {
        lottoNumber : [],
        drwNo : 0
    }

    render() {
        return(
            <div className="lotto-random-header">
                <h1>로랜생!</h1>
                <p>선택한 숫자 중 랜덤으로 6개 번호를 뽑아줍니다.</p>
            </div>
        );
    }
}

export default LottoRandomHeader;
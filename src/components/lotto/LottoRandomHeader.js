import React, {Component} from 'react';
import * as axios from 'axios';
import "./LottoRandomHeader.css";
import LottoBoxComponent from './lotto-box/LottoBoxComponent';

class LottoRandomHeader extends Component {
    state = {
        lottoNumber : [],
        drwNo : 0
    }

    render() {
        return(
            <div className="lotto-random-header">로랜생!</div>
        );
    }
}

export default LottoRandomHeader;
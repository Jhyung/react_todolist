import React, { Component } from 'react';
import crypto from 'crypto';

var key = "tHis_iS_pRivaTe_Key";
const encrypt = (err, key) => {
  let cipher = crypto.createCipher('aes-256-cbc', key);
  let encipheredpw = cipher.update(err, 'utf-8', 'hex');
  // encipheredpw = cipher.setAutoPadding(auto_padding=true);
  encipheredpw += cipher.final('hex');
  return encipheredpw;
}
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state={
      name: Object.assign({}, props.name),
      phoneNo: Object.assign({}, props.phoneNo),
      account: Object.assign({}, props.account),
      SecretKey: '',
      APIKey: ''
    }
  }

  handleChange = (e) => {  
    const { name, phoneNo, account, SecretKey, APIKey } = e.target; 
  }

  handleProfile = (e) => {
    // 이대로 하면 서버 올렸을 때 origin 같아서 cors 안생김 세션 다른거 상관 ㄴㄴ      
    const { name, phoneNo, account, SecretKey, APIKey } = e.target; 
    
    alert(SecretKey, APIKey);
    
    // fetch('http://45.120.65.65/Login', {method: 'post'})
    // .then(res => res.json())
    // .then(
    //     (result) => {
    //         this.setState({
    //             listE: result
    //         })
    //     }
    // )
  }

  render() {
    return (
        <div>
          <h1>개인정보</h1>
          <form onSubmit={(e)=>this.handleProfile(e)} onChange={(e=>this.handleChange(e))}><br/>
              <input type="text" placeholder="이름" name="name"/><br/>
              <input type="text" placeholder="핸드폰번호" name="phoneNo"/><br/>
              <input type="text" placeholder="입금계좌" name="account"/><br/>
              <input type="submit" value="수정"/>
              <h1>거래소 정보</h1>
              <input type="password" placeholder="SecretKey" name="SecretKey"/><br/>
              <input type="password" placeholder="API Key" name="APIKey"/><br/>
              <input type="submit" value="수정"/>
          </form><br/>
          <input type="submit" onClick="/profile" value="완료" />
        </div>
    );
  }
}

export default Profile;


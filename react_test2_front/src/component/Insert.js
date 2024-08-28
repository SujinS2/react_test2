import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Insert = () => {
  const navigate = useNavigate();
  const [member, setMember] = useState({
    memberId: "",
    memberName: "",
    memberPhone: "",
    memberIntro: "",
  });
  const changeInputVal = (e) => {
    setMember({ ...member, [e.target.id]: e.target.value });
  };
  const insert = () => {
    axios
      .post("http://192.168.10.50:9999/member/insert", member)
      .then((res) => {
        navigate("/memberList");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div>
      <h2>회원 정보 등록</h2>
      <div className="input-wrap">
        <div className="input">
          <label htmlFor="memberId">아이디</label>
          <input
            type="text"
            id="memberId"
            value={member.memberId}
            onChange={changeInputVal}
          />
        </div>
        <div className="input">
          <label htmlFor="memberName">이름</label>
          <input
            type="text"
            id="memberName"
            value={member.memberName}
            onChange={changeInputVal}
          />
        </div>
        <div className="input">
          <label htmlFor="memberPhone">전화번호</label>
          <input
            type="text"
            id="memberPhone"
            value={member.memberPhone}
            onChange={changeInputVal}
          />
        </div>
        <div className="input">
          <label htmlFor="memberIntro">소개</label>
          <textarea
            id="memberIntro"
            value={member.memberIntro}
            onChange={changeInputVal}
            style={{ resize: "none", height: "300px", width: "300px" }}
          />
        </div>
        <div className="button">
          <button onClick={insert}>등록</button>
        </div>
      </div>
    </div>
  );
};

export default Insert;

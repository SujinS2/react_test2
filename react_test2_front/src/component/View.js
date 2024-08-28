import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const View = () => {
  const navigate = useNavigate();
  const param = useParams(); //userParams에 ()잊지 마라...
  const memberId = param.memberId;
  useEffect(() => {
    axios
      .get("http://192.168.10.50:9999/member/selectOneMember/" + memberId)
      .then((res) => {
        //console.log(res.data);
        setMember(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [member, setMember] = useState({});
  return (
    <div>
      <h2>상세조회</h2>
      <div className="tbl">
        <table className="tbl view-tbl">
          <tbody>
            <tr>
              <th>아이디</th>
              <td>{member.memberId}</td>
            </tr>
            <tr>
              <th>이름</th>
              <td>{member.memberName}</td>
            </tr>
            <tr>
              <th>전화번호</th>
              <td>{member.memberPhone}</td>
            </tr>
            <tr>
              <th>가입일</th>
              <td>{member.enrollDate}</td>
            </tr>
            <tr>
              <th>소개</th>
              <td>{member.memberIntro}</td>
            </tr>
            <tr>
              <td colSpan={2} className="button">
                <button
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/modify/" + member.memberId);
                  }}
                >
                  수정
                </button>
                <button
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/delete/" + member.memberId);
                  }}
                >
                  삭제
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default View;

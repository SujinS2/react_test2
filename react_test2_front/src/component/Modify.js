import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Modify = () => {
  const navigate = useNavigate();
  const params = useParams();
  const memberId = params.memberId;
  useEffect(() => {
    axios
      .get("http://192.168.10.50:9999/member/selectOneMember/" + memberId)
      .then((res) => {
        setMember(res.data);
      });
  }, []);
  const [member, setMember] = useState({
    memberId: "",
    memberName: "",
    memberIntro: "",
    memberPhone: "",
    enrollDate: "",
  });
  const changeInputVal = (e) => {
    setMember({ ...member, [e.target.id]: e.target.value });
  };

  const modify = () => {
    axios
      .post("http://192.168.10.50:9999/member/updateMember", member)
      .then((res) => {
        navigate("/view/" + memberId);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
              <th>
                <label htmlFor="memberName">이름</label>
              </th>
              <td>
                <input
                  type="text"
                  value={member.memberName}
                  id="memberName"
                  onChange={changeInputVal}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="memberPhone">전화번호</label>
              </th>
              <td>
                <input
                  type="text"
                  value={member.memberPhone}
                  id="memberPhone"
                  onChange={changeInputVal}
                />
              </td>
            </tr>
            <tr>
              <th>가입일</th>
              <td>{member.enrollDate}</td>
            </tr>
            <tr>
              <th>
                <label htmlFor="memberIntro">소개</label>
              </th>
              <td>
                <textarea
                  style={{ resize: "none", width: "300px", height: "200px" }}
                  id="memberIntro"
                  value={member.memberIntro}
                  onChange={changeInputVal}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="button">
                <button style={{ cursor: "pointer" }} onClick={modify}>
                  수정
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Modify;

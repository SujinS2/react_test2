import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://192.168.10.50:9999/member/list").then((res) => {
      setMemberList(res.data);
    });
  }, []);
  const [memberList, setMemberList] = useState([]);
  return (
    <div className="list-wrap">
      <h2>전체 회원 조회</h2>
      <div className="tbl">
        <table className="tbl">
          <thead>
            <tr>
              <th>아이디</th>
              <th>이름</th>
              <th>전화번호</th>
              <th>가입일</th>
            </tr>
          </thead>
          <tbody>
            {memberList.map((member, index) => {
              return (
                <tr
                  key={"member" + index}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/view/" + member.memberId);
                  }}
                >
                  <td>{member.memberId}</td>
                  <td>{member.memberName}</td>
                  <td>{member.memberPhone}</td>
                  <td>{member.enrollDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;

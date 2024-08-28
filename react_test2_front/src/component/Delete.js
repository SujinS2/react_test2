import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Delete = () => {
  const params = useParams();
  const memberId = params.memberId;
  const navigate = useNavigate();
  const deleteMember = () => {
    axios
      .get("http://192.168.10.50:9999/member/delete/" + memberId)
      .then((res) => {
        alert("삭제 성공");
        navigate("/memberList");
      });
  };
  return (
    <div className="delete-wrap">
      <h2>회원 정보 삭제</h2>
      <div className="msg">
        <h4>정말 삭제할거임?</h4>
      </div>
      <div className="button">
        <button onClick={deleteMember}>삭제</button>
        <button
          onClick={() => {
            navigate("/view/" + memberId);
          }}
        >
          취소
        </button>
      </div>
    </div>
  );
};
export default Delete;

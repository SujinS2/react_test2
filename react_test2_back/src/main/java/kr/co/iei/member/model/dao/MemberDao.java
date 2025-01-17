package kr.co.iei.member.model.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import kr.co.iei.member.model.dto.MemberDTO;

@Mapper
public interface MemberDao {

	int insertMember(MemberDTO member);

	List selectAllMember();

	MemberDTO selectOneMember(String memberId);

	int updateMember(MemberDTO member);

	int deleteMember(String memberId);

}

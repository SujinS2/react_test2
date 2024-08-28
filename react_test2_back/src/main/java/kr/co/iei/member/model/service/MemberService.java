package kr.co.iei.member.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.co.iei.member.model.dao.MemberDao;
import kr.co.iei.member.model.dto.MemberDTO;

@Service
public class MemberService {
	@Autowired
	private MemberDao memberDao;
	
	@Transactional
	public int insertMember(MemberDTO member) {
		int result = memberDao.insertMember(member);
		return result;
	}

	public List selectAllMember() {
		// TODO Auto-generated method stub
		List list = memberDao.selectAllMember();
		return list;
	}

	public MemberDTO selectOneMember(String memberId) {
		MemberDTO member = memberDao.selectOneMember(memberId);
		return member;
	}
	@Transactional
	public int updateMember(MemberDTO member) {
		// TODO Auto-generated method stub
		int result = memberDao.updateMember(member);
		return result;
	}

	@Transactional
	public int deleteMember(String memberId) {
		// TODO Auto-generated method stub
		int result = memberDao.deleteMember(memberId);
		return result;
	}


}

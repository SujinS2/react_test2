package kr.co.iei.member.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.iei.member.model.dto.MemberDTO;
import kr.co.iei.member.model.service.MemberService;

@CrossOrigin("*") //빼먹은것
@RestController
@RequestMapping(value="/member")
public class MemberController {
	@Autowired
	private MemberService memberService;

	@PostMapping(value="/insert")
	public int insertMember(@RequestBody MemberDTO member) {
		int result = memberService.insertMember(member);
		return result;
	}
	@GetMapping(value="/list")
	public List selectAllMember() {
		List list = memberService.selectAllMember();
		return list;
	}
	@GetMapping(value="/selectOneMember/{memberId}")
	public MemberDTO selectOneMember(@PathVariable String memberId) {
		System.out.println(memberId);
		MemberDTO member = memberService.selectOneMember(memberId);
		return member;
	}
	@PostMapping(value="/updateMember")
	public int updateMember(@RequestBody MemberDTO member) {
		int result = memberService.updateMember(member);
		return result;
	}
	@GetMapping(value="/delete/{memberId}")
	public int deleteMember(@PathVariable String memberId) {
		int result = memberService.deleteMember(memberId);
		return result;
	}
}

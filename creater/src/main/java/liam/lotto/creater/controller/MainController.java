package liam.lotto.creater.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class MainController {
	int[] lottoNum = new int[6];

	@GetMapping("/")
	public String index() {
		return "index";
	}

	@GetMapping("/getNum")
	@ResponseBody
	public String getNum(Model model) {
		numCreater create = new numCreater();
		model.addAttribute("num", create.creater(lottoNum));
		return "/";
	}
}

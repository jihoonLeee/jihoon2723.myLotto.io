package liam.lotto.creater.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
	int[] lottoNum = new int[6];

	@GetMapping("/")
	public String index() {
		return "index";
	}

	@GetMapping("getNum")
	public String getNum(Model model) {
		numCreater create = new numCreater();
		model.addAttribute("num", create.creater(lottoNum));
		return "index";
	}
}
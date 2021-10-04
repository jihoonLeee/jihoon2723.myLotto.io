package liam.lotto.creater.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class MainController {

	@GetMapping("/")
	public String index() {
		return "index";
	}

	@GetMapping("/getNum")
	public Map<String, Integer> getNum() {
		HashMap<String, Integer> map = new HashMap<String, Integer>();
		map.put("a", 1);
		return map;
	}

}

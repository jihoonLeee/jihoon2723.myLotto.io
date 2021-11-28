package liam.lotto.creater.controller;

import java.util.Random;

import org.springframework.stereotype.Service;

@Service
public class numCreater {

	public int[] creater(int[] lottoNum) {
		Random ran = new Random();
		for (int i = 0; i < lottoNum.length; i++) {
			lottoNum[i] = ran.nextInt(45) + 1; // 1 ~ 99까지의 난수
			for (int j = 0; j < i; j++) {
				if (lottoNum[i] == lottoNum[j]) {
					i--;
				}
			}
		}
		return lottoNum;
	}
}

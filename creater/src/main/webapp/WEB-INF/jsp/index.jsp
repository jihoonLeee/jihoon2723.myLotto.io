<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<script src="lib/jquery-3.6.0.slim.js">
	
</script>
<title>Lotto Creater</title>
<script type="text/javascript">
	function lottoNum() {
		$.ajax({
			type : "GET",
			url : "/getNum",
			dataType : "json",
			success : function() {
				console.log("???");
			},
			error : function() {
				console.log("실패!");
			}
		});
	}

	lottoNum();
</script>
</head>


<body>

	<div id="num1"></div>
	<div id="num2"></div>
	<div id="num3"></div>
	<div id="num4"></div>
	<div id="num5"></div>
	<div id="num6"></div>
	<button type="button">로또 당첨번호 뽑기</button>

</body>
</html>
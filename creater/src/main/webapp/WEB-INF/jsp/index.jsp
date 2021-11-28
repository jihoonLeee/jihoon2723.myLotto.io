<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<meta name="description" content="" />
<meta name="author" content="" />
<title>LOTTO</title>
<!-- Favicon-->
<link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
<!-- Font Awesome icons (free version)-->
<script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"
	crossorigin="anonymous"></script>
<!-- Simple line icons-->
<link
	href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css"
	rel="stylesheet" />
<!-- Google fonts-->
<link
	href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic"
	rel="stylesheet" type="text/css" />
<!-- Core theme CSS (includes Bootstrap)-->
<link href="css/styles.css" rel="stylesheet" />

<style>
.col-lg-2 {
	text-align: center;
}

img {
	width: 120px;
	height: 120px;
}
</style>
</head>
<body id="page-top">
	<!-- Header-->
	<header class="masthead d-flex align-items-center">
		<div class="container px-4 px-lg-5 text-center">
			<h1 class="mb-1">GO TO RICH</h1>
			<h3 class="mb-5">로또 번호 생성기</h3>
			<a id="createLotto" class="btn btn-primary btn-xl" href=#portfolio>번호받기</a>
		</div>
	</header>
	<!-- Portfolio-->
	<section class="content-section" id="portfolio">
		<div class="container px-4 px-lg-5">
			<div class="content-section-heading text-center">
				<h3 class="text-secondary mb-0">good luck!</h3>
				<h2 class="mb-5">LOTTO NUMBER</h2>
			</div>
			<div class="row gx-0">
				<c:forEach items="${num}" var="lotto">
					<span>${lotto}</span>
					<div class="col-lg-2">
						<a class="portfolio-item" href="#!"> <img class="img-fluid"
							src="images/'${lotto}'.png" alt="..." />
						</a>
					</div>
				</c:forEach>
			</div>
		</div>
	</section>
	<!-- Map-->
	<div class="content-section-heading text-center"
		style="padding-top: 100px;">
		<h2 class="mb-5">당첨금 수령 장소</h2>
	</div>
	<div class="map" id="contact">
		<div id="map" style="width: 100%; height: 400px;"></div>
	</div>
	<!-- Footer-->
	<footer class="footer text-center">
		<div class="container px-4 px-lg-5">
			<ul class="list-inline mb-5">
				<li class="list-inline-item"><a
					class="social-link rounded-circle text-white mr-3"
					href="https://www.youtube.com/watch?v=AiAsGg3_xXs&ab_channel=%EB%B3%B4%EB%B3%B4%EB%B3%B4%EB%A6%AC%EB%A6%AC%EB%A6%AC"><i
						class="icon-social-youtube"></i></a></li>
				<li class="list-inline-item"><a
					class="social-link rounded-circle text-white"
					href="https://jihoon2723.tistory.com/"><i
						class="icon-social-github"></i></a></li>
			</ul>
			<p class="text-muted small mb-0">Copyright &copy; 2021 liam's
				page</p>
		</div>
	</footer>
	<!-- Scroll to Top Button-->
	<a class="scroll-to-top rounded" href="#page-top"><i
		class="fas fa-angle-up"></i></a>
	<!-- Bootstrap core JS-->
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
	<script type="text/javascript"
		src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=fving1bkbg"></script>
	<!-- Core theme JS-->
	<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
	<script src="js/scripts.js"></script>
	<script>
		$("#createLotto").click(function() {
			$.ajax({
				type : "GET",
				url : "/getNum",
				contentType : 'application/json; charset=utf-8',
				success : function(data) {
					console.log(data);
				},
				error : function() {
					alert("통신 실패.")
				}
			});
		});

		const locations = [ {
			place : "농협 본사",
			lat : 37.56587411850793,
			lng : 126.96741510316097
		} ];
		var map = new naver.maps.Map('map', {
			center : new naver.maps.LatLng(37.56587411850793,
					126.96741510316097),
			zoom : 18
		});
		for (var i = 0; i < locations.length; i++) {
			var marker = new naver.maps.Marker({
				map : map,
				title : locations[i].place,
				position : new naver.maps.LatLng(locations[i].lat,
						locations[i].lng),
			});
		}
	</script>
</body>

</html>

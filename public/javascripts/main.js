var emotions;
    $(document).ready(function () {
      emotions = [];

      $(".emotion-button").click(function () {
        var emotion = $(this).text();
        var parentID = $(this).parent().attr("id");
        if (parentID == "emotionList") {
          if (emotions.length < 5) {
            // 선택된 감정이 5개 미만일 때만 추가
            emotions.push(emotion + "이고");
            $("#emotionResult").append($(this));
          } else {
            alert("기분은 최대 5개까지만 선택할 수 있습니다.");
          }
        } else if (parentID == "emotionResult") {
          var index = emotions.indexOf(emotion + "이고");
          if (index > -1) {
            emotions.splice(index, 1);
          }
          $("#emotionList").append($(this));
        }
      });
    });
    document.addEventListener('DOMContentLoaded', function () {
        // 각 버튼에 대한 참조를 가져옵니다.
        var emotionButton = document.getElementById('emotion_btn');
        var dreamButton = document.getElementById('dream_btn');
    
        // 각 섹션에 대한 참조를 가져옵니다.
        var emotionSection = document.getElementById('emotions');
        var dreamSection = document.getElementById('dreams');
    
        // 초기에는 두 섹션을 모두 숨깁니다.
        emotionSection.style.display = 'block';
        dreamSection.style.display = 'none';
    
        // 감정 버튼 클릭 이벤트 핸들러를 추가합니다.
        emotionButton.addEventListener('click', function () {
            emotionSection.style.display = 'block'; // 감정 섹션을 보이게 합니다.
            dreamSection.style.display = 'none';    // 꿈 섹션을 숨깁니다.
        });
    
        // 꿈 버튼 클릭 이벤트 핸들러를 추가합니다.
        dreamButton.addEventListener('click', function () {
            emotionSection.style.display = 'none';  // 감정 섹션을 숨깁니다.
            dreamSection.style.display = 'block';  // 꿈 섹션을 보이게 합니다.
        });
    });
    $(document).ajaxStart(function () {
      $("#loading").fadeIn("slow"); // Ajax 호출 시작 시 로딩 화면 표시
    });

    $(document).ajaxStop(function () {
      $("#loading").fadeOut("slow"); // 모든 Ajax 호출 완료 시 로딩 화면 숨김
    });
    function recommendNum() {
      console.log("기분 : " + emotions);
      if (emotions.length == 0) {
        alert("기분을 말해주세요~");
        return false;
      }
      $.ajax({
        url: "/gpt",
        type: "POST",
        data: JSON.stringify({ emotions }),
        contentType: "application/json", // 요청 본문의 타입을 JSON으로 설정
        dataType: "json",
        success: function (data) {
          console.log(data);
          var parsedData = JSON.parse(data);
          $.each(parsedData, function (index, item) {
            var card = `
                    <div class="p-6 mt-5 max-w-md mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                        <div class="flex-shrink-0">
                            <img class="h-12 w-12" src="/images/numbers/${item.number}.png" alt="ChitChat Logo">
                        </div>
                        <div>
                            <div class="text-xl font-medium text-black">행운의 숫자 : ${item.number}</div>
                            <p class="text-gray-500"> ${item.reason}</p>
                        </div>
                    </div>
                `;
            $("#listId").append(card);
          });
        },
        error: function (error) {
          console.error("Error:", error);
        },
      });
    }
    function recommendDreamNum() {
      const dream = $("#dreamContent").val();
      if (dream.length == 0) {
        alert("내용을 입력해주세요!");
        return false;
      }
      $.ajax({
        url: "/gpt_dream",
        type: "POST",
        data: JSON.stringify({ content: dream }),
        contentType: "application/json", // 요청 본문의 타입을 JSON으로 설정
        dataType: "json",
        success: function (data) {
          console.log(data);
          var parsedData = JSON.parse(data);
          $.each(parsedData, function (index, item) {
            var card = `
                        <div class="p-6 mt-5 max-w-md mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                <img class="h-12 w-12" src="/images/numbers/${item.number}.png" alt="ChitChat Logo">
                            </div>
                            <div>
                                <div class="text-xl font-medium text-black">행운의 숫자 : ${item.number}</div>
                                <p class="text-gray-500"> ${item.reason}</p>
                            </div>
                        </div>
                    `;
            $("#listId").append(card);
          });
        },
        error: function (error) {
          console.error("Error:", error);
        },
      });
    }
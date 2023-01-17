var TruthArryReal = new Array
    (
        "Thực hiện 20 lần squat.",
        "Nhảy không nhạc trong 1 phút.",
        "Để người ở bên phải bạn dùng bút vẽ lên khuôn mặt của bạn.",
        "Nhắn tin cho ai đó, bạn đã không nói chuyện trong một năm.",
        "Cố gắng không cười trong 10 phút tiếp theo",
        "Đăng ảnh tự sướng lâu đời nhất trên điện thoại của bạn trên Instagram Stories",
        "Quack như một con vịt cho đến lượt tiếp theo của bạn?",
        "Ăn một thìa muối.",
        "Đọc to những gì bạn đã tìm kiếm trên điện thoại của mình trong năm phút qua.",
        "Nhắm mắt lại và cảm nhận khuôn mặt của ai đó. Đoán xem họ là ai.",
        "Kể tên hai thú vui tội lỗi của bạn.",
        "Nếu bạn phải xóa một ứng dụng khỏi điện thoại của mình, đó sẽ là ứng dụng nào?",
        "Kể tên một điều bạn sẽ thay đổi về mỗi người trong phòng này.",
        "Nếu phải quay lại với người yêu cũ, bạn sẽ chọn ai?",
        "Ngửi nách của người chơi khác.",
        "Selfie 1 tấm ngay bây giờ ai không có trong ảnh uống 1 ly",
        "Hãy trang điểm mà không cần soi gương, sau đó cứ để như vậy trong phần còn lại của trò chơi.",
        "Quay nhanh năm lần sau đó cố gắng đi trên một đường thẳng",
        "Chọn một người nào đó trong nhóm để đánh đòn cho bạn.",
        "Đưa điện thoại của bạn cho người chơi khác, người có thể gửi một tin nhắn nói bất cứ điều gì cho bất kỳ ai.",
        "Thể hiện màu sắc của quần đùi của bạn.",
        "Trao đổi một mặt hàng quần áo với người chơi ở bên phải của bạn.",
        "Hãy thực hiện tư thế yoga bất kỳ mà bạn từng thực hiện.",
        "Nói chuyện bằng giọng Anh cho đến lượt tiếp theo của bạn.",
        "Hát bảng chữ cái mà không cần cử động miệng",
        "Gọi cho một người bạn, giả vờ đó là sinh nhật của họ và hát cho họ nghe Chúc mừng sinh nhật .",
        "Hành động như một con gà cho đến lượt tiếp theo của bạn.",
        "Hãy hét lên từ đầu tiên xuất hiện trong đầu bạn ngay bây giờ",
        "Hãy đứng lên và cố gắng đóng giả người bên phải của bạn.",
        "Hát đoạn điệp khúc của bài hát yêu thích của bạn.",
        "Im lặng và không nói gì từ bây giờ cho đến lượt tiếp theo của bạn.",
        "Nhảy 1 trend tiktok bất kì",
        "Cùng uống với người đối diện 2 ly",
        "Những người mặc áo cùng màu với bạn uống 1 ly",
        "Hãy uống ngay 1 ly và không nói gì thêm cho tới lượt tiếp theo",
        "Kể tháng sinh của tất cả mọi người ở đây",
        "Kể 1 câu chuyện cười, ai không cười người đó uống 2 ly",
    );

var TruthArry = TruthArryReal
function TruthF() {
    var element = document.getElementById("card");
    var TOD = document.getElementById("tod");
    var v_count = document.getElementById("count-down");
    let count = 3
    v_count.innerHTML = count;
    TOD.value = ''
    element.classList.remove("open")
    element.classList.add("close");
    var l = TruthArry.length;
    // console.log(l);
    if (l == 0) {
        v_count.innerHTML = ''
        TOD.value = "Hết rồi!"
        element.classList.remove("close")
        element.classList.add("open");
        TruthArry = TruthArryReal
    } else {
        var x = Math.floor((Math.random() * l));

        var t = window.setInterval(() => {
            count = count - 1
            if (count === 0) {
                v_count.innerHTML = ''
                TOD.value = TruthArry[x];
                element.classList.remove("close")
                element.classList.add("open");
                TruthArry = TruthArry.filter((element, index) => { return index !== x })
                clearInterval(t);
            } else v_count.innerHTML = count;
        }, 1000);
    }
}





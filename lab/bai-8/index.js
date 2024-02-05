const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

//  querySelectorAll cho thấy hết các tập hợp của class (giống 1 mảng)
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);




// vì vòng lặp for chỉ có 1 phần tử nên ko cần dấu ngoặc nhọn {}
// kết hợp cả 3 nút ấn cùng chức năng
for (let i = 0; i < btnOpenModal.length; i++)


  // Cách hiện dòng văn bản bị ẩn
  btnOpenModal[i].addEventListener('click', function () {
    // hàm chứa bao gồm cả 3 nút ấn
    console.log('click vao');

    // Chú ý hidden dưới đây ko đc để "dấu chấm", "nó" chỉ áp dụng cho bộ chọn
    // sử dụng biến modal trên để xóa bỏ lớp ẩn
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });




///////////////////////////////////////////////////////////////////////
/*
// Cách để đóng lớp hidden bằng cách kích vào dấu X
btnCloseModal.addEventListener('click', function () {
  //  thêm chức năng ẩn bằng biến tạo ở trên
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

// Cách để đóng lớp hidden bằng cách kích ra bên ngoài overlay
overlay.addEventListener('click', function () {
  //  thêm chức năng ẩn bằng biến tạo ở trên
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
*/
//////////////////////////////////////////////////////////////////////////////////


// để làm gọn 2 phương thức đóng ở trên ta sẽ gọi hàm
// Cách để đóng lớp hidden bằng cách kích vào dấu X

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// muốn đóng bằng cách nào hãy gọi biến chứa hàm có phương thức đóng
// trong sự kiện addEventListẻnner ko cần gọi hàm với dấu ()
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);





//  cách đóng văn bản từ bàn phím
document.addEventListener('keydown', function (s) {
  console.log(s.key);

  // nếu hàm bằn 'nút Escape' và mô hình không chứa lớp ẩn thì đóng
  // phương thức contains kiểm tra xem có tồn tại ko
  if (s.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  };
});
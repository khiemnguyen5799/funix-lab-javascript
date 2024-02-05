// Hàm wait để tạm dừng thực thi trong một khoảng thời gian nhất định
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// Hàm tạo hình ảnh
function createImage(imgPath) {
  return new Promise((resolve, reject) => {
      const img = document.createElement('img');
      
      img.onload = () => {
          img.classList.add('image', 'parallel');
          document.querySelector('.images').appendChild(img);
          resolve(img);
      };
      
      img.onerror = () => {
          img.remove();
          reject(new Error('Failed to load image'));
      };
      
      img.src = imgPath;
  });
}
// Hàm load và tạm dừng
async function loadNPause() {
  try {
      const img1 = await createImage('anhdao.jpg');
      await wait(2000);
      img1.style.display = 'none';
      
      const img2 = await createImage('cho.jpg');
      await wait(2000);
      img2.style.display = 'none';
  } catch (error) {
      console.error('Error:', error.message);
  }
}



// Hàm async loadAll
async function loadAll(imgArr) {
  try {
      const imgs = await Promise.all(imgArr.map(createImage));
      console.log(imgs);
  } catch (error) {
      console.error('Error:', error.message);
  }
}

// Array đường dẫn hình ảnh
const imgArr = ['congvien.jpg', 'kyoto.jpg', 'lado.jpg'];

// Gọi hàm loadAll
loadAll(imgArr);
// Gọi hàm loadNPause
loadNPause();

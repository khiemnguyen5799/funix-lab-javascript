let currentImage;
function createImage(imgPath) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');

        img.onload = () => {
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
// Hàm wait để tạm dừng thực thi trong một khoảng thời gian nhất định
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Biến toàn cục để lưu trữ phần tử hình ảnh hiện tại

// Sử dụng promises và then
createImage('0-hoa-anh-dao.jpg')
    .then(img => {
        currentImage = img;
        return wait(2000);
    })
    .then(() => {
        currentImage.style.display = 'none';
        return createImage('R.jpg');
    })
    .then(img => {
        currentImage = img;
        return wait(2000);
    })
    .then(() => {
        currentImage.style.display = 'none';
    })
    .catch(error => {
        console.error('Error:', error.message);
    });


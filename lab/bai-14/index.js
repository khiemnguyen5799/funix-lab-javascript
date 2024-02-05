const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
const form = document.querySelector('.top-banner form');
const input = document.querySelector('.top-banner input');

const apiKey = '12c998a15fd65623f04135c6289650d6';

form.addEventListener("submit", e => {
  // khi 1 sự kiện xảy ra ví dụ như sự kiện submit thì phương thức dưới ngăn chặn hành vi mặc định gửi dữ liệu fomrm tới sever
  e.preventDefault();

  let inputVal = input.value;

  /* Tạo URl để yêu cầu tới API thời tiết */

  //ajax here 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found')
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      // xử lý kết quả trả về
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]
        }.svg`;

      
        const li = document.createElement('li');
        li.classList.add('city');
        const markup = `
          <h2 class="city-name" name="${name}">
            <span>${name}</span>
            <sup>${sys.country}</sup>
          </h2>
          <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
          <figure>
            <img class="city-icon" src="${icon}" alt="${weather[0].description}">
            <figcaption>${weather[0].description}</figcaption>
          </figure>
        `;
        li.innerHTML = markup;
        list.appendChild(li);

    })
        .catch(() => {
          msg.textContent = "Please search for a valid city";
        });

  msg.textContent = "";
  form.reset();
  input.focus();
});
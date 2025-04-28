function saveNews() {
    const title = document.getElementById('title').value;
    const desc = document.getElementById('desc').value;
    const imageInput = document.getElementById('image');
    const file = imageInput.files[0];
  
    if (!file) {
      alert("Please select an image file.");
      return;
    }
  
    const reader = new FileReader();
    reader.onload = function(event) {
      const imageBase64 = event.target.result;
  
      const newsItem = { title, image: imageBase64, desc };
      const newsList = JSON.parse(localStorage.getItem('news')) || [];
      newsList.push(newsItem);
      localStorage.setItem('news', JSON.stringify(newsList));
  
      alert('News uploaded!');
      document.getElementById('newsForm').reset();
      showAdminNews(); // refresh the list after upload
    };
  
    reader.readAsDataURL(file);
  }
  
  function showAdminNews() {
    const adminNewsList = document.getElementById('adminNewsList');
    adminNewsList.innerHTML = '';
  
    const newsList = JSON.parse(localStorage.getItem('news')) || [];
    newsList.forEach((news, index) => {
      const newsDiv = document.createElement('div');
      newsDiv.classList.add('card');
      newsDiv.innerHTML = `
        <h3>${news.title}</h3>
        <img src="${news.image}" alt="News Image" style="max-width: 100%; height: auto;">
        <p>${news.desc}</p>
        <button class="delete-btn" onclick="deleteNews(${index})">Delete</button>
      `;
      adminNewsList.appendChild(newsDiv);
    });
  }
  
  function deleteNews(index) {
    const newsList = JSON.parse(localStorage.getItem('news')) || [];
    if (confirm("Are you sure you want to delete this news?")) {
      newsList.splice(index, 1);
      localStorage.setItem('news', JSON.stringify(newsList));
      showAdminNews();
    }
  }

  // Load and display news cards
function loadNews() {
    const newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = '';
  
    const newsList = JSON.parse(localStorage.getItem('news')) || [];
    newsList.forEach((news, index) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h3>${news.title}</h3>
      `;
      card.onclick = () => openPopup(news);
      newsContainer.appendChild(card);
    });
  }
  
  // Open popup
  function openPopup(news) {
    document.getElementById('popupTitle').innerText = news.title;
    document.getElementById('popupImage').src = news.image;
    document.getElementById('popupDesc').innerText = news.desc;
    document.getElementById('popup').style.display = 'flex';
  }
  
  // Close popup
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  
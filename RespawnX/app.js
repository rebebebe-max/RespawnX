// Handle Banner Image Upload
document.getElementById('bannerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const bannerInput = document.getElementById('bannerImage');
    const file = bannerInput.files[0];
    
    if (!file) {
      alert("Please select an image.");
      return;
    }
  
    const reader = new FileReader();
    reader.onload = function(event) {
      const bannerImage = event.target.result;
      localStorage.setItem('bannerImage', bannerImage);
      alert("Banner image updated!");
    };
  
    reader.readAsDataURL(file);
  });
  
  // Handle Live Event Scheduling and Thumbnail Upload
  document.getElementById('liveForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const liveTitle = document.getElementById('liveTitle').value;
    const liveLink = document.getElementById('liveLink').value;
    const liveDate = document.getElementById('liveDate').value;
    const liveThumbnailInput = document.getElementById('liveThumbnail');
    const liveThumbnailFile = liveThumbnailInput.files[0];
  
    if (!liveTitle || !liveLink || !liveDate || !liveThumbnailFile) {
      alert("Please provide all details.");
      return;
    }
  
    const reader = new FileReader();
    reader.onload = function(event) {
      const liveThumbnail = event.target.result;
  
      const liveEvent = { 
        title: liveTitle, 
        link: liveLink, 
        date: liveDate, 
        thumbnail: liveThumbnail 
      };
  
      localStorage.setItem('liveEvent', JSON.stringify(liveEvent));
      alert("Live event scheduled!");
    };
  
    reader.readAsDataURL(liveThumbnailFile);
  });
  
  // Handle Banner Image Deletion
  document.getElementById('deleteBannerBtn').addEventListener('click', function() {
    localStorage.removeItem('bannerImage');
    alert("Banner image deleted!");
  });
  
  // Handle Live Event Deletion
  document.getElementById('deleteLiveBtn').addEventListener('click', function() {
    localStorage.removeItem('liveEvent');
    alert("Scheduled live event deleted!");
  });
  

//document.querySelectorAll('.video').forEach(video => {
 // video.addEventListener('click', () => {
   // const title = video.querySelector('h3').innerText;
    //alert(`Playing: ${title}`);
    // You can replace this with modal or iframe embed later.
 // });
//});

// 2. Sidebar navigation simulation
//document.querySelectorAll('.sidebar li').forEach(item => {
  //item.addEventListener('click', () => {
    //alert(`Navigating to ${item.innerText}...`);
    // You can load another page or section here
 // });
//});

// 3. Add Like button to each video dynamically
//document.querySelectorAll('.video').forEach(video => {
  //const likeBtn = document.createElement('button');
  //likeBtn.innerText = '👍 Like';
  //likeBtn.classList.add('like-btn');
  //video.appendChild(likeBtn);

  //let liked = false;

 // likeBtn.addEventListener('click', (e) => {
    //e.stopPropagation(); // Prevent triggering the video play
    //liked = !liked;
    //likeBtn.innerText = liked ? '💖 Liked' : '👍 Like';
 // });alert(`Playing: ${title}`);
//const videoId = "sBzRwzY7G-k"; // You can get this dynamically later
//window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');

//});

// 1. Video click: Play video
document.querySelectorAll('.video').forEach(video => {
  video.addEventListener('click', () => {
    const title = video.querySelector('h3').innerText;
    alert(`Playing: ${title}`);
  });
});

// 2. Sidebar navigation simulation
document.querySelectorAll('.sidebar li').forEach(item => {
  item.addEventListener('click', () => {
    const section = item.innerText.trim();
    alert(`Navigating to ${section}...`);

    // Optional: Navigate to other sections/pages
    // For real navigation, you could do:
    // window.location.href = 'anotherpage.html';
  });
});

// 3. Like button for each video
document.querySelectorAll('.video').forEach(video => {
  const likeBtn = document.createElement('button');
  likeBtn.innerText = '👍 Like';
  likeBtn.classList.add('like-btn');
  video.querySelector('.info').appendChild(likeBtn); // Better placement

  let liked = false;

  likeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click from triggering play
    liked = !liked;
    likeBtn.innerText = liked ? '💖 Liked' : '👍 Like';
  });
});

item.addEventListener('click', () => {
  const section = item.innerText.trim().toLowerCase();

  // Simulated navigation
  if (section === "home") {
    window.location.href = "home.html";
  } else if (section === "shorts") {
    window.location.href = "shorts.html";
  } else if (section === "subscriptions") {
    window.location.href = "subscriptions.html";
  } else {
    alert(`Navigating to ${section}...`);
  }
});



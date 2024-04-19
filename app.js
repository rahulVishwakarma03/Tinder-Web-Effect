let users = [
  {
    logo: "https://images.unsplash.com/photo-1511424323602-d3c1a4138056?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",

    img: "https://images.unsplash.com/photo-1584359018585-82fb9b6b710d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    name: "Angelika",
    age: 21,
    location: '<i class="ri-map-pin-fill"></i> &nbsp; California, USA',
    badge: 3,
    interests: ["Music", "Painting"],
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam expedita  ",
  },
  {
    logo: "https://images.unsplash.com/photo-1667337779078-475436e7d96f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    img: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Anisa",
    age: 23,
    location: '<i class="ri-map-pin-fill"></i> &nbsp; NewYork, USA',
    badge: 2,
    interests: ["Music", "Painting"],
    bio: "Lorem, ipsum dolor sit amet consectetur. Veritatis ipsam expedita obcaecati reiciendis facere. dolor sit amet consectetur",
  },
  {
    logo: "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
    img: "https://images.unsplash.com/photo-1681038097738-6c419b88f7a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    name: "Beatrice",
    age: 20,
    location: '<i class="ri-map-pin-fill"></i> &nbsp; Tokyo, Japan',
    badge: 3,
    interests: ["Music", "Painting"],
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam expedita obcaecati ",
  },
  {
    logo: "https://images.unsplash.com/photo-1580893472468-01373fe4c97e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    img: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
    name: "Eliana",
    age: 22,
    location: '<i class="ri-map-pin-fill"></i> &nbsp; London, England',
    badge: 6,
    interests: ["Music", "Painting"],
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam expedita obcaecati reiciendis facere.",
  },
  {
    logo: "https://images.unsplash.com/photo-1534008757030-27299c4371b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    name: "Astroli",
    age: 23,
    location: '<i class="ri-map-pin-fill"></i> &nbsp; Mexico City',
    badge: 4,
    interests: ["Music", "Painting"],
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam expedita obcaecati reiciendis facere.dolor sit amet",
  },
  {
    logo: "https://images.unsplash.com/photo-1535987258279-5704c12a38d4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img: "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    name: "Melonis",
    age: 21,
    location: '<i class="ri-map-pin-fill"></i> &nbsp; Singapore City',
    badge: 1,
    interests: ["Music", "Painting"],
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam expedita obcaecatidolor sit amet consectetur",
  },
  {
    logo: "https://images.unsplash.com/photo-1517630800677-932d836ab680?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmUlMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D",
    img: "https://images.unsplash.com/photo-1508606572321-901ea443707f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    name: "Tersagi",
    age: 22,
    location: '<i class="ri-map-pin-fill"></i> &nbsp; San Francisco, USA',
    badge: 6,
    interests: ["Music", "Painting"],
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam expedita obcaecati reiciendis facere.dolor sit amet consectetur",
  },
  {
    logo: "https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmUlMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D",
    img: "https://images.unsplash.com/photo-1500336624523-d727130c3328?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    name: "Gianna",
    age: 22,
    location: '<i class="ri-map-pin-fill"></i> &nbsp; Paris, France',
    badge: 7,
    interests: ["Music", "Painting"],
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam expedita obcaecati reiciendis facere.",
  },
  {
    logo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmUlMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Amara",
    age: 21,
    location: '<i class="ri-map-pin-fill"></i> &nbsp; Berlin, Germany',
    badge: 9,
    interests: ["Music", "Painting"],
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam expedita obcaecati reiciendis facere.dolor sit amet",
  },
];

let deny = document.querySelector("#deny");
let accept = document.querySelector("#accept");
let front = document.querySelector(".firstImg");
let incoming = document.querySelector(".secondImg");

function setUserDetails() {
  document.querySelector("#profile").src = users[index].logo;
  document.querySelector("#sms").innerHTML = users[index].badge;
  document.querySelector("#location").innerHTML = users[index].location;
  document.querySelector("#name").innerHTML = users[index].name;
  document.querySelector("#age").innerHTML = users[index].age;
  document.querySelector("#bio").innerHTML = users[index].bio;
}

let index = 0;
(function setUser() {
  document.querySelector(".firstImg").src = users[index].img;
  document.querySelector(".secondImg").src = users[index + 1].img;

  setUserDetails();
  index++;
})();

let isAnimating = false;
function changeImg() {
  if (!isAnimating) {
    isAnimating = true;

    let tl = gsap.timeline({
      onComplete: function () {
        let firstImg = document.querySelector(".firstImg");
        let secondImg = document.querySelector(".secondImg");

        secondImg.classList.remove("secondImg");

        gsap.set(firstImg, {
          opacity: 1,
          scale: 1,
        });

        firstImg.classList.remove("firstImg");
        secondImg.classList.add("firstImg");
        firstImg.classList.add("secondImg");

        if (index == users.length - 1) index = -1;
        document.querySelector(".secondImg").src = users[index + 1].img;
        index++;
        isAnimating = false;
      },
    });
    tl.to(
      ".firstImg",
      {
        scale: 1.1,
        opacity: 0,
        duration: 0.9,
      },
      "flag"
    ).from(
      ".secondImg",
      {
        scale: 0.9,
        opacity: 0,

        duration: 1.1,
      },
      "flag"
    );
  }
}

accept.addEventListener("click", function () {
  changeImg();
  setUserDetails();

  gsap.from("#details .element", {
    y: "100%",
    opacity: 0,
    stagger: 0.05,

    duration: 1,
  });

  // For like Animation
  let like = document.querySelector(".like i");
  like.style.display = "block";

  let likeTL = gsap.timeline({
    onComplete: function () {
      like.style.display = "none";
      gsap.set(like, {
        opacity: 1,
        scale: 1,
      });
    },
  });
  likeTL.to(like, {
    opacity: 0,
    scale: 2,
    duration: 1,
  });
});
deny.addEventListener("click", function () {
  changeImg();
  setUserDetails();
  gsap.from("#details .element", {
    y: "100%",
    opacity: 0,
    stagger: 0.05,

    duration: 1,
  });
});

(function changeDetails() {
  document.querySelectorAll(".element").forEach(function (element) {
    let div = document.createElement("div");
    div.classList.add(`${element.classList[1]}container`, "overflow");
    div.appendChild(element);
    document.querySelector("#details").appendChild(div);
  });
})();

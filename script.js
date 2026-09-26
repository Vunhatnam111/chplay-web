const apps = {

    TikTok: {
        developer: "TikTok Pte. Ltd.",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a9/TikTok_logo.svg",
        rating: "★ 4.5",
        description:
            "TikTok là nền tảng video ngắn, nơi bạn có thể khám phá và chia sẻ những nội dung thú vị."
    },

    YouTube: {
        developer: "Google LLC",
        icon: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.svg",
        rating: "★ 4.2",
        description:
            "Xem video, nghe nhạc và khám phá những nội dung mới."
    },

    Facebook: {
        developer: "Meta Platforms",
        icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
        rating: "★ 4.3",
        description:
            "Kết nối với bạn bè, gia đình và cộng đồng."
    },

    Instagram: {
        developer: "Instagram",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
        rating: "★ 4.6",
        description:
            "Chia sẻ ảnh, video và kết nối với bạn bè."
    },

    Spotify: {
        developer: "Spotify AB",
        icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
        rating: "★ 4.4",
        description:
            "Nghe hàng triệu bài hát và podcast."
    },

    Telegram: {
        developer: "Telegram FZ-LLC",
        icon: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
        rating: "★ 4.5",
        description:
            "Ứng dụng nhắn tin nhanh với nhiều tính năng."
    }

};


/* SEARCH */

function searchApps() {

    const keyword =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const cards =
        document.querySelectorAll(".app-card");

    cards.forEach(card => {

        const name =
            card
            .dataset
            .name
            .toLowerCase();

        if (name.includes(keyword)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}


/* APP DETAIL */

function openApp(name) {

    const app = apps[name];

    if (!app) return;

    document
        .getElementById("detailIcon")
        .src = app.icon;

    document
        .getElementById("detailName")
        .textContent = name;

    document
        .getElementById("detailDeveloper")
        .textContent = app.developer;

    document
        .getElementById("detailRating")
        .textContent = app.rating;

    document
        .getElementById("detailDescription")
        .textContent = app.description;

    document
        .getElementById("appModal")
        .style.display = "flex";

}


/* CLOSE APP */

function closeApp() {

    document
        .getElementById("appModal")
        .style.display = "none";

}


/* STORAGE FULL */

function showStorageFull() {

    document
        .getElementById("storageModal")
        .style.display = "flex";

}


/* CLOSE STORAGE */

function closeStorageFull() {

    document
        .getElementById("storageModal")
        .style.display = "none";

}


/* DARK MODE */

function toggleDarkMode() {

    document
        .body
        .classList
        .toggle("dark");

}


/* CLICK OUTSIDE */

window.addEventListener(
    "click",
    function(event) {

        const appModal =
            document.getElementById("appModal");

        const storageModal =
            document.getElementById("storageModal");

        if (event.target === appModal) {

            closeApp();

        }

        if (event.target === storageModal) {

            closeStorageFull();

        }

    }
);


/* ENTER TO SEARCH */

document
    .getElementById("searchInput")
    .addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                searchApps();

            }

        }
    );

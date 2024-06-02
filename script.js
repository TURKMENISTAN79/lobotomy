document.addEventListener("DOMContentLoaded", function() {
    const generalButton = document.getElementById("General");
    const aboutButton = document.getElementById("about");
    const menuButton = document.getElementById("MTG");
    const reviewsButton = document.getElementById("reviews");
    const insideSection = document.getElementById("inside");
    const weOfferSection = document.getElementById("we-offer");
    const menuSection = document.getElementById("menu");
    const scrollDownButton = document.getElementById("scroll-down");
    const scrollUpButton = document.getElementById("scroll-up");
    const bottomSection = document.getElementById("bottom");
    const searchInput = document.getElementById("s");
    const reviewsList = document.getElementById("reviews-list");
    const reviewText = document.getElementById("review-text");
    const submitReview = document.getElementById("submit-review");
    const modal = document.getElementById("search-modal");
    const modalMessage = document.getElementById("modal-message");
    const closeModal = document.getElementsByClassName("close-button")[0];
    const languageButtons = document.getElementById("language-buttons");
    const estonianButton = document.getElementById("et-btn");
    const russianButton = document.getElementById("ru-btn");
    const englishButton = document.getElementById("en-btn");

    const translations = {
        et: {
            quote: "\"Feel the vibe, it's always alive\" - Slowdive, \"Souvlaki Space Station\"",
            sees: "Sees",
            weOffer: `
                <b>Pakume:</b> <br><br>
                Hubast atmosfääri, kus saab lõõgastuda ja unustada mured lemmikmuusika saatel.
                Lai valik jooke, alates klassikalisest kohvist kuni autori kokteilideni.
                Maitsvad suupisted, mis täiendavad teie muusikaõhtu ideaalselt.
                Regulaarsed shoegaze kontserdid, nii tuntud kui ka alustavate bändidega.
                Teemaõhtud, mis on pühendatud shoegaze ajaloole ja kultuurile.
                Võimalus kohtuda mõttekaaslastega ja leida uusi sõpru.
            `,
            menuItems: [
                "Sugar for the Pill Brownie - Šokolaadi pähkli Brownie, mis on pühendatud laulule \"Sugar for the Pill\" bändi Slowdive",
                "My Bloody Latte - Klassikaline latte rikkaliku espressomaitsega, mis meenutab ikoonilist bändi My Bloody Valentine",
                "Swervedriver Sandwich - Kana ja avokaado võileib, kosutava maitsega nagu \"Swervedriveri\" muusika",
                "Loveless Mocha - Chocolate Mocha on sama magus ja ettearvamatu kui \"Loveless\" album My Bloody Valentine"
            ],
            reviews: "Arvustused",
            reviewForm: "Jäta oma arvustus:",
            submitReview: "Saada",
            modalMessage: "Midagi ei leitud",
            general: "Sees",
            about: "Meist",
            menu: "Menüü",
            reviews: "Arvustused"
        },
        ru: {
            quote: "\"почувствуй атмосферу, она всегда жива\" - Slowdive, \"Souvlaki Space Station\"",
            sees: "Внутри",
            weOffer: `
                <b>Мы предлагаем:</b> <br><br>
                Уютную атмосферу, где можно расслабиться и забыть о проблемах под любимую музыку.
                Широкий выбор напитков, от классического кофе до авторских коктейлей.
                Вкусные закуски, идеально дополняющие ваш музыкальный вечер.
                Регулярные shoegaze концерты, как известных, так и начинающих групп.
                Тематические вечера, посвященные истории и культуре shoegaze.
                Возможность встретить единомышленников и найти новых друзей.
            `,
            menuItems: [
                "Sugar for the Pill Brownie - Шоколадный ореховый брауни, посвященный песне \"Sugar for the Pill\" группы Slowdive",
                "My Bloody Latte - Классический латте с насыщенным вкусом эспрессо, напоминающий об культовой группе My Bloody Valentine",
                "Swervedriver Sandwich - Сэндвич с курицей и авокадо, с освежающим вкусом, как музыка \"Swervedriver\"",
                "Loveless Mocha - Шоколадный мокко, такой же сладкий и непредсказуемый, как альбом \"Loveless\" группы My Bloody Valentine"
            ],
            reviews: "Отзывы",
            reviewForm: "Оставьте свой отзыв:",
            submitReview: "Отправить",
            modalMessage: "Ничего не найдено",
            general: "Внутри",
            about: "О нас",
            menu: "Меню",
            reviews: "Отзывы"
        },
        en: {
            quote: "\"Feel the vibe, it's always alive\" - Slowdive, \"Souvlaki Space Station\"",
            sees: "Inside",
            weOffer: `
                <b>We offer:</b> <br><br>
                A cozy atmosphere where you can relax and forget your worries to the sound of your favorite music.
                A wide selection of drinks, from classic coffee to signature cocktails.
                Delicious snacks that perfectly complement your music evening.
                Regular shoegaze concerts featuring both well-known and emerging bands.
                Themed evenings dedicated to shoegaze history and culture.
                A chance to meet like-minded people and make new friends.
            `,
            menuItems: [
                "Sugar for the Pill Brownie - A chocolate nut brownie dedicated to the song \"Sugar for the Pill\" by Slowdive",
                "My Bloody Latte - A classic latte with a rich espresso flavor reminiscent of the iconic band My Bloody Valentine",
                "Swervedriver Sandwich - A chicken and avocado sandwich with a refreshing taste like the music of Swervedriver",
                "Loveless Mocha - A chocolate mocha that is as sweet and unpredictable as the \"Loveless\" album by My Bloody Valentine"
            ],
            reviews: "Reviews",
            reviewForm: "Leave your review:",
            submitReview: "Submit",
            modalMessage: "Nothing found",
            general: "Inside",
            about: "About",
            menu: "Menu",
            reviews: "Reviews"
        }
    };

    // Function to scroll to sections smoothly
    function scrollToSection(event, section) {
        event.preventDefault();
        section.scrollIntoView({ behavior: "smooth" });
    }

    generalButton.addEventListener("click", (event) => scrollToSection(event, insideSection));
    aboutButton.addEventListener("click", (event) => scrollToSection(event, weOfferSection));
    menuButton.addEventListener("click", (event) => scrollToSection(event, menuSection));
    reviewsButton.addEventListener("click", (event) => scrollToSection(event, bottomSection));
    scrollDownButton.addEventListener("click", () => bottomSection.scrollIntoView({ behavior: "smooth" }));
    scrollUpButton.addEventListener("click", () => document.body.scrollIntoView({ behavior: "smooth" }));

    // Slide show functionality
    let slideIndex = 0;
    function showSlides() {
        let slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
    showSlides();

    // Search functionality
    function highlightText(term) {
        removeHighlights();
        let paragraphs = document.querySelectorAll("p");
        let found = false;
        paragraphs.forEach(p => {
            let innerHTML = p.innerHTML;
            let index = innerHTML.toLowerCase().indexOf(term);
            if (index !== -1) {
                found = true;
                p.innerHTML = innerHTML.substring(0, index) + "<span class='highlight'>" + innerHTML.substring(index, index + term.length) + "</span>" + innerHTML.substring(index + term.length);
            }
        });
        return found;
    }

    function removeHighlights() {
        let highlights = document.querySelectorAll(".highlight");
        highlights.forEach(span => {
            span.outerHTML = span.innerHTML;
        });
    }

    function scrollToText() {
        let highlightedElement = document.querySelector(".highlight");
        if (highlightedElement) {
            highlightedElement.scrollIntoView({ behavior: "smooth" });
        }
    }

    function showModal(message) {
        modalMessage.textContent = message;
        modal.style.display = "block";
    }

    searchInput.addEventListener("input", function() {
        let searchTerm = this.value.trim().toLowerCase();
        if (searchTerm) {
            highlightText(searchTerm);
        } else {
            removeHighlights();
        }
    });

    searchInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            let searchTerm = this.value.trim().toLowerCase();
            if (searchTerm) {
                let found = highlightText(searchTerm);
                if (found) {
                    scrollToText();
                } else {
                    showModal(translations.en.modalMessage);
                }
            } else {
                removeHighlights();
            }
        }
    });

    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Reviews functionality
    submitReview.addEventListener("click", function() {
        const review = reviewText.value.trim();
        if (review) {
            const reviewElement = document.createElement("div");
            reviewElement.classList.add("review-item");

            const reviewTextElement = document.createElement("p");
            reviewTextElement.textContent = review;

            const starsElement = document.createElement("div");
            starsElement.classList.add("stars");
            starsElement.textContent = "★★★★★"; // Default to 5 stars for new reviews

            reviewElement.appendChild(reviewTextElement);
            reviewElement.appendChild(starsElement);

            reviewsList.appendChild(reviewElement);
            reviewText.value = "";
        }
    });

    // Language switch functionality
    function switchLanguage(language) {
        document.getElementById("quote").textContent = translations[language].quote;
        document.getElementById("section-sees").textContent = translations[language].sees;
        document.getElementById("we-offer").innerHTML = translations[language].weOffer;
        document.getElementById("menu-item-1").textContent = translations[language].menuItems[0];
        document.getElementById("menu-item-2").textContent = translations[language].menuItems[1];
        document.getElementById("menu-item-3").textContent = translations[language].menuItems[2];
        document.getElementById("menu-item-4").textContent = translations[language].menuItems[3];
        document.getElementById("reviews-section").querySelector("h2").textContent = translations[language].reviews;
        document.getElementById("review-form").querySelector("h3").textContent = translations[language].reviewForm;
        document.getElementById("submit-review").textContent = translations[language].submitReview;
        document.getElementById("modal-message").textContent = translations[language].modalMessage;
        document.getElementById("General").textContent = translations[language].general;
        document.getElementById("about").textContent = translations[language].about;
        document.getElementById("MTG").textContent = translations[language].menu;
        document.getElementById("reviews").textContent = translations[language].reviews;
    }

    estonianButton.addEventListener("click", function() {
        switchLanguage("et");
    });

    russianButton.addEventListener("click", function() {
        switchLanguage("ru");
    });

    englishButton.addEventListener("click", function() {
        switchLanguage("en");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const contactButton = document.getElementById("contact");
    const contactModal = document.getElementById("contact-modal");
    const closeModal = contactModal.querySelector(".close-button");
    const contactForm = document.getElementById("contact-form");

    // Открытие модального окна при клике на "Kontakt"
    contactButton.addEventListener("click", function() {
        contactModal.style.display = "block";
    });

    // Закрытие модального окна при клике на крестик
    closeModal.addEventListener("click", function() {
        contactModal.style.display = "none";
    });

    // Закрытие модального окна при клике за его пределами
    window.addEventListener("click", function(event) {
        if (event.target === contactModal) {
            contactModal.style.display = "none";
        }
    });

    // Обработка отправки формы
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Получение введенных значений
        const email = document.getElementById("contact-email").value;
        const message = document.getElementById("contact-message").value;
        // Здесь можно добавить логику отправки данных на сервер или их обработки
        console.log("Email:", email);
        console.log("Message:", message);
        // Закрытие модального окна после отправки
        contactModal.style.display = "none";
        // Очистка полей формы
        contactForm.reset();
    });
});

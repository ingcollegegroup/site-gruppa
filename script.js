// ==========================================
// ПРЕПОДАВАТЕЛИ
// ==========================================

const teachers = {
    "Литература": "Матиева Ф.Р.",
    "Родная литература": "Льянова М.В.",
    "Математика": "Вакансия матем.",
    "Основы проектной деятельности": "Льянова Л.М.",
    "Русский язык": "Матиева Ф.Р.",
    "Физика": "Саутиева А.М.",
    "Информатика": "Костоева М.Т.",
    "Биология": "Куртоева М.К.",
    "Физическая культура": "Алероева С.С.",
    "Иностранный язык": "Газикова Л.М.",
    "Обществознание": "Вакансия общ.",
    "Химия": "Льянова Х.Б."
};


// ==========================================
// РАСПИСАНИЕ ПО ДНЯМ
// ==========================================

const monday = [
    "Литература",
    "Родная литература",
    "Математика",
    "Физика"
];

const tuesdayLiterature = [
    "Математика",
    "Литература",
    "Русский язык",
    "Физика"
];

const tuesdayProject = [
    "Математика",
    "Основы проектной деятельности",
    "Русский язык",
    "Физика"
];

const wednesday = [
    "Математика",
    "Информатика",
    "Биология",
    "Информатика"
];

// Четверг — 3 пары
const thursday = [
    "Физическая культура",
    "Иностранный язык",
    "Обществознание"
];

// Пятница — 2 пары
const friday = [
    "Химия",
    "Математика"
];


// ==========================================
// ВРЕМЯ ПАР
// ==========================================

const pairTimes = [
    "09:00–10:20",
    "10:30–11:50",
    "12:30–13:50",
    "14:00–15:20"
];


// ==========================================
// ВСЕ НЕДЕЛИ
// ==========================================

const weeks = [

    {
        label: "31 августа — 4 сентября",
        start: "2026-08-31",
        end: "2026-09-04",
        dates: ["31.08", "01.09", "02.09", "03.09", "04.09"],
        days: [
            [],
            tuesdayLiterature,
            wednesday,
            thursday,
            friday
        ]
    },

    {
        label: "7 — 11 сентября",
        start: "2026-09-07",
        end: "2026-09-11",
        dates: ["07.09", "08.09", "09.09", "10.09", "11.09"],
        days: [
            monday,
            tuesdayProject,
            wednesday,
            thursday,
            friday
        ]
    },

    {
        label: "14 — 18 сентября",
        start: "2026-09-14",
        end: "2026-09-18",
        dates: ["14.09", "15.09", "16.09", "17.09", "18.09"],
        days: [
            monday,
            tuesdayLiterature,
            wednesday,
            thursday,
            friday
        ]
    },

    {
        label: "21 — 25 сентября",
        start: "2026-09-21",
        end: "2026-09-25",
        dates: ["21.09", "22.09", "23.09", "24.09", "25.09"],
        days: [
            monday,
            tuesdayProject,
            wednesday,
            thursday,
            friday
        ]
    },

    {
        label: "28 сентября — 2 октября",
        start: "2026-09-28",
        end: "2026-10-02",
        dates: ["28.09", "29.09", "30.09", "01.10", "02.10"],
        days: [
            monday,
            tuesdayLiterature,
            wednesday,
            thursday,
            friday
        ]
    },

    {
        label: "5 — 9 октября",
        start: "2026-10-05",
        end: "2026-10-09",
        dates: ["05.10", "06.10", "07.10", "08.10", "09.10"],
        days: [
            monday,
            tuesdayProject,
            wednesday,
            thursday,
            friday
        ]
    },

    {
        label: "12 — 16 октября",
        start: "2026-10-12",
        end: "2026-10-16",
        dates: ["12.10", "13.10", "14.10", "15.10", "16.10"],
        days: [
            monday,
            tuesdayLiterature,
            wednesday,
            thursday,
            friday
        ]
    },

    {
        label: "19 — 23 октября",
        start: "2026-10-19",
        end: "2026-10-23",
        dates: ["19.10", "20.10", "21.10", "22.10", "23.10"],
        days: [
            monday,
            tuesdayProject,
            wednesday,
            thursday,
            friday
        ]
    },

    {
        label: "26 — 30 октября",
        start: "2026-10-26",
        end: "2026-10-30",
        dates: ["26.10", "27.10", "28.10", "29.10", "30.10"],
        days: [
            monday,
            tuesdayLiterature,
            wednesday,
            thursday,
            friday
        ]
    },

    {
        label: "2 — 6 ноября",
        start: "2026-11-02",
        end: "2026-11-06",
        dates: ["02.11", "03.11", "04.11", "05.11", "06.11"],
        days: [
            monday,
            tuesdayProject,
            wednesday,
            thursday,
            friday
        ]
    },

    {
        label: "9 — 13 ноября",
        start: "2026-11-09",
        end: "2026-11-13",
        dates: ["09.11", "10.11", "11.11", "12.11", "13.11"],
        days: [
            monday,
            tuesdayLiterature,
            wednesday,
            thursday,
            friday
        ]
    },

    {
        label: "16 — 20 ноября",
        start: "2026-11-16",
        end: "2026-11-20",
        dates: ["16.11", "17.11", "18.11", "19.11", "20.11"],
        days: [
            monday,
            tuesdayProject,
            wednesday,
            thursday,
            friday
        ]
    },

    {
        label: "23 — 27 ноября",
        start: "2026-11-23",
        end: "2026-11-27",
        dates: ["23.11", "24.11", "25.11", "26.11", "27.11"],
        days: [
            monday,
            tuesdayLiterature,
            wednesday,
            thursday,
            friday
        ]
    },

    {
        label: "30 ноября — 4 декабря",
        start: "2026-11-30",
        end: "2026-12-04",
        dates: ["30.11", "01.12", "02.12", "03.12", "04.12"],
        days: [
            monday,
            tuesdayProject,
            wednesday,
            thursday,
            friday
        ]
    },

    {
        label: "7 — 11 декабря",
        start: "2026-12-07",
        end: "2026-12-11",
        dates: ["07.12", "08.12", "09.12", "10.12", "11.12"],
        days: [
            monday,
            tuesdayLiterature,
            wednesday,
            thursday,
            friday
        ]
    },

    {
        label: "14 — 18 декабря",
        start: "2026-12-14",
        end: "2026-12-18",
        dates: ["14.12", "15.12", "16.12", "17.12", "18.12"],
        days: [
            monday,
            tuesdayProject,
            wednesday,
            thursday,
            friday
        ]
    },

    {
        label: "21 — 25 декабря",
        start: "2026-12-21",
        end: "2026-12-25",
        dates: ["21.12", "22.12", "23.12", "24.12", "25.12"],
        days: [
            monday,
            tuesdayLiterature,
            wednesday,
            thursday,
            friday
        ]
    },

    {
        label: "28 декабря — 1 января",
        start: "2026-12-28",
        end: "2027-01-01",
        dates: ["28.12", "29.12", "30.12", "31.12", "01.01"],
        days: [
            monday,
            tuesdayProject,
            wednesday,
            thursday,
            []
        ]
    }

];


// ==========================================
// НАЗВАНИЯ ДНЕЙ
// ==========================================

const dayNames = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница"
];


// ==========================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ==========================================

function getTeacher(subject) {
    return teachers[subject] || "";
}


function getLessonHTML(subject) {

    const teacher = getTeacher(subject);

    return `
        <div class="subject-name">
            ${subject}
        </div>

        ${
            teacher
                ? `<div class="teacher-name">${teacher}</div>`
                : ""
        }
    `;
}


function timeToMinutes(time) {

    const [hours, minutes] =
        time.split(":").map(Number);

    return hours * 60 + minutes;
}


// ==========================================
// ОСНОВНАЯ ТАБЛИЦА
// ==========================================

const weekSelect =
    document.getElementById("weekSelect");

const scheduleHead =
    document.getElementById("scheduleHead");

const scheduleBody =
    document.getElementById("scheduleBody");


if (weekSelect && scheduleHead && scheduleBody) {

    // Добавляем недели в выпадающий список

    weeks.forEach((week, index) => {

        const option =
            document.createElement("option");

        option.value = index;
        option.textContent = week.label;

        weekSelect.appendChild(option);
    });


    function renderSchedule(index) {

        const week = weeks[index];


        // Шапка таблицы

        scheduleHead.innerHTML = `
            <tr>

                <th>
                    Пара / время
                </th>

                ${dayNames.map((day, i) => `
                    <th>
                        ${day}

                        <small>
                            ${week.dates[i]}
                        </small>
                    </th>
                `).join("")}

            </tr>
        `;


        scheduleBody.innerHTML = "";


        // Максимум 4 пары

        for (let pair = 0; pair < 4; pair++) {

            const row =
                document.createElement("tr");


            // Номер пары + время

            const pairCell =
                document.createElement("td");

            pairCell.innerHTML = `
                <strong>
                    ${pair + 1} пара
                </strong>

                <span class="pair-time">
                    ${pairTimes[pair]}
                </span>
            `;

            row.appendChild(pairCell);


            // Предметы

            week.days.forEach(day => {


                // Весь день нет занятий

                if (day.length === 0) {

                    if (pair === 0) {

                        const cell =
                            document.createElement("td");

                        cell.rowSpan = 4;

                        cell.textContent =
                            "Нет занятий";

                        cell.classList.add(
                            "no-classes"
                        );

                        row.appendChild(cell);
                    }

                    return;
                }


                const cell =
                    document.createElement("td");


                // Если в этот день пар меньше

                if (pair >= day.length) {

                    cell.textContent = "—";

                    cell.classList.add(
                        "empty-pair"
                    );

                } else {

                    cell.innerHTML =
                        getLessonHTML(
                            day[pair]
                        );
                }


                row.appendChild(cell);
            });


            scheduleBody.appendChild(row);
        }
    }


    // Переключение недели

    weekSelect.addEventListener(
        "change",
        () => {

            renderSchedule(
                Number(
                    weekSelect.value
                )
            );
        }
    );


    // Текущая неделя

    const now = new Date();

    let currentWeek =
        weeks.findIndex(week => {

            const start =
                new Date(
                    week.start +
                    "T00:00:00"
                );

            const end =
                new Date(
                    week.end +
                    "T23:59:59"
                );

            return (
                now >= start &&
                now <= end
            );
        });


    if (currentWeek === -1) {
        currentWeek = 0;
    }


    weekSelect.value =
        currentWeek;

    renderSchedule(
        currentWeek
    );
}


// ==========================================
// БЛОК "СЕГОДНЯ"
// ==========================================

const todayStatus =
    document.getElementById(
        "todayStatus"
    );


function renderToday() {

    if (!todayStatus) {
        return;
    }


    const now =
        new Date();


    const todayMinutes =
        now.getHours() * 60 +
        now.getMinutes();


    const jsDay =
        now.getDay();


    const dateText =
        now.toLocaleDateString(
            "ru-RU",
            {
                weekday: "long",
                day: "numeric",
                month: "long"
            }
        );


    // Выходные

    if (
        jsDay === 0 ||
        jsDay === 6
    ) {

        todayStatus.innerHTML = `
            <div class="today-date">
                ${dateText}
            </div>

            <div class="today-message">
                Сегодня занятий нет 😎
            </div>
        `;

        return;
    }


    // Ищем текущую неделю

    const weekIndex =
        weeks.findIndex(week => {

            const start =
                new Date(
                    week.start +
                    "T00:00:00"
                );

            const end =
                new Date(
                    week.end +
                    "T23:59:59"
                );

            return (
                now >= start &&
                now <= end
            );
        });


    if (weekIndex === -1) {

        todayStatus.innerHTML = `
            <div class="today-date">
                ${dateText}
            </div>

            <div class="today-message">
                Расписание на эту дату
                пока не добавлено.
            </div>
        `;

        return;
    }


    const lessons =
        weeks[weekIndex]
        .days[jsDay - 1];


    if (
        !lessons ||
        lessons.length === 0
    ) {

        todayStatus.innerHTML = `
            <div class="today-date">
                ${dateText}
            </div>

            <div class="today-message">
                Сегодня занятий нет.
            </div>
        `;

        return;
    }


    let currentLesson = -1;
    let nextLesson = -1;


    lessons.forEach((lesson, index) => {

        const [startTime, endTime] =
            pairTimes[index]
            .split("–");


        const start =
            timeToMinutes(
                startTime
            );

        const end =
            timeToMinutes(
                endTime
            );


        // Сейчас идёт эта пара

        if (
            todayMinutes >= start &&
            todayMinutes <= end
        ) {
            currentLesson = index;
        }


        // Следующая пара

        if (
            nextLesson === -1 &&
            todayMinutes < start
        ) {
            nextLesson = index;
        }
    });


    let lessonsHTML = "";


    lessons.forEach(
        (lesson, index) => {

            let lessonClass =
                "today-lesson";


            if (
                index === currentLesson
            ) {

                lessonClass +=
                    " current";

            } else if (
                currentLesson === -1 &&
                index === nextLesson
            ) {

                lessonClass +=
                    " next";
            }


            lessonsHTML += `
                <div class="${lessonClass}">

                    <div>

                        <strong>
                            ${index + 1} пара
                        </strong>

                        <div class="today-lesson-name">
                            ${lesson}
                        </div>

                        <div class="teacher-name">
                            ${getTeacher(lesson)}
                        </div>

                    </div>

                    <div class="today-lesson-time">
                        ${pairTimes[index]}
                    </div>

                </div>
            `;
        }
    );


    let message = "";


    // Пара сейчас идёт

    if (currentLesson !== -1) {

        const endTime =
            pairTimes[currentLesson]
            .split("–")[1];


        message = `
            Сейчас идёт:
            <strong>
                ${lessons[currentLesson]}
            </strong>

            · закончится в
            ${endTime}
        `;

    }

    // Следующая пара
    else if (nextLesson !== -1) {

        const startTime =
            pairTimes[nextLesson]
            .split("–")[0];


        const startMinutes =
            timeToMinutes(
                startTime
            );


        const minutesLeft =
            startMinutes -
            todayMinutes;


        message = `
            Следующая:
            <strong>
                ${lessons[nextLesson]}
            </strong>

            в ${startTime}
            · через ${minutesLeft} мин.
        `;

    }

    // Всё закончилось
    else {

        message =
            "Все пары на сегодня закончились.";
    }


    todayStatus.innerHTML = `

        <div class="today-date">
            ${dateText}
        </div>

        ${lessonsHTML}

        <div class="today-message">
            ${message}
        </div>
    `;
}


// Запускаем

renderToday();


// Обновляем каждую минуту

setInterval(
    renderToday,
    60000
);


// ==========================================
// БЛОК "ЗАВТРА"
// ==========================================

const tomorrowStatus =
    document.getElementById(
        "tomorrowStatus"
    );


function renderTomorrow() {

    if (!tomorrowStatus) {
        return;
    }


    const tomorrow =
        new Date();


    tomorrow.setDate(
        tomorrow.getDate() + 1
    );


    const jsDay =
        tomorrow.getDay();


    const dateText =
        tomorrow.toLocaleDateString(
            "ru-RU",
            {
                weekday: "long",
                day: "numeric",
                month: "long"
            }
        );


    // Выходной

    if (
        jsDay === 0 ||
        jsDay === 6
    ) {

        tomorrowStatus.innerHTML = `
            <div class="today-date">
                ${dateText}
            </div>

            <div class="today-message">
                Занятий нет 😎
            </div>
        `;

        return;
    }


    // Ищем неделю

    const weekIndex =
        weeks.findIndex(week => {

            const start =
                new Date(
                    week.start +
                    "T00:00:00"
                );

            const end =
                new Date(
                    week.end +
                    "T23:59:59"
                );

            return (
                tomorrow >= start &&
                tomorrow <= end
            );
        });


    if (weekIndex === -1) {

        tomorrowStatus.innerHTML = `
            <div class="today-date">
                ${dateText}
            </div>

            <div class="today-message">
                Расписание на этот день
                пока не добавлено.
            </div>
        `;

        return;
    }


    const lessons =
        weeks[weekIndex]
        .days[jsDay - 1];


    if (
        !lessons ||
        lessons.length === 0
    ) {

        tomorrowStatus.innerHTML = `
            <div class="today-date">
                ${dateText}
            </div>

            <div class="today-message">
                Занятий нет.
            </div>
        `;

        return;
    }


    let lessonsHTML = "";


    lessons.forEach(
        (lesson, index) => {

            lessonsHTML += `
                <div class="tomorrow-lesson">

                    <div>

                        <strong>
                            ${index + 1} пара
                        </strong>

                        <div class="tomorrow-lesson-name">
                            ${lesson}
                        </div>

                        <div class="teacher-name">
                            ${getTeacher(lesson)}
                        </div>

                    </div>

                    <div class="tomorrow-lesson-time">
                        ${pairTimes[index]}
                    </div>

                </div>
            `;
        }
    );


    tomorrowStatus.innerHTML = `

        <div class="today-date">
            ${dateText}
        </div>

        ${lessonsHTML}

        <div class="today-message">

            Всего пар:
            <strong>
                ${lessons.length}
            </strong>

        </div>
    `;
}


// Запускаем

renderTomorrow();


// Обновляем каждую минуту

setInterval(
    renderTomorrow,
    60000
);

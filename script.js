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

const thursday3 = [
    "Физическая культура",
    "Иностранный язык",
    "Обществознание"
];

const thursday4 = [
    "Физическая культура",
    "Иностранный язык",
    "Обществознание",
    "Физика"
];

const friday = [
    "Химия",
    "Математика"
];

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
            thursday4,
            friday
        ]
    },

    {
        label: "7 — 11 сентября",
        start: "2026-09-07",
        end: "2026-09-11",
        dates: ["07.09", "08.09", "09.09", "10.09", "11.09"],
        days: [monday, tuesdayProject, wednesday, thursday4, friday]
    },

    {
        label: "14 — 18 сентября",
        start: "2026-09-14",
        end: "2026-09-18",
        dates: ["14.09", "15.09", "16.09", "17.09", "18.09"],
        days: [monday, tuesdayLiterature, wednesday, thursday4, friday]
    },

    {
        label: "21 — 25 сентября",
        start: "2026-09-21",
        end: "2026-09-25",
        dates: ["21.09", "22.09", "23.09", "24.09", "25.09"],
        days: [monday, tuesdayProject, wednesday, thursday3, friday]
    },

    {
        label: "28 сентября — 2 октября",
        start: "2026-09-28",
        end: "2026-10-02",
        dates: ["28.09", "29.09", "30.09", "01.10", "02.10"],
        days: [monday, tuesdayLiterature, wednesday, thursday4, friday]
    },

    {
        label: "5 — 9 октября",
        start: "2026-10-05",
        end: "2026-10-09",
        dates: ["05.10", "06.10", "07.10", "08.10", "09.10"],
        days: [monday, tuesdayProject, wednesday, thursday3, friday]
    },

    {
        label: "12 — 16 октября",
        start: "2026-10-12",
        end: "2026-10-16",
        dates: ["12.10", "13.10", "14.10", "15.10", "16.10"],
        days: [monday, tuesdayLiterature, wednesday, thursday4, friday]
    },

    {
        label: "19 — 23 октября",
        start: "2026-10-19",
        end: "2026-10-23",
        dates: ["19.10", "20.10", "21.10", "22.10", "23.10"],
        days: [monday, tuesdayProject, wednesday, thursday3, friday]
    },

    {
        label: "26 — 30 октября",
        start: "2026-10-26",
        end: "2026-10-30",
        dates: ["26.10", "27.10", "28.10", "29.10", "30.10"],
        days: [monday, tuesdayLiterature, wednesday, thursday3, friday]
    },

    {
        label: "2 — 6 ноября",
        start: "2026-11-02",
        end: "2026-11-06",
        dates: ["02.11", "03.11", "04.11", "05.11", "06.11"],
        days: [monday, tuesdayProject, wednesday, thursday3, friday]
    },

    {
        label: "9 — 13 ноября",
        start: "2026-11-09",
        end: "2026-11-13",
        dates: ["09.11", "10.11", "11.11", "12.11", "13.11"],
        days: [monday, tuesdayLiterature, wednesday, thursday4, friday]
    },

    {
        label: "16 — 20 ноября",
        start: "2026-11-16",
        end: "2026-11-20",
        dates: ["16.11", "17.11", "18.11", "19.11", "20.11"],
        days: [monday, tuesdayProject, wednesday, thursday3, friday]
    },

    {
        label: "23 — 27 ноября",
        start: "2026-11-23",
        end: "2026-11-27",
        dates: ["23.11", "24.11", "25.11", "26.11", "27.11"],
        days: [monday, tuesdayLiterature, wednesday, thursday4, friday]
    },

    {
        label: "30 ноября — 4 декабря",
        start: "2026-11-30",
        end: "2026-12-04",
        dates: ["30.11", "01.12", "02.12", "03.12", "04.12"],
        days: [monday, tuesdayProject, wednesday, thursday3, friday]
    },

    {
        label: "7 — 11 декабря",
        start: "2026-12-07",
        end: "2026-12-11",
        dates: ["07.12", "08.12", "09.12", "10.12", "11.12"],
        days: [monday, tuesdayLiterature, wednesday, thursday4, friday]
    },

    {
        label: "14 — 18 декабря",
        start: "2026-12-14",
        end: "2026-12-18",
        dates: ["14.12", "15.12", "16.12", "17.12", "18.12"],
        days: [monday, tuesdayProject, wednesday, thursday3, friday]
    },

    {
        label: "21 — 25 декабря",
        start: "2026-12-21",
        end: "2026-12-25",
        dates: ["21.12", "22.12", "23.12", "24.12", "25.12"],
        days: [monday, tuesdayLiterature, wednesday, thursday4, friday]
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
            thursday3,
            []
        ]
    }
];

const dayNames = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница"
];

const weekSelect = document.getElementById("weekSelect");
const scheduleHead = document.getElementById("scheduleHead");
const scheduleBody = document.getElementById("scheduleBody");

weeks.forEach((week, index) => {
    const option = document.createElement("option");

    option.value = index;
    option.textContent = week.label;

    weekSelect.appendChild(option);
});

function renderSchedule(index) {
    const week = weeks[index];

    scheduleHead.innerHTML = `
        <tr>
            <th>Пара</th>

            ${dayNames.map((day, i) => `
                <th>
                    ${day}
                    <small>${week.dates[i]}</small>
                </th>
            `).join("")}
        </tr>
    `;

    scheduleBody.innerHTML = "";

    for (let pair = 0; pair < 4; pair++) {

        const row = document.createElement("tr");

        const pairCell = document.createElement("td");
        pairCell.textContent = pair + 1;

        row.appendChild(pairCell);

        week.days.forEach(day => {

            if (day.length === 0) {

                if (pair === 0) {
                    const cell = document.createElement("td");

                    cell.rowSpan = 4;
                    cell.textContent = "Нет занятий";
                    cell.classList.add("no-classes");

                    row.appendChild(cell);
                }

                return;
            }

            const cell = document.createElement("td");

            cell.textContent = day[pair] || "—";

            row.appendChild(cell);
        });

        scheduleBody.appendChild(row);
    }
}

weekSelect.addEventListener("change", () => {
    renderSchedule(Number(weekSelect.value));
});

const today = new Date();

let currentWeek = weeks.findIndex(week => {
    const start = new Date(week.start + "T00:00:00");
    const end = new Date(week.end + "T23:59:59");

    return today >= start && today <= end;
});

if (currentWeek === -1) {
    currentWeek = 0;
}

weekSelect.value = currentWeek;

renderSchedule(currentWeek);

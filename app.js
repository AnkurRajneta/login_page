const express = require("express");
const bodyParser = require("body-parser");
const schedule = require("node-schedule");
const app = express();
const port = 3000;
const currentDate = new Date();

app.use(bodyParser.json());

const reminders = [];

app.post("/setReminder", (req, res) => {
    const reminderDatetime = new Date(req.body.reminderDatetime);

    const reminder = schedule.scheduleJob(reminderDatetime, () => {
        console.log("Reminder: It's time to do something!");
    });

    reminders.push(reminder);
    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

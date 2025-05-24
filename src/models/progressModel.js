const db = require("../db/index");

const createProgressEntry = async (userId, videoId, startTime, endTime) => {
  const query = `
    INSERT INTO lecture_progress (user_id, video_id, start_time, end_time)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  return db.one(query, [userId, videoId, startTime, endTime]);
};

const fetchProgressByUser = async (userId, videoId) => {
  const query = `
    SELECT * FROM lecture_progress
    WHERE user_id = $1 AND video_id = $2
    ORDER BY start_time;
  `;
  return db.any(query, [userId, videoId]);
};

module.exports = { createProgressEntry, fetchProgressByUser };
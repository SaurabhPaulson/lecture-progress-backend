const { createProgressEntry, fetchProgressByUser } = require("../models/progressModel");
const { mergeIntervals } = require("../utils/intervalUtils");
const db = require("../db/index");
const saveIntervals = async (userId, videoId, newIntervals) => {
  // Fetch existing intervals
  const existing = await fetchProgressByUser(userId, videoId);
  const allIntervals = [
    ...existing.map(i => ({ start: i.start_time, end: i.end_time })),
    ...newIntervals
  ];
  const merged = mergeIntervals(allIntervals);

  // Remove all previous intervals and insert merged ones (for simplicity)
  // In production, use upsert or more efficient logic
  await db.none('DELETE FROM lecture_progress WHERE user_id = $1 AND video_id = $2', [userId, videoId]);
  for (const interval of merged) {
    await createProgressEntry(userId, videoId, interval.start, interval.end);
  }
  return merged;
};

const getProgress = async (userId, videoId) => {
  const intervals = await fetchProgressByUser(userId, videoId);
  return intervals.map(i => ({ start: i.start_time, end: i.end_time }));
};

module.exports = { saveIntervals, getProgress };
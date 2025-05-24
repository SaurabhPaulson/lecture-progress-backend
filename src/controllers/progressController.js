const { saveIntervals, getProgress } = require("../services/progressService");
const { calculateUniqueViewingTime } = require("../utils/intervalUtils");

const saveProgress = async (req, res) => {
  const { userId, videoId, intervals, videoDuration } = req.body;
  try {
    const merged = await saveIntervals(userId, videoId, intervals);
    const uniqueTime = calculateUniqueViewingTime(merged);
    const percent = videoDuration ? (uniqueTime / videoDuration) * 100 : null;
    res.status(201).json({ message: "Progress saved", progress: percent, intervals: merged });
  } catch (e) {
    res.status(500).json({ message: "Error saving progress", error: e.message });
  }
};

const getProgressHandler = async (req, res) => {
  const { userId, videoId } = req.params;
  try {
    const intervals = await getProgress(userId, videoId);
    res.status(200).json({ intervals });
  } catch (e) {
    res.status(500).json({ message: "Error retrieving progress", error: e.message });
  }
};

module.exports = { saveProgress, getProgress: getProgressHandler };
const mergeIntervals = (intervals) => {
  if (!intervals.length) return [];
  // Sort by start time
  intervals.sort((a, b) => a.start - b.start);
  const merged = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const last = merged[merged.length - 1];
    if (current.start <= last.end) {
      last.end = Math.max(last.end, current.end);
    } else {
      merged.push(current);
    }
  }
  return merged;
};

const calculateUniqueViewingTime = (intervals) => {
  const merged = mergeIntervals(intervals);
  return merged.reduce((sum, i) => sum + (i.end - i.start), 0);
};

module.exports = { mergeIntervals, calculateUniqueViewingTime };
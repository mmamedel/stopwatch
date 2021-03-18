/**
 * Pads number with a 0 if it is lower than 10
 * @param {number} n
 * @returns string
 */
const padNumber = n => (n < 10 ? `0${n}` : `${n}`)

const secInMin = 60
const minInHour = secInMin
const centInSec = 100
const centInMin = secInMin * centInSec
const centInHour = minInHour * centInMin

/**
 * Calculates the number of hours in a centisecond value
 * @param {number} cent Centiseconds
 * @returns {number} Hours
 */
const hourInCent = cent => Math.floor(cent / centInHour)

/**
 * Converts a centisecond number in a timecode
 * @param {number} cent Centiseconds
 * @returns {string} Timecode
 */
export const timeToTimecode = cent => {
  const h = hourInCent(cent)
  const m = Math.floor(cent / centInMin) - h * 60
  const s = Math.floor(cent / centInSec) - h * 3600 - m * 60
  const c = cent - s * centInSec - m * centInMin - h * centInHour
  return `${padNumber(h)}:${padNumber(m)}:${padNumber(s)}:${padNumber(c)}`
}

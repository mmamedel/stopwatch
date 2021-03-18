import {
  useCallback,
  useEffect,
  useMemo,
} from 'https://cdn.skypack.dev/react?dts'
import { not, inc } from 'https://cdn.skypack.dev/ramda?dts'
import { useRecoilState } from 'https://cdn.skypack.dev/recoil?dts'
import { TimeState, IsPausedState } from '../../models/index.js'
import { timeToTimecode } from '../../helpers/time.js'

/**
 * App Presenter
 * @type {import("./index.ts").AppViewProps}
 */
export default () => {
  const [time, setTime] = useRecoilState(TimeState)
  const [isPaused, setIsPaused] = useRecoilState(IsPausedState)

  const togglePaused = useCallback(() => setIsPaused(not), [setIsPaused])
  const reset = useCallback(() => setTime(0), [setTime])
  const timeLabel = useMemo(() => timeToTimecode(time), [time])

  //#region Internal clock
  useEffect(() => {
    const interval = !isPaused ? setInterval(() => setTime(inc), 10) : undefined
    return () => clearInterval(interval)
  }, [isPaused, setTime])
  //#endregion

  //#region Shortcuts
  useEffect(() => {
    /**
     * Handles shortcuts
     * @param {KeyboardEvent} e
     */
    document.onkeydown = e => {
      if (e.code === 'Space') togglePaused()
      if (e.code === 'Backspace' && isPaused) reset()
    }
  }, [togglePaused, reset, isPaused])
  //#endregion

  return {
    timeLabel,
    isPaused,
    togglePaused,
    reset,
  }
}

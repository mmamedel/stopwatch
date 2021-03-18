import { css } from 'https://cdn.skypack.dev/@emotion/css?dts'
import { html } from '../../helpers/react.js'

//#region Styles
const containerCss = css`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
`
const timeCodeCss = css`
  font-size: 16vw;
  font-weight: bold;
`
const buttonSize = 20
const buttonCss = css`
  width: ${buttonSize}vw;
  height: ${buttonSize}vw;
  border-radius: ${buttonSize / 2}vw;
  font-size: ${buttonSize / 5}vw;
`
const playCss = css`
  background: green;
`
//#endregion

/**
 * App View
 * @param {import("./index.ts").AppViewProps} props
 * @returns
 */
export default props => html`
  <div class=${containerCss}>
    <div class=${timeCodeCss}>${props.timeLabel}<//>
    <button
      class=${buttonCss}
      onClick=${props.reset}
      disabled=${!props.isPaused}
    >
      Reset
    <//>
    <button className="${buttonCss} ${playCss}" onClick=${props.togglePaused}>
      ${props.isPaused ? 'Start' : 'Pause'}
    <//>
  <//>
`

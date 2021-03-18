import { css } from 'https://cdn.skypack.dev/@emotion/css?dts'
import { html } from '../../helpers/react.js'

const fontCss = css`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
`

const buttonCss = css`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`

const playCss = css`
  background: green;
`

/**
 * App View
 * @param {import("./index.ts").AppViewProps} props
 * @returns
 */
export default props => html`
  <div class=${fontCss}>
    <h1>${props.timeLabel}<//>
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

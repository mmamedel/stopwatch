import ReactDOM from 'https://cdn.skypack.dev/react-dom?dts'
import { html } from './helpers/react.js'
import { RecoilRoot } from 'https://cdn.skypack.dev/recoil?dts'
import App from './components/app/index.js'

ReactDOM.render(html`<${RecoilRoot}><${App} /><//>`, document.body)

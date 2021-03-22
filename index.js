import ReactDOM from 'https://cdn.skypack.dev/react-dom?dts'
import { html } from './helpers/react.js'
import { RecoilRoot } from 'https://cdn.skypack.dev/recoil?dts'
import App from './components/app/index.js'
import fastclick from 'https://cdn.skypack.dev/fastclick';

ReactDOM.render(html`<${RecoilRoot}><${App} /><//>`, document.body)
fastclick(document.body)

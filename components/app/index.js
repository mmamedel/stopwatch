import { pipe } from 'https://cdn.skypack.dev/ramda?dts'
import AppPresenter from './app-presenter.js'
import AppView from './app-view.js'

export default pipe(AppPresenter, AppView)

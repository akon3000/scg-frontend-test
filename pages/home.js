import { Component } from 'react'
import redirect from '../utils/redirect'

class HomePages extends Component {
  static getInitialProps(ctx) {
    redirect('/scg', ctx)
  }
}

export default HomePages
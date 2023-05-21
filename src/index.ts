import {myFun} from './test'
import getTitle from './title'

document.querySelector('#root').append(getTitle('hello, react'))
myFun('hello, react')
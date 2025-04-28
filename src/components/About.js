import User from './User'
import UserClass from './UserClass'
import UserContext from '../utils/UserContext'

const About = () => {
  return (
    <div>
      {/* <User name={"Hasan Shaikh"}/> */}
      {/* Logged In user: */}
      <UserContext.Consumer>
        {({loggedInUser}) => {
          // <h1 className='text-xl font-bold'>{loggedInUser}</h1>
          // console.log(loggedInUser)
          return <UserClass userLoggedIn={loggedInUser}/>
        }}
      </UserContext.Consumer>
    </div>
  )
}

export default About
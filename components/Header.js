import headerStyles from '../styles/Header.module.css'

const Header = ({children}) => {
  return (
    <div>
      <h1 className='title'>
        <span>WebDev</span> News
      </h1>
      <style jsx>
        {`
          .title {
            color: red
          }
        `}
      </style>
      <p className={headerStyles.description}>
        Keep up to date
      </p>
    </div>
  )
}

export default Header
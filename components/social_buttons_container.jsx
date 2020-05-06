import SocialButton from './social_button'

function SocialButtonsContainer (props) {
  return (
    <div className='columns is-mobile'>
      {
        props.buttons.map((button, index) => (
          <div className='column is-one has-text-centered' key={index}>
            <SocialButton
              tooltip={button.name}
              icon={button.icon}
              href={button.href}
            />
          </div>
        ))
      }
    </div>
  )
}

export default SocialButtonsContainer

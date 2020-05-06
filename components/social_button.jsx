
function SocialButton (props) {
  return (
    <a
      className='has-cursor-pointer icon is-size-3'
      title={`Go to ${props.tooltip}`}
      href={props.href}
      target='_blank'
      rel='noopener noreferrer'
    >
      <i className={`fab fa-${props.icon}`} aria-hidden />
    </a>
  )
}

export default SocialButton

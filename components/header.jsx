import Avatar from './avatar'
import SocialButtonsContainer from './social_buttons_container'

function Header (props) {
  return (
    <div className='header columns is-centered is-multiline is-marginless is-paddingless is-vcentered reverse-columns'>
      <div className='column is-half has-text-left'>
        <div className='columns is-multiline is-mobile is-marginless is-paddingless is-vcentered'>
          <div className='column is-full'>
            <p className='is-fira is-size-3 is-size-2-tablet is-size-2-desktop is-size-1-widescreen'>Rurick Maqueo Poisot</p>
            <p className='is-fira is-size-5 is-size-4-tablet is-size-4-desktop is-size-3-widescreen'>Full Stack Developer</p>
          </div>
          <div className='column is-full-mobile is-three-quarters-desktop is-half-widescreen'>
            <SocialButtonsContainer
              buttons={[
                { name: 'twitter', icon: 'twitter', href: 'https://twitter.com/rurickdev' },
                { name: 'github', icon: 'github', href: 'https://github.com/rurickdev' },
                { name: 'linkedin', icon: 'linkedin', href: 'https://www.linkedin.com/in/rurickdev/' },
                { name: 'medium', icon: 'medium-m', href: 'https://medium.com/@rurickdev' },
                { name: 'telegram', icon: 'telegram-plane', href: 'https://t.me/rurickdev' }
              ]}
            />
          </div>
        </div>
      </div>
      <div className='avatar-container column is-one-quarter'>
        <Avatar name='happy' className='is-flip' />
      </div>
    </div>
  )
}

export default Header

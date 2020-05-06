
function Avatar (props) {
  const className = `avatar image ${props.className}`
  return (
    <figure className={className}>
      <img src={`https://s3.us-east-2.amazonaws.com/cdn.rurick.dev/assets/img/avatar_${props.name}.svg`} alt={props.name} />
    </figure>
  )
}

export default Avatar

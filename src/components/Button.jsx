import PropTypes from 'prop-types'



/**
 * Primary Button 
 */ 


const ButtonPrimary = ({
  href = "Lebenslauf_Software_Entwickler.pdf",
  label,
  target = '_self',
  icon,
  classes
}) => {
  if (href) {
    return (
      <a href={href} target={target} download="Lebenslauf_Abderrahmane_Malihi" className={"btn btn-primary " + classes}>
        {label}
        {icon ? 
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span> 
          : undefined
        }
      </a>
    )
  } else {
    return (
      <button className={"btn btn-primary " + classes}>
        {label}
        {icon ? 
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span> 
          : undefined
        }
      </button>
    )
  }
}

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
}


/**
 * Outline Button 
 */ 


const ButtonOutline = ({
  href,
  label,
  target = '_self',
  icon,
  classes
}) => {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-outline " + classes}>
        {label}
        {icon ? 
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span> 
          : undefined
        }
      </a>
    )
  } else {
    return (
      <button className={"btn btn-outline " + classes}>
        {label}
        {icon ? 
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span> 
          : undefined
        }
      </button>
    )
  }
}

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
}

export {
  ButtonPrimary,
  ButtonOutline
}
import Inferno from 'inferno'
import styles from './styles.css'
import classnames from 'classnames'
import icons from 'common/icons.css'

function IconButton (props) {
  return (
    <button
      className={styles.button}
      onClick={props.onClick}
      disabled={props.disabled}
      >
      {
        props.children ? (
          <div className={styles.iconTitleWrapper}>
            <div className={classnames({
              [styles.activeIcon]: props.active,
              [styles.notifyIcon]: props.notify,
              [styles.disabledIcon]: props.disabled,
              [styles.icon]: !props.active && !props.notify && !props.disabled
            })}>
              <div className={icons[props.icon]} />
            </div>
            <div className={styles.iconTitle}>
              {props.children}
            </div>
          </div>
        ) : (
          <div className={classnames({
            [styles.activeIcon]: props.active,
            [styles.notifyIcon]: props.notify,
            [styles.disabledIcon]: props.disabled,
            [styles.icon]: !props.active && !props.notify && !props.disabled
          })}>
            <div className={icons[props.icon]} />
          </div>
        )
      }
    </button>
  )
}

export default IconButton

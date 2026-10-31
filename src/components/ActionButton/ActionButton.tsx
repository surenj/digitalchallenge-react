import styles from "./ActionButton.module.scss"

interface ActionButtonProps {
  label: string;
  onClick?: () => void;
}

function ActionButton({ label, onClick }: ActionButtonProps) {
  return (
    <button className={styles['action-button']} onClick={onClick}>
      {label}
    </button>
  );
}

export default ActionButton;